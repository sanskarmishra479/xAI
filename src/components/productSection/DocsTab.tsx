export const DocsTab = () => {
    return (
        <div className="relative h-90 md:scale-118 md:h-100 w-78 flex items-center justify-center">
            <div className="absolute top-12 left-8 group-hover:rotate-3 transition-all duration-150">
                <DocsTabContent />
            </div>
            <div className="absolute top-16 left-5">
                <DocsTabContent />
            </div>
            <div className="absolute bottom-0 md:bottom-10 group-hover:-rotate-3 transition-all duration-150">
                <DocsTabContent />
            </div>
        </div>
    )
}

const DocsTabContent = () => {
    return(
        <div className="h-70 w-[95%] border border-white/20 group-hover:border-white/40 p-4 overflow-hidden bg-black">
        <div className="h-10 w-full border-t border-white/20 group-hover:border-white/40 mt-5"></div>
        <div className="h-10 w-full border-t border-white/20 group-hover:border-white/40"></div>
        <div className="h-10 w-full border-t border-white/20 group-hover:border-white/40"></div>
        <div className="h-10 w-full border-t border-white/20 group-hover:border-white/40"></div>
        <div className="h-10 w-full border-t border-white/20 group-hover:border-white/40"></div>
        <div className="h-10 w-65 border-t border-white/20 group-hover:border-white/40"></div>
    </div>
    )
}