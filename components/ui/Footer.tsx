"use client";
import { useRouter } from "next/navigation";
import SideDottedBorderContainer from "./SideDottedContainer";

export default function Footer() {
  const router = useRouter();
  return (
    // <div className="px-4  md:px-[50px] pb-[30px] md:pb-[75px] w-full  max-w-[1440px] mx-auto">
    <div className=" max-w-[1440px] w-full mx-auto px-2 lg:px-[20px] ">
      <SideDottedBorderContainer className="px-4 sm:px-[30px]  pb-[30px] sm:pb-[50px]">
        <div className="flex rounded-[20px] sm:rounded-[40px] w-full bg-black py-[25px] sm:pt-[70px] sm:pb-[50px]">
          <div className="px-4 sm:px-0 md:px-[40px] text-left ">
            {/* Main Title */}
            <div
              className="text-[32px] md:text-[72px] xl:text-[184px] sm:leading-[100%] tracking-0
            pb-[30px] text-white  uppercase font-abril text-center"
            >
              MCA Shirpur
            </div>

            <p className="description text-white! pb-[25px] sm:pb-[50px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              pellentesque id erat at blandit. Donec ullamcorper turpis vitae
              dolor lacinia mollis. Donec at augue eget ipsum porttitor
              interdum.
            </p>

            {/* Content Grid */}
            <div className="flex flex-row gap-4 sm:gap-[100px] mb-[30px] md:mb-[50px] text-left font-medium">
              {/* Services Column */}
              <div className="text-left">
                <p className="description text-white! font-abril pb-[15px]">
                  Menu
                </p>
                <div className="space-y-[2px] text-left text-white!">
                  <div
                  
                    className="description text-white!"
                  >
                    Visit
                  </div>
                  <div
                   
                    className="description text-white!"
                  >
                    Education
                  </div>
                  <div
                    
                    className="description text-white!"
                  >
                    Become a Member{" "}
                  </div>
                  <div
                   
                    className="description text-white!"
                  >
                    About{" "}
                  </div>
                  <div
                    
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
                      href="mailto:mcashirpur@gmail.com"
                      className="description text-white!"
                    >
                      mcashirpur@gmail.com
                    </a>
                  </div>

                  <div>
                    <a
                      href="tel:+919822828143"
                      className="description text-white!"
                    >
                      +91 9822 828 143
                    </a>
                  </div>
                  <div>
                    <a
                      href="tel:+9102563299144"
                      className="description text-white!"
                    >
                      +91 02563 299 144
                    </a>
                  </div>
                  <div
                    onClick={() => router.push("/digital-marketing")}
                    className="description text-white! max-w-[239px]"
                  >
                    Manoj Chess Academy, Shirpur, Near Central Bank of India,
                    Karwand Naka, Shirpur 425405
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
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center   ">
              <div className="flex flex-col  md:flex-row md:space-x-6 text-left">
                <span className="text-left description text-white!">
                  Privacy Policy
                </span>
                <span className="md:ml-[112px] pt-1 sm:pt-0 text-left description text-white!">
                  Terms of Use
                </span>
              </div>
              <div className="text-left description text-white! pt-1 sm:pt-0">
                <span
                  onClick={() => router.push("/privacy-policy")}
                  className="cursor-pointer transition-colors text-left"
                >
                  ©2025 MCA Chess Academy
                </span>
              </div>
            </div>
          </div>
        </div>
      </SideDottedBorderContainer>
    </div>
  );
}
