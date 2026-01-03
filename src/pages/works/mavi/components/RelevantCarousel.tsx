import { Card, CardContent } from "@/common/shadcn/components/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/common/shadcn/components/carousel"
import { useEffect, useState } from "react"

// @typescript-eslint/no-unused-vars
export const RelevantCarousel = ({ carouselItems, title }: { carouselItems: any[], title: string }) => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  console.log({ carouselItems })

  useEffect(() => {
    if (!api) {
      return
    }
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="max-w-full mx-auto mt-24 px-10">
      <h2 className="text-[2.5em] tracking-wider font-semibold text-center">
        {title}
      </h2>
      <div className='flex flex-col items-center mt-16'>
        <Carousel setApi={setApi} className="w-full max-w-6xl">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="text-muted-foreground py-2 text-center text-xl mt-5">
          Slide {current} of {count}
        </div>
      </div>
    </div>
  )
}
