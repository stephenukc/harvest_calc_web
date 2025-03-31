"use client";
import { createBusiness } from "@/app/actions/create-profile";
import { Button } from "@/components/button";
import { Field, FieldGroup, Fieldset, Label } from "@/components/fieldset";
import { Input } from "@/components/input";
import Loading from "@/components/loading";
import Toast from "@/components/toast";
import { useActionState } from "react";

export default function CreateBusinessForm() {
  const [state, action, pending] = useActionState(createBusiness, undefined);
  return (
    <main>
      {state?.message && <Toast type="error" message={state?.message} />}
      <form action={action} className="py-8">
        <Fieldset aria-label="Create business profile information">
          <FieldGroup>
            <Field>
              <Label>Business Name</Label>
              <Input
                name="business_name"
                required
                minLength={3}
                defaultValue={state?.business_name}
              />
            </Field>
            <Field>
              <Label>Phone number</Label>
              <Input
                name="phone_number"
                type="tel"
                required
                minLength={7}
                defaultValue={state?.phone_number}
              />
            </Field>
            <Field>
              <Label>Country</Label>
              <Input
                name="country"
                required
                minLength={4}
                defaultValue={state?.country}
              />
            </Field>
            <Button disabled={pending} type="submit" className="w-full">
              {pending ? <Loading /> : "Continue"}
            </Button>
          </FieldGroup>
        </Fieldset>
      </form>
    </main>
  );
}
