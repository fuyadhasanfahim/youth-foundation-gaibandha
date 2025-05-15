import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CallToAction() {
    return (
        <section className="bg-primary text-white padding-x padding-y">
            <div className="container mx-auto text-center space-y-6 px-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                    Ready to Make a Difference?
                </h2>
                <p className="max-w-2xl mx-auto text-lg text-white/90">
                    Whether you need blood or want to donate, join us in saving
                    lives today.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Button
                        variant="outline"
                        size="lg"
                        className="text-primary"
                    >
                        <Link href="/find-donar">Find a Donor</Link>
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        className="text-primary"
                    >
                        <Link href="/donate">Become a Donor</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
