import { NarrowContainer } from "@/components/container";
import { PageVerticalPadding } from "@/components/padding";
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NarrowContainer>
      <PageVerticalPadding>{children}</PageVerticalPadding>
    </NarrowContainer>
  );
}
