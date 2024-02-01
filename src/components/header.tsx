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
const Header = () => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };
  const [mounted, setMounted] = useState(false);
  const [isPublicPath, setIsPublicPath] = useState(false);
  const path = usePathname();
  const isLightTheme = theme === "light";
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
          className="font-bold text-lg border-b-2 border-slate-900 dark:border-white uppercase pb-2"
        >
          Dashboard
        </Link>
      </div>
      <div className="hidden items-center gap-5 md:flex">
        <Link href={routes.EMPLOYEESPAGE}>Employees</Link>
        <Link href={routes.CUSTOMERSPAGE}>Customers</Link>
        <Link href={routes.ROOMSPAGE}>Rooms</Link>
        <Button variant="outline">Logout</Button>
        <button onClick={toggleTheme}>
          {isLightTheme ? (
            <MdSunny size={24}></MdSunny>
          ) : (
            <IoMdMoon size={24}></IoMdMoon>
          )}
        </button>
      </div>
      <div className="flex items-center md:hidden">
        <Menu />
      </div>
    </nav>
  );
};

export default Header;
