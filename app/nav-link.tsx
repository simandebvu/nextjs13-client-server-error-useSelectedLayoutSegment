'use-client';

import {useSelectedLayoutSegment} from "next/navigation"

import Link from "next/link"
import React from "react";

export const NavLink = ({href, children}: {href: string, children: React.ReactNode}) => {
    let segment = useSelectedLayoutSegment();
    // console.log({href, segment})
    return (
        <Link href = {href} >{children}</Link>
    );
}

export default NavLink;