"use client";

import Image from "next/image";
import Link from 'next/link';
import "./GoGame.css";
import "../../../styles/fadeIn.css";
import { useInView } from 'react-intersection-observer';
import { Libre_Baskerville } from "next/font/google";

const Libre_Font = Libre_Baskerville({
  weight: "400",
  subsets: ["latin"],
});

const GoGame = () => {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '-600px', // ref要素が現れてから50px過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });

  return(
    <div className="flex justify-between">
      <div className="game-bg relative h-[80vh] w-[50%]">
      </div>
      <div ref={ref} className={`${Libre_Font.className} w-[45%] content-center text-center`}>
        {inView && (
          <div className="fade-in-up">
            <p className="text-[#E6A800] text-5xl mb-3">Game</p>
          <button className="text-amber-50 border-1 p-1 cursor-pointer">
            Read more
          </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default GoGame