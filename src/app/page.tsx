// ホーム画面
// 'use client';
import Image from "next/image";
import Link from "next/link";
import { client } from "../../libs/client"; // microCMSからデータ受け取る
// コンポーネント
import FirstImage from "./components/elements/firstImage/firstImage";
import ImageSwiper from "./components/elements/imageSwiper";
import News from "./components/elements/news";
import GoMenu from "./components/elements/goMenu/goMenu";
import GoGame from "./components/elements/goGame/goGame";
import GoAbout from "./components/elements/goAbout/goAbout";
import GoAccess from "./components/elements/goAccess/goAccess";
import AboutMe from "./components/elements/aboutMe";

export default function Home() {
  return (
    <div className="space-y-48 mb-60">
      <FirstImage />
      {/* <ImageSwiper /> */}
      <div className="h-10 w-full"></div>
      <AboutMe />
      {/* <div className="h-10 w-full"></div> */}
      <News />
      <GoMenu />
      <GoGame />
      <GoAbout />
      <GoAccess />
  </div>
  );
}