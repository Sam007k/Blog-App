import Link from 'next/link'
import styles from './menu.module.css'
import Image from 'next/image'

const Menu = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.subtitle}>{'What\'s hot'}</h2>
            <h1 className={styles.title}>Most Popular</h1>
            <div className={styles.items}>
                <Link href='/' className={styles.item} >
                    <div className={styles.imgContainer}>
                        <Image src='/p1.jpeg' className={styles.image} fill />
                    </div>
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
                    <div className={styles.imgContainer}>
                        <Image src='/p1.jpeg' className={styles.image} fill />
                    </div>
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
                    <div className={styles.imgContainer}>
                        <Image src='/p1.jpeg' className={styles.image} fill />
                    </div>
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
                    <div className={styles.imgContainer}>
                        <Image src='/p1.jpeg' className={styles.image} fill />
                    </div>
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


            <h2 className={styles.subtitle}>{'Chosen by the Editor'}</h2>
            <h1 className={styles.title}>Most Popular</h1>
            <div className={styles.items}>
                <Link href='/' className={styles.item} >
                    <div className={styles.imgContainer}>
                        <Image src='/p1.jpeg' className={styles.image} fill />
                    </div>
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
                    <div className={styles.imgContainer}>
                        <Image src='/p1.jpeg' className={styles.image} fill />
                    </div>
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
                    <div className={styles.imgContainer}>
                        <Image src='/p1.jpeg' className={styles.image} fill />
                    </div>
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
                    <div className={styles.imgContainer}>
                        <Image src='/p1.jpeg' className={styles.image} fill />
                    </div>
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
        </div>
    )
}

export default Menu