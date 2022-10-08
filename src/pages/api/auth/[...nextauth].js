import NextAuth from 'next-auth';
//import Providers from 'next-auth/providers';
import AppleProvider from 'next-auth/providers/apple';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET,
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
};
export default NextAuth(authOptions);

// import NextAuth from "next-auth"
// import AppleProvider from "next-auth/providers/apple"
// import GoogleProvider from "next-auth/providers/google"
// import EmailProvider from "next-auth/providers/email"

// export default NextAuth({
//   secret: process.env.SECRET,
//   providers: [
//     // OAuth authentication providers
//     AppleProvider({
//       clientId: process.env.APPLE_ID,
//       clientSecret: process.env.APPLE_SECRET,
//     }),
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_SECRET,
//     }),
//     // Sign in with passwordless email link
//     EmailProvider({
//       server: process.env.MAIL_SERVER,
//       from: "<no-reply@example.com>",
//     }),
//   ],
// })
