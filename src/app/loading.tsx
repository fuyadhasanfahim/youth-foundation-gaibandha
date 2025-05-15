import { Loader } from 'lucide-react';

export default function Page() {
    return (
        <section className="padding-x padding-y">
            <div className="min-h-dvh flex items-center justify-center">
                <Loader className="size-10 animate-spin" />
            </div>
        </section>
    );
}
