"use client"
import useSWR from 'swr'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from "./comment.module.css"
import { useSession } from 'next-auth/react'

const fetcher = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) {
        const error = new Error(data.message)
    }

    return data;

};



const Comments = () => {
   

    const { data,mutate ,isLoading } = useSWR(`http://localhost:3000/api/comments?postSlug=${postSlug}`, fetcher);

    const { status } = useSession()

    const [desc, setDesc] = useState("");

    const handleSubmit = async()=>{
        await fetch("/api/comments",{
            body:JSON.stringify({desc,postSlug})
        })
    mutate();
    };



    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {status === "authenticated" ? (
                <div className={styles.write}>
                    <textarea placeholder='write a comment ...' className={styles.input} onChange={e => setDesc(e.target.value)} />
                    <button className={styles.btn} onClick={handleSubmit}>
                        Send </button>
                </div>
            ) : (<Link href="/login">Login to comment </Link>)}
            <div className={styles.comments}>
                {isLoading ? "loading" : data?.map(item => (

                    <div className={styles.comment} key={item._id}>
                        <div className={styles.user}>
                            {item?.user?.image && <Image src={item.user.image} alt=""
                                width={50}
                                height={50}
                                className={styles.image} />}
                            <div className={styles.userinfo}>
                                <span className={styles.username}> {item.user.name} </span>
                                <span className={styles.userdate}> {item.createdAT} </span>
                            </div>
                        </div>
                        <p className={styles.desc}>
                            {item.desc}
                        </p>
                    </div>))}
            </div>
        </div>
    )
}

export default Comments