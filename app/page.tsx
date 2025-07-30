import Image from "next/image";
import Hero from "@/components/ui/Hero";
import UpcomingEvents from "@/components/ui/UpcomingEvents";

import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <UpcomingEvents />
      <Footer />
    </div>
  );
}
