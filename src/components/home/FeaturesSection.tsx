import { HandHeart, HeartPulse, Search } from 'lucide-react';

export default function FeaturesSection() {
    return (
        <section className="bg-accent padding-x padding-y">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center">
                    <div className="space-y-2 text-center">
                        <HeartPulse className="mx-auto h-10 w-10 text-primary" />
                        <h3 className="text-xl font-semibold">
                            Life-Saving Platform
                        </h3>
                        <p className="text-muted-foreground text-sm">
                            Instantly connect with blood donors near you when
                            emergencies strike.
                        </p>
                    </div>
                    <div className="space-y-2 text-center">
                        <Search className="mx-auto h-10 w-10 text-primary" />
                        <h3 className="text-xl font-semibold">
                            Easy Donor Search
                        </h3>
                        <p className="text-muted-foreground text-sm">
                            Search by blood group and location to find the right
                            donor quickly.
                        </p>
                    </div>
                    <div className="space-y-2 text-center">
                        <HandHeart className="mx-auto h-10 w-10 text-primary" />
                        <h3 className="text-xl font-semibold">Be a Hero</h3>
                        <p className="text-muted-foreground text-sm">
                            Register to donate blood and make a difference in
                            someone’s life today.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
