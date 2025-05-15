'use client';

import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import {
    IconBrandFacebookFilled,
    IconBrandGoogleFilled,
    IconLogin2,
} from '@tabler/icons-react';

export default function SignInForm() {
    const form = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
    });

    return (
        <div className="flex items-center justify-center min-h-[80vh] px-4">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-xl">Welcome back</CardTitle>
                    <CardDescription>Login to your account.</CardDescription>
                </CardHeader>

                <CardContent>
                    <Form {...form}>
                        <form className="space-y-6">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Email{' '}
                                            <span className="text-destructive">
                                                *
                                            </span>
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter your email"
                                                type="email"
                                                autoComplete="email"
                                                required
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="flex items-center justify-between">
                                            <span>
                                                Password{' '}
                                                <span className="text-destructive">
                                                    *
                                                </span>
                                            </span>
                                            <Link
                                                href="/forget-password"
                                                className="text-sm text-primary hover:underline"
                                            >
                                                Forgot Password?
                                            </Link>
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter your password"
                                                type="password"
                                                autoComplete="current-password"
                                                required
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button className="w-full" type="submit">
                                <IconLogin2 className="size-5" /> Sign In
                            </Button>
                        </form>
                    </Form>

                    <div className="flex items-center my-4">
                        <div className="flex-grow border-t border-muted" />
                        <span className="mx-4 text-sm text-muted-foreground">
                            OR
                        </span>
                        <div className="flex-grow border-t border-muted" />
                    </div>

                    <div className="flex flex-col gap-3">
                        <Button
                            variant="outline"
                            className="w-full"
                            type="button"
                        >
                            <IconBrandGoogleFilled className="size-5" /> Sign in
                            with Google
                        </Button>
                        <Button
                            variant="outline"
                            className="w-full"
                            type="button"
                        >
                            <IconBrandFacebookFilled className="size-5 text-blue-500" />{' '}
                            Sign in with Facebook
                        </Button>
                    </div>

                    <p className="text-center text-sm font-medium text-muted-foreground mt-6">
                        Don’t have an account?{' '}
                        <Link
                            href="/sign-up"
                            className="text-primary hover:underline"
                        >
                            Sign up
                        </Link>
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
