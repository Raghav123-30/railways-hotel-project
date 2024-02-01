"use client";
import { Button } from "./ui/button";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import { routes } from "@/constants/routes";
import ToggleTheme from "./toggleTheme";
const Menu = () => {
  const [isMenuEnabled, setIsMenuEnabled] = useState(false);
  const toggleMenu = () => {
    setIsMenuEnabled((prev) => !prev);
  };
  const closeMenu = () => {
    setIsMenuEnabled(false);
  };
  return (
    <div className="relative">
      <Button variant={"ghost"} onClick={toggleMenu}>
        {isMenuEnabled ? (
          <Cross1Icon className="w-[1.5rem] h-[1.5rem]" />
        ) : (
          <HamburgerMenuIcon className="w-[1.5rem] h-[1.5rem]" />
        )}
      </Button>
      {isMenuEnabled && (
        <div className="absolute top-12 right-0 z-40">
          <Card className="p-8">
            <CardContent className="flex flex-col gap-2 justify-center items-start">
              <div className="self-center">
                <ToggleTheme />
              </div>
              <Link href={routes.EMPLOYEESPAGE} onClick={closeMenu}>
                Employees
              </Link>
              <Link href={routes.CUSTOMERSPAGE} onClick={closeMenu}>
                Customers
              </Link>
              <Link href={routes.ROOMSPAGE} onClick={closeMenu}>
                Rooms
              </Link>
              <Button>Logout</Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Menu;
