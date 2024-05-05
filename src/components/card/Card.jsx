import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({ item, key }) => {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imgContainer}>
        <Image src={"/p1.jpeg"} fill className={styles.image} alt="" />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.23 ~ </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1>{item.title}</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
          beatae repellat, illo mollitia, nihil dicta harum laborum est odio,
          suscipit cupiditate neque molestias minus veritatis perspiciatis natus
          obcaecati error accusamus....
        </p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
