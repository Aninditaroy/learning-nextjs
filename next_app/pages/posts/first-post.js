import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import nextjs from '../../public/images/nextjs.png';
import styles from '../../styles/sass/style.module.scss';
export default function FirstPost() {
    return (
        <>
            <Head>
                <title>NextJS First Post</title>
            </Head>
            <Script>

            </Script>
            <h1 className={styles.title}>First blog post</h1>
            {/* <h1 className='title'>First blog post</h1>
            <style jsx>
                {
                    `
                    .title {
                        font-size: 129px;
                        color: #654ff2;
                    }
                    `
                }
            </style> */}
            <Image src={nextjs}></Image>
            {/* <Image src='/images/nextjs.png' width={300} height={300}></Image> */}
            {/* <Image src='/images/nextjs.png' layout='fill'></Image> */}
        </>
    )
}