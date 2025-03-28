"use client";
import { signup } from "@/app/actions/auth";
import { Button } from "@/components/button";
import {
  Description,
  ErrorMessage,
  Field,
  FieldGroup,
  Fieldset,
  Label,
  Legend,
} from "@/components/fieldset";
import { Input } from "@/components/input";
import Loading from "@/components/loading";
import { Radio, RadioField, RadioGroup } from "@/components/radio";
import Toast from "@/components/toast";
import { useActionState } from "react";

export default function SignupForm() {
  const [state, action, pending] = useActionState(signup, undefined);
  return (
    <form action={action} className="py-8">
      {state?.message && <Toast type="error" message={state?.message} />}
      <Fieldset aria-label="Sign up information">
        <FieldGroup>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4">
            <Field>
              <Label>First name</Label>
              <Input
                name="first_name"
                defaultValue={state?.first_name}
                minLength={2}
                required
              />
              {state?.errors?.first_name && (
                <ErrorMessage>{state.errors.first_name}</ErrorMessage>
              )}
            </Field>
            <Field>
              <Label>Last name</Label>
              <Input
                name="last_name"
                defaultValue={state?.last_name}
                minLength={2}
                required
              />
              {state?.errors?.last_name && (
                <ErrorMessage>{state.errors.last_name}</ErrorMessage>
              )}
            </Field>
          </div>
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
            <Input name="password" type="password" required />
            {state?.errors?.password && (
              <>
                {state.errors.password.map((error) => (
                  <ErrorMessage key={error}>{error}</ErrorMessage>
                ))}
              </>
            )}
          </Field>
          <Legend>Account type</Legend>
          <RadioGroup name="account_type" defaultValue="individual">
            <RadioField>
              <Radio value="individual" />
              <Label>Individual</Label>
              <Description>Scholars, Retailers and Consumers.</Description>
            </RadioField>
            <RadioField>
              <Radio value="farmer" />
              <Label>Farmer</Label>
              <Description>Farmers.</Description>
            </RadioField>
            <RadioField>
              <Radio value="business" />
              <Label>Business</Label>
              <Description>Offtakers and Businesses.</Description>
            </RadioField>
          </RadioGroup>
          <Button disabled={pending} type="submit" className="w-full">
            {pending ? <Loading /> : "Sign In"}
          </Button>
        </FieldGroup>
      </Fieldset>
    </form>
  );
}
