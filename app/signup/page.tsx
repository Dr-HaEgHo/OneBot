import SignupPage from "@/components/signup/SignupPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'ChatBoomer | Sign Up',
  description: 'Learn and get better at industry trading secrets',
}

export default function Signup() {

  return (
    <SignupPage/>
  );
}