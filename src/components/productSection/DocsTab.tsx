export const DocsTab = () => {
    return (
        <div className="relative h-110 w-100 flex items-center justify-center mr-4">
            <div className="absolute top-12 right-2 group-hover:rotate-3 transition-all duration-150">
                <DocsTabContent />
            </div>
            <div className="absolute top-16 right-7">
                <DocsTabContent />
            </div>
            <div className="absolute group-hover:-rotate-3 transition-all duration-150">
                <DocsTabContent />
            </div>
        </div>
    )
}

const DocsTabContent = () => {
    return(
        <div className="h-70 w-75 border border-white/20 group-hover:border-white/40 p-4 overflow-hidden bg-black">
        <div className="h-10 w-65 border-t border-white/20 group-hover:border-white/40 mt-5"></div>
        <div className="h-10 w-65 border-t border-white/20 group-hover:border-white/40"></div>
        <div className="h-10 w-65 border-t border-white/20 group-hover:border-white/40"></div>
        <div className="h-10 w-65 border-t border-white/20 group-hover:border-white/40"></div>
        <div className="h-10 w-65 border-t border-white/20 group-hover:border-white/40"></div>
        <div className="h-10 w-65 border-t border-white/20 group-hover:border-white/40"></div>
    </div>
    )
}