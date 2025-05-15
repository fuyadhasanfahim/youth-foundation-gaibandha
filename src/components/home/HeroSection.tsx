import Link from 'next/link';
import { Button } from '../ui/button';
import { HandHeart, Search } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="padding-x padding-y">
            <div className="container flex flex-col items-center text-center space-y-6">
                <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight leading-tight">
                    Youth Foundation Gaibandha
                </h1>
                <p className="max-w-2xl text-muted-foreground text-lg">
                    Saving lives, one drop at a time. Find blood donors or
                    become a donor and help your community.
                </p>
                <div className="flex gap-4 mt-6 flex-wrap justify-center">
                    <Button size="lg">
                        <Link
                            href="/find-donar"
                            className="flex items-center gap-2"
                        >
                            <Search className="w-5 h-5" /> Find Donor
                        </Link>
                    </Button>
                    <Button size="lg" variant="secondary">
                        <Link
                            href="/donate"
                            className="flex items-center gap-2"
                        >
                            <HandHeart className="w-5 h-5" /> Donate Blood
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
