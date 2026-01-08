import Image from "next/image";
import Banner from "../components/Banner"
import InfiniteSlider from "@/components/Home/LogoSlider";
import About from "@/components/Home/About";
import HomeSolution from "@/components/Home/HomeSolution";
import IndustryServe from "@/components/Home/IndustryServe"
import WhyChoose from "@/components/Home/WhyChoose";
import Sustainability from "@/components/Home/Sustainability"
import Testimonial from "@/components/Home/Testimonial"
import Blog from "@/components/Home/Blog"



export default function Home() {
  return (
    <>
      <Banner/>
      <InfiniteSlider/>
      <About/>
      <HomeSolution/>
      <IndustryServe />
      <WhyChoose/>
      <Sustainability />
      <Testimonial/>
      <Blog/>
    </>
  );
}
