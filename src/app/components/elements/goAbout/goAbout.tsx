"use client";

import "./GoAbout.css";
import "../../../styles/fadeIn.css";
import { useInView } from 'react-intersection-observer';
import { Libre_Baskerville } from "next/font/google";

const Libre_Font = Libre_Baskerville({
  weight: "400",
  subsets: ["latin"],
});

const GoAbout = () => {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '-600px', // ref要素が現れてから50px過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });

  return(
    <div className="flex justify-between">
      <div ref={ref} className={`w-[50%] content-center text-center`}>
        {inView && (
          <div className="fade-in-up">
            <p className={`${Libre_Font.className} text-[#E6A800] text-5xl mb-5`}>About</p>
          <div className="text-white w-fit mx-auto text-start">
            <p className="text-2xl">TEL：072-871-1307</p>
            <p className="mt-5">営業時間<br />20:00～</p>
            <p className="mt-5">営業日：月曜日～土曜日</p>
            <p className="mt-5">支払方法：現金, クレジット(VISA※差込のみ)</p>
          </div>
          </div>
        )}
      </div>
      <div className="about-bg relative h-[80vh] w-[45%] bg-gray-200">
      </div>
    </div>
  );
}

export default GoAbout