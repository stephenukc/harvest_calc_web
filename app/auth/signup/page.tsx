import { Heading } from "@/components/heading";
import { Text, TextLink } from "@/components/text";
import { Metadata } from "next";
import SignupForm from "./signup-form";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function SignUp() {
  return (
    <main>
      <Heading>Sign up</Heading>
      <SignupForm />
      <Text>
        Already have an account?{" "}
        <TextLink href="/auth/signin">Sign in</TextLink>
      </Text>
    </main>
  );
}
