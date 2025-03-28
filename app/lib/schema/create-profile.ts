import { z } from "zod";

export const CreateBusinessFormSchema = z.object({
  business_name: z
    .string()
    .min(3, { message: "Business name must be at least 3 characters long." })
    .trim(),
  phone_number: z
    .string()
    .min(7, { message: "Phone number must be at least 7 characters long." })
    .trim(),
  country: z
    .string()
    .min(4, { message: "Country name must be at least 4 characters long." })
    .trim(),
});

export type CreateProfileFormState =
  | {
      errors?: {
        business_name?: string[];
        phone_number?: string[];
        country?: string[];
      };
      message?: string;
    }
  | undefined;
