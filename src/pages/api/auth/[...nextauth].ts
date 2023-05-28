import NextAuth from "next-auth"
import Authentik from "next-auth/providers/authentik"
import Github from "next-auth/providers/github"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    Authentik({
      clientId: process.env.AUTHENTIK_CLIENT_ID!,
      clientSecret: process.env.AUTHENTIK_CLIENT_SECRET!,
      issuer: process.env.AUTHENTIK_ISSUER!,
      name: 'Invictus',
      client: {
        authorization_signed_response_alg: 'HS256',
        id_token_signed_response_alg: 'HS256'
      }
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    })
  ],
}

export default NextAuth(authOptions)