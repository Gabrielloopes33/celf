import { Disclosure } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Signdialog from "./Signdialog";
import Registerdialog from "./Registerdialog";


interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Product', href: '#product', current: true },
    { name: 'Pricing', href: '#pricing', current: false },
    { name: 'Features', href: '#features', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Disclosure as="nav" className="relative bg-gradient-to-br from-[#ffff] via-[#fff] to-[#fff] animate-gradient-slow overflow-hidden">
            <div className='absolute inset-0 bg-grid-pattern opacity-[0.03] bg-grid-size'></div>
            <div className="mx-auto max-w-7xl px-6 md:py-4 lg:px-8 relative">
                <div className="relative flex h-20 items-center justify-between">
                    <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">

                        {/* LOGO */}

                        <div className="flex flex-shrink-0 items-center">
                            <Link href="/">
                                <img
                                    className="block h-12 w-40 lg:hidden"
                                    src={'/assets/logo/logo.svg'}
                                    alt="paidin-logo"
                                />
                                <img
                                    className="hidden h-full w-full lg:block"
                                    src={'/assets/logo/logo.svg'}
                                    alt="paidin-logo"
                                />
                            </Link>
                        </div>

                        {/* LINKS */}

                        
                    </div>

                    {/* SIGNIN DIALOG */}

                    <Signdialog />


                    {/* REGISTER DIALOG */}
                    
                    <Registerdialog />


                    {/* DRAWER FOR MOBILE VIEW */}

                    {/* DRAWER ICON */}

                    <div className='block lg:hidden'>
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
                    </div>

                    {/* DRAWER LINKS DATA */}

                    <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                        <Drawerdata />
                    </Drawer>

                </div>
            </div>
        </Disclosure>
    )
}

export default Navbar;
