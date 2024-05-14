import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Link from "next/link";
import {MainNav} from "@/payload-types";

const Header: React.FC = async() => {
    const payload = await getPayload({config: configPromise})
    const mainNav: MainNav = await payload.findGlobal({
        slug: 'main-nav'
    })

    return (
        <header className="flex justify-center">
            {mainNav && (
                <nav className="max-w-5xl py-5 w-full">
                    <ul className="flex gap-5">
                        {mainNav.mainNavItems && mainNav.mainNavItems.map(item => (
                            <li key={item.id}>
                                <Link href={item.url}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    )
}

export default Header;