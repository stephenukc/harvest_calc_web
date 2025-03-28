"use server";
import { verifySession } from "@/app/lib/dal";
import {
  CreateBusinessFormSchema,
  CreateProfileFormState,
} from "@/app/lib/schema/create-profile";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function createBusiness(
  state: CreateProfileFormState,
  formData: FormData
) {
  const validatedFields = CreateBusinessFormSchema.safeParse({
    business_name: formData.get("business_name"),
    phone_number: formData.get("phone_number"),
    country: formData.get("country"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      business_name: formData.get("business_name") as string,
      phone_number: formData.get("phone_number") as string,
      country: formData.get("country") as string,
    };
  }

  await verifySession();

  const { business_name, phone_number, country } = validatedFields.data;
  const access_token = (await cookies()).get("access_token")?.value;

  const response = await fetch(
    `${process.env.API_BASE_URL}/marketplace/create-business/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
      body: JSON.stringify({
        name: business_name,
        phone_number,
        country,
      }),
    }
  );

  if (!response.ok) {
    const data = await response.json();
    return {
      message: data.detail,
      business_name: formData.get("business_name") as string,
      phone_number: formData.get("phone_number") as string,
      country: formData.get("country") as string,
    };
  }

  redirect("/dashboard/home");
}
