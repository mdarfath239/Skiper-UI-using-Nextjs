// update the image locations @ is src as default to update to root change the tsconfig.ts paths
import shiftCard from "@/public/assets/feature-1.png"
import family from "@/public/assets/feature-2.png"
import carousel from "@/public/assets/feature-3.png"
import textureFull from "@/public/assets/feature-4.png"
import skiper from "@/public/assets/skiper.png"
import textureCard from "@/public/assets/texture-card.png"
import { SparklesIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

import { SkiperCard } from "@/components/ui/skiper-card"

export function SkiperCardDemo() {
  return (
    
<>

    <section className="relative my-4 w-[61.5%] overflow-hidden mx-auto max-w-4xl mt-6 rounded-3xl border border-white/10 bg-neutral-900/80 p-6 md:p-5"  id="features">
      <div className=" p-2">
        <div className="mb-8 mx-auto pt-4 md:container">
          <div className=" mx-auto">
            <div className="flex  items-center ">
              <Badge
                variant="outline"
                className="mb-8 rounded-[14px] border border-black/10 bg-white text-base dark:border dark:border-white/10 dark:bg-transparent md:left-6"
              >
                <SparklesIcon className="  fill-[#EEBDE0] stroke-1 text-neutral-800" />{" "}
                Component Preview
              </Badge>

            </div>
            <div className=" text-center">
            <h1 className="mb-2  text-6xl font-bold text-white">Tailwind + Framer + React</h1>
           <span className="text-2xl mb-2  text-neutral-400"> Everything you need to ship</span>

            </div>

            <div className=" mx-auto mt-4 max-w-4xl rounded-full bg-neutral-900 border border-white/10 ">
              <div className="relative z-10 grid w-full gap-8 rounded-[28px] bg-neutral-950 p-2">
                <SkiperCard
              
                  step1img1Class={cn(
                    "pointer-events-none w-[50%] border border-stone-100/10 transition-all duration-500 dark:border-stone-700/50",
                    "left-1/4 top-[57%] rounded-[24px] max-md:scale-[160%] max-md:rounded-[24px] md:left-[35px] md:top-[29%]",
                    "md:group-hover:translate-y-2"
                  )}
                  step1img2Class={cn(
                    "pointer-events-none w-3/5 overflow-hidden border border-stone-100/10 transition-all duration-500 dark:border-stone-700/50",
                    "left-[69%] top-[53%] rounded-2xl max-md:scale-[160%] max-md:rounded-[24px] md:left-[calc(50%+35px+1rem)] md:top-[21%]",
                    "md:group-hover:-translate-y-6 "
                  )}
                  step2img1Class={cn(
                    "pointer-events-none w-[50%] overflow-hidden rounded-t-[24px] border border-stone-100/10 transition-all duration-500 dark:border-stone-700",
                    "left-1/4 top-[69%] max-md:scale-[160%] md:left-[35px] md:top-[30%]",
                    "md:group-hover:translate-y-2"
                  )}
                  step2img2Class={cn(
                    "pointer-events-none w-2/5 overflow-hidden rounded-2xl rounded-t-[24px] border border-stone-100/10 transition-all duration-500 group-hover:-translate-y-6 dark:border-stone-700",
                    "left-[70%] top-[53%] max-md:scale-[140%] md:left-[calc(50%+27px+1rem)] md:top-1/4",
                    "md:group-hover:-translate-y-6"
                  )}
                  step3imgClass={cn(
                    "pointer-events-none w-[90%] overflow-hidden rounded-t-[24px] border border-stone-100/10 transition-all duration-500 dark:border-stone-700",
                    "left-[5%] top-[50%] md:left-1/2 md:left-[68px] md:top-[30%]"
                  )}
                  step4imgClass={cn(
                    "pointer-events-none w-[90%] overflow-hidden rounded-t-[24px] border border-stone-100/10 transition-all duration-500 dark:border-stone-700",
                    "left-[5%] top-[50%] md:left-1/2 md:left-[68px] md:top-[30%]"
                  )}
                  description="Make your app 🤌"
                  bgClass="lg:bg-gradient-to-tr"
                  //  eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  //   @ts-ignore
                  image={{
                    step1light1: family,
                    step1light2: shiftCard,
                    step2light1: carousel,
                    step2light2: textureFull,
                    step3light: textureCard,
                    step4light: skiper,
                    alt: "Something",
                  }}
                  title="Components that pop"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <div className="absolute left-0 top-640 hidden lg:block">
<img
  alt="Background SVG"
  loading="lazy"
  width="100"
  height="100"
  decoding="async"
  className="dark:opacity-10"
  style={{ color: 'transparent' }}
  src="https://skiper-ui.com/bg/bg_3.svg"
/>
</div>

    <div className="absolute right-0 top-640 hidden lg:block">
<img
  alt="Background SVG"
  loading="lazy"
  width="100"
  height="100"
  decoding="async"
  className="dark:opacity-10"
  style={{ color: 'transparent' }}
  src="https://skiper-ui.com/bg/bg_3.svg"
/>
</div>
</>

  )
}
