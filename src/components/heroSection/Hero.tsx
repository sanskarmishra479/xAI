import { Navbar } from "../Navbar"
import Background from "./Background"

import { FottorHero } from "./FottorHero"
import { Input } from "./Input"


export const Hero = () => {
    return(
        <>
        <div className="relative flex justify-center h-screen">
            <Background />
            <Navbar />
            <div className="absolute top-0 h-full w-[95%] xl:w-[82%]">
                    <Input />
                    <FottorHero />
            </div>
        </div>
        </>
    )
}