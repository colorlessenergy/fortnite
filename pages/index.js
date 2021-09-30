import Head from 'next/head';

import Nav from '../shared/components/Nav';

export default function Home () {
    return (
        <div>
            <Head>
                <title>fortnite</title>
                <meta name="description" content="fortnite" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <Nav />
            </div>
        </div>
    );
}
