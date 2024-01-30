"use client";

import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";
// import useSWR from "swr";
// import { useSession } from "next-auth/react";
import { useState } from "react";


const Comments = ({ postSlug }) => {
    const status = 'authenticated'
//   const { status } = useSession();

  const [desc, setDesc] = useState("");

const handleSubmit = ( )=>{

}

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comment..."
            className={styles.input}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button className={styles.button} onClick={handleSubmit}>
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        {
        // isLoading
        //   ? "loading"
        //   : 
        //   data?.map((item) => (
              <div className={styles.comment} 
            //   key={item._id}
              >
                <div className={styles.user}>
                  {/* {item?.user?.image && ( */}
                    <Image
                      src={'/p1.jpeg'
                        // item.user.image
                    }
                      alt=""
                      width={50}
                      height={50}
                      className={styles.image}
                    />
                  {/* )} */}
                  <div className={styles.userInfo}>
                    <span className={styles.username}>Lorem, ipsum dolor.
                        {/* {item.user.name} */}
                        </span>
                    <span className={styles.date}>Lorem, ipsum dolor.
                        {/* {item.createdAt} */}
                        </span>
                  </div>
                </div>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur sint ea dolor, beatae quia et debitis nisi. Modi, at quaerat.
                    {/* {item.desc} */}
                    </p>
              </div>
            // ))
        }

      </div>
    </div>
  );
};


export default Comments