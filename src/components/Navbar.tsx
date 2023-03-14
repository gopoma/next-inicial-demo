import { FC } from "react";

import { ActiveLink } from "./ActiveLink";

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

export const Navbar: FC = () => {
    return (
        <nav className="flex bg-slate-200">
            { 
                menuItems.map(({ href, text }) => (
                    <ActiveLink key={ href } href={ href } text={ text } />
                )) 
            }
        </nav>
    );
};
