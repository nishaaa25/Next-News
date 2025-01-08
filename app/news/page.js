import { DUMMY_NEWS } from "@/dummy";
import Image from "next/image";
import Link from "next/link";

export default function NewsPage() {
  return (
    <div className="w-screen min-h-screen relative">
      <div className="w-9/12 mx-auto py-20">
        <p className="text-3xl font-semibold mb-6">News Page</p>
        <ul className="relative w-full grid grid-cols-4 place-items-center gap-6">
          {DUMMY_NEWS.map((newsItem) => (
            <Link key={newsItem.id} href={`/news/${newsItem.slug}`} className="w-full relative">
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
      </div>
    </div>
  );
}
