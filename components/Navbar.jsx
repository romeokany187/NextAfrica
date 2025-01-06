"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LanguageSwitcher from './LanguageSwitcher'
import ButtonMenu from './ButtonMenu'

const Navbar = () => {
  return (
    <div className="flex justify-between  py-2 xl:px-[10rem] lg:px-[5rem] md:px-[2rem] px-6 top-0 sticky bg-white z-50">
      <div className="z-50">
        <Image src='/images/logomodifier.png' alt="logo" width={60} height={70}></Image>
      </div>
      <div className="lg:flex justify-center items-center lg:gap-8 hidden text-sm " >
        <Link href="/">Accueil</Link>
        <Link href="/athlete">Athlètes</Link>
        <Link href="/contact">Clubs</Link>
        <Link href="/count">Compte</Link>
        <Link href="/count">Compte</Link>
      </div>
      <div className="lg:hidden flex">
        <LanguageSwitcher />
        <ButtonMenu />
      </div>


      <button className="lg:block hidden p-2 border-2 border-green-primary text-green-primary rounded-lg
        transition ease-in-out hover:bg-green-primary hover:text-white">Contactez-nous</button>
    </div >
  )
}

export default Navbar