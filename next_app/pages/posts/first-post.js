import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import nextjs from '../../public/images/nextjs.png';
export default function FirstPost() {
    return (
        <>
            <Head>
                <title>NextJS First Post</title>
            </Head>
            <Script>

            </Script>
            <h1>First blog post</h1>
            {/* <Image src={nextjs}></Image> */}
            {/* <Image src='/images/nextjs.png' width={300} height={300}></Image> */}
            <Image src='/images/nextjs.png' layout='fill'></Image>
        </>
    )
}