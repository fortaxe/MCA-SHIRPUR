import CustomButton from "../button/CustomButton";
import { AnimatedTooltipPreview } from "./animated-demo";
import SideDottedBorderContainer from "./SideDottedContainer";

const ThirdSection = () => {
  return (
    <div className=" justify-center flex flex-col items-center ">
      <div className=" max-w-[1440px] w-full mx-auto px-2 lg:px-[20px] ">
        <SideDottedBorderContainer className="px-4 sm:px-[50px] py-[25px] sm:py-[70px] " >
          <div className="flex flex-col justify-center items-center">
          <h2 className="heading text-center font-abril">
            Every Great Player
            <br />
            Starts with a First Move
          </h2>
          </div>
          <div className="my-[15px] sm:my-[25px]">
            <AnimatedTooltipPreview />
          </div>
          <div className="flex justify-center">
            <CustomButton
              name="Start Your Game Today"
              onClick={console.log("somethign")}
            />
          </div>

          <div className="mt-[15px] sm:mt-[80px]">
            <img src={"/home/chess.png"} />
          </div>
        </SideDottedBorderContainer>
      </div>
    </div>
  );
};

export default ThirdSection;
