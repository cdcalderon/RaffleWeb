import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { ManualHeader } from '../components/ManualHeader'

const supportedChains = ['31337', '5']

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>De Lottery</title>
                <meta name="description" content="Smart Contract Lottery" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ManualHeader />
        </div>
    )
}
