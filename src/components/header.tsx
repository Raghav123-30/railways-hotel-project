"use client";
import { MdSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";
import { useTheme } from "next-themes";
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
          className="text-rose-500 italic font-bold text-lg border-b-2 border-rose-500  uppercase pb-2"
        >
          Dashboard
        </Link>
      </div>
      <div className="hidden items-center gap-5 md:flex">
        <Link href={routes.EMPLOYEESPAGE}>Employees</Link>
        <Link href={routes.CUSTOMERSPAGE}>Customers</Link>
        <Link href={routes.ROOMSPAGE}>Rooms</Link>
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
