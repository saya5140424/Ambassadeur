"use client";

import Image from "next/image";
import "../../styles/fadeIn.css";
import { useInView } from 'react-intersection-observer';
import { Libre_Baskerville } from "next/font/google";

const Libre_Font = Libre_Baskerville({
  weight: "400",
  subsets: ["latin"],
});

const AboutMe = () => {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '-600px', // ref要素が現れてから50px過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });

  return (
    <div ref={ref} className="flex h-[70vh]">
      {inView && (
        <div></div>
      )}
      <div className="absolute h-[60%] w-full">
        <div className="relative h-full w-[60%] bg-white/20 ml-auto mr-32 -mt-5 z-0 content-center">
          <div className="w-[60%] ml-auto mr-[20%] text-white font-serif">
            <p>
              <a className="text-2xl">住道駅から徒歩10分。<br /></a>
              この場所で、30年近く営業しているダーツバーです。<br />
              <br />
              ダーツ好きな人はもちろん、<br />
              お酒が好きな人も、ちょっと話したい人も、<br />
              ただ静かに座りたい夜の人も、<a className="text-2xl">みんなウェルカム。<br /></a>
              <br />
              昔からの常連さんも、初めての人も、<br />
              ここでは同じテーブルで、ゆるく時間を過ごしてます。<br />
              <br />
              自分に戻れる場所として、今日も<a className="text-2xl">ちょっとだけ寄り道</a>、いかがですか？
            </p>
          </div>
        </div>
      </div>

      {/* 画像 */}
      <div className="relative h-full w-[50%]">
        <Image 
          src="/images/store.png"
          alt="store"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* テキスト */}
      <div className={`${Libre_Font.className} w-[50%] text-center z-1`}>
        <p className="text-white text-8xl -mt-20"><a className="text-[#E6A800] text-9xl">P</a>rologue</p>
      </div>
    </div>
  );
}

export default AboutMe;
