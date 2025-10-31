import { BackgroundTwo } from "./BackgroundTwo"
import { FottorHero } from "./FottorHero"
import { Input } from "./Input"
import { Navbar } from "./Navbar"

export const Hero = () => {
    return(
        <>
        <div className="relative flex justify-center">
            <BackgroundTwo />
            <div className="absolute top-0 h-full w-[82%]">
                    <Navbar />
                    <Input />
                    <FottorHero />
            </div>
        </div>

        </>
    )
}