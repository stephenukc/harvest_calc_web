import { Button } from "@/components/button";
import { Field, FieldGroup, Fieldset, Label } from "@/components/fieldset";
import { Heading } from "@/components/heading";
import { Input } from "@/components/input";
import { Link } from "@/components/link";
import { Text, TextLink } from "@/components/text";
import logo from "@/public/images/logo-wide.svg";
import Image from "next/image";

export default function ForgotPassword() {
  return (
    <div>
      <Link href="/">
        <Image alt="HavrvestCalc logo" src={logo} className="h-10 w-auto" />
      </Link>
      <Heading className="mt-8">Forgot Password</Heading>
      <form action="" className="py-8">
        <Fieldset aria-label="Sign in information">
          <FieldGroup>
            <Field>
              <Label>Email address</Label>
              <Input name="email_address" type="email" />
            </Field>
            <Button type="submit" className="w-full" href="/dashboard/home">
              Reset Password
            </Button>
          </FieldGroup>
        </Fieldset>
      </form>
      <Text>
        Don&apos;t have an account?{" "}
        <TextLink href="/auth/signup">Sign up</TextLink>
      </Text>
    </div>
  );
}
