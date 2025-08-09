import React from 'react'
import { CardCarousel } from "@/components/ui/card-carousel"

const CardCarouselPage = () => {
  const images = [
    { src: "/1.png", alt: "Image 1" },
    { src: "/2.png", alt: "Image 2" },
    { src: "/3.png", alt: "Image 3" },
  ]

  return (
    <>
   


    
    <div className="relative mx-auto w-full max-w-4xl flex-col rounded-[24px] border border-black/5 bg-neutral-800/5 p-2 shadow-sm dark:border-white/20 dark:bg-white/10 md:rounded-b-[20px] md:rounded-t-[40px] md:p-2">

      <CardCarousel 
        images={images}
        autoplayDelay={2000}
        showPagination={true}
        showNavigation={true}
      />
   
    </div>
    
    </>
  )
}

export default CardCarouselPage
