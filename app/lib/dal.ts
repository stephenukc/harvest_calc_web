import "server-only";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { cache } from "react";

export const verifySession = cache(async () => {
  const refresh_token = (await cookies()).get("refresh_token")?.value;

  if (!refresh_token) {
    redirect("/auth/signin");
  }

  return { isAuthenticated: true };
});
