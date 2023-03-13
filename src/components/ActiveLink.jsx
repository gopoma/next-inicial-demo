import { useRouter } from "next/router";
import Link from "next/link";

const styles = {
    backgroundColor: "#333",
    color: "#FFF",
};

export const ActiveLink = ({ href, text }) => {
    const { asPath } = useRouter();

    return (
        <Link style={ asPath === href ? styles : null } href={ href }>{ text }</Link>
    );
};
