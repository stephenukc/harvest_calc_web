import { getUser } from "@/app/lib/dal";
import { Container } from "@/components/container";
import MainLayout from "@/components/layout/main-layout";
import React from "react";

export default async function BlogPagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user: User | null = await getUser();
  return (
    <MainLayout user={user}>
      <Container>
        <main>{children}</main>
      </Container>
    </MainLayout>
  );
}
