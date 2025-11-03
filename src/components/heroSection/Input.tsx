import { UpArrow } from "../../icons/TopArrow"


export const Input = () => {
    return(
        <div className="w-full h-auto absolute bottom-30 lg:bottom-40 flex items-center justify-center ">
            <div className="h-auto w-190 rounded-3xl border border-t-2 border-white/10 bg-black shadow-2xl p-4 flex items-end justify-between">
            <textarea className="h-20 placeholder-white/50 w-auto md:w-60 border-2 resize-none outline-none" placeholder="What do you want to know?" />
            <div className="h-9 w-9 rounded-full bg-white/50 hover:bg-white/40 flex items-center justify-center cursor-pointer">
                <UpArrow />
            </div>
            </div>
        </div>
    )
}