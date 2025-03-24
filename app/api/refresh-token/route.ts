import { verifySession } from "@/app/lib/dal";
import { updateSession } from "@/app/lib/session";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const session = await verifySession();
  if (!session) {
    return new Response(null, { status: 401 });
  }

  const refresh = request.cookies.get("refresh_token")?.value;

  const response = await fetch(
    `${process.env.API_BASE_URL}/auth/jwt/refresh/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refresh,
      }),
    }
  );
  const data = await response.json();

  await updateSession(data.access);
  console.log("WE GOT HERE");

  redirect(request.url);
}
