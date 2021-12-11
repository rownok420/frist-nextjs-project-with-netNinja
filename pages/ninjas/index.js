import Head from "next/head";
import Link from "next/link";
import Styles from '../../styles/Ninjas.module.css'

export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await res.json();

    if (!data) {
        return {
            notFound: true,
        };
    }

    return {
        props: { ninjas: data },
    };
};

const Ninjas = ({ ninjas }) => {
    return (
        <>
            <Head>
                <title>Ninja List | Ninja List</title>
                <meta name="keywords" content="ninjas" />
            </Head>

            <div>
                <h1>All Ninjas</h1>
            </div>
            <div>
                {ninjas.map((ninja) => (
                    <Link href="/ninjas" key={ninja.id}>
                        <a className={Styles.single}>
                            <h3>{ninja.name}</h3>
                        </a>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default Ninjas;
