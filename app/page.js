// import Image from "next/image";

import MainHeader from "@/components/main-header";

export default function Home() {
  return (
    <div className="w-screen h-screen  relative">
      <MainHeader/>
      <div className="w-full flex flex-col py-40 justify-center items-center">
        <p className="text-[64px]">Welcome to NEXT NEWS!</p>
        <p className="text-xl">Hey let&apos;s stay updated together.</p>
      </div>
    </div>
  );
}
