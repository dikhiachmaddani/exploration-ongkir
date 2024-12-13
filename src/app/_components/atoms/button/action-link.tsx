import React from 'react';
import Link from 'next/link';

type ButtonProps = {
    color: "primary" | "secondary";
    href: string;
    children: React.ReactNode;
};

export default function ActionLink(props: ButtonProps) {
    const { href, children } = props;
    return (
        <Link href={href}>
            {children}
        </Link>
    )
};