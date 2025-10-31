import type { btnType } from "../types/btnType"

export const Button = (btnType:btnType) => {
    return(
        <div className="px-5 py-2 border border-slate-600/60 bg-black/30 hover:bg-slate-600/10 rounded-full tracking-wider cursor-pointer ">
            {btnType.name}
        </div>
    )
}