'use client'

import React from 'react'
import { Input } from './ui/input';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const SignupForm = ({ className, ...props }) => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');

    const router = useRouter();


    async function onSubmit(event) {
        event.preventDefault();

        const payload = { email, password, name }

        try {
            const response = await fetch('/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const responseData = await response.json();
            toast.success('Signup Successfully');
        } catch (err) {
            toast.error(err.message);
        }


    }


    return (
        <div className={cn('grid gap-6 mt-6', className)} {...props}>
            <form onSubmit={onSubmit}>
                <div className='grid gap-3'>
                    <div className='grid gap-1'>
                        <Input
                            id='name'
                            placeholder='name'
                            type='text'
                            autoCapitalize='none'
                            autoComplete='text'
                            autoCorrect='off'
                            disabled={isLoading}
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                    </div>
                    <div className='grid gap-1'>
                        <Input
                            id='email'
                            placeholder='email'
                            type='email'
                            autoCapitalize='none'
                            autoComplete='text'
                            autoCorrect='off'
                            disabled={isLoading}
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>
                    <div className='grid gap-1'>
                        <Input
                            id='password'
                            placeholder='password'
                            type='password'
                            autoCapitalize='none'
                            autoCorrect='off'
                            disabled={isLoading}
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </div>
                    <Button disabled={isLoading}>
                        {/* {isLoading && (
              <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
            )} */}
                        Sign Up
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SignupForm