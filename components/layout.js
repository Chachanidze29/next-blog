import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Avtandil Chachanidze'

export default function Layout({ title, children }) {
    const isHome = title.toLowerCase() === 'home';
    return (
    <>
        <Head>
            <title>Blog-{title}</title>
            <link rel="icon" href="/favicon.ico" />
            <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
            />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <div className={styles.container}>
        
        <header className={styles.header}>
            {isHome ? (
            <>
                <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt={name}
                />
                <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
            ) : (
            <>
                <Link href="/">
                <a>
                    <Image
                    priority
                    src="/images/profile.jpg"
                    className={utilStyles.borderCircle}
                    height={108}
                    width={108}
                    alt={name}
                    />
                </a>
                </Link>
                <h2 className={utilStyles.headingLg}>
                <Link href="/">
                    <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
                </h2>
            </>
            )}
        </header>
        <main>{children}</main>
        {!isHome && (
            <div className={styles.backToHome}>
            <Link href="/">
                <a>← Back to home</a>
            </Link>
            </div>
        )}
        </div>
    </>
    )
}
