import { getAllNews } from "@/lib/news";
import Image from "next/image";

export default async function InterceptedNewsSlugImage({ params }) {
  const { newsSlug } = await params;
  const newsList = getAllNews();
  const news = newsList.find((newsItem) => newsItem.slug === newsSlug);

  if(!news){
    notFound();
  }

  return (
    <div className="w-[60vw] mx-auto h-screen relative">
      <p>Intercepted image</p>
      <Image src={`/images/news/${news.image}`} alt={news.title} fill />
    </div>
  );
}
