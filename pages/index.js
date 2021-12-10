import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <h1>Welcome to My First Next App</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum,
                eius. Eaque soluta officia animi neque cumque cum fugit
                temporibus amet ipsam distinctio facilis maxime aut, impedit
                eveniet qui ratione quo ducimus quaerat debitis non perferendis
                quisquam praesentium itaque commodi. Ex corrupti libero adipisci
                nihil. Suscipit quisquam praesentium exercitationem corporis ex!
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum,
                eius. Eaque soluta officia animi neque cumque cum fugit
                temporibus amet ipsam distinctio facilis maxime aut, impedit
                eveniet qui ratione quo ducimus quaerat debitis non perferendis
                quisquam praesentium itaque commodi. Ex corrupti libero adipisci
                nihil. Suscipit quisquam praesentium exercitationem corporis ex!
            </p>
            <Link href="/ninjas">
                <a>See Ninjas Listing</a>
            </Link>
        </div>
    );
}
