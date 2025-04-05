import { Container } from "@/components/container";
import MainLayout from "@/components/main-layout";
import React from "react";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MainLayout>
      <Container>
        <main>{children}</main>
      </Container>
    </MainLayout>
  );
}
