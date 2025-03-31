import { NarrowContainer } from "@/components/container";
import { PageVerticalPadding } from "@/components/padding";
import Image from "next/image";
import Link from "next/link";
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NarrowContainer>
      <div className="flex items-center justify-center mt-8">
        <Link href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Harvest Calc</span>
          <Image
            alt="Havrvest Calc logo"
            src="/images/logo.jpeg"
            width={48}
            height={48}
          />
        </Link>
      </div>
      <PageVerticalPadding>{children}</PageVerticalPadding>
    </NarrowContainer>
  );
}
