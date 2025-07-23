"use client";

import "../../../styles/fadeIn.css";
import { useInView } from 'react-intersection-observer';
import { Libre_Baskerville } from "next/font/google";

const Libre_Font = Libre_Baskerville({
  weight: "400",
  subsets: ["latin"],
});

const GoAccess = () => {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '-600px', // ref要素が現れてから50px過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });

  return (
    <div className="flex justify-between">
      <div className="w-1/2 flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.8243672201525!2d135.61535867589444!3d34.709609582734466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60011ff2eed50cc5%3A0x5d36dedeed9878d7!2z44OQ44O8IOOCouODs-ODkOOCteODgOODvA!5e0!3m2!1sja!2sjp!4v1753146320771!5m2!1sja!2sjp"
          width="600"
          height="450"
          style={{ border: 0 }}  // ← ここ！オブジェクト形式に修正
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div ref={ref} className={`w-1/2 content-center text-center`}>
       {inView && (
          <div className="fade-in-up">
            <p className={`${Libre_Font.className} text-[#E6A800] text-5xl mb-10`}>Access</p>
            <div className="text-white w-fit mx-auto text-start space-y-5">
              <p>○JR住道駅から徒歩8分</p>
              <p>〒574-0046<br />大阪府大東市赤井2-1-6</p>
            </div>
          </div>
       )}
      </div>
    </div>
  );
};

export default GoAccess;
