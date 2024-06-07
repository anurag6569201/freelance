import PyKCS11
from PyPDF2 import PdfReader, PdfWriter

PKCS11_LIB = '/path/to/pkcs11/library'

def sign_pdf_with_token(pdf_file_path, signed_pdf_file_path):
    pkcs11 = PyKCS11.PyKCS11Lib()
    pkcs11.load(PKCS11_LIB)

    slots = pkcs11.getSlotList()
    session = pkcs11.openSession(slots[0])
    session.login('your_pin_here')

    private_key = session.findObjects([(PyKCS11.CKA_CLASS, PyKCS11.CKO_PRIVATE_KEY)])[0]
    data_to_sign = open(pdf_file_path, 'rb').read()

    mechanism = PyKCS11.Mechanism(PyKCS11.CKM_SHA256_RSA_PKCS, None)
    signature = session.sign(private_key, data_to_sign, mechanism)

    reader = PdfReader(pdf_file_path)
    writer = PdfWriter()

    for page in reader.pages:
        writer.add_page(page)

    writer.add_metadata({'/Sig': signature})

    with open(signed_pdf_file_path, 'wb') as f:
        writer.write(f)

    session.logout()
    session.closeSession()