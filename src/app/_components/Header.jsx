"use client";

import { Button } from "@/components/ui/button";
import { createForms } from "@/crudUtils/fireStoreCrud";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const { user, isSignedIn } = useUser();
  const path = usePathname();

  if (!path.includes("/live-preview")) {
    return (
      <div className="flex justify-between px-5 py-3 border-b-2">
        <div>
          <Image src="/logo.svg" alt="logo" width={180} height={100} />
        </div>
        {isSignedIn ? (
          <div className="flex gap-5 items-center">
            <Link href="/dashboard">
              <Button variant="outline">Dashboard</Button>
            </Link>
            <UserButton />
          </div>
        ) : (
          <Button>
            <SignInButton>Get Started</SignInButton>
          </Button>
        )}
      </div>
    );
  }
};

export default Header;
