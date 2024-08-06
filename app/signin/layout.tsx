import { NarrowContainer } from "@/components/container";
import { PageVerticalPadding } from "@/components/padding";
export default function SignInLayout({
  children,
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <NarrowContainer>
      <PageVerticalPadding>{children}</PageVerticalPadding>
    </NarrowContainer>
  );
}
