import Link from 'next/link'
import styles from './categoryList.module.css'
import Image from 'next/image'

const CategoryList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Popular Categories</h1>
            <div className={styles.categories}>
                <Link href='/blog?cat=style' className={`${styles.category} ${styles.style}`}>
                    <Image src='/style.png' alt='' width={32} height={32} className={styles.img} />
                    style
                </Link>
                <Link href='/blog?cat=style' className={`${styles.category} ${styles.fashion}`}>
                    <Image src='/fashion.png' alt='' width={32} height={32} className={styles.img} />
                    fashion
                </Link>
                <Link href='/blog?cat=style' className={`${styles.category} ${styles.food}`}>
                    <Image src='/food.png' alt='' width={32} height={32} className={styles.img} />
                    food
                </Link>
                <Link href='/blog?cat=style' className={`${styles.category} ${styles.travel}`}>
                    <Image src='/travel.png' alt='' width={32} height={32} className={styles.img} />
                    travel
                </Link>
                <Link href='/blog?cat=style' className={`${styles.category} ${styles.culture}`}>
                    <Image src='/culture.png' alt='' width={32} height={32} className={styles.img} />
                    culture
                </Link>
                <Link href='/blog?cat=style' className={`${styles.category} ${styles.coding}`}>
                    <Image src='/coding.png' alt='' width={32} height={32} className={styles.img} />
                    coding
                </Link>
            </div>
            CategoryList
        </div>
    )
}

export default CategoryList