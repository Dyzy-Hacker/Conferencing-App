// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// const protectedRoute = createRouteMatcher([
//   '/',
//   '/upcoming',
//   '/meeting(.*)',
//   '/previous',
//   '/recordings',
//   '/personal-room',
// ]);

// export default clerkMiddleware((auth, req) => {
//   if (protectedRoute(req)) auth().protect();
// });

// export const config = {
//   matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
// };


// import { authMiddleware } from "@clerk/nextjs";

// // const protectedRoute = createRouteMatcher([
// //   '/',
// //   '/upcoming',
// //   '/meeting(.*)',
// //   '/previous',
// //   '/recordings',
// //   '/personal-room',
// // ]);

// // export default clerkMiddleware((auth, req) => {
// //   if (protectedRoute(req)) auth().protect();
// // });

// export default authMiddleware();

// export const config = {
//   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
// };



import { authMiddleware } from "@clerk/nextjs";
// import createMiddleware from "next-intl/middleware";

// const intlMiddleware = createMiddleware({
//   locales: ["en", "zh"],
//   defaultLocale: "en",
// });

// export default authMiddleware({
//   beforeAuth: (req) => {
//     return intlMiddleware(req);
//   },

//   publicRoutes: ["/"],
// });

export default authMiddleware();

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
