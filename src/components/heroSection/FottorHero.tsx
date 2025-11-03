import { DownArrow } from "../../icons/DwonArrow";
import { Button } from "../Button";

export const FottorHero = () => {
  return (
    <div className="absolute h-24 w-full bottom-2 flex items-center justify-between text-white pb-2 font-[Roboto]">
      <DownArrow />
      <div className="hidden lg:block w-130 text-[16px] ml-42 xl:ml-96">
        <h1>
          Grok 4 is the most intelligent model in the world. Available now to
          SuperGrok and Premium+ subscribers, as well as our API.
        </h1>
      </div>
      <div className="sm:pr-6 lg:block hidden">
        <Button name="READ ANNOUNCEMENT"/>
      </div>
      <div className="sm:pr-4 block lg:hidden">
        <Button name="GROK 4: AVAILABLE NOW"/>
      </div>
    </div>
  );
};
