import ContactCard from "./contact-card";
import SideDottedBorderContainer from "./SideDottedContainer";

const ContactSection = () => {
  return (
    <div className=" max-w-[1440px] w-full mx-auto px-2 lg:px-[20px]">
      <SideDottedBorderContainer className="px-4 sm:px-[30px] py-[25px] sm:py-[35px]">
        <div className="flex flex-col gap-[15px] sm:flex-row items-start justify-between p-4 sm:p-[40px] bg-black rounded-[20px] sm:rounded-[25px]">
          {/* left section */}
          <div className="flex flex-col items-start justify-start max-w-[434px]">
            <p className="sub-small-heading font-abril text-white! uppercase">
              Ready to make your first move?{" "}
            </p>
            <p className="text-white   text-[16px]  leading-[24px] tracking-0 mt-[15px] max-w-[600px]">
              Register your slot today
            </p>
          </div>
          {/* right section */}
          <div>
            <ContactCard />
          </div>
        </div>
      </SideDottedBorderContainer>
    </div>
  );
};

export default ContactSection;
