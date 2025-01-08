import Link from "next/link";

export default function NewsPage() {
    return <div>
        <p>News Page</p>
        <Link href="/news/sport">Sports News</Link>
        <Link href="/news/national">National News</Link>
    </div>
};
