import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
    const router = useRouter();
    
    useEffect(() => {
        setTimeout( () => {
            router.push("/")
        }, 2000)
    }, [router])

    return (
        <div className="not-found">
            <h4>Oopps!!!</h4>
            <h1>That page cannot be found. </h1>
            <p>
                Go Back to the{" "}
                <Link href="/">
                    <a>Homepage</a>
                </Link>
            </p>
        </div>
    );
};

export default NotFound;
