import CompanySpan from "@/components/home-page-components/CompanySpan";
import HeroComponent from "@/components/home-page-components/HeroComponent";
import NewsAndUpdates from "@/components/home-page-components/NewsAndUpdates";
import OurSolutions from "@/components/home-page-components/OurSolutions";
import Image from "next/image";



export default function Home() {
  return (
   <div>
    <HeroComponent/>
    <CompanySpan/>
    <OurSolutions/>
    <NewsAndUpdates/>

    
   </div>
  );
}
