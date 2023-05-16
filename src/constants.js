import GoogleLogo from "./assests/logo/google.svg";
import MicrosoftLogo from "./assests/logo/microsoft.svg";
import AppleLogo from "./assests/logo/apple.svg";


export const apiUrl = 'http://18.224.9.172:8082'

export const SignUpOptions = [
  {
    signUpText: "SignUp with Google",
    signUpImage: GoogleLogo,
  },
  {
    signUpText: "SignUp with Apple",
    signUpImage: AppleLogo,
  },
  {
    signUpText: "SignUp with Microsoft",
    signUpImage: MicrosoftLogo,
  },
];

export const LoginOptions = [
  {
    signUpText: "Login with Google",
    signUpImage: GoogleLogo,
  },
  {
    signUpText: "Login with Apple",
    signUpImage: AppleLogo,
  },
  {
    signUpText: "Login with Microsoft",
    signUpImage: MicrosoftLogo,
  },
];


export const  StatusCodeError= {
   "400": "File is not a pdf file",
   "401": "File has more then 100 pages"
}


export const faqData = [
  {
    question: "What is this application about?",
    answer: "This application lets you chat with any PDF document you upload.",
  },
  {
    question: "What if I have a question that the AI can't answer?",
    answer:
      " If the answer lies in the uploaded PDF, then there's a high likelihood that the AI will answer it correctly. Note that the AI is constantly learning, so if it cannot answer your question, you can always ask a different question.",
  },
  {
    question:
      "Is there a limit to the size of the PDF document that can be uploaded?",
    answer:
      "Yes, the maximum limit of the PDF document that can be uploaded is 20 MB.",
  },
  {
    question:
      "Does Pagewhisperer have any limitations on the number of PDF documents that can be uploaded per day?",
    answer:
      "No, there are no limitations on the number of PDF documents that can be uploaded per day.",
  },
  {
    question:
      " Can I upload password-protected PDF documents to Pagewhisperer?",
    answer:
      " No, you cannot upload password-protected PDF documents to AskYourPdf.",
  },
  {
    question: "How long are the chat sessions saved on Pagewhisperer?",
    answer: "The chat session is available as long as the tab is open.",
  },
  {
    question: "Can I use Pagewhisperer on any device?",
    answer:
      "Yes, Pagewhisperer is accessible from any device with an internet connection.",
  },
];