'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { Menu, LogIn } from 'lucide-react';
import { useState } from 'react';

const navbarItems = [
    { label: 'Home', href: '/' },
    { label: 'Find Donar', href: '/find-donar' },
    { label: 'Donate', href: '/donate' },
    { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="padding-x border-b py-4 bg-background z-50">
            <nav className="container flex items-center justify-between">
                <Link
                    href="/"
                    className="text-lg font-semibold flex items-center gap-2"
                >
                    <span className="text-2xl text-primary font-bold">YFG</span>
                    <span className="hidden sm:inline">
                        Youth Foundation Gaibandha
                    </span>
                </Link>

                <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
                    {navbarItems.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className="hover:text-primary transition-colors"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="hidden md:flex">
                    <Button asChild size="sm">
                        <Link
                            href="/sign-in"
                            className="flex items-center gap-2"
                        >
                            Sign In <LogIn size={18} />
                        </Link>
                    </Button>
                </div>

                <div className="md:hidden">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <SheetTitle className='p-2'>
                                {' '}
                                <Link
                                    href="/"
                                    className="text-lg font-semibold flex items-center gap-2"
                                >
                                    <span className="text-5xl text-primary font-bold">
                                        YFG
                                    </span>
                                    <span className="hidden md:inline">
                                        Youth Foundation Gaibandha
                                    </span>
                                </Link>
                            </SheetTitle>
                            <SheetHeader className="flex flex-col gap-4">
                                {navbarItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className="text-2xl font-medium hover:text-primary transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </SheetHeader>

                            <SheetFooter>
                                <Button asChild size="sm" className="mt-4">
                                    <Link
                                        href="/sign-in"
                                        className="flex items-center gap-2"
                                    >
                                        Sign In <LogIn size={18} />
                                    </Link>
                                </Button>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    );
}
