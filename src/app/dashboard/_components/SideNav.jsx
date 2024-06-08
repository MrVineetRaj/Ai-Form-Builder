import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

import {
  LibraryBig,
  LineChart,
  MessageSquare,
  Settings2,
  Shield,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const SideNav = () => {
  const menuList = [
    {
      id: 1,
      name: "My Forms",
      icon: LibraryBig,
      path: "/dashboard",
    },

    {
      id: 2,
      name: "Responses",
      icon: MessageSquare,
      path: "/dashboard/responses",
    },
    {
      id: 3,
      name: "Analytics",
      icon: LineChart,
      path: "/dashboard/analytics",
    },
    {
      id: 4,
      name: "Settings",
      icon: Settings2,
      path: "/dashboard/settings",
    },
    {
      id: 5,
      name: "Upgrade",
      icon: Shield,
      path: "/dashboard/settings",
    },
  ];

  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, [path]);
  return (
    <div className="h-screen shadow-md border-r-2 ">
      <div className="p-4">
        {menuList.map((item, index) => (
          <Link
            href={item.path}
            key={index}
            className={`p-4 
              ${path == item.path ? "bg-primary text-white" : "text-gray-500"}
              hover:bg-primary 
            hover:text-white cursor-pointer flex gap-3 rounded-sm transition-all`}
          >
            <item.icon className="w-6 h-6" />
            <span className="ml-4">{item.name}</span>
          </Link>
        ))}
      </div>
      <div className="fixed bottom-10 p-6 w-64">
        <Button className="w-full">+ Create Form</Button>
        <div className="mt-7">
          <Progress value={33} />
          <h2 className="text-sm mt-2 text-gray-500">
            <strong>2</strong> out of <strong>3</strong> is created
          </h2>
          <h2 className="text-sm mt-3 text-gray-500">
            Upgrade to create more forms
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
