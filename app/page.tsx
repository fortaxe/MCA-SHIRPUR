
import Hero from "@/components/ui/Hero";
import UpcomingEvents from "@/components/ui/UpcomingEvents";

import Footer from "@/components/ui/Footer";
import ThirdSection from "@/components/ui/ThirdSection";
import { MarqueeDemoVertical } from "@/components/ui/MarqueeDemoVertical";
import Blogs from "@/components/ui/Blogs";
import ThreeDPhotoCarouselDemo from "@/components/ui/three-d-coursel-demo";

export default function Home() {
  return (
    <div className="bg-[#F3F3F3]">
      <Hero />
      <UpcomingEvents />
      <ThirdSection />
      <Blogs />
      <MarqueeDemoVertical />
      <ThreeDPhotoCarouselDemo />
      <Footer />
    </div>
  );
}
