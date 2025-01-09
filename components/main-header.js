import Image from "next/image";
import Link from "next/link";

export default function MainHeader() {
  return (
    <div className="w-9/12 relative flex justify-between items-center mx-auto py-5">
      <div className="text-[40px] font-bold">
        <Link href="/">NextNews</Link>
      </div>
      <ul className="flex place-items-center gap-10">
        <li className="px-4">
          <Link href="/news">News</Link>
        </li>
        <li className="px-4">
          <Link href="/archive">Archive</Link>
        </li>
      </ul>
    </div>
  );
}
