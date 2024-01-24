import Image from 'next/image'
import styles from './cardList.module.css'
import Pagination from '../pagination/Pagination'
import Card from '../card/Card'

const CardList = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>Recent Posts</div>
            <div className={styles.posts}>
                <div className={styles.post}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <Pagination />
        </div>
    )
}

export default CardList