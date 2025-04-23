// import NextAuth from "next-auth"
// import CredentialsProvider from "next-auth/providers/credentials"

// const handler = NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: 'Credentials',
//       credentials: {
//         username: { label: "Username", type: "text" },
//         password: { label: "Password", type: "password" }
//       },
//       async authorize(credentials) {
//         const user = await getUserFromDB(credentials.username, credentials.password)
//         if (user) return user
//         return null
//       }
//     })
//   ],
//   session: {
//     strategy: "jwt",
//   },
//   pages: {
//     signIn: '/login', // custom login page
//   },
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) token.user = user
//       return token
//     },
//     async session({ session, token }) {
//       session.user = token.user
//       return session
//     }
//   }
// })

// export { handler as GET, handler as POST }
