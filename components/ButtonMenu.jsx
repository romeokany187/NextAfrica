import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion"


const ButtonMenu = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        return setMenuOpen(!menuOpen)
    }
    return (
        <>
            <button
                onClick={toggleMenu}
                className="flex gap-4 items-center justify-center p-2  text-gray-800 T rounded-md z-50"
            >
                <p className="font-bold text-xs">MENU</p>
                <CSSTransition
                    in={menuOpen}
                    timeout={500}
                    classNames="icon"
                >
                    <div>
                        <Image
                            src={menuOpen ? '/assets/close.svg' : '/assets/menu.svg'}
                            alt="open menu"
                            width={17}
                            height={17}
                        />
                    </div>
                </CSSTransition>
            </button>

            <AnimatePresence>

                {menuOpen &&
                    (

                        <motion.div
                            initial={{ translateX: -500 }}
                            animate={{ translateX: 0 }}
                            exit={{ translateX: -500 }}
                            transition={{ duration: 1 }}
                            className="absolute top-[3.2rem] left-0  w-[50%] h-screen bg-green-primary  z-50"
                        >
                            <>
                                <div className="z-0 h-[90%] w-full px-8 py-8 flex flex-col justify-between  mt-auto">

                                    <div className="">
                                        <div className="flex flex-col gap-[2.5rem] font-bold text-base-secondary">
                                            <Link href="/">Accueil</Link>
                                            <Link href="/athlete">Athlètes</Link>
                                            <Link href="/club">Clubs</Link>
                                            <Link href="/count">Compte</Link>
                                        </div>
                                    </div>

                                    <button className="p-2 border-2 bg-base-secondary border-green-primary text-green-primary rounded-lg
        transition ease-in-out hover:bg-green-primary hover:text-white">Contactez-nous</button>
                                </div>

                            </>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </>
    )
}

export default ButtonMenu