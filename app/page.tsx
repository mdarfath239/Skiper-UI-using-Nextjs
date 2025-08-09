
import CardCarouselPage from "./components/card/CardCarouselPage";
import { CursorTrailDemo } from "./components/cursor/CursorTrailDemo";
import Feature from "./components/feature/Feature";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import AIInput from "./components/inputs/AIInput";


import Navbar from "./components/Navbar/Navbar";
import { SkiperCardDemo } from "./components/preview/SkiperCardDemo";
import Price from "./components/price/Price";

import TemplateCardGrid from "./components/templated/TemplateCardGrid";
import Toggle from "./components/Toggle/Toggle";



export default function Home() {
  return (
 <div>
   <Navbar/>
   <Hero/>
<CardCarouselPage/>  
<TemplateCardGrid/> 
<Feature/>
<SkiperCardDemo/>
<AIInput/>
<Toggle/>
<Price/>
<Footer/>
<CursorTrailDemo/>
 </div>
  );
}
