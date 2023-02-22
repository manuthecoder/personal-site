import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import DiscordProvider from "next-auth/providers/discord";
import SpotifyProvider from "next-auth/providers/spotify";

export default NextAuth({
  theme: {
    colorScheme: "dark",
    logo: "/pfp.jpeg",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // email is the only thing we really want
      console.log(user.email);
      return true;
    },
  },
  providers: [
    GithubProvider({
      clientId: process.env.CLIENT_ID as any,
      clientSecret: process.env.CLIENT_SECRET as any,
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID as any,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as any,
    }),
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID as any,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET as any,
    }),
  ],
});
