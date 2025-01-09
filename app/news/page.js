import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";
import Image from "next/image";
import Link from "next/link";

export default function NewsPage() {
    const news = getAllNews();
  return (
    <div className="w-screen min-h-screen relative">
      <div className="w-9/12 mx-auto py-20">
        <p className="text-3xl font-semibold mb-6">News Page</p>
        <NewsList news={news}/>
      </div>
    </div>
  );
}
