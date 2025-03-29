import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Optional: for animations

const ThankYouMessage = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (countdown <= 0) {
      setIsExiting(true);
      navigate("/career");
      return;
    }

    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, navigate]);

  // Optional animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.4 }
    }
  };

  return (
    <motion.section 
      className="py-5 text-center min-h-screen flex items-center justify-center"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      <div className="container max-w-2xl px-4">
        <div className="bg-white p-8 rounded-lg">
          <svg 
            style={{width:'200px'}}
            className="w-16 h-16 text-green-500 mx-auto mb-4"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 13l4 4L19 7" 
            />
          </svg>
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Thank You for Applying!
          </h2>
          <p className="text-gray-600 mb-4">
            Your application has been successfully received. Our team will review 
            your information and get back to you soon.
          </p>
          <div className="flex items-center justify-center">
            <div className="w-8 h-8 flex items-center justify-center mr-2">
              {countdown > 0 && (
                <span className="text-gray-500 font-medium">
                  {countdown}
                </span>
              )}
            </div>
            <span className="text-gray-500">
              Redirecting to careers page{countdown > 0 ? '...' : ''}
            </span>
          </div>
          {countdown === 0 && (
            <div className="mt-4">
              <button 
                onClick={() => navigate("/career")}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Click here if you're not redirected automatically
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default ThankYouMessage;