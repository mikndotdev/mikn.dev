"use client";
import { Button } from "@neodyland/ui";

type Props = {
    onSignOut: () => Promise<void>;
};

const SignOut = ({ onSignOut }: Props) => {
    return (
        <Button
            onClick={() => {
                onSignOut();
            }}
        >
            Sign Out
        </Button>
    );
};

export default SignOut;
