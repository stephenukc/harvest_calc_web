"use client";
import { signin } from "@/app/actions/auth";
import { Button } from "@/components/button";
import {
  ErrorMessage,
  Field,
  FieldGroup,
  Fieldset,
  Label,
} from "@/components/fieldset";
import { Input } from "@/components/input";
import Loading from "@/components/loading";
import Toast from "@/components/toast";
import { useActionState } from "react";

export default function Signinform() {
  const [state, action, pending] = useActionState(signin, undefined);
  return (
    <main>
      {state?.message && <Toast type="error" message={state?.message} />}
      <form action={action} className="py-8">
        <Fieldset aria-label="Sign in information">
          <FieldGroup>
            <Field>
              <Label>Email address</Label>
              <Input
                name="email"
                type="email"
                defaultValue={state?.email}
                required
              />
              {state?.errors?.email && (
                <ErrorMessage>{state.errors.email}</ErrorMessage>
              )}
            </Field>
            <Field>
              <Label>Password</Label>
              <Input name="password" type="password" required minLength={8} />
              {state?.errors?.password && (
                <>
                  {state.errors.password.map((error) => (
                    <ErrorMessage key={error}>{error}</ErrorMessage>
                  ))}
                </>
              )}
            </Field>
            <Button disabled={pending} type="submit" className="w-full">
              {pending ? <Loading /> : "Sign In"}
            </Button>
          </FieldGroup>
        </Fieldset>
      </form>
    </main>
  );
}
