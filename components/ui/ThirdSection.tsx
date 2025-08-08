import CustomButton from "../button/CustomButton";
import { AnimatedTooltipPreview } from "./animated-demo";
import SideDottedBorderContainer from "./SideDottedContainer";

const ThirdSection = () => {
  return (
    <div className=" justify-center flex flex-col items-center ">
      <div className=" max-w-[1440px] w-full mx-auto lg:px-[20px] ">
        <SideDottedBorderContainer className=" px-[50px] py-[70px]">
          <h2 className="text-[58px] uppercase text-black text-center tracking-0 leading-[100%]   font-monument">
            Every Great Player
            <br />
            Starts with a First Move
          </h2>
          <div className="my-6">
            <AnimatedTooltipPreview />
          </div>
          <div className="flex justify-center">
  <CustomButton name="Start Your Game Today" onClick={console.log("somethign")} />
</div>

          <div className="mt-[80px]">
            <img src={"/home/chess.png"} />
          </div>
        </SideDottedBorderContainer>
      </div>
    </div>
  );
};

export default ThirdSection;
