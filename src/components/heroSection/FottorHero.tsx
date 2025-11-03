import { DownArrow } from "../../icons/DwonArrow";
import { Button } from "../Button";

export const FottorHero = () => {
  return (
    <div className="absolute h-24 w-full bottom-2 flex items-center justify-between text-white pb-2 font-[Roboto]">
      <DownArrow />
      <div className="w-130  text-[16px] ml-96">
        <h1>
          Grok 4 is the most intelligent model in the world. Available now to
          SuperGrok and Premium+ subscribers, as well as our API.
        </h1>
      </div>
      <div className="pr-6">
        <Button name="READ ANNOUNCEMENT"/>
      </div>
    </div>
  );
};
