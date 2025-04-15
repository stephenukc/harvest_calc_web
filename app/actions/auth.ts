"use server";
import {
  AuthFormState,
  SigninFormSchema,
  SignupFormSchema,
} from "@/app/lib/schema/auth";
import { createSession, deleteSession } from "@/app/lib/session";
import { redirect } from "next/navigation";

export async function signup(state: AuthFormState, formData: FormData) {
  const validatedFields = SignupFormSchema.safeParse({
    first_name: formData.get("first_name"),
    last_name: formData.get("last_name"),
    email: formData.get("email"),
    password: formData.get("password"),
    account_type: formData.get("account_type"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      first_name: formData.get("first_name") as string,
      last_name: formData.get("last_name") as string,
      email: formData.get("email") as string,
      account_type: formData.get("account_type") as string,
    };
  }

  const { first_name, last_name, email, password, account_type } =
    validatedFields.data;

  const signupResponse = await fetch(
    `${process.env.API_BASE_URL}/auth/users/`,
    {
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
    }
  );

  if (!signupResponse.ok) {
    const signupData = await signupResponse.json();
    return {
      message: signupData.detail,
      first_name: formData.get("first_name") as string,
      last_name: formData.get("last_name") as string,
      email: formData.get("email") as string,
    };
  }

  const signinResponse = await fetch(
    `${process.env.API_BASE_URL}/auth/jwt/create/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }
  );

  const signinData = await signinResponse.json();

  await createSession(signinData.access, signinData.refresh);

  if (account_type === "individual") {
    redirect("/dashboard/create-individual");
  } else if (account_type === "business") {
    redirect("/dashboard/create-business");
  } else if (account_type === "farmer") {
    redirect("/dashboard/create-farmer");
  }
}

export async function signin(state: AuthFormState, formData: FormData) {
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

  const response = await fetch(`${process.env.API_BASE_URL}/auth/jwt/create/`, {
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

  redirect("/dashboard");
}

export async function logout() {
  deleteSession();
  redirect("/auth/signin");
}
