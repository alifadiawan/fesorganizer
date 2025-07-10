import { Link } from '@inertiajs/react'
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <div className="flex items-center mb-4">
                            <div className="text-xs leading-tight">
                                <img src="/logofest1.png" alt="fest-logo" className='w-56' />
                            </div>
                        </div>
                        <p className="text-gray-400 mb-4">Creating innovative, memorable event experiences since 2010.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="#aboutus" className="text-gray-400 hover:text-white">
                                    What We Do
                                </Link>
                            </li>
                            <li>
                                <Link href="#latestevent" className="text-gray-400 hover:text-white">
                                    Latest Event
                                </Link>
                            </li>
                            <li>
                                <Link href="#careers" className="text-gray-400 hover:text-white">
                                    Career
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="text-gray-400 hover:text-white">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* <div>
                        <h3 className="text-lg font-bold mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white">
                                    Music Events
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white">
                                    Corporate Events
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white">
                                    Wedding Planning
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white">
                                    Brand Activation
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white">
                                    Exhibition Management
                                </Link>
                            </li>
                        </ul>
                    </div> */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-gray-400">
                            {/* <li className="flex items-start">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mr-2 mt-0.5 text-[#ffcc00]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <span>123 Event Street, Jakarta, Indonesia</span>
                            </li>
                            <li className="flex items-start">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mr-2 mt-0.5 text-[#ffcc00]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <span>+62 123 4567 890</span>
                            </li> */}
                            <li className="flex items-start">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mr-2 mt-0.5 text-[#ffcc00]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <span>fesmanagementofficial@gmail.com</span>
                            </li>
                            <li className="flex items-start">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mr-2 mt-0.5 text-[#ffcc00]"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M7.75 2C4.3 2 2 4.3 2 7.75v8.5C2 19.7 4.3 22 7.75 22h8.5C19.7 22 22 19.7 22 16.25v-8.5C22 4.3 19.7 2 16.25 2h-8.5Zm0 1.5h8.5c2.18 0 3.75 1.57 3.75 3.75v8.5c0 2.18-1.57 3.75-3.75 3.75h-8.5C5.57 19.5 4 17.93 4 15.75v-8.5C4 5.57 5.57 4 7.75 4ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm5.75-.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z" />
                                </svg>
                                <span><a href="https://www.instagram.com/fes.management_/">@fes.management_</a></span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} FES Management. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer