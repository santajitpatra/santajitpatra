import { useSession, signIn, signOut } from "next-auth/react";

export default function Authenticate() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        {/* {session.user.email} <br /> */}
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
