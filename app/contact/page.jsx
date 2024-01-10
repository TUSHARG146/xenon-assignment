import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

const ContactUs = () => {
    return (
        <section className="body-font relative">
            <div className="container px-5 py-24 mx-auto relative h-screen">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="font-bold text-6xl lg:text-8xl mb-2">Contact Us</h1>
                    <p className="text-gray-500 text-xl lg:text-3xl font-normal">AI Grading Made Simple: Fast, Fair, and Flawless.</p>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
                                <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                                <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
                                <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" data-gramm="false" wt-ignore-input="true"></textarea>
                            </div>
                        </div>
                        <div className="p-2 w-full text-center">
                            <AlertDialog>
                                <AlertDialogTrigger>
                                    <Button>Submit</Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Thanks for contacting us.</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            We will contact you soon.

                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogAction>Ok</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </div>
                    </div>
                </div>
                <div className='border-t h-32 w-full flex flex-col lg:flex-row items-center justify-between px-10 max-w-7xl mx-auto absolute bottom-0'>
                    <h1 className='text-gray-500'>@2024 Learn.ai. All Right Reserved.</h1>
                    <div className='flex items-center gap-4'>
                        <Link href="/">
                            <p className='underline text-gray-500 cursor-pointer'>Back To Home</p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs