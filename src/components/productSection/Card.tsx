import { LeftTopArrow } from "../../icons/LeftTopArrow"
import type { cardType } from "../../types/cardType"
import { Button } from "../Button"


export const Card = (cardType:cardType) => {
    return(
        <div className="group relative h-146 w-110 font-[Roboto] cursor-pointer overflow-hidden hover:text-white border-l border-white/10">
            <div className="absolute top-0 left-0 w-2 h-2 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-150 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-0 right-0 w-2 h-2 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-150 translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-150 -translate-x-1/2 translate-y-1/2 z-10"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-150 translate-x-1/2 translate-y-1/2 z-10"></div>
            
            <div className="absolute h-[80%] w-full top-0 mask-alpha mask-b-from-10% group-hover:bg-white/10"></div>
            <div className="absolute top-8 p-6">
            <h1 className="text-[18px] font-medium text-white mb-4">{cardType.heading}</h1>
            <h1 className="text-[16px] text-white/50 group-hover:text-white">{cardType.discription}</h1>
            </div>
            <div className="absolute -bottom-46 w-full h-full flex items-center justify-center">
            {cardType.icon ? <cardType.icon /> : null}
            </div>
            <div className="absolute h-50 w-full bottom-0 bg-black mask-alpha mask-t-from-12%"></div>
            <div className="absolute bottom-6 w-full flex items-center justify-center">
            <Button name={cardType.btnContent} icon={LeftTopArrow}/>
            </div>
        </div>
    )
}