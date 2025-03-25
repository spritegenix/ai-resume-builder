// import { logoDark, logoWhite } from "@/assets";
import { cn } from "@/lib/utils";
// import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo({
  // mode = "dark",
  className,
}: {
  // mode?: "light" | "dark";
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={cn("flex cursor-pointer items-center gap-2", className)}
    >
      {/* <Image
        src={mode === "light" ? logoWhite : logoDark}
        alt="logo"
        height={300}
        width={500}
        className="max-h-14 w-min object-contain"
      /> */}
      <p className="cursor-pointer text-lg text-white font-medium md:text-3xl">
        RECUAI
      </p>
    </Link>
  );
}
