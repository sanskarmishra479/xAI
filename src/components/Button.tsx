import type { btnType } from "../types/btnType"


export const Button = (btnType:btnType) => {
    return(
        <div className="px-5 py-2 border border-slate-600/60 bg-black/30 group-hover:bg-slate-600/20 hover:bg-slate-600/20 rounded-full tracking-wider cursor-pointer text-white font-[Roboto] text-[16px] flex items-center justify-between gap-2">
            {btnType.name}
            {btnType.icon ? <btnType.icon /> : null}
        </div>
    )
}