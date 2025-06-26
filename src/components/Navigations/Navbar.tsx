'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
    const router = useRouter()
    const [menuOpen, setMenuOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    const menuItems = [
        { name: 'About Us', path: '/about' },
        { name: 'Our Solutions', path: '/solutions' },
        { name: 'Business Verticals', path: '/business-verticals' },
        { name: 'News and Updates', path: '/news-updates' },
    ]

    const handleContactButton = () => {
        router.push('/contact-us')
    }

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false) // scroll down: hide
            } else {
                setIsVisible(true) // scroll up: show
            }
            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

    return (
        <nav
            className={`font-poppins bg-white shadow-md fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
                isVisible ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between'>
                {/* Logo */}
                <div
                    className='relative w-32 h-10 cursor-pointer'
                    onClick={() => router.push('/')}
                >
                    <Image
                        src='/company/logo.png'
                        fill
                        alt='Shakta Technology'
                        className='object-contain filter-blue'
                    />
                </div>

                {/* Desktop Menu */}
                <ul className='hidden md:flex items-center gap-10 uppercase font-medium'>
                    {menuItems.map((item, index) => (
                        <li
                            key={index}
                            onClick={() => router.push(item.path)}
                            className='cursor-pointer hover:text-blue-500 transition-colors duration-200'
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>

                {/* Contact Button */}
                <div className='hidden md:block'>
                    <button
                        className='border-2 border-blue-500 rounded-xl px-4 py-2 cursor-pointer transition-colors duration-200 hover:bg-blue-500 hover:text-white'
                        onClick={handleContactButton}
                    >
                        Get in Touch
                    </button>
                </div>

                {/* Mobile Toggle Button */}
                <div className='md:hidden'>
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className='md:hidden px-4 pb-4'>
                    <ul className='space-y-4 text-sm font-medium'>
                        {menuItems.map((item, index) => (
                            <li
                                key={index}
                                onClick={() => {
                                    setMenuOpen(false)
                                    router.push(item.path)
                                }}
                                className='cursor-pointer hover:text-blue-500 transition-colors duration-200'
                            >
                                {item.name}
                            </li>
                        ))}
                        <li>
                            <button
                                className='w-full mt-2 border-2 border-blue-500 rounded-xl px-4 py-2 transition-colors duration-200 hover:bg-blue-500 hover:text-white'
                                onClick={() => {
                                    setMenuOpen(false)
                                    handleContactButton()
                                }}
                            >
                                Get in Touch
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar
