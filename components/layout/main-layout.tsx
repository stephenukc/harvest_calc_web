"use client";

import { logout } from "@/app/actions/auth";
import { Avatar } from "@/components/avatar";
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from "@/components/dropdown";
import logo from "@/public/images/logo-wide.svg";
import * as Headless from "@headlessui/react";
import {
  ArrowRightStartOnRectangleIcon,
  HomeModernIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Footer from "../footer";
import { Link } from "../link";
import { Navbar, NavbarItem, NavbarSection, NavbarSpacer } from "../navbar";
import {
  Sidebar,
  SidebarBody,
  SidebarHeader,
  SidebarItem,
  SidebarSection,
} from "../sidebar";

const navigation = [
  { label: "Home", url: "/" },
  { label: "About Us", url: "/about-us" },
  { label: "Blog", url: "/blog" },
  { label: "Contact", url: "/contact" },
];

function OpenMenuIcon() {
  return (
    <svg data-slot="icon" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M2 6.75C2 6.33579 2.33579 6 2.75 6H17.25C17.6642 6 18 6.33579 18 6.75C18 7.16421 17.6642 7.5 17.25 7.5H2.75C2.33579 7.5 2 7.16421 2 6.75ZM2 13.25C2 12.8358 2.33579 12.5 2.75 12.5H17.25C17.6642 12.5 18 12.8358 18 13.25C18 13.6642 17.6642 14 17.25 14H2.75C2.33579 14 2 13.6642 2 13.25Z" />
    </svg>
  );
}

function CloseMenuIcon() {
  return (
    <svg data-slot="icon" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
    </svg>
  );
}

function MobileSidebar({
  open,
  close,
  children,
}: React.PropsWithChildren<{ open: boolean; close: () => void }>) {
  return (
    <Headless.Dialog open={open} onClose={close} className="lg:hidden">
      <Headless.DialogBackdrop
        transition
        className="fixed inset-0 bg-black/30 transition data-closed:opacity-0 data-enter:duration-300 data-leave:duration-200 data-enter:ease-out data-leave:ease-in"
      />
      <Headless.DialogPanel
        transition
        className="fixed inset-y-0 w-full max-w-80 p-2 transition duration-300 ease-in-out data-closed:-translate-x-full"
      >
        <div className="flex h-full flex-col rounded-lg bg-white shadow-xs ring-1 ring-zinc-950/5 dark:bg-zinc-900 dark:ring-white/10">
          <div className="-mb-3 px-4 pt-3">
            <Headless.CloseButton as={NavbarItem} aria-label="Close navigation">
              <CloseMenuIcon />
            </Headless.CloseButton>
          </div>
          {children}
        </div>
      </Headless.DialogPanel>
    </Headless.Dialog>
  );
}

export default function MainLayout({
  user,
  children,
}: Readonly<{
  children: React.ReactNode;
  user: User | null;
}>) {
  let [showSidebar, setShowSidebar] = useState(false);
  const pathname = usePathname();

  return (
    <div className="relative isolate flex min-h-svh w-full flex-col">
      <MobileSidebar open={showSidebar} close={() => setShowSidebar(false)}>
        <Sidebar>
          <SidebarHeader>
            <Link href="/">
              <Image
                alt="HavrvestCalc logo"
                src={logo}
                className="h-10 w-auto"
              />
            </Link>
          </SidebarHeader>
          <SidebarBody>
            <SidebarSection>
              {navigation.map(({ label, url }) => (
                <SidebarItem key={label} href={url} current={url === pathname}>
                  {label}
                </SidebarItem>
              ))}
            </SidebarSection>
          </SidebarBody>
        </Sidebar>
      </MobileSidebar>

      <header className="flex items-center px-4">
        <div className="py-2.5 lg:hidden">
          <NavbarItem
            onClick={() => setShowSidebar(true)}
            aria-label="Open navigation"
          >
            <OpenMenuIcon />
          </NavbarItem>
        </div>
        <div className="min-w-0 flex-1">
          <Navbar>
            <NavbarSection>
              <Link href="/" className="max-lg:hidden">
                <Image
                  alt="HavrvestCalc logo"
                  src={logo}
                  className="h-10 w-auto"
                />
              </Link>
            </NavbarSection>
            <NavbarSpacer />
            <NavbarSection className="max-lg:hidden">
              {navigation.map(({ label, url }) => (
                <NavbarItem
                  key={label}
                  href={url}
                  current={
                    url === pathname ||
                    (url !== "/" && pathname.startsWith(url))
                  }
                >
                  {label}
                </NavbarItem>
              ))}
            </NavbarSection>
            <NavbarSpacer />
            <NavbarSection>
              {user && user.first_name ? (
                <Dropdown>
                  <DropdownButton as={NavbarItem}>
                    <Avatar
                      initials={`${user.first_name[0]}${user.last_name[0]}`}
                      className="size-10"
                      square
                    />
                  </DropdownButton>
                  <DropdownMenu className="min-w-64" anchor="top start">
                    <DropdownItem href="/dashboard">
                      <HomeModernIcon />
                      <DropdownLabel>Dashboard</DropdownLabel>
                    </DropdownItem>
                    <DropdownItem href="/dashboard/profile">
                      <UserIcon />
                      <DropdownLabel>My profile</DropdownLabel>
                    </DropdownItem>
                    <DropdownDivider />
                    <DropdownItem onClick={logout}>
                      <ArrowRightStartOnRectangleIcon />
                      <DropdownLabel>Sign out</DropdownLabel>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              ) : (
                <Link
                  href="/auth/signin"
                  className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-primary-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                >
                  Log In
                </Link>
              )}
            </NavbarSection>
          </Navbar>
        </div>
      </header>

      <main>{children}</main>

      <Footer />
    </div>
  );
}
