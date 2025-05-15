import FeaturesSection from '@/components/home/FeaturesSection';
import HeroSection from '@/components/home/HeroSection';
import CallToAction from '@/components/shared/CallToAction';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Home | YFG',
};

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <FeaturesSection />
            <CallToAction />
        </>
    );
}
