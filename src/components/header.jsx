import { useState } from 'react'
import {
    Dialog,
    DialogPanel,
    PopoverGroup,
} from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-[#A2D5C6] shadow-md">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
                {/* Logo */}
                <div className="flex h-5 w-20 items-center">
                    <Link to="/">
                        <span className="sr-only">Your Company</span>
                        <img
                            src="/LeaderBoard.png"
                            alt="Your Company Logo"
                            className=" object-contain"
                        />
                    </Link>
                </div>

                {/* Mobile menu button */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                {/* Desktop nav */}
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    <Link to="/client" className="text-sm leading-6 font-semibold text-gray-900">
                        Client
                    </Link>
                    <Link to="/ranking" className="text-sm leading-6 font-semibold text-gray-900">
                        Ranking
                    </Link>
                    <Link to="/claim-points" className="text-sm leading-6 font-semibold text-gray-900">
                        Points Claim
                    </Link>
                </PopoverGroup>
            </nav>

            {/* Mobile menu */}
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden z-50">
                <div className="fixed inset-0 bg-black/20" />
                <DialogPanel className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#A2D5C6] p-6 overflow-y-auto shadow-xl">
                    <div className="flex items-center justify-between">
                        <div className="flex h-10 items-center">
                            <div className="flex h-5 w-20 items-center">
                                <Link to="/">
                                    <span className="sr-only">Your Company</span>
                                    <img
                                        src="/LeaderBoard.png"
                                        alt="Your Company Logo"
                                        className=" object-contain"
                                    />
                                </Link>
                            </div>
                        </div>
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>

                    <div className="mt-6 divide-y divide-gray-300">
                        <div className="space-y-4 py-6">
                            <Link to="/client" className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-white">
                                Client
                            </Link>
                            <Link to="/ranking" className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-white">
                                Ranking
                            </Link>
                            <Link to="/claim-points" className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-white">
                                Points Claim
                            </Link>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}
