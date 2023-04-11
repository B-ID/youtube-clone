import React from "react";
import { sideNavData } from "@/data/navData";
import { ISideNavProps } from "@/interfaces/interface";
import SideNavLink from "./SideNavLink";
import { iconData } from "@/data/iconData";
import { IconType } from "react-icons";
import { BsFillCircleFill } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/youtube-logo2.svg";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function SideNavigation({}: Props) {
  const { top, mid, subscriptions, explore } = sideNavData;

  return (
    <nav className="h-screen text-sm overflow-y-scroll space-y-2 tablet:max-w-[50px] desktop:max-w-[250px] divide-y-[1px] divide-gray-500 bg-yt-dark">
      {/* Nav Logo */}
      <div className="flex items-center p-2 tablet:text-center">
        <Link href={'/feeds'}>
        </Link>
        <AiOutlineMenu className="flex-shrink-0 w-6 h-6 text-white cursor-pointer" />
        <Link href={"/"}>
          <Image className="hidden tablet:inline h-9" src={logo} alt="logo" />
        </Link>
      </div>

      {/* Nav Items */}
      <div className="">
        {top.map((item: any) => (
          <SideNavLink id={item.id} title={item.title} Icon={item.Icon} />
        ))}
      </div>
      <div className="hidden desktop:block">
        {mid.map((item: any) => (
          <SideNavLink id={item.id} title={item.title} Icon={item.Icon} />
        ))}
      </div>
      {/* Subscriptions */}
      <div className="hidden desktop:block">
        <h2 className="pl-2 my-2 text-base font-medium text-white">
          Subscriptions
        </h2>
        {subscriptions.map((item: any) => (
          <div className="flex items-center justify-between hover:bg-yt-dark2">
            <SideNavLink id={item.id} title={item.title} Icon={item.Icon} />
            <BsFillCircleFill className="h-2 mr-4 text-blue-500" />
          </div>
        ))}
      </div>
      {/* Explore */}
      <div className="hidden desktop:block">
        <h2 className="pl-2 my-2 text-base font-medium text-white">Explore</h2>
        {explore.map((item: any) => (
          <SideNavLink id={item.id} title={item.title} Icon={item.Icon} />
        ))}
      </div>
    </nav>
  );
}
