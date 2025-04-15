import { Container } from "@/components/container";
import MainLayout from "@/components/nav/main-layout";
import React from "react";
import { getUser } from "@/app/lib/dal";

export default async function BlogLayout({
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
