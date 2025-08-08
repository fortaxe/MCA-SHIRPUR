"use client";
import { useRouter } from "next/navigation";
import SideDottedBorderContainer from "./SideDottedContainer";

export default function Footer() {
  const router = useRouter();
  return (
    // <div className="px-4  md:px-[50px] pb-[30px] md:pb-[75px] w-full  max-w-[1440px] mx-auto">
    <div className=" max-w-[1440px] w-full mx-auto lg:px-[20px]">
        <SideDottedBorderContainer className=" px-[30px]  py-[35px]">
      <div className="flex rounded-[40px] w-full bg-[#3D3D3D] pt-12">
        <div className="px-4 sm:px-0 py-[16px] md:px-[40px] text-left ">
          {/* Main Title */}
          <div
            className="text-[32px] md:text-[72px] xl:text-[184px] sm:leading-[100%] tracking-0
            pb-[30px] text-black text-left uppercase font-abril"
          >
            MCA Shirpur
          </div>

          <p className="description text-white!">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            pellentesque id erat at blandit. Donec ullamcorper turpis vitae dolor
            lacinia mollis. Donec at augue eget ipsum porttitor interdum.

          </p>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] md:gap-12 mb-[30px] md:mb-16 text-left font-medium">
            {/* Services Column */}
            <div className="text-left">
              <div className="space-y-4 text-left">
                <div
                  onClick={() => router.push("/seo")}
                  className="text-black cursor-pointer text-[16px] leading-[100%] tracking-[0em] text-left"
                >
                  Visit
                </div>
                <div
                  onClick={() => router.push("/website-optimization")}
                  className="text-black cursor-pointer text-[16px] leading-[100%] tracking-[0em] text-left"
                >
                  Education
                </div>
                <div
                  onClick={() => router.push("/digital-marketing")}
                  className="text-black cursor-pointer text-[16px] leading-[100%] tracking-[0em] text-left"
                >
                  Become a Member{" "}
                </div>
                <div
                  onClick={() => router.push("/website-development")}
                  className="text-black cursor-pointer text-[16px] leading-[100%] tracking-[0em] text-left"
                >
                  About{" "}
                </div>
                <div
                  onClick={() => router.push("/app-development")}
                  className="text-black cursor-pointer text-[16px] leading-[100%] tracking-[0em] text-left"
                >
                  Get Involved{" "}
                </div>
              </div>
            </div>

            {/* Contact Column */}
            <div className="text-left">
              <div className="space-y-4 text-left">
                <div
                  onClick={() => router.push("/seo")}
                  className="text-black cursor-pointer text-[16px] leading-[100%] tracking-[0em] text-left"
                >
                  Visit
                </div>
                <div
                  onClick={() => router.push("/website-optimization")}
                  className="text-black cursor-pointer text-[16px] leading-[100%] tracking-[0em] text-left"
                >
                  Education
                </div>
                <div
                  onClick={() => router.push("/digital-marketing")}
                  className="text-black cursor-pointer text-[16px] leading-[100%] tracking-[0em] text-left"
                >
                  Become a Member{" "}
                </div>
                <div
                  onClick={() => router.push("/website-development")}
                  className="text-black cursor-pointer text-[16px] leading-[100%] tracking-[0em] text-left"
                >
                  About{" "}
                </div>
                <div
                  onClick={() => router.push("/app-development")}
                  className="text-black cursor-pointer text-[16px] leading-[100%] tracking-[0em] text-left"
                >
                  Get Involved{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="border border-t-[#585858]" />

          {/* Footer */}
          <div className="flex flex-col md:flex-row justify-center items-center md:items-center text-[14px] leading-[20px] tracking-[0em] text-black   text-left pt-4 pb-2 ">
            <div className="flex flex-col md:flex-row md:space-x-6 text-left">
              <span className="text-left">Privacy Policy</span>
              <span
                onClick={() => router.push("/privacy-policy")}
                className="cursor-pointer transition-colors text-left"
              >
                | ©2025 MCA Chess Academy
              </span>
            </div>
            <div className="text-left"></div>
          </div>
        </div>
      </div>
      </SideDottedBorderContainer>
    </div>
  );
}
