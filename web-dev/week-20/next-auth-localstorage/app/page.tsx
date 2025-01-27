import { getServerSession } from "next-auth";
// import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

export default async function Home() {
  const session = await getServerSession();

  return (
    <div>
      {JSON.stringify(session)}
    </div>
  );
}

