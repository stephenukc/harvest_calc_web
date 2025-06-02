import { Link } from "@/components/link";
import logo from "@/public/images/logo.svg";

import { AuthLayout } from "@/components/layout/auth-layout";

import Image from "next/image";
export default function AuthPagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AuthLayout>{children}</AuthLayout>;
}
