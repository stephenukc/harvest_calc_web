import { Button } from "@/components/button";
import { Field, FieldGroup, Fieldset, Label } from "@/components/fieldset";
import { Heading } from "@/components/heading";
import { Input } from "@/components/input";

export default function CreateFarmer() {
  return (
    <main>
      <Heading>Complete Farmer Profile</Heading>
      <form action="" className="py-8">
        <Fieldset aria-label="Create farmer profile information">
          <FieldGroup>
            <Field>
              <Label>Phone number</Label>
              <Input name="phone_number" type="tel" required />
            </Field>
            <Field>
              <Label>Country</Label>
              <Input name="country" required />
            </Field>
            <Field>
              <Label>Cooperative society</Label>
              <Input name="cooperative_society" />
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
