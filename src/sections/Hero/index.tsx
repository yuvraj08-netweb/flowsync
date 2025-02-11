"use client";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);
const Hero3 = () => {
  useGSAP(()=>{
    gsap.from(".zoomIn",{
      duration: 0.7,
      delay:0.5,
      scale: 0.5,
      opacity: 0,
    })
    gsap.to('.typewriter', {
      text : "Streamlining workflows, empowering teams.",
      duration: 2, 
      //slow then speeds up easing
      ease :  'power1.in'
    })
  })

  
  return (
    <div className="w-full pt-24 min-h-[90vh] flex items-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="flex flex-col lg:items-center items-start">
            <div className="flex gap-4 flex-col">
              <div>
                <Badge variant="outline">We&apos;re live!</Badge>
              </div>
              <div className="flex gap-4 flex-col">
                <h1 className="text-5xl md:text-6xl max-w-xl min-h-[130px] tracking-tighter text-left font-regular typewriter">
                 
                </h1>
                <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                  Streamline your tasks, increase productivity, and achieve your
                  goals with ease. Our platform is designed to simplify the way
                  you work.
                </p>
              </div>
              <div className="flex flex-row gap-4 max-mob:flex-col">
                <Button size="lg" className="gap-4" variant="outline">
                  Get Started for Free
                </Button>
                <Button size="lg" className="gap-4">
                  Book a Demo <MoveRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="rounded-md flex justify-center items-center">
            <Image
            className="zoomIn"
              src={"/assets/heroImg.svg"}
              alt="Hero Section Image"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero3;
