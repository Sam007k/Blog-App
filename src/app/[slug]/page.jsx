import Navbar from "@/components/navbar/Navbar"
import styles from './singlePage.module.css'
import Image from "next/image"

const SinglePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur tempora ad, sit nesciunt natus accusantium! Eligendi soluta corrupti beatae! Animi molestias est et labore dicta eum dolorem vel sed sapiente.
                    </h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image src='/p1.jpeg' alt='' fill className={styles.image}/>
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>01.01.2024</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePage