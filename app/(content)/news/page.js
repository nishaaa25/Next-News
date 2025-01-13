// "use client";
import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";
// import { getAllNews } from "@/lib/news";
// import { useEffect, useState } from "react";

export default async function NewsPage() {
  // FETCHING DATA DIRECTLY FROM DATABASE WITHOUT USING SEPERATE BACKEND
  // this is the best way to fetch data in nextjs application if you own the database..using await coz have added delay in response of fetching data. you can use loading.js(a reserved file to add loading response) to add a loading screen till the data is fetching to give a better user experience. 
  const news = await getAllNews();

  // USING FETCH IN SERVER COMPONENTS TO FETCH DATA FROM SEPERATE BACKEND
  // you can directly fetch data in nextjs like this as nextjs offers server components that runs on server only. In nextjs, you can still use fetch method it is allowed by nodejs and nextjs extends this fetch function and add some extra caching related fucntions to it.

  //  you can use next server components for fetching data by turning it into an async function. and you can use fetch method inside it without using useeffect hooks.
  // const response = await fetch ("http://localhost:8080/news");
  // const news = response.json();

  // let newsContent;

  // this code is not required anymore in this function coz this will always wait till the await resolves as this is an async function. 
  // if (news) {
  //   newsContent = <NewsList news={news} />;
  // }

  // USING CLIENT COMPONENTS TO FETCH DATA FROM SEPERATE BACKEND
  // you can fetch data in nextjs like this but this is not a good way to fetch data in nextjs. it turns out our react server component into client component which is not good.
  // const [news, setNews] = useState([]);
  // const [error, setError] = useState("");

  // useEffect(() => {
  //   async function getNews() {
  //     const response = await fetch("http://localhost:8080/news");
  //     const news = await response?.json();
  //     setNews(news);

  //     if (!response.ok) {
  //       setError("Failed to fetch news");
  //     }
  //   }

  //   getNews();
  // }, []);

  // let newsContent;

  // if (!news) {
  //   newsContent = <p>{error}</p>;
  //   console.log(error);
  // }

  // if (news) {
  //   newsContent = <NewsList news={news} />;
  // }

  return (
    <div className="w-screen min-h-screen relative">
      <div className="w-9/12 mx-auto py-20">
        <p className="text-3xl font-semibold mb-6">News Page</p>
        {/* {newsContent} */}
        <NewsList news={news}/>
      </div>
    </div>
  );
}
