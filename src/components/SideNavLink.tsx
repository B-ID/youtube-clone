import { ISideNavProps } from "@/interfaces/interface";
import Link from "next/link";
import React from "react";

export default function SideNavLink({ id, Icon, title }: ISideNavProps) {
  return (
    <Link className="" href={""} passHref>
      <div className="flex items-center gap-4 p-2 hover:bg-yt-dark2">
        <Icon className="w-5 h-5 text-white" />
        <p className="hidden text-white tablet:inline">{title}</p>
      </div>
    </Link>
  );
}
