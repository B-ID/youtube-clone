import React, { useState } from "react";
import DarkModeSwitch from "./DarkModeSwitch";
import { AiOutlineMenuUnfold, AiOutlineSearch } from "react-icons/ai";
import { FaMicrophone, FaYoutube } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { MdOutlineVideoCall } from "react-icons/md";
import { IoMdNotificationsOutline, IoLogoYoutube } from "react-icons/io";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/youtube-logo2.svg";

type Props = {};

export default function Header({}: Props) {
  const [search, setSearch] = useState("");

  return (
    <div className=" bg-yt-dark">
      <Container className="flex items-center justify-between gap-6 p-2">
        {/* Header Left - Menu button */}
        <div className="flex items-center gap-2">
          <AiOutlineMenuUnfold className="flex-shrink-0 w-6 h-6 text-white cursor-pointer desktop:hidden " />
          {/* Logo */}
            <div className="flex-shrink-0">
          <Link className="" href={'/'}>

          <Image className="w-24 h-9" src={logo} alt="logo" />
          </Link>
            </div>
        </div>

        {/* Header Middle - search microphone*/}
        <div className="flex items-center flex-1 max-w-[700px] gap-2">
          {/* Search */}
          <div className="flex items-center rounded-full tablet:flex-1 bg-yt-dark2">
            <input
              className="flex-1 p-2 pl-4 text-white border rounded-l-full outline-none 1 border-yt-dark2 bg-yt-dark"
              placeholder="Search"
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="p-2">
              <AiOutlineSearch className="w-6 h-6 text-white " />
            </div>
          </div>

          {/* icon */}
          <div className="hidden p-2 rounded-full tablet:flex bg-yt-dark2">
            <FaMicrophone className="w-5 h-5 text-white cursor-pointer hover:text-blue-500" />
          </div>
        </div>

        {/* Header Right - icons & Avatar */}
        <div className="items-center hidden gap-3 text-white tablet:flex">
          <MdOutlineVideoCall className="w-8 h-8 p-1 rounded-full cursor-pointer hover:bg-yt-dark2" />
          <IoMdNotificationsOutline className="w-8 h-8 p-1 rounded-full cursor-pointer hover:bg-yt-dark2" />
          <RxAvatar className="w-8 h-8 p-1 rounded-full cursor-pointer hover:bg-yt-dark2" />
        </div>
      </Container>
    </div>
  );
}
