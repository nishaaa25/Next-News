import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen min-h-screen relative">
      <div className="w-9/12 mx-auto text-center py-44">
        <p className="text-[64px]">Welcome to NEXT NEWS!</p>
        <p className="text-xl">Hey let&apos;s stay updated together.</p>
        <button className="mt-5 px-4 py-2 font-semibold bg-white text-black rounded-xl">
        <Link href="/news">Explore News</Link>
        </button>
      </div>
    </div>
  );
}
