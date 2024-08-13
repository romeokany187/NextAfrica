import Image from "next/image";
import Hero from "@/components/Hero";
import Partenaire from "@/components/Partenaire";
import Offers from "@/components/Offers";
export default function Home() {
  return (
    <main>
      <Hero/>
      <Partenaire/>
      <Offers/>
    </main>
  );
}
