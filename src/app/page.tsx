import Image from "next/image";
import Herobanner from "@/app/components/sections/Herobanner"
import CardWithbutton from "@/app/components/sections/CardWithButton"
import ColWithLogo from '@/app/components/sections/ColWithLogo'
import FooterCta from '@/app/components/sections/FooterCta'
import CardGrid from '@/app/components/sections/CardGrid'
import Footer from "@/app/components/sections/Footer"

export default function Home() {
  return (
     <>
     <Herobanner />
     <CardWithbutton />
     <ColWithLogo />
     <FooterCta />
     <CardGrid />
     <Footer />
     </>
  );
}
