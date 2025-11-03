import { Card } from "./Card"
import { DocsTab } from "./DocsTab"
import { Grok } from "./Grok"
import { WindowTab } from "./WindowTab"

export const Product = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex-col items-center justify-center h-auto w-[82%] border-t border-white/10">
        <div className="h-80 w-full flex items-center">
          <div className="">
          <h1 className="text-[14px] font-normal text-white/40 font-[Geist_Mono] tracking-widest mb-10">[ PRODUCT ]</h1>
          <h1 className="text-[48px] font-normal tracking-tight text-white font-[Roboto]">AI for all humanity</h1>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Card
            heading="Grok"
            discription="Grok is your cosmic guide, now accessible on grok.com, iOS, and Android. Explore the universe with AI"
            icon={Grok} btnContent="USE NOW" />
          <Card
            heading="API"
            discription="Supercharge your applications with Grok's enhanced speed, precision, and multilingual capabilities."
            icon={WindowTab} btnContent="BUILD NOW" />
          <Card
            heading="Developer Docs"
            discription="Learn how to quickly install Grok at the heart of your applications and explore guides covering common use cases."
            icon={DocsTab} btnContent="LEARN MORE" />
        </div>
      </div>
    </div>
  )
}