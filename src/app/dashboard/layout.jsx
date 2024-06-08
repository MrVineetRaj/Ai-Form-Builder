"use client";

import { SignedIn } from "@clerk/nextjs";
import React from "react";
import SideNav from "./_components/SideNav";

const DashboardLayout = ({ children }) => {
  return (
    <SignedIn>
      <div className="md:w-64 md:fixed"><SideNav/></div>
      <div className="md:ml-64">{children}</div>
    </SignedIn>
  );
};

export default DashboardLayout;
