"use client";
export const runtime = 'edge';
import { Button } from "@neodyland/ui";

type Props = {
    onSignIn: () => Promise<void>;
};

const SignIn = ({ onSignIn }: Props) => {
    return (
        <Button
            onClick={() => {
                onSignIn();
            }}
        >
            Sign In
        </Button>
    );
};

export default SignIn;
