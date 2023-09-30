import Link from "next/link";

export default function Button({ children, href, className }) {
    return (
        <Link href={href}>
            <button
                className={
                    className +
                    " text-white text-center hover:bg-c-light-green transition-all bg-c-dark-green rounded-lg"
                }
            >
                {children}
            </button>
        </Link>
    );
}
