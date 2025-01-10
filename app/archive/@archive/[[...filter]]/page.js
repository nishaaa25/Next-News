import NewsList from "@/components/news-list";
import { getAvailableNewsYears, getNewsForYear } from "@/lib/news";
import Link from "next/link";

export default async function ArchiveNewsFilter({ params }) {
  const { filter } = await params;
  const links = getAvailableNewsYears();
  const news = getNewsForYear(filter);
  
  return (
    <div className="w-full py-4 relative">
      <ul className="flex place-items-center gap-10">
        {links.map((year) => (
          <li key={year} className="font-semibold opacity-80">
            <Link href={`/archive/${links}`}>{links}</Link>
          </li>
        ))}
      </ul>
      <NewsList news={news} />
    </div>
  );
}
