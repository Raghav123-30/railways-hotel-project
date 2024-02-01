import { NextRequest, NextResponse } from "next/server";
import { routes } from "./constants/routes";

export default function Middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get("token") || "";
  const isPublicPath = path === routes.LOGINPAGE;

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL(routes.HOME, request.nextUrl));
  }
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL(routes.LOGINPAGE, request.nextUrl));
  }
}

export const config = {
  matcher: [
    "/login",
    "/customers",
    "/edit-customer",
    "/employees",
    "/edit-employee",
    "/rooms",
    "/edit-room",
    "/checkout",
  ],
};
