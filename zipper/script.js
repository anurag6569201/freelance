document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements ---
    const zipSecureModule = document.getElementById('zipsecure-module');
    const led = document.getElementById('zipsecure-led');
    const sensor = document.getElementById('zipsecure-sensor');
    const zipperStatusText = document.getElementById('zipper-status-text');
    const currentDateTimeSpan = document.getElementById('current-datetime');
    const zipperModuleTitle = document.getElementById('zipper-module-title');
    const currentDeviceNameSim = document.getElementById('current-device-name-sim');

    // Simulation Controls
    const btnAuthScan = document.getElementById('btn-auth-scan');
    const btnUnauthScan = document.getElementById('btn-unauth-scan');
    const btnTamper = document.getElementById('btn-tamper');
    const btnProximity = document.getElementById('btn-proximity');

    // App Elements
    const phoneScreen = document.querySelector('.phone-screen'); // For view switching delegation
    const appDashboard = document.getElementById('app-dashboard');
    const appAlertView = document.getElementById('app-alert-view');
    const appLogView = document.getElementById('app-log-view');
    const appTrackingView = document.getElementById('app-tracking-view');
    const deviceListContainer = document.getElementById('device-list-container');
    const btnAddDevice = document.getElementById('btn-add-device'); // Added

    // Alert View Details
    const alertTitle = document.getElementById('alert-title');
    const alertDevice = document.getElementById('alert-device');
    const alertStatusText = document.getElementById('alert-status-text');
    const alertTime = document.getElementById('alert-time');
    const alertLocation = document.getElementById('alert-location');
    const alertDetails = document.getElementById('alert-details');
    const btnDismissAlert = document.getElementById('btn-dismiss-alert');
    const btnTrackGps = document.getElementById('btn-track-gps');

    // Log View Elements
    const logViewTitle = document.getElementById('log-view-title');
    const eventLogList = document.getElementById('event-log-list');

     // Tracking View Elements
    const trackViewTitle = document.getElementById('track-view-title');
    const deviceMarker = document.getElementById('device-marker');
    const trackingStatus = document.getElementById('tracking-status');
    const mapPlaceholder = document.querySelector('.map-placeholder');

    const btnDecBattery = document.getElementById('btn-dec-battery');
    const btnIncBattery = document.getElementById('btn-inc-battery');
    const btnLowBattAlert = document.getElementById('btn-low-batt-alert');
    const btnGeofenceBreach = document.getElementById('btn-geofence-breach');

    // --- State Variables ---
    let devices = []; // Array of device objects
    let currentDeviceIndex = 0; // Index of the currently selected device
    let isAlarmActive = false; // Global alarm state (for simplicity)
    let activeAppView = 'dashboard'; // Tracks the current visible view
    let trackingInterval = null; // Interval ID for GPS simulation

    const defaultLocation = "Gothapatna, OD";

    // Device Object Structure: { id, name, isLocked, battery, location, log[] }

    // --- Utility Functions ---
    function getCurrentTimestamp(short = false) {
        const now = new Date();
        if (short) {
            return now.toLocaleTimeString('en-IN', { timeStyle: 'short' });
        }
        return now.toLocaleString('en-IN', { dateStyle: 'short', timeStyle: 'medium' });
    }

    function updateDateTime() {
         const now = new Date();
         currentDateTimeSpan.textContent = `${now.toLocaleDateString('en-IN', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}, ${now.toLocaleTimeString('en-IN')}`;
    }

    // --- LocalStorage ---
    function saveStateToLocalStorage() {
        localStorage.setItem('zipSecureDevices', JSON.stringify(devices));
        localStorage.setItem('zipSecureCurrentIndex', currentDeviceIndex.toString());
        console.log("State saved to localStorage.");
    }

    function loadStateFromLocalStorage() {
        const savedDevices = localStorage.getItem('zipSecureDevices');
        const savedIndex = localStorage.getItem('zipSecureCurrentIndex');

        if (savedDevices) {
            devices = JSON.parse(savedDevices);
            currentDeviceIndex = savedIndex ? parseInt(savedIndex, 10) : 0;
            if (currentDeviceIndex >= devices.length || currentDeviceIndex < 0) {
                currentDeviceIndex = 0; // Reset if index is invalid
            }
            console.log("State loaded from localStorage.");
        } else {
            // Initialize with default devices if nothing is saved
            devices = [
                { id: Date.now(), name: 'Backpack - Main', isLocked: true, battery: 85, location: defaultLocation, log: [] },
                { id: Date.now() + 1, name: 'Camera Bag', isLocked: true, battery: 70, location: defaultLocation, log: [] }
            ];
            currentDeviceIndex = 0;
            addLogEntry(0, "System Initialized", "info"); // Log initialization for the first device
            addLogEntry(1, "System Initialized", "info");
            saveStateToLocalStorage(); // Save initial state
        }

         if (devices.length === 0) { // Handle case where localStorage might be corrupted []
             devices = [{ id: Date.now(), name: 'Default Backpack', isLocked: true, battery: 90, location: defaultLocation, log: [] }];
             currentDeviceIndex = 0;
             saveStateToLocalStorage();
         }
    }

     // --- Logging ---
    function addLogEntry(deviceIndex, message, type = 'info') { // type: info, success, error
        if (deviceIndex < 0 || deviceIndex >= devices.length) return;

        const logEntry = {
            time: getCurrentTimestamp(),
            message: message,
            type: type
        };
        devices[deviceIndex].log.unshift(logEntry); // Add to beginning

        // Optional: Limit log size
        if (devices[deviceIndex].log.length > 50) {
            devices[deviceIndex].log.pop();
        }
        saveStateToLocalStorage(); // Save state after adding log
    }

    // --- UI Update Functions ---
    function updateLED(color = 'off') {
        led.className = `led ${color}`;
    }

    function updateZipperUI() {
        if (devices.length === 0 || !devices[currentDeviceIndex]) {
            // Handle case with no devices or invalid index
            zipSecureModule.style.display = 'none'; // Hide module if no device selected
            zipperModuleTitle.textContent = "No Device Selected";
             currentDeviceNameSim.textContent = "N/A";
            return;
        }
         zipSecureModule.style.display = 'flex'; // Show module

        const device = devices[currentDeviceIndex];
        zipperModuleTitle.textContent = `Simulated Module: ${device.name}`;
         currentDeviceNameSim.textContent = device.name;

        if (device.isLocked) {
            zipSecureModule.classList.add('locked');
            zipSecureModule.classList.remove('unlocked');
            zipperStatusText.textContent = "Status: Locked";
            updateLED(isAlarmActive ? 'red' : 'off'); // Show red if alarm is active globally
        } else {
            zipSecureModule.classList.remove('locked');
            zipSecureModule.classList.add('unlocked');
            zipperStatusText.textContent = "Status: Unlocked";
            updateLED('green');
        }
    }

    function renderDashboard() {
        deviceListContainer.innerHTML = ''; // Clear existing list
        if (devices.length === 0) {
            deviceListContainer.innerHTML = '<p>No devices added yet.</p>';
        } else {
            devices.forEach((device, index) => {
                const card = document.createElement('div');
                card.className = `device-card ${index === currentDeviceIndex ? 'selected' : ''}`;
                card.dataset.index = index; // Store index for click handling
                card.innerHTML = `
                    <div class="device-name">${device.name}</div>
                    <div>Status: <span class="icon">${device.isLocked ? '🔒' : '🔓'}</span> ${device.isLocked ? 'Locked' : 'Unlocked'}</div>
                    <div>Battery: <span class="battery-level">${'||'.repeat(Math.ceil(device.battery/10)).padEnd(10,' ')}</span> ${device.battery}%</div>
                    <div>Location: ${device.location} (Synced: ${getCurrentTimestamp(true)})</div>
                    <div class="device-actions">
                        <button class="app-btn btn-view-log" data-index="${index}">View Log</button>
                        <button class="app-btn" data-index="${index}">Manage</button>
                         <button class="app-btn" data-index="${index}">⚙</button>
                         <button class="app-btn btn-delete-device" data-index="${index}" style="color: red;">🗑️</button>
                    </div>
                `;
                // Add event listener for selecting the device
                card.addEventListener('click', (e) => {
                    // Don't select if clicking a button inside the card
                    if (e.target.tagName !== 'BUTTON') {
                        selectDevice(index);
                    }
                });
                 // Add separate listener for log button to avoid selecting card
                 const logButton = card.querySelector('.btn-view-log');
                 if (logButton) {
                     logButton.addEventListener('click', (e) => {
                         e.stopPropagation(); // Prevent card selection
                         displayLogView(index);
                     });
                 }
                 // Add listener for delete button
                 const deleteButton = card.querySelector('.btn-delete-device');
                 if (deleteButton) {
                     deleteButton.addEventListener('click', (e) => {
                         e.stopPropagation();
                         deleteDevice(index);
                     });
                 }


                deviceListContainer.appendChild(card);
            });
        }
        updateZipperUI(); // Update the physical sim based on selection
    }

    function switchAppView(targetViewId) {
        const views = document.querySelectorAll('.app-view');
        views.forEach(view => {
            if (view.id === targetViewId) {
                view.classList.add('active');
            } else {
                view.classList.remove('active');
            }
        });
        activeAppView = targetViewId;
         // Stop tracking simulation if navigating away from tracking view
         if (targetViewId !== 'app-tracking-view' && trackingInterval) {
             clearInterval(trackingInterval);
             trackingInterval = null;
         }
    }

    function displayLogView(deviceIndex) {
         if (deviceIndex < 0 || deviceIndex >= devices.length) return;
         const device = devices[deviceIndex];
         logViewTitle.textContent = `Event Log: ${device.name}`;
         eventLogList.innerHTML = ''; // Clear previous logs

         if (device.log.length === 0) {
             eventLogList.innerHTML = '<li>No events logged yet.</li>';
         } else {
             device.log.forEach(entry => {
                 const li = document.createElement('li');
                 li.classList.add(`log-${entry.type}`); // Add class for styling
                 let icon = 'ℹ️'; // Info icon default
                 if (entry.type === 'success') icon = '✅';
                 if (entry.type === 'error') icon = '❌';

                 li.innerHTML = `
                     <span><span class="log-icon">${icon}</span> ${entry.message}</span>
                     <span class="log-time">${entry.time}</span>
                 `;
                 eventLogList.appendChild(li);
             });
         }
         switchAppView('app-log-view');
    }

    // Basic GPS tracking simulation
    function displayTrackingView(deviceIndex) {
         if (deviceIndex < 0 || deviceIndex >= devices.length) return;
         const device = devices[deviceIndex];
         trackViewTitle.textContent = `Tracking: ${device.name}`;
         trackingStatus.textContent = `Tracking active... Last ping: ${getCurrentTimestamp()}`;

         // Reset marker position (e.g., center)
         const mapRect = mapPlaceholder.getBoundingClientRect();
         let currentX = mapRect.width / 2;
         let currentY = mapRect.height / 2;
         deviceMarker.style.left = `${currentX}px`;
         deviceMarker.style.top = `${currentY}px`;

         switchAppView('app-tracking-view');

         // Simulate movement
         if (trackingInterval) clearInterval(trackingInterval); // Clear existing interval
         trackingInterval = setInterval(() => {
             // Randomly move the marker slightly
             currentX += (Math.random() - 0.5) * 10; // Move up to 5px left/right
             currentY += (Math.random() - 0.5) * 10; // Move up to 5px up/down

             // Keep marker within bounds (simple boundary)
             currentX = Math.max(10, Math.min(mapRect.width - 20, currentX));
             currentY = Math.max(10, Math.min(mapRect.height - 20, currentY));

             deviceMarker.style.left = `${currentX}px`;
             deviceMarker.style.top = `${currentY}px`;
             trackingStatus.textContent = `Tracking active... Location updated: ${getCurrentTimestamp()}`;
         }, 2000); // Update every 2 seconds
    }


    function flashLED(color, duration = 300, flashes = 2) { // (Keep from previous) ... }
        let count = 0;
        // Clear any existing flashing interval for this device
        if (devices[currentDeviceIndex] && devices[currentDeviceIndex].flashInterval) {
            clearInterval(devices[currentDeviceIndex].flashInterval);
        }
        const interval = setInterval(() => {
            updateLED(count % 2 === 0 ? color : 'off');
            count++;
            if (count >= flashes * 2) {
                clearInterval(interval);
                devices[currentDeviceIndex].flashInterval = null; // Clear interval reference
                // Restore final state after flashing
                if (!isAlarmActive) { // Only restore if alarm didn't take over
                   updateZipperUI();
                }
            }
        }, duration / 2);
         // Store interval ID to potentially clear it later if needed
        if (devices.length > 0 && devices[currentDeviceIndex]) {
            devices[currentDeviceIndex].flashInterval = interval;
        }
    }


    function shakeModule() { // (Keep from previous) ... }
        zipSecureModule.classList.add('shake');
        setTimeout(() => {
            zipSecureModule.classList.remove('shake');
        }, 500);
    }

    function showAppAlert(config) { // (Modify to accept deviceIndex)
        if (isAlarmActive) return; // Prevent overlapping global alarms for now
        isAlarmActive = true; // Set global flag

        const deviceIndex = config.deviceIndex;
        if (deviceIndex < 0 || deviceIndex >= devices.length) return;
        const device = devices[deviceIndex];

        console.warn(`ALERT for ${device.name}: ${config.title} - ${config.details}`);
        addLogEntry(deviceIndex, `ALERT: ${config.title} - ${config.details}`, 'error');

        // Update Alert View Content
        alertTitle.textContent = config.title || 'SECURITY ALERT';
        alertStatusText.textContent = config.status || 'Unauthorized Access Detected';
        alertTime.textContent = getCurrentTimestamp();
        alertLocation.textContent = `Approx. ${device.location}`;
        alertDetails.textContent = config.details || 'An unauthorized event occurred.';
        alertDevice.textContent = device.name; // Show specific device name

         // Store the index of the device that triggered the alert
         appAlertView.dataset.alertDeviceIndex = deviceIndex;

        switchAppView('app-alert-view');

        // Visual feedback on module (only if the alerted device is currently selected)
        if (deviceIndex === currentDeviceIndex) {
            updateLED('red'); // Keep LED red during alert display
        }

        console.log("BEEP BEEP BEEP! (Alarm Sound)");
    }

    function dismissAlert() {
        if (!isAlarmActive) return;
        const alertDeviceIndex = parseInt(appAlertView.dataset.alertDeviceIndex, 10);

        console.log("Alert Dismissed by user.");
        addLogEntry(alertDeviceIndex, "Alert Dismissed by user", 'info');

        isAlarmActive = false; // Clear global flag
        switchAppView('dashboard'); // Go back to dashboard

        // Re-render dashboard and update zipper UI (which resets LED if needed)
        renderDashboard();
    }

     function selectDevice(index) {
         if (index < 0 || index >= devices.length) return;
         // Don't allow switching if an alarm is active (for simplicity)
         if (isAlarmActive) {
             console.log("Cannot switch device during active alarm.");
             return;
         }
         currentDeviceIndex = index;
         console.log(`Selected device: ${devices[currentDeviceIndex].name} (Index: ${index})`);
         saveStateToLocalStorage(); // Remember selection
         renderDashboard(); // Re-render dashboard to show selection highlight
         // Zipper UI update is handled within renderDashboard
     }

     function deleteDevice(index) {
         if (index < 0 || index >= devices.length) return;
         const deviceName = devices[index].name;
         if (confirm(`Are you sure you want to delete device "${deviceName}"? This cannot be undone.`)) {
              console.log(`Deleting device: ${deviceName} (Index: ${index})`);
              devices.splice(index, 1); // Remove device from array

             // Adjust currentDeviceIndex if necessary
             if (currentDeviceIndex >= devices.length) {
                 currentDeviceIndex = Math.max(0, devices.length - 1);
             }

              saveStateToLocalStorage();
              renderDashboard(); // Re-render dashboard immediately
               // If no devices left, update zipper section accordingly
              if (devices.length === 0) {
                 updateZipperUI();
              }
         }
     }

     function addNewDevice() {
         const newName = prompt("Enter name for new ZipSecure device:", `New Device ${devices.length + 1}`);
         if (newName && newName.trim() !== "") {
             const newDevice = {
                 id: Date.now(),
                 name: newName.trim(),
                 isLocked: true,
                 battery: Math.floor(80 + Math.random() * 21), // Random battery 80-100
                 location: defaultLocation,
                 log: [{ time: getCurrentTimestamp(), message: "Device Added", type: "info" }]
             };
             devices.push(newDevice);
             currentDeviceIndex = devices.length - 1; // Select the new device
             saveStateToLocalStorage();
             renderDashboard();
             console.log(`Added new device: ${newName}`);
         }
     }


    // --- Event Handlers ---
    function handleScan(isAuthorized) {
        if (isAlarmActive) return; // Ignore during global alarm
         if (devices.length === 0) return; // No device to interact with

         const deviceIndex = currentDeviceIndex; // Use currently selected device
         const device = devices[deviceIndex];

        console.log(`Scan attempt on ${device.name}: ${isAuthorized ? 'Authorized' : 'Unauthorized'}`);

        if (isAuthorized) {
            if (device.isLocked) {
                device.isLocked = false;
                console.log("Unlock successful.");
                 addLogEntry(deviceIndex, "Unlocked via fingerprint", 'success');
                flashLED('green', 400, 1);
                updateZipperUI();
                renderDashboard(); // Update status on dashboard card
                saveStateToLocalStorage();
                console.log("Click! (Unlock Sound)");
            } else {
                 console.log("Already unlocked. Flashing green.");
                 flashLED('green', 400, 1);
                 // Option: Re-lock on authorized scan if already unlocked?
                 // device.isLocked = true;
                 // addLogEntry(deviceIndex, "Locked via fingerprint scan", 'info');
                 // updateZipperUI();
                 // renderDashboard();
                 // saveStateToLocalStorage();
            }
        } else { // Unauthorized Scan
            if (device.isLocked) {
                console.log("Unauthorized scan detected.");
                addLogEntry(deviceIndex, "Unauthorized fingerprint scan attempt", 'error');
                shakeModule();
                flashLED('red', 500, 2);
                console.log("Buzz! (Fail Sound)");
                setTimeout(() => showAppAlert({
                    deviceIndex: deviceIndex, // Pass index
                    title: "Fingerprint Mismatch",
                    details: "An unregistered fingerprint was scanned.",
                    status: "Unauthorized Scan Detected"
                }), 600);
            } else {
                console.log("Unauthorized scan while unlocked - ignored.");
                addLogEntry(deviceIndex, "Unauthorized scan while unlocked (ignored)", 'info');
            }
        }
    }

    function handleTamper() {
        if (isAlarmActive) return;
         if (devices.length === 0) return;

         const deviceIndex = currentDeviceIndex;
         const device = devices[deviceIndex];

        if (!device.isLocked) {
            console.log("Tamper attempt while unlocked - ignored.");
            addLogEntry(deviceIndex, "Tamper attempt while unlocked (ignored)", 'info');
            return;
        }

        console.log(`Tamper/Force detected on ${device.name}.`);
         addLogEntry(deviceIndex, "Tamper/Force attempt detected", 'error');
         shakeModule();
         flashLED('red', 500, 3);
         console.log("BZZZZZT! (Tamper Fail Sound)");
         setTimeout(() => showAppAlert({
               deviceIndex: deviceIndex,
               title: "Tamper Alert!",
               details: "Forceful pull or tampering detected while locked.",
               status: "Tampering Detected"
           }), 600);
    }

     function handleProximityLoss() {
         if (isAlarmActive) return;
          if (devices.length === 0) return;

         const deviceIndex = currentDeviceIndex;
         const device = devices[deviceIndex];

         console.log(`Proximity Loss detected for ${device.name}.`);
         addLogEntry(deviceIndex, "Proximity Loss detected (disconnected)", 'error');
         showAppAlert({
               deviceIndex: deviceIndex,
               title: "Proximity Alert!",
               details: `Device unexpectedly disconnected from phone. Last known location: ${device.location}`,
               status: "Device Disconnected"
           });
         // Keep LED red while alert is active (if this is the selected device)
         if (deviceIndex === currentDeviceIndex) {
            updateLED('red');
         }
    }
    // --- New Event Handlers ---

    function handleBatteryChange(delta) {
        if (isAlarmActive) return;
        if (devices.length === 0) return;

        const deviceIndex = currentDeviceIndex;
        const device = devices[deviceIndex];
        const oldBattery = device.battery;

        // Clamp battery level between 0 and 100
        device.battery = Math.max(0, Math.min(100, device.battery + delta));

        console.log(`Battery change for ${device.name}: ${oldBattery}% -> ${device.battery}%`);
        addLogEntry(deviceIndex, `Battery level ${delta > 0 ? 'increased' : 'decreased'} to ${device.battery}%`, 'info');

        // Update UI immediately
        renderDashboard(); // Re-rendering dashboard updates the battery display
        saveStateToLocalStorage();

        // --- Auto-trigger low battery alert if needed ---
        const LOW_BATTERY_THRESHOLD = 15;
        if (device.battery <= LOW_BATTERY_THRESHOLD && oldBattery > LOW_BATTERY_THRESHOLD) {
             console.log(`Auto-triggering low battery alert for ${device.name}`);
             // Use setTimeout to avoid potential conflicts if called rapidly
             setTimeout(() => handleLowBatteryAlert(true), 100); // Pass flag to indicate auto-trigger
        }
    }

    function handleLowBatteryAlert(isAutoTriggered = false) {
         // Allow this alert even if another *non-critical* one is active? Let's overwrite for simplicity now.
         // if (isAlarmActive && appAlertView.dataset.alertSeverity === 'critical') return;

         if (devices.length === 0) return;
         const deviceIndex = currentDeviceIndex;
         const device = devices[deviceIndex];

         // Optionally force battery level low if manually triggered
         if (!isAutoTriggered) {
             device.battery = Math.min(device.battery, 15); // Ensure battery is low
             renderDashboard();
             saveStateToLocalStorage();
         }

         console.log(`Triggering Low Battery Alert for ${device.name}`);
          showAppAlert({
                deviceIndex: deviceIndex,
                severity: 'low-battery', // Custom severity
                title: "Low Battery Warning",
                details: `Device battery is at ${device.battery}%. Please charge soon.`,
                status: "Low Battery"
            });
    }

    function handleGeofenceBreach() {
        // Allow this alert even if another is active? Let's treat it as critical.
        if (isAlarmActive) return;
        if (devices.length === 0) return;

        const deviceIndex = currentDeviceIndex;
        const device = devices[deviceIndex];

        // Simulate device location changing
        device.location = "Unknown Location (Outside Geo-fence)";
        renderDashboard(); // Update location on dashboard immediately
        saveStateToLocalStorage();


        console.log(`Simulating Geo-fence Breach for ${device.name}`);
         showAppAlert({
               deviceIndex: deviceIndex,
               severity: 'geo-fence', // Treat as critical or near-critical
               title: "Geo-fence Alert!",
               details: `Device has moved outside the designated safe area. Last known safe location: ${defaultLocation}.`, // Use a placeholder for last safe location
               status: "Outside Safe Zone"
           });
    }
    // Modify showAppAlert to handle severity
    function showAppAlert(config) {
        if (isAlarmActive && config.severity !== 'low-battery') return; // Allow low battery alerts even if another critical one is showing? Or block all? Let's block most.
        if (isAlarmActive && config.severity === 'critical') return; // Don't stack critical alerts

        isAlarmActive = true; // Set global flag (might need refinement for multiple non-critical alerts)

        const deviceIndex = config.deviceIndex;
        if (deviceIndex < 0 || deviceIndex >= devices.length) return;
        const device = devices[deviceIndex];

        const severity = config.severity || 'critical'; // Default to critical
        const logType = (severity === 'critical' || severity === 'geo-fence') ? 'error' : 'warning'; // Log low battery/others as warning

        console.warn(`ALERT (Severity: ${severity}) for ${device.name}: ${config.title} - ${config.details}`);
        addLogEntry(deviceIndex, `ALERT: ${config.title} - ${config.details}`, logType);

        // Update Alert View Content
        alertTitle.textContent = config.title || 'ALERT';
        alertStatusText.textContent = config.status || 'Event Detected';
        alertTime.textContent = getCurrentTimestamp();
        alertLocation.textContent = `Approx. ${device.location}`; // Location might not be relevant for low batt
        alertDetails.textContent = config.details || 'An event occurred requiring attention.';
        alertDevice.textContent = device.name;

        // Store the index and severity
        appAlertView.dataset.alertDeviceIndex = deviceIndex;
        appAlertView.dataset.alertSeverity = severity;

        // --- Style header based on severity ---
        const alertHeader = appAlertView.querySelector('.app-header');
        alertHeader.classList.remove('alert-header', 'warning-header'); // Clear previous severity styles
        if (severity === 'critical' || severity === 'geo-fence') {
            alertHeader.classList.add('alert-header'); // Red header
            alertHeader.querySelector('span:first-of-type').textContent = '⚠️ ALERT!';
        } else if (severity === 'low-battery') {
             alertHeader.classList.add('warning-header'); // Orange header
             alertHeader.querySelector('span:first-of-type').textContent = '🔋 Warning';
        } else {
             alertHeader.classList.add('warning-header'); // Default to orange for other warnings
             alertHeader.querySelector('span:first-of-type').textContent = 'ℹ️ Notice';
        }
        // --- End header styling ---


        switchAppView('app-alert-view');

        // Visual feedback on module (only for critical alerts?)
        if ((severity === 'critical' || severity === 'geo-fence') && deviceIndex === currentDeviceIndex) {
            updateLED('red');
        }

        if (severity === 'critical') {
            console.log("BEEP BEEP BEEP! (Alarm Sound)");
        } else {
             console.log("Beep. (Notification Sound)");
        }
    }


    // --- Event Listeners ---
    sensor.addEventListener('click', () => {
        // Simulate unauthorized scan on direct click
        if (!isAlarmActive && devices.length > 0) handleScan(false);
    });
    btnAuthScan.addEventListener('click', () => handleScan(true));
    btnUnauthScan.addEventListener('click', () => handleScan(false));
    btnTamper.addEventListener('click', handleTamper);
    btnProximity.addEventListener('click', handleProximityLoss);
    btnDismissAlert.addEventListener('click', dismissAlert);
     btnAddDevice.addEventListener('click', addNewDevice);

    // Navigation listeners (using event delegation on phoneScreen)
    phoneScreen.addEventListener('click', (e) => {
        // Handle Back buttons
        if (e.target.matches('.app-nav-btn')) {
            const targetView = e.target.dataset.target;
            if (targetView === 'dashboard') {
                 dismissAlert(); // Dismiss alert implicitly when going back from it
                 switchAppView('app-dashboard');
            } else if (targetView === 'alert') {
                 switchAppView('app-alert-view'); // Go back to specific alert
            }
            // Add more cases if needed
        }
        // Handle Track GPS button
        else if (e.target.matches('#btn-track-gps')) {
             const alertDeviceIndex = parseInt(appAlertView.dataset.alertDeviceIndex, 10);
             if (!isNaN(alertDeviceIndex)) {
                 displayTrackingView(alertDeviceIndex);
             }
        }
        // Handle View Log button clicks (delegated)
         else if (e.target.matches('.btn-view-log')) {
             let indexToLog;
             // Check if triggered from dashboard card or alert view
             if (e.target.dataset.index) { // From dashboard card
                 indexToLog = parseInt(e.target.dataset.index, 10);
             } else { // From alert view
                 indexToLog = parseInt(appAlertView.dataset.alertDeviceIndex, 10);
             }

             if (!isNaN(indexToLog)) {
                 displayLogView(indexToLog);
             }
         }
    });
    btnDecBattery.addEventListener('click', () => handleBatteryChange(-10));
    btnIncBattery.addEventListener('click', () => handleBatteryChange(10));
    btnLowBattAlert.addEventListener('click', () => handleLowBatteryAlert(false)); // Manual trigger
    btnGeofenceBreach.addEventListener('click', handleGeofenceBreach);


    // --- Initialization ---
    loadStateFromLocalStorage(); // Load or initialize state
    updateDateTime();
    setInterval(updateDateTime, 30000);
    renderDashboard(); // Initial render
    switchAppView('app-dashboard'); // Ensure dashboard is the starting view

});