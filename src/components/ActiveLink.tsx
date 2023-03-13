import { CSSProperties, FC } from "react";

import { useRouter } from "next/router";
import Link from "next/link";

const styles: CSSProperties = {
    backgroundColor: "#333",
    color: "#FFF",
};

interface Props {
    href: string;
    text: string;
}

export const ActiveLink: FC<Props> = ({ href, text }) => {
    const { asPath } = useRouter();

    return (
        <Link style={ asPath === href ? styles : undefined } href={ href }>{ text }</Link>
    );
};
