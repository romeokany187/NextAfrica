"use client"
import { motion , useViewportScroll , useTransform , AnimatePresence } from "framer-motion";

import Image from "next/image";
import Hero from "@/components/Hero";
import Partenaire from "@/components/Partenaire";
import Offers from "@/components/Offers";
import About from "@/components/About";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5} },
};

export default function Home() {
  const {scrollX , scrollY} = useViewportScroll();
  const yRange = [0,300];
  const xRange = [0,300];

  const opacityY = useTransform(scrollY , yRange , [0,1]);
  const opacityX = useTransform(scrollX , xRange , [0,1]);

  const translateY = useTransform(scrollY, yRange , [50, 0]);
  const translateX = useTransform(scrollY, yRange , [50, 0]);


  return (
    <main className="px-6">
      <AnimatePresence>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionVariants}
      >
        <Hero />
      </motion.div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionVariants}
      >
        <Partenaire />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionVariants}
      >
        <Offers />
      </motion.div>
      </AnimatePresence>
      
    </main>
  );
}
