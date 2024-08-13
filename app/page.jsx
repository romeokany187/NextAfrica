"use client"
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import Partenaire from "@/components/Partenaire";
import Offers from "@/components/Offers";
import About from "@/components/About";

export default function Home() {
  return (
    <main>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 500 }}
          exit={{ opacity: 100 }}
          transition={{ duration: 1 }}
        >
          <>
            <Hero />
            <Partenaire />
            <Offers />
            <About />
          </>
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
