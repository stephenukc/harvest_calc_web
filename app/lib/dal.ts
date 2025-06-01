import "server-only";

import { deleteSession } from "@/app/lib/session";
import { cookies } from "next/headers";
import { cache } from "react";

export const verifySession = cache(async () => {
  const token = (await cookies()).get("refresh_token")?.value;
  const response = await fetch(`${process.env.API_BASE_URL}/auth/jwt/verify/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token,
    }),
  });

  if (response.ok) {
    return { isAuthenticated: true };
  } else {
    deleteSession();
    return { isAuthenticated: false };
  }
});

export const getUser = cache(async () => {
  const session = await verifySession();
  if (!session.isAuthenticated) {
    return null;
  }

  const access_token = (await cookies()).get("access_token")?.value;
  const response = await fetch(`${process.env.API_BASE_URL}/auth/users/me/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (!response.ok) {
    return null;
  }

  const data = await response.json();

  return data;
});
