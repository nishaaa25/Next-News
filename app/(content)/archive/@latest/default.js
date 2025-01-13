import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";

export default async function LatestNews() {
  const news = await getLatestNews();
  return (
    <div className="w-full relative py-4">
      <h2 className="font-semibold text-2xl pb-4">Latest News</h2>
      <NewsList news={news}/>
    </div>
  );
}
