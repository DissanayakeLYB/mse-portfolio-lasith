import PyPDF2

def extract_text_from_pdf(pdf_path):
    try:
        with open(pdf_path, 'rb') as file:
            reader = PyPDF2.PdfReader(file)
            text = ""
            for page in reader.pages:
                text += page.extract_text() + "\n"
            return text
    except Exception as e:
        return f"Error: {e}"

if __name__ == "__main__":
    pdf_text = extract_text_from_pdf('docs/resume.pdf')
    print(pdf_text)
