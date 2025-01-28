import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const Hero3 = () => (
  <div className="w-full pt-24 min-h-[90vh] flex items-center">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex flex-col lg:items-center items-start">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">We&apos;re live!</Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-xl tracking-tighter text-left font-regular">
                Streamlining workflows, empowering teams.
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
          <Image src={"/assets/heroImg.svg"} alt="Hero Section Image" width={500} height={500} />
        </div>
      </div>
    </div>
  </div>
);

export default Hero3;
