// メニュー画面
import Link from "next/link";
import Image from "next/image";
import { client } from "../../../libs/client";
import { Asset } from "next/font/google";
import { create } from 'zustand';


// 受け取るリストの型宣言
type MenuItems = {
  id: string
  name: string
  category: string
  price: string
  low_price: number
}
type MenuList = {
  contents: MenuItems[]
}

// フォントの設定
const AssetFont = Asset({
  weight: "400",
  subsets: ["latin"],
});

// Stateの型定義
interface SelectState {
  isOpen: boolean;
}
// Actionsの型定義
interface SelectActions {
  openFood: () => void;
  closeFood: () => void;
}
// storeの作成
const UseSelectStore =  create<SelectState & SelectActions>((set) => ({
  isOpen: true,                         // 初期値はtrue
  openFood: () => set({isOpen: true}),  // foodのメニューを開く
  closeFood: () => set({isOpen: false}),// drinkのメニューを開く
}));

export default async function Menu() {
  // const { isOpen, openFood } = UseSelectStore();

  // データを取得
  const menu = await client.get<MenuList>({
    endpoint: 'menu',
  })

  return (
    <div className="font-serif text-center border-1 border-[#E6A800] mx-10 my-5 p-20">
      <div className={AssetFont.className}>
        <p className="text-[#E6A800] text-5xl">Menu</p>
      </div>

      <div className="relative h-1 w-full my-2">
        <Image
          src="/images/line.png"
          alt="line"
          fill
          className="object-contain"
        />
      </div>

      {/* ドリンク */}
      <div className="flex">
        <div className="w-1/2">
          <div className="h-fit w-fit relative flex px-20 py-3 mb-5 mt-20 mx-auto">
            <Image
              src="/images/left_selected_line.png"
              alt="select_line"
              fill
            />
            <p className="text-white text-4xl z-10">drink</p>
          </div>
          <div className="flex justify-center">
            <ul className="space-y-3 flex flex-col items-start">
              {menu.contents.map((item) => {
                if (item.category === "ドリンク") {
                  return (
                    <li key={item.id} className="text-white w-fit">
                      <p>◽️ {item.name} ¥ {item.price}</p>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
        <div className="w-1/2 items-center content-center mt-20">
          <div className="relative h-80 w-full my-2">
          <Image
            src="/images/goMenu.jpg"
            alt="line"
            fill
            className="object-contain"
          />
        </div>
      </div>
      </div>

        {/* フード */}
      <div className="flex">
          <div className="w-1/2 items-center content-center mt-20">
            <div className="relative h-80 w-full my-2">
              <Image
                src="/images/omuraice.jpg"
                alt="line"
                fill
                className="object-contain"
              />
            </div>
        </div>
        <div className="w-1/2">
            <div className="h-fit w-fit relative flex px-20 py-3 mb-5 mt-20 mx-auto">
              <Image
                src="/images/left_selected_line.png"
                alt="select_line"
                fill
              />
              <p className="text-white text-4xl z-10">food</p>
            </div>
            <div className="flex justify-center">
              <ul className="space-y-3 flex flex-col items-start">
                {menu.contents.map((item) => {
                  if (item.category === "フード") {
                    return (
                      <li key={item.id} className="text-white w-fit">
                        <p>◽️ {item.name} ¥ {item.price}</p>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
          </div>
      </div>
    </div>
);}