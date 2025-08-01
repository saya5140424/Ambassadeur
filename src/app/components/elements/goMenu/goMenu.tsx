"use client";

import "./GoMenu.css";
import "../../../styles/fadeIn.css";
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { Libre_Baskerville } from "next/font/google";

const Libre_Font = Libre_Baskerville({
  weight: "400",
  subsets: ["latin"],
});

const GoMenu = () => {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '-600px', // ref要素が現れてから50px過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });
  
  return(
    <div className="flex justify-between">
      <div ref={ref} className={`${Libre_Font.className} w-[50%] content-center text-center`}>
        {inView && (
          <div className="fade-in-up">
            <p className="text-[#E6A800] text-5xl mb-3">Menu</p>
            <Link href="/menu">
            <button className="text-amber-50 border-1 p-1 cursor-pointer">
              Read more
            </button>
            </Link>
          </div>
        )}
      </div>
      <div className="menu-bg relative h-[80vh] w-[45%]">
        {/* <Image
          src="/images/goMenu.jpg"
          alt="line"
          fill
          className="object-cover"
          style={{ objectPosition: 'center 75%' }}
        /> */}
      </div>
    </div>
  );
}

export default GoMenu