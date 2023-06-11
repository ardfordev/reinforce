import Image from 'next/image'
import eastjavaMap from '@/public/map.png'
import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          REINFORCE.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
        Realtime Input For Engineering Technical Losses To Improve Services.
        </p>
      </div>
      <div className="w-full">
          <AspectRatio ratio={16 / 9}>
            <Image
              src={eastjavaMap}
              alt="UP2D JATIM"
              className="rounded-md object-cover"
              priority
            />
          </AspectRatio>
        </div>
    </section>
  )
}