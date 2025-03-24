import { cookies } from "next/headers";
import "server-only";

export async function createSession(
  access_token: string,
  refresh_token: string
) {
  const accessExpiresAt = new Date(Date.now() + 15 * 60 * 1000);
  const refreshExpiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const cookieStore = await cookies();

  cookieStore.set("access_token", access_token, {
    httpOnly: true,
    secure: true,
    expires: accessExpiresAt,
    sameSite: "lax",
    path: "/",
  });

  cookieStore.set("refresh_token", refresh_token, {
    httpOnly: true,
    secure: true,
    expires: refreshExpiresAt,
    sameSite: "lax",
    path: "/",
  });
}

export async function updateSession(access_token: string) {
  const expiresAt = new Date(Date.now() + 15 * 60 * 1000);
  const cookieStore = await cookies();

  cookieStore.set("access_token", access_token, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete("access_token");
  cookieStore.delete("refresh_token");
}
