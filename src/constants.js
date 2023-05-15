import GoogleLogo from "./assests/logo/google.svg";
import MicrosoftLogo from "./assests/logo/microsoft.svg";
import AppleLogo from "./assests/logo/apple.svg";

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


export const apiUrl = 'http://18.224.9.172:8082'