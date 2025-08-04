import ContactCard from "./contact-card";

const ContactSection = () => {
  return (
    <div className=" mx-auto px-[50px] py-[70px] max-w-[1440px]">
      <div className="flex flex-row items-start justify-between  p-[40px] bg-black rounded-[25px]">
        {/* left section */}
        <div className="flex flex-col items-start justify-start max-w-[434px]">
          <p className="text-[32px]  text-white leading-[100%] tracking-0 uppercase">
            Ready to make your first move?{" "}
          </p>
          <p className="text-white font-helvetica  text-[16px] font-Helvetica Roman leading-[24px] tracking-0 mt-[15px] max-w-[600px]">
           Register your slot today
          </p>
        </div>
{/* right section */}
        <div>
          <ContactCard />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
