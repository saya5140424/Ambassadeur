'use client';
import Image from "next/image";
import Link from "next/link";
import { client } from "../../../../libs/client"; // microCMSからデータ受け取る
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ImageSwiper = () => {
  return(
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}                 // スライド間の余白
      slidesPerView={3}                 // 3枚表示
      pagination={{ clickable: true }}  // ページネーションに対してクリックできるようにする
      autoplay={{                       
        delay: 3000,                    // 3秒待機
        disableOnInteraction: false,    // ユーザーの操作に反応しない設定を無効
      }}
    >
      <SwiperSlide><div className="h-40 w-40 bg-gray-500 mx-auto"></div></SwiperSlide>
      <SwiperSlide><div className="h-40 w-40 bg-gray-500 mx-auto"></div></SwiperSlide>
      <SwiperSlide><div className="h-40 w-40 bg-gray-500 mx-auto"></div></SwiperSlide>
      <SwiperSlide><div className="h-40 w-40 bg-gray-500 mx-auto"></div></SwiperSlide>
    </Swiper>
  );
}

export default ImageSwiper;
