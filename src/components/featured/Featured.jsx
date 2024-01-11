import Image from 'next/image'
import styles from './featured.module.css'  


const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Hey, Sameer here!</b> Discover my stories and creative ideas
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src={'/p1.jpeg'} alt='' fill
                     
                    className={styles.image} />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt 
                    </h1>
                    <p className={styles.postDesc}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus culpa explicabo saepe ab! Laboriosam tenetur harum distinctio voluptates repudiandae unde! Repudiandae nihil non officiis voluptate laboriosam laudantium nesciunt aliquid ex?
                    </p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
            
        </div>
    )
}

export default Featured