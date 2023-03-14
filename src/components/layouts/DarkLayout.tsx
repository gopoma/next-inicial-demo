import { FC } from "react";

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const DarkLayout: FC<Props> = ({ children }) => {
    return (
        <div className="bg-slate-200 p-12 border border-black">
            { children }
        </div>
    );
};
