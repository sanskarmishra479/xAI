import { Navbar } from "../Navbar"
import Background from "./Background"

import { FottorHero } from "./FottorHero"
import { Input } from "./Input"


export const Hero = () => {
    return(
        <>
        <div className="relative flex justify-center">
            <Background />
            <div className="absolute top-0 h-full w-[82%]">
                    <Navbar />
                    <Input />
                    <FottorHero />
            </div>
        </div>
        </>
    )
}