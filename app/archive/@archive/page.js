import { getAvailableNewsYears } from "@/lib/news";
import Link from "next/link";

export default function ArchiveNews() {
  const newsYears = getAvailableNewsYears();
  return (
    <div className="w-full relative py-4">
      <ul className="flex place-items-center gap-10">
        {newsYears.map((year) => (
          <li key={year} className="font-semibold opacity-80">
            <Link href={`/archive/${year}`}>{year}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
