import { useState } from "react";
import { Menu } from "../icons/Menu";
import { Xai } from "../icons/Xai";
import { Button } from "./Button";
import { MenuX } from "../icons/MenuX";

export const Navbar = () => {
    const [open, setOpen] = useState(false);
    const navContent = ['GROK' , 'API' , 'COMPANY' , 'COLOSSUS' , 'CAREERS' , 'NEWS'];
    return(
        <div className="absolute top-0  h-24 w-full flex justify-center text-white/50 py-3 font-[Geist_Mono] text-[14px] font-normal tracking-wide z-10">
            <div className="absolute lg:fixed top-0 h-24 w-full bg-black/10 mask-alpha mask-b-from-50% backdrop-blur-md"></div>
            <div className="absolute lg:fixed w-[95%] xl:w-[82%] flex items-center justify-between">
                <div className="flex items-center justify-between w-auto md:w-1/2 pr-6">
                    <div>
                        <a href="/">{<Xai />}</a>
                    </div>
                    {
                        navContent.map((item , index)=>(
                            <div key={index} className="hidden lg:block cursor-pointer hover:text-white">
                                {item}
                            </div>
                        ))
                    }
                </div>
                <div className="w-auto md:w-1/2 flex items-center justify-end text-white sm:pr-6 gap-2">
                    <Button name="TRY GROK" />
                    <div onClick={()=>(setOpen(!open))} className="lg:hidden h-11 w-11 border border-slate-600/60 bg-black/30 rounded-full flex items-center justify-center cursor-pointer">
                        {open ? <MenuX /> :<Menu />}
                    </div>
                </div>
            </div>
        </div>
    )
}