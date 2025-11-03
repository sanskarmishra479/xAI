import { Xai } from "../../icons/Xai"

export const WindowTab = () => {
    return(
        <div className="relative h-110 w-auto flex items-center justify-center">
        <div className="absolute top-10 h-70 w-90 border border-white/20 group-hover:border-white/40 overflow-hidden cursor-pointer group-hover:rotate-x-15 group-hover:rotate-y-35 transition-all duration-150">
            <div className="h-10 w-full border-b border-white/20 group-hover:border-white/40 flex items-center justify-between p-2">
                <div className="flex items-center justify-between h-5 w-5">
                    <Xai textColor="#FFFFFF66"/>
                </div>
                <div className="flex items-center justify-between gap-2">
                    <div className="h-3 w-10 rounded-sm border border-white/20 group-hover:border-white/40"></div>
                    <div className="h-3 w-3 rounded-full border border-white/20 group-hover:border-white/40"></div>
                </div>
            </div>
            <div className="h-full w-16 border-r border-white/20 group-hover:border-white/40"></div>
        </div>
        </div>
    )
}