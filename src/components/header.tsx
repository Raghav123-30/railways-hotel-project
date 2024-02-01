"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { routes } from "@/constants/routes";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";
import Menu from "./menu";
import ToggleTheme from "./toggleTheme";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const [isPublicPath, setIsPublicPath] = useState(false);
  const rightLinks = [
    routes.EMPLOYEESPAGE,
    routes.CUSTOMERSPAGE,
    routes.ROOMSPAGE,
  ];
  const path = usePathname();

  useEffect(() => {
    if (path === routes.LOGINPAGE) {
      setIsPublicPath(true);
    } else {
      setIsPublicPath(false);
    }
    setMounted(true);
  }, [path]);
  if (!mounted || isPublicPath) {
    console.log(isPublicPath);
    return null;
  }
  return (
    <nav className="header">
      <div>
        <Link
          href={routes.HOME}
          className={`text-rose-500 italic font-bold text-lg  uppercase pb-2 ${"border-b-2 border-rose-500 "}`}
        >
          Dashboard
        </Link>
      </div>
      <div className="hidden items-center gap-5 md:flex">
        {rightLinks.map((route) => (
          <Link
            href={route}
            key={route}
            className={` ${
              route === path ? "text-rose-400 font-semibold" : ""
            }`}
          >
            {route.split("/").pop()}
          </Link>
        ))}

        <Button>Logout</Button>
        <ToggleTheme />
      </div>
      <div className="flex items-center md:hidden">
        <Menu />
      </div>
    </nav>
  );
};

export default Header;
