import Link from 'next/link'
import styles from './menuPosts.module.css'
import Image from 'next/image'



const MenuPosts = ({ withImage }) => {
    return (
        <div className={styles.items}>
            <Link href='/' className={styles.item} >
                {withImage && (<div className={styles.imgContainer}>
                    <Image alt='' src='/p1.jpeg' className={styles.image} fill />
                </div>)}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.travel}`}>
                        Travel
                    </span>
                    <h3 className={styles.postTitle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
                    <div className={styles.detail}>
                        <div className={styles.username}>John Doe</div>
                        <div className={styles.date}>10.03.2023</div>
                    </div>
                </div>
            </Link>
            <Link href='/' className={styles.item} >
                {withImage && (<div className={styles.imgContainer}>
                    <Image alt='' src='/p1.jpeg' className={styles.image} fill />
                </div>)}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.culture}`}>
                        Culture
                    </span>
                    <h3 className={styles.postTitle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
                    <div className={styles.detail}>
                        <div className={styles.username}>John Doe</div>
                        <div className={styles.date}>10.03.2023</div>
                    </div>
                </div>
            </Link>
            <Link href='/' className={styles.item} >
                {withImage && (<div className={styles.imgContainer}>
                    <Image alt='' src='/p1.jpeg' className={styles.image} fill />
                </div>)}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.food}`}>
                        Food
                    </span>
                    <h3 className={styles.postTitle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
                    <div className={styles.detail}>
                        <div className={styles.username}>John Doe</div>
                        <div className={styles.date}>10.03.2023</div>
                    </div>
                </div>
            </Link>
            <Link href='/' className={styles.item} >
                {withImage && (<div className={styles.imgContainer}>
                    <Image alt='' src='/p1.jpeg' className={styles.image} fill />
                </div>)}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.fashion}`}>
                        Fashion
                    </span>
                    <h3 className={styles.postTitle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
                    <div className={styles.detail}>
                        <div className={styles.username}>John Doe</div>
                        <div className={styles.date}>10.03.2023</div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default MenuPosts