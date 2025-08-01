import CustomButton from "../button/CustomButton"
import { AnimatedTooltipPreview } from "./animated-demo"

const ThirdSection = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-[50px] justify-center flex flex-col items-center py-[70px]">
           <h2 className="text-[58px]  text-black text-center tracking-0 leading-[100%] ">
                  Every Great Player 
                  <br />
                  Starts with a First Move
                </h2>
                <div className="my-6">
                <AnimatedTooltipPreview />
                </div>
                <CustomButton name="Start Your Game Today" onClick={console.log("somethign")} />
                <div className="mt-[80px]">
                <img 
                src={"/home/chess.png"}
                />
                </div>
    </div>
  )
}

export default ThirdSection