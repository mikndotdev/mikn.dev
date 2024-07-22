"use client";
export const runtime = 'edge';

import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@neodyland/ui";

const AuthComponent = () => {
    const { data: session, status } = useSession();
    const loading = status === "loading";

    if (loading) {
        return <p>Loading...</p>;
    }

    if (session) {
        return (
            <div>
                <p>Signed in as {session.user?.email}</p>
                <Button onClick={() => signOut()}>Sign out</Button>
            </div>
        );
    }

    return (
        <div>
            <p>Not signed in</p>
            <Button onClick={() => signIn()}>Sign in</Button>
        </div>
    );
};

export default AuthComponent;
