"use client";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { GooeyText } from "@/components/ui/gooey-text-morphing";

export function HeroScrollDemo() {
  return (
    <div id="home" className="flex flex-col overflow-hidden pt-20">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="font-display text-4xl md:text-7xl font-medium leading-[1.1] text-black dark:text-white text-center">
              Fresh. <span className="italic text-[#88ab75]">Healthy.</span><br />
              <div className="h-[8rem] md:h-[12rem] flex items-center justify-center">
                <GooeyText
                  texts={["Delicious.", "Yummy.", "Wholesome.", "Organic."]}
                  morphTime={1.2}
                  cooldownTime={0.5}
                  textClassName="text-5xl md:text-[8rem] font-bold text-black dark:text-white"
                />
              </div>
            </h1>
          </>
        }
      >
        <img
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop"
          alt="Perfect Vegetarian Bowl"
          className="h-full w-full object-cover scale-[1.5]"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
