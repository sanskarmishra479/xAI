import { Xai } from "../icons/Xai";
import { Button } from "./Button";

export const Navbar = () => {
    const navContent = ['GROK' , 'API' , 'COMPANY' , 'COLOSSUS' , 'CAREERS' , 'NEWS'];
    return(
        <div className="h-20 w-full flex  text-white/50 py-3 font-[Geist_Mono] text-[14px] items-center justify-between font-normal tracking-wide backdrop-blur-lg">
            <div className="flex items-center justify-between w-1/2 pr-6">
                <div>
                    <a href="/">{<Xai />}</a>
                </div>
                {
                    navContent.map((item , index)=>(
                        <div key={index} className="cursor-pointer hover:text-white">
                            {item}
                        </div>
                    ))
                }
            </div>
            <div className="w-1/2 flex items-center justify-end text-white pr-6">
                <Button name="TRY GROK" />
            </div>
        </div>
    )
}