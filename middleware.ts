import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = [
  "/dashboard/home",
  "dashboard/profile",
  "/dashboard/create-business",
  "/dashboard/create-individual",
  "/dashboard/create-farmer",
];

export default async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);

  const access_token = request.cookies.get("access_token")?.value;
  const refresh_token = request.cookies.get("refresh_token")?.value;

  if (isProtectedRoute && !access_token && !refresh_token) {
    return NextResponse.redirect(new URL("/auth/signin", request.nextUrl));
  }
  if (isProtectedRoute && !access_token && refresh_token) {
    const url = request.nextUrl.clone();
    url.pathname = "/api/refresh-token";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
