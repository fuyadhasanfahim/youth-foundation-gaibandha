import SignInForm from '@/components/auth/sign-in/SignInForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sign In | YFG',
};

export default function SignInPage() {
    return (
        <section className="padding-x padding-y bg-accent">
            <SignInForm />
        </section>
    );
}
