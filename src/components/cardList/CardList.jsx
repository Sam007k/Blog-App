import Image from "next/image";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";
import { cookies } from "next/headers";

const getData = async (page) => {
  const cookieStore = cookies();
  const url = process.env.URL;
  const res = await fetch(`{url}/api/posts?page=${page}`, {
    method: "GET",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CardList = async ({ page }) => {
  const data = await getData(page);
  
  // const hasPrev = page < data.length  
  // const hasNext = 

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {data.map((item) => {
          return <Card item={item} key={item._id} />;
        })}
      </div>
      <Pagination page={page} />
    </div>
  );
};

export default CardList;
