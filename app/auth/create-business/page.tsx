import { Button } from "@/components/button";
import { Field, FieldGroup, Fieldset, Label } from "@/components/fieldset";
import { Heading } from "@/components/heading";
import { Input } from "@/components/input";

export default function CreateBusiness() {
  return (
    <main>
      <Heading>Create Business Profile</Heading>
      <form action="" className="py-8">
        <Fieldset aria-label="Create business profile information">
          <FieldGroup>
            <Field>
              <Label>Business Name</Label>
              <Input name="name" required />
            </Field>
            <Field>
              <Label>Phone number</Label>
              <Input name="phone_number" type="tel" required />
            </Field>
            <Field>
              <Label>Country</Label>
              <Input name="country" required />
            </Field>
            <Button type="submit" className="w-full">
              Continue
            </Button>
          </FieldGroup>
        </Fieldset>
      </form>
    </main>
  );
}
