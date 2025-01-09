import NewsList from "@/components/news-list";
import { getNewsForYear } from "@/lib/news";

export default async function ArchiveNewsFilter({ params }) {
  const {year} = await params;
  const news = getNewsForYear(year);
  return (
    <div className="w-full py-4 relative">
      <NewsList news={news} />
    </div>
  );
}
