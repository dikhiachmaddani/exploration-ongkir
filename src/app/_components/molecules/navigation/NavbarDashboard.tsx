"use client"

import React, { useState } from 'react';
import { Button } from "@/app/_components/atoms/ui/button";
import { Menu, X, Home, User, Settings, Sun, Moon } from 'lucide-react';
import { SidebarTrigger } from '../../atoms/ui/sidebar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../../atoms/ui/dropdown-menu';
import { useTheme } from 'next-themes';

const NavbarDashboard = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { setTheme } = useTheme()
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div>
            <nav className="w-full shadow-sm border-b">
                <div className=" flex items-center justify-between p-4">
                    {/* Logo */}
                    <SidebarTrigger />

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
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                    <span className="sr-only">Toggle theme</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => setTheme("light")}>
                                    Light
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("dark")}>
                                    Dark
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("system")}>
                                    System
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Button variant="outline">Login</Button>
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
                            <a
                                href="/"
                                className="flex items-center space-x-2 p-2 hover:border-gray-100 
                  transition-all duration-300 ease-in-out transform hover:translate-x-2"
                            >
                                <Home className="h-5 w-5" />
                                <span>Home</span>
                            </a>
                            <a
                                href="/contact"
                                className="flex items-center space-x-2 p-2 hover:border-gray-100 
                  transition-all duration-300 ease-in-out transform hover:translate-x-2"
                            >
                                <Settings className="h-5 w-5" />
                                <span>Contact</span>
                            </a>

                            {/* Mobile Action Buttons */}
                            <div className="flex flex-col space-y-2 mt-4">
                                <Button
                                    variant="outline"
                                    className="transition-transform duration-300 ease-in-out active:scale-95"
                                >
                                    Login
                                </Button>
                                <Button
                                    className="transition-transform duration-300 ease-in-out active:scale-95"
                                >
                                    Sign Up
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavbarDashboard;