import { Heading } from "@/components/heading";
import { Link } from "@/components/link";
import { Text, TextLink } from "@/components/text";
import logo from "@/public/images/logo-wide.svg";
import { Metadata } from "next";
import SignupForm from "./signup-form";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function SignUp() {
  return (
    <div>
      <Link href="/">
        <Image alt="HavrvestCalc logo" src={logo} className="h-10 w-auto" />
      </Link>
      <Heading className="mt-8">Sign up</Heading>
      <SignupForm />
      <Text>
        Already have an account?{" "}
        <TextLink href="/auth/signin">Sign in</TextLink>
      </Text>
    </div>
  );
}
