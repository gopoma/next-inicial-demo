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
        <Link 
            className={ 
                `${asPath === href ? "bg-slate-600 text-white" : "bg-slate-400"}
                border border-black px-4 py-2 text-xl font-bold hover:bg-slate-800 hover:text-white transition-colors`
            }
            href={ href }
        >{ text }</Link>
    );
};
