import { NarrowContainer } from "@/components/container";
import { PageVerticalPadding } from "@/components/padding";
export default function ForgotPasswordLayout({
  children,
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <NarrowContainer>
      <PageVerticalPadding>{children}</PageVerticalPadding>
    </NarrowContainer>
  );
}
