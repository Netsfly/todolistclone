<<<<<<< HEAD
'use client'
import { useSession, signIn, signOut } from "next-auth/react"

export default function SignIn() {
  const { data: session } = useSession()
=======
"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function SignIn() {
  const { data: session } = useSession();
>>>>>>> 5ff5fdb (signin)
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
<<<<<<< HEAD
    )
=======
    );
>>>>>>> 5ff5fdb (signin)
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
<<<<<<< HEAD
  )
}
=======
  );
}
>>>>>>> 5ff5fdb (signin)
