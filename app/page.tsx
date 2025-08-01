
import Hero from "@/components/ui/Hero";
import UpcomingEvents from "@/components/ui/UpcomingEvents";

import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <div className="bg-[#F3F3F3]">
      <Hero />
      <UpcomingEvents />
      <Footer />
    </div>
  );
}
