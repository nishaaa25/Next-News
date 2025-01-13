"use client";
import NewsList from "@/components/news-list";
// import { getAllNews } from "@/lib/news";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NewsPage() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getNews() {
      const response = await fetch("http://localhost:8080/news");
      const news = await response?.json();
      setNews(news);

      if (!response.ok) {
        setError("Failed to fetch news");
      }
    }

    getNews();
  }, []);

  let newsContent;

  if (!news) {
    newsContent = <p>{error}</p>;
    console.log(error);
  }

  if (news) {
    newsContent = <NewsList news={news} />;
  }

  return (
    <div className="w-screen min-h-screen relative">
      <div className="w-9/12 mx-auto py-20">
        <p className="text-3xl font-semibold mb-6">News Page</p>
        {newsContent}
      </div>
    </div>
  );
}
