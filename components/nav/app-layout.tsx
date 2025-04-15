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
import {
  Navbar,
  NavbarItem,
  NavbarSection,
  NavbarSpacer,
} from "@/components/navbar";
import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer,
} from "@/components/sidebar";
import logo from "@/public/images/logo.svg";
import * as Headless from "@headlessui/react";
import {
  ArrowRightStartOnRectangleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
import {
  ChatBubbleLeftRightIcon,
  HomeIcon,
  MapPinIcon,
  NewspaperIcon,
  ShoppingCartIcon,
  UserGroupIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const logoDropdownNav = [
  { label: "Home", url: "/", icon: HomeIcon },
  { label: "Company", url: "/company", icon: UserGroupIcon },
  { label: "Blog", url: "/blog", icon: NewspaperIcon },
  { label: "Contact", url: "/contact", icon: ChatBubbleLeftRightIcon },
];

const sidebarNav1 = [
  { label: "Home", url: "/dashboard", icon: HomeIcon },
  {
    label: "Marketplace",
    url: "/dashboard/marketplace",
    icon: ShoppingCartIcon,
  },
  { label: "Farms", url: "/dashboard/farms", icon: MapPinIcon },
];

function SidebarMenu({ user }: { user: User | null }) {
  const pathname = usePathname();
  return (
    <Sidebar>
      <SidebarHeader>
        <Dropdown>
          <DropdownButton as={SidebarItem} className="lg:mb-2.5">
            <Image src={logo} className="size-8" alt="HarvestCalc Logo" />
            <SidebarLabel>Harvest Calc</SidebarLabel>
            <ChevronDownIcon />
          </DropdownButton>
          <DropdownMenu className="min-w-80 lg:min-w-64" anchor="bottom start">
            {logoDropdownNav.map((navItem) => (
              <DropdownItem key={navItem.label} href={navItem.url}>
                <navItem.icon />
                <DropdownLabel>{navItem.label}</DropdownLabel>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </SidebarHeader>
      <SidebarBody>
        <SidebarSection>
          {sidebarNav1.map((navItem) => (
            <SidebarItem
              key={navItem.label}
              href={navItem.url}
              current={
                navItem.url === pathname ||
                (navItem.url !== "/dashboard" &&
                  pathname.startsWith(navItem.url))
              }
            >
              <navItem.icon />
              <SidebarLabel>{navItem.label}</SidebarLabel>
            </SidebarItem>
          ))}
        </SidebarSection>
        <SidebarSpacer />
      </SidebarBody>
      <SidebarFooter className="max-lg:hidden">
        {user && user.first_name ? (
          <Dropdown>
            <DropdownButton as={SidebarItem}>
              <span className="flex min-w-0 items-center gap-3">
                <Avatar
                  initials={`${user.first_name[0]}${user.last_name[0]}`}
                  className="size-10"
                  square
                />
                <span className="min-w-0">
                  <span className="block truncate text-sm/5 font-medium text-zinc-950 dark:text-white">
                    {`${user.first_name} ${user.last_name}`}
                  </span>
                  <span className="block truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400">
                    {user.email}
                  </span>
                </span>
              </span>
              <ChevronUpIcon />
            </DropdownButton>
            <DropdownMenu className="min-w-64" anchor="top start">
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
          <NavbarItem href="/auth/signin">
            Log in <span aria-hidden="true">&rarr;</span>
          </NavbarItem>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}

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

export function AppLayout({
  user,
  children,
}: React.PropsWithChildren<{ user: User | null }>) {
  let [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="relative isolate flex min-h-svh w-full bg-white max-lg:flex-col lg:bg-zinc-100 dark:bg-zinc-900 dark:lg:bg-zinc-950">
      <div className="fixed inset-y-0 left-0 w-64 max-lg:hidden">
        <SidebarMenu user={user} />
      </div>
      <MobileSidebar open={showSidebar} close={() => setShowSidebar(false)}>
        <SidebarMenu user={user} />
      </MobileSidebar>
      <header className="flex items-center px-4 lg:hidden">
        <div className="py-2.5">
          <NavbarItem
            onClick={() => setShowSidebar(true)}
            aria-label="Open navigation"
          >
            <OpenMenuIcon />
          </NavbarItem>
        </div>
        <div className="min-w-0 flex-1">
          <Navbar>
            <NavbarSpacer />
            <NavbarSection>
              {user && user.first_name ? (
                <Dropdown>
                  <DropdownButton as={NavbarItem}>
                    <Avatar
                      initials={`${user.first_name[0]}${user.last_name[0]}`}
                      square
                    />
                  </DropdownButton>
                  <DropdownMenu className="min-w-64" anchor="bottom end">
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
                <NavbarItem href="/auth/signin">
                  Log in <span aria-hidden="true">&rarr;</span>
                </NavbarItem>
              )}
            </NavbarSection>
          </Navbar>
        </div>
      </header>
      <main className="flex flex-1 flex-col pb-2 lg:min-w-0 lg:pl-64 lg:pr-2 lg:pt-2">
        <div className="grow p-6 lg:rounded-lg lg:bg-white lg:p-10 lg:shadow-xs lg:ring-1 lg:ring-zinc-950/5 dark:lg:bg-zinc-900 dark:lg:ring-white/10">
          <div className="mx-auto max-w-6xl">{children}</div>
        </div>
      </main>
    </div>
  );
}
