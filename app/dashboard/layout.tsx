import { getUser } from "@/app/lib/dal";
import { AppLayout } from "@/components/nav/app-layout";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user: User | null = await getUser();
  return <AppLayout user={user}>{children}</AppLayout>;
}
