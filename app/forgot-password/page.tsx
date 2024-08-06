import { Button } from "@/components/button";
import { Field, FieldGroup, Fieldset, Label } from "@/components/fieldset";
import { Heading } from "@/components/heading";
import { Input } from "@/components/input";
import { Text, TextLink } from "@/components/text";

export default function SignIn() {
  return (
    <main>
      <Heading>Forgot password</Heading>
      <form action="" className="py-8">
        <Fieldset aria-label="Sign in information">
          <FieldGroup>
            <Field>
              <Label>Email address</Label>
              <Input name="email_address" type="email" />
            </Field>
            <Button type="submit" className="w-full" href={"dashboard/home"}>
              Reset Password
            </Button>
          </FieldGroup>
        </Fieldset>
      </form>
      <Text>
        Don&apos;t have an account? <TextLink href={"signup"}>Sign up</TextLink>
      </Text>
    </main>
  );
}
