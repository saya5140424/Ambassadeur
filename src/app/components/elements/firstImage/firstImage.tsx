"use client";

import Image from "next/image";
import { useInView } from 'react-intersection-observer';
import "./FirstImage.css";
import "../../../styles/fadeIn.css";
import { Damion, Zen_Kurenaido } from "next/font/google";

const Damion_Font = Damion({
  weight: "400",
  subsets: ["latin"],
});
const Zen_Kurenaido_Font = Zen_Kurenaido({
  weight: "400",
  subsets: ["latin"],
});

const FirstImage = () => {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '-600px', // ref要素が現れてから50px過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });
  
  return (
    <div className="parallax-bg h-[160vh] relative text-white text-center">
    <div className="h-[160vh] w-full bg-gradient-to-b from-[#1a1a1a]/30 via-[#1a1a1a]/60 to-[#1a1a1a] relative z-0">
      
      {/* 背景のフェード */}
      <div className="bg-animation bg-[#1a1a1a] absolute h-full w-full top-0 left-0 z-[-1]"></div>

      {/* 上半分 */}
      <div className="h-1/2 flex flex-col justify-center items-center">
        {/* Welcome tonight */}
        <div className="logo-mask">
          <div className="logo-wipe animate-delay-0">
            <p className={`${Damion_Font.className} text-5xl`}>Welcome tonight...</p>
          </div>
        </div>
        {/* ロゴ */}
        <div className="logo-mask mt-4">
          <div className="logo-wipe animate-delay-500">
            <div className="relative h-60 w-[100vh]"> {/* サイズ調整 */}
              <Image
                src="/images/amba_logo2.png"
                alt="logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
        {/* アンバサダー */}
        <div className="logo-mask mt-5">
          <div className="logo-wipe animate-delay-1000">
            <p className="font-serif text-2xl">アンバサダー</p>
          </div>
        </div>
      </div>

      {/* 下半分 */}
      <div ref={ref} className="h-1/2 flex items-center justify-center">
        {inView && (
          <div className="fade-in-up">
            <h1 className="font-serif text-4xl md:text-5xl mb-4">今日も、自分に戻る場所へ。</h1>
            <p className="text-lg md:text-xl text-gray-300">
              住道駅から10分。深呼吸するように寄り道できる場所。
            </p>
          </div>
        )}
      </div>
    </div>
  </div>
  );
};

export default FirstImage;