"use client";
import { useRouter } from "next/navigation";
import SideDottedBorderContainer from "./SideDottedContainer";

export default function Footer() {
  const router = useRouter();
  return (
    // <div className="px-4  md:px-[50px] pb-[30px] md:pb-[75px] w-full  max-w-[1440px] mx-auto">
    <div className=" max-w-[1440px] w-full mx-auto lg:px-[20px]">
      <SideDottedBorderContainer className=" px-[30px]  ">
        <div className="flex rounded-[40px] w-full bg-black pt-[70px] pb-[50px]">
          <div className="px-4 sm:px-0 md:px-[40px] text-left ">
            {/* Main Title */}
            <div
              className="text-[32px] md:text-[72px] xl:text-[184px] sm:leading-[100%] tracking-0
            pb-[30px] text-white text-left uppercase font-abril"
            >
              MCA Shirpur
            </div>

            <p className="description text-white! pb-[50px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              pellentesque id erat at blandit. Donec ullamcorper turpis vitae
              dolor lacinia mollis. Donec at augue eget ipsum porttitor
              interdum.
            </p>

            {/* Content Grid */}
            <div className="flex flex-row gap-[100px] mb-[30px] md:mb-[50px] text-left font-medium">
              {/* Services Column */}
              <div className="text-left">
                <p className="description text-white! font-abril pb-[15px]">
                  Menu
                </p>
                <div className="space-y-[2px] text-left text-white!">
                  <div
                    onClick={() => router.push("/seo")}
                    className="description text-white!"
                  >
                    Visit
                  </div>
                  <div
                    onClick={() => router.push("/website-optimization")}
                    className="description text-white!"
                  >
                    Education
                  </div>
                  <div
                    onClick={() => router.push("/digital-marketing")}
                    className="description text-white!"
                  >
                    Become a Member{" "}
                  </div>
                  <div
                    onClick={() => router.push("/website-development")}
                    className="description text-white!"
                  >
                    About{" "}
                  </div>
                  <div
                    onClick={() => router.push("/app-development")}
                    className="description text-white!"
                  >
                    Get Involved{" "}
                  </div>
                </div>
              </div>

              {/* Contact Column */}
              <div className="text-left">
                <p className="description text-white! font-abril pb-[15px]">
                  Contact
                </p>
                <div className="space-y-[2px] text-left">
                  <div>
                  <a
                    href="mailto:mcachess@gmail.com"
                    className="description text-white!"
                  >
                    mcachess@gmail.com
                  </a>
                  </div>
                  <div>
                  <a
                    href="tel:+918765768768"
                    className="description text-white!"
                  >
                    +91 8765 768 768
                  </a>
                  </div>
                  <div
                    onClick={() => router.push("/digital-marketing")}
                    className="description text-white! max-w-[239px]"
                  >
                    Clou advertising agency ‍Mythenstrasse 7 6003 Lucerne
                  </div>
                  {/* <div
                    onClick={() => router.push("/website-development")}
                    className="description text-white!"
                  >
                    About{" "}
                  </div>
                  <div
                    onClick={() => router.push("/app-development")}
                    className="description text-white!"
                  >
                    Get Involved{" "}
                  </div> */}
                </div>
              </div>
            </div>
{/* 
            <div className="border border-t-[#585858]" /> */}

            {/* Footer */}
            <div className="flex flex-col md:flex-row justify-between items-center md:items-center   ">
              <div className="flex flex-col md:flex-row md:space-x-6 text-left">
                <span className="text-left description text-white!">Privacy Policy</span>
                <span className="text-left description text-white!">
                  Terms of Use
                  
                </span>
               
              </div>
              <div className="text-left description text-white!">
              <span
                  onClick={() => router.push("/privacy-policy")}
                  className="cursor-pointer transition-colors text-left"
                >
                  | ©2025 MCA Chess Academy
                </span>
              </div>
            </div>
          </div>
        </div>
      </SideDottedBorderContainer>
    </div>
  );
}
