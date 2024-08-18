import { NarrowContainer } from "@/components/container";
import { PageVerticalPadding } from "@/components/padding";

export default function ForgotPasswordLayout({
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
