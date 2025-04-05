import { NarrowContainer } from "@/components/container";
import { Link } from "@/components/link";
import { PageVerticalPadding } from "@/components/padding";
import logo from "@/public/images/logo.svg";
import Image from "next/image";
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NarrowContainer>
      <div className="flex items-center justify-center mt-8">
        <Link href="/">
          <Image alt="HavrvestCalc logo" src={logo} className="size-12" />
        </Link>
      </div>
      <PageVerticalPadding>{children}</PageVerticalPadding>
    </NarrowContainer>
  );
}
