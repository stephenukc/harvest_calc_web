"use server";
import {
  FormState,
  SigninFormSchema,
  SignupFormSchema,
} from "@/app/lib/auth-schema";
import { createSession } from "@/app/lib/session";
import { redirect } from "next/navigation";

export async function signup(state: FormState, formData: FormData) {
  const validatedFields = SignupFormSchema.safeParse({
    first_name: formData.get("first_name"),
    last_name: formData.get("last_name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      first_name: formData.get("first_name") as string,
      last_name: formData.get("last_name") as string,
      email: formData.get("email") as string,
    };
  }

  const { first_name, last_name, email, password } = validatedFields.data;

  const signupResponse = await fetch(`http://localhost:8000/auth/users/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      first_name,
      last_name,
      email,
      password,
    }),
  });

  if (!signupResponse.ok) {
    const signupData = await signupResponse.json();
    return {
      message: signupData.detail,
      first_name: formData.get("first_name") as string,
      last_name: formData.get("last_name") as string,
      email: formData.get("email") as string,
    };
  }

  const signinResponse = await fetch(`http://localhost:8000/auth/jwt/create/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const signinData = await signinResponse.json();

  await createSession(signinData.access, signinData.refresh);

  redirect("/dashboard/home");
}

export async function signin(state: FormState, formData: FormData) {
  const validatedFields = SigninFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      email: formData.get("email") as string,
    };
  }

  const { email, password } = validatedFields.data;

  const response = await fetch(`http://localhost:8000/auth/jwt/create/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (!response.ok) {
    const data = await response.json();
    return { message: data.detail, email: formData.get("email") as string };
  }

  const data = await response.json();

  await createSession(data.access, data.refresh);

  redirect("/dashboard/home");
}
