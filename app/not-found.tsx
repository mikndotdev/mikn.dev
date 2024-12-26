export const runtime = "edge";

import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <div className="h-screen flex flex-col items-center justify-center">
                <h1 className={"text-4xl text-center text-white"}>
                    404 - Page Not Found
                </h1>
                <Link href={"/"}>
                    <button className={"btn btn-primary text-white mt-5"}>
                        Take me back
                    </button>
                </Link>
            </div>
        </>
    );
}
