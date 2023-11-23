import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const path: String = request.nextUrl.pathname;
  const publicPaths: String[] = ["/login", "/signup", "/verifyemail"];
  const isPublicPath = publicPaths.includes(path);

  const token = request.cookies.get("token")?.value || "";
  

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

// See "Matching Paths" below to learn more
export const config = {
//   matcher: ["/:path*"],
  matcher: ["/", "/profile", "/login", "/signup", "/verifyemail"],
};
