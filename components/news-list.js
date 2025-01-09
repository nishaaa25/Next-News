import Image from "next/image";
import Link from "next/link";

export default function NewsList(params) {
    const news = params.news;
  return (
    <ul className="relative w-full grid grid-cols-4 place-items-center gap-6">
      {news.map((newsItem) => (
        <Link
          key={newsItem.id}
          href={`/news/${newsItem.slug}`}
          className="w-full relative"
        >
          <div className="w-full h-[240px] relative">
            <Image
              src={`/images/news/${newsItem.image}`}
              alt={newsItem.title}
              fill
            />
          </div>
          <h1 className="text-lg py-2">{newsItem.title}</h1>
        </Link>
      ))}
    </ul>
  );
}
