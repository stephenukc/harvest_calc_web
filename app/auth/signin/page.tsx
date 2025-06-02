import { Heading } from "@/components/heading";
import { Text, TextLink } from "@/components/text";
import { Metadata } from "next";
import Signinform from "./signin-form";
import { Link } from "@/components/link";
import logo from "@/public/images/logo-wide.svg";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sign In",
};

export default function Signin() {
  return (
    <div>
      <Link href="/">
        <Image alt="HavrvestCalc logo" src={logo} className="h-10 w-auto" />
      </Link>
      <Heading className="mt-8">Sign up</Heading>
      <Signinform />
      <Text>
        Don&apos;t have an account?{" "}
        <TextLink href="/auth/signup">Sign up</TextLink>
      </Text>
      <div className="h-4"></div>
      <TextLink href="/auth/forgot-password" className="text-sm">
        Forgot password?
      </TextLink>
    </div>
  );
}
