import { getUser } from "@/app/lib/dal";
import { AppLayout } from "@/components/layout/app-layout";

export default async function DashboardPagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user: User | null = await getUser();
  return <AppLayout user={user}>{children}</AppLayout>;
}
