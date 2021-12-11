import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <>
            <Head>
                <title>Ninja List | Home</title>
                <meta name="keywords" content="ninjas" />
            </Head>
            <div>
                <h1 className={Styles.title}>Welcome to My First Next App</h1>
                <p className={Styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ipsum, eius. Eaque soluta officia animi neque cumque cum
                    fugit temporibus amet ipsam distinctio facilis maxime aut,
                    impedit eveniet qui ratione quo ducimus quaerat debitis non
                    perferendis quisquam praesentium itaque commodi. Ex corrupti
                    libero adipisci nihil. Suscipit quisquam praesentium
                    exercitationem corporis ex!
                </p>
                <p className={Styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ipsum, eius. Eaque soluta officia animi neque cumque cum
                    fugit temporibus amet ipsam distinctio facilis maxime aut,
                    impedit eveniet qui ratione quo ducimus quaerat debitis non
                    perferendis quisquam praesentium itaque commodi. Ex corrupti
                    libero adipisci nihil. Suscipit quisquam praesentium
                    exercitationem corporis ex!
                </p>
                <Link href="/ninjas">
                    <a className={Styles.btn}>See Ninjas Listing</a>
                </Link>
            </div>
        </>
    );
}
