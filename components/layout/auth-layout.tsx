import { Link } from "@/components/link";
import logo from "@/public/images/logo.svg";
import type React from "react";

import Image from "next/image";

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-dvh flex-col">
      <div className="flex grow items-center justify-center p-6 lg:bg-white lg:p-10 dark:lg:bg-zinc-900 ">
        {children}
      </div>
    </main>
  );
}
