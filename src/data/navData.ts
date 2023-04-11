import { AiFillHome } from "react-icons/ai";
import shorts from "../assets/yt-shorts.png";
import {
  MdKeyboardArrowDown,
  MdOndemandVideo,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
} from "react-icons/md";
import { GrHistory } from "react-icons/gr";
import { BiTimer } from "react-icons/bi";
import { RiScissorsFill } from "react-icons/ri";
import { GrFastForward } from "react-icons/gr";
import { PlayIcon, ClockIcon } from "@heroicons/react/24/outline";
import { BsFillCircleFill } from "react-icons/bs";
import { SlFire } from "react-icons/sl";
import { CgMusicNote } from "react-icons/cg";
import { SiYoutubegaming} from "react-icons/si";
import { BsNewspaper, BsTrophy } from "react-icons/bs";

export const sideNavData = {
  top: [
    {
      id: 1,
      Icon: AiFillHome,
      title: "Home",
    },
    {
      id: 2,
      Icon: PlayIcon,
      title: "Shorts",
    },
    {
      id: 3,
      Icon: MdOutlineSubscriptions,
      title: "subscriptions",
    },
  ],

  mid: [
    {
      id: 4,
      Icon: MdOutlineVideoLibrary,
      title: "Library",
    },
    {
      id: 5,
      Icon: ClockIcon,
      title: "History",
    },
    {
      id: 5,
      Icon: MdOndemandVideo,
      title: "Your Videos",
    },
    {
      id: 6,
      Icon: BiTimer,
      title: "Watch Later",
    },
    {
      id: 7,
      Icon: RiScissorsFill,
      title: "Your Clips",
    },
    {
      id: 8,
      Icon: MdKeyboardArrowDown,
      title: "Show more",
    },
  ],

  subscriptions: [
    {
      id: 1,
      Icon: BsFillCircleFill,
      title: "Bloomberg Originals",
    },
    {
      id: 2,
      Icon: BsFillCircleFill,
      title: "Nerd's lesson",
    },
    {
      id: 3,
      Icon: BsFillCircleFill,
      title: "Citizens of Light Church",
    },
    {
      id: 4,
      Icon: BsFillCircleFill,
      title: "Jeffrey Benson",
    },
    {
      id: 5,
      Icon: BsFillCircleFill,
      title: "Marques Brownlee",
    },
    {
      id: 6,
      Icon: BsFillCircleFill,
      title: "Tayo Aina",
    },
    {
      id: 7,
      Icon: BsFillCircleFill,
      title: "Koinonia Global",
    },
    {
      id: 8,
      Icon: BsFillCircleFill,
      title: "Shevon Salmon",
    },
    {
      id: 9,
      Icon: BsFillCircleFill,
      title: "Unbox Therapy ",
    },
  ],
  explore: [
    {
        id: 1,
        Icon: SlFire,
        title: 'Trending',
    },
    {
        id: 2,
        Icon: CgMusicNote,
        title: 'Music',
    },
    {
        id: 3,
        Icon: SiYoutubegaming,
        title: 'Gaming',
    },
    {
        id: 4,
        Icon: BsNewspaper,
        title: 'News',
    },
    {
        id: 5,
        Icon: BsTrophy,
        title: 'Sport',
    },
  ]
};

export const topNavData = [
  {
    id: 1,
    title: "All",
  },
  {
    id: 2,
    title: "Podcasts",
  },
  {
    id: 3,
    title: "Reaect routers",
  },
  {
    id: 4,
    title: "Israel Adesanya",
  },
  {
    id: 5,
    title: "Web development",
  },
  {
    id: 6,
    title: "Music",
  },
  {
    id: 7,
    title: "Mixes",
  },
  {
    id: 8,
    title: "Chat GPT",
  },
  {
    id: 9,
    title: "Python",
  },
  {
    id: 10,
    title: "Premier League",
  },
  {
    id: 11,
    title: "Real Estate",
  },
  {
    id: 12,
    title: "Databases",
  },
];

export const subscriptions = [];
