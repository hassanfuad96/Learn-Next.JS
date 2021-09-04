import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/layout'


export default function FirstPost() {
    return (
        <Layout>
        
<Head>
    <title>Create Next App</title>
    <link rel="icon" href="/favicon.ico"></link>
</Head>

        <img src="/images/logo.png" height={400} width={400} alt="Logo Company" />
        <h1>
            First Post
        </h1>
        <h2>
            <Link href="/">
               <a> Back to home </a>
            </Link>
        </h2>
        </Layout>
    )
}
