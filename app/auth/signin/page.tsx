import { Heading } from "@/components/heading";
import { Text, TextLink } from "@/components/text";
import { Metadata } from "next";
import Signinform from "./signin-form";

export const metadata: Metadata = {
  title: "Sign In",
};

export default function Signin() {
  return (
    <>
      <Heading>Sign in</Heading>
      <Signinform />
      <Text>
        Don&apos;t have an account?{" "}
        <TextLink href="/auth/signup">Sign up</TextLink>
      </Text>
      <div className="h-4"></div>
      <TextLink href="/auth/forgot-password" className="text-sm">
        Forgot password?
      </TextLink>
    </>
  );
}
