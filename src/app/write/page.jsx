'use client'
import Image from 'next/image'
import styles from './write.module.css'
import { useState } from 'react'
import "react-quill/dist/quill.bubble.css";
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const WritePage = () => {
    const [value, setValue] = useState('')
    const [open, setOpen] = useState(false)
    const [content, setContent] = useState('');



    return (
        <div className={styles.container}>
            <input type='text' placeholder='Title' className={styles.input} />
            <div className={styles.editor}>
                <button className={styles.button} onClick={() => setOpen(!open)}>
                    <Image src='/plus.png' alt='' width={16} height={16} />
                </button>
                {open && (
                    <div className={styles.add}>
                        <button className={styles.addButton}>
                            <Image src='/image.png' alt='' width={16} height={16} />
                        </button>
                        <button className={styles.addButton}>
                            <Image src='/external.png' alt='' width={16} height={16} />
                        </button>
                        <button className={styles.addButton}>
                            <Image src='/video.png' alt='' width={16} height={16} />
                        </button>
                    </div>
                )}
                <ReactQuill className={styles.textArea} theme='bubble' value={value} onChange={setValue} placeholder='Tell your Story...' />
            </div>
            <button className={styles.publish} o
            // nClick={handleSubmit}
            >
                Publish
            </button>

        </div>
    )
}


export default WritePage