"use client";
import { Button } from "@/components/button";
import { Divider } from "@/components/divider";
import {
  Field,
  FieldGroup,
  Fieldset,
  Label,
  Legend,
} from "@/components/fieldset";
import { Input } from "@/components/input";
import { Select } from "@/components/select";
import { Textarea } from "@/components/textarea";
import { ChangeEvent, useState } from "react";
import { lgasByState } from "./lgas";

export default function CreateFarmerForm() {
  const [selectedState, setSelectedState] = useState("");
  const [selectedLGA, setSelectedLGA] = useState("");

  const handleStateChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(event.target.value);
    setSelectedLGA("");
  };

  const handleLGAChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedLGA(event.target.value);
  };
  return (
    <form action="" className="py-8">
      <Fieldset aria-label="Farmer personal information">
        <Legend>Personal information</Legend>
        <FieldGroup>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4">
            <Field>
              <Label>Phone number</Label>
              <Input name="phone_number" type="tel" required />
            </Field>
            <Field>
              <Label>Cooperative society</Label>
              <Input name="cooperative_society" />
            </Field>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-4">
            <Field>
              <Label>LinkedIn URL</Label>
              <Input name="linkedin_url" />
            </Field>
            <Field>
              <Label>Facebook URL</Label>
              <Input name="facebook_url" />
            </Field>
            <Field>
              <Label>Instagram URL</Label>
              <Input name="instagram_url" />
            </Field>
            <Field>
              <Label>Tiktok URL</Label>
              <Input name="tiktok_url" />
            </Field>
            <Field>
              <Label>Twitter URL</Label>
              <Input name="twitter_url" />
            </Field>
          </div>
        </FieldGroup>
      </Fieldset>
      <Divider className="my-8" />
      <Fieldset aria-label="Farm information">
        <Legend>Farm information</Legend>
        <FieldGroup>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-5 sm:gap-4">
            <Field className="sm:col-span-2">
              <Label>Farm name</Label>
              <Input name="farm_name" required />
            </Field>
            <Field className="sm:col-span-2">
              <Label>Farm address</Label>
              <Input name="address" required />
            </Field>
            <Field>
              <Label>Type of farm</Label>
              <Select name="type_of_farm">
                <option value="CROP">Crop Farm</option>
                <option value="ANIMAL">Animal Farm</option>
                <option value="MIXED">Mixed Farm</option>
              </Select>
            </Field>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4">
            <Field>
              <Label>Farm description</Label>
              <Textarea name="description" />
            </Field>
            <Field>
              <Label>Directions to locate farm</Label>
              <Textarea name="directions" />
            </Field>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-4">
            <Field>
              <Label>State</Label>
              <Select
                name="state"
                value={selectedState}
                onChange={handleStateChange}
              >
                <option value="">Select State</option>
                {Object.keys(lgasByState).map((state, index) => (
                  <option key={`${state}-${index}`} value={state}>
                    {state}
                  </option>
                ))}
              </Select>
            </Field>
            <Field className="col-span-2">
              <Label>Local government</Label>
              <Select
                name="local_government"
                value={selectedLGA}
                onChange={handleLGAChange}
                disabled={!selectedState}
              >
                <option value="">Select LGA</option>
                {selectedState &&
                  lgasByState[selectedState].map((lga, index) => (
                    <option key={`${lga}-${index}`} value={lga}>
                      {lga}
                    </option>
                  ))}
              </Select>
            </Field>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4">
            <Field>
              <Label>Farm size</Label>
              <Input name="size" />
            </Field>
            <Field>
              <Label>Farm age</Label>
              <Input name="age" />
            </Field>
          </div>
          <Button type="submit" className="w-full">
            Continue
          </Button>
        </FieldGroup>
      </Fieldset>
    </form>
  );
}
