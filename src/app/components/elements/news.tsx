import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { client } from "../../../../libs/client";

//プラグインを使えるように登録
dayjs.extend(utc);
dayjs.extend(timezone);

type Datas = {
  id: string;
  title: string;
  content: string;
  publishedAt: string;
};

type DataList = {
  contents: Datas[];
};

export default async function News() {
  const news = await client.get<DataList>({
    endpoint: "news",
  });

  return (
    <div className="h-52 w-[80%] border-[#F1F1F1] border-1 mx-auto mt-10">
      <div>
        <p className="text-[#F1F1F1] text-4xl mt-[-25px] p-1 w-fit bg-[#1A1A1A] mx-auto">News</p>
      </div>
      <ul className="h-40 w-full overflow-y-scroll my-auto text-[#F1F1F1]">
        {news.contents.map((item) => {
          //公開日時のフォーマットを変更
          const formattedTime = dayjs(item.publishedAt).tz().format("YYYY/MM/DD");
          return (
            <li key={item.id} className="p-2">
              <p>{item.title}</p>
              <p className="text-xs text-gray-400">{formattedTime}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
