"use client"

import React, { useState } from 'react';
import { Button } from "@/app/_components/atoms/ui/button";
import { Menu, X } from 'lucide-react';
import { SignInButton, UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';

const NavbarMainPage = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const { isSignedIn, user } = useUser();

    return (
        <div>
            <nav className="w-full shadow-sm border-b">
                <div className="container mx-auto flex items-center justify-between py-4">
                    <div>
                        <Link href={'/'}>
                            <h1 className='font-bold'>Raja Ongkir</h1>
                        </Link>
                    </div>
                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={toggleMobileMenu}
                            className="transition-transform duration-300 ease-in-out active:scale-90"
                        >
                            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>

                    {/* Action Buttons */}
                    <div className="hidden md:flex items-center space-x-2">
                        {isSignedIn ?
                            <UserButton />
                            :
                            <SignInButton>
                                <Button variant="outline">Login</Button>
                            </SignInButton>
                        }
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out 
          ${isMobileMenuOpen
                        ? 'max-h-screen opacity-100 translate-y-0'
                        : 'max-h-0 opacity-0 -translate-y-5'
                    }`}
            >
                <div className="shadow-md">
                    <div className="container mx-auto p-4">
                        <div className="grid gap-4">
                            {/* Mobile Action Buttons */}
                            <div className="flex flex-col space-y-2 mt-4">
                                {isSignedIn ?
                                    <div className='flex items-center gap-2 bg-white shadow-md py-4 px-2 rounded-md transition-transform duration-300 ease-in-out active:scale-95"'>
                                        <UserButton />{user.emailAddresses[0].emailAddress}
                                    </div>
                                    :
                                    <SignInButton>
                                        <Button
                                            variant="outline"
                                            className="transition-transform duration-300 ease-in-out active:scale-95"
                                        >
                                            Login
                                        </Button>
                                    </SignInButton>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavbarMainPage;