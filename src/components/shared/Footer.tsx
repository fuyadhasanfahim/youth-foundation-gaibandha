import Link from 'next/link';
import { Facebook, Mail, MapPin } from 'lucide-react';

const footerLinks = [
    { label: 'Home', href: '/' },
    { label: 'Find Donor', href: '/find-donar' },
    { label: 'Donate', href: '/donate' },
    { label: 'Contact', href: '/contact' },
];

export default function Footer() {
    return (
        <footer className="padding-x padding-y border-t">
            <div className="container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
                <div>
                    <Link href="/" className="text-2xl font-bold text-primary">
                        YFG
                    </Link>
                    <p className="mt-2 text-sm text-muted-foreground max-w-xs">
                        Youth Foundation Gaibandha — empowering lives through
                        blood donation and community care.
                    </p>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        {footerLinks.map((item) => (
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
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-3">Contact</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-primary" />{' '}
                            yfg.gaibandha@gmail.com
                        </li>
                        <li className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-primary" />{' '}
                            Gaibandha, Bangladesh
                        </li>
                        <li className="flex items-center gap-2">
                            <Facebook className="h-4 w-4 text-primary" />{' '}
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                className="hover:underline"
                            >
                                /yfg.bd
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t mt-6 md:mt-10 py-4 text-center text-xs text-muted-foreground">
                &copy; {new Date().getFullYear()} Youth Foundation Gaibandha.
                All rights reserved.
            </div>
        </footer>
    );
}
