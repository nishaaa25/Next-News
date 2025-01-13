import NewsList from "@/components/news-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";

export default async function ArchiveNewsFilter({ params }) {
  const { filter } = await params;
  let links = await getAvailableNewsYears();
  let news;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  if (selectedYear && !selectedMonth) {
    news = await getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }

  let newsContent = <p>No News for the selected period.</p>;

  if (selectedMonth && selectedYear) {
    news = await getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  const availableYears = await getAvailableNewsYears();

  if (
    (selectedYear && !availableYears.includes(selectedYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selectedYear).includes(selectedMonth))
  ) {
    throw new Error("Invalid Filter");
  }
  return (
    <div className="w-full py-4 relative">
      <ul className="flex place-items-center gap-10 pb-4">
        {links.map((link) => {
          const href = selectedYear
            ? `/archive/${selectedYear}/${link}`
            : `/archive/${link}`;
          return (
            <li key={link} className="font-semibold opacity-80">
              <Link href={href}>{link}</Link>
            </li>
          );
        })}
      </ul>
      {newsContent}
    </div>
  );
}
