import Link from "next/link";

const NotFound = () => {
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
