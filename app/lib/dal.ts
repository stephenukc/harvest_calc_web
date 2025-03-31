import "server-only";

import { cookies } from "next/headers";
import { cache } from "react";

export const verifySession = cache(async () => {
  const refresh_token = (await cookies()).get("refresh_token")?.value;

  if (refresh_token) {
    return { isAuthenticated: true };
  } else {
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

  const data = await response.json();

  return data;
});
