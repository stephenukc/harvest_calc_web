import { Button } from "@/components/button";
import { Field, FieldGroup, Fieldset, Label } from "@/components/fieldset";
import { Input } from "@/components/input";
import { Radio } from "@/components/radio";
import * as Headless from "@headlessui/react";

export default function CreateIndividualForm() {
  return (
    <form action="" className="py-8 ">
      <Fieldset aria-label="Create individual profile information">
        <FieldGroup>
          <Field>
            <Label>Phone number</Label>
            <Input name="phone_number" type="tel" required />
          </Field>
          <Headless.Fieldset className="">
            <Headless.Legend className="text-base/6 font-medium sm:text-sm/6">
              Type of Champion
            </Headless.Legend>
            <Headless.RadioGroup
              name="type_of_individual"
              defaultValue="SCHOLAR"
              className="mt-4 flex gap-6 sm:gap-8"
            >
              <Headless.Field className="flex items-center gap-2">
                <Radio value="SCHOLAR" />
                <Headless.Label className="text-base/6 select-none sm:text-sm/6">
                  Scholar
                </Headless.Label>
              </Headless.Field>
              <Headless.Field className="flex items-center gap-2">
                <Radio value="RETAILER" />
                <Headless.Label className="text-base/6 select-none sm:text-sm/6">
                  Retailer
                </Headless.Label>
              </Headless.Field>
              <Headless.Field className="flex items-center gap-2">
                <Radio value="CUSTOMER" />
                <Headless.Label className="text-base/6 select-none sm:text-sm/6">
                  Consumer
                </Headless.Label>
              </Headless.Field>
            </Headless.RadioGroup>
          </Headless.Fieldset>
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
  );
}
