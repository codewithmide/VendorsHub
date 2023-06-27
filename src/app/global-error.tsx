'use client';

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {

    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <html>
        <body className="h-screen w-screen bg-primary center flex-col">
            <h2>Something went wrong!</h2>
            <div className="center gap-6">
                <button onClick={() => reset()}>Try again</button>
                <Link href="/">
                    <button>Back Home</button>
                </Link>
            </div>
        </body>
        </html>
    )
}