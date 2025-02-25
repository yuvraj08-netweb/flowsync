"use client";

import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Feature2 = () => {

  useGSAP(()=>{
    gsap.from(".fadeInFromLeft",{
      duration: 2,
      x: -100,
      opacity: 0,
      scrollTrigger:{
        trigger: ".fadeInFromLeft",
        start: "top 85%",
        scroller:"body",
      }
    })
    gsap.from(".fadeUp",{
      duration: 1.5,
      y: 100,
      opacity: 0,
      scrollTrigger:{
        trigger: ".fadeUp",
        start: "top 80%",
        scroller:"body",
      }
    })
  })
  return (
    <div className="w-full py-10 ">
      <div className="container mx-auto">
        <div className="flex gap-4 py-10 flex-col items-start">
          <div>
            <Badge>Platform</Badge>
          </div>
          <div className="flex gap-2 flex-col fadeInFromLeft">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-white">
              Why Choose FlowSync?
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-white">
              Everything You Need to Work Smarter, Faster, and More Efficiently
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="fadeUp flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-white" />
                <div className="flex flex-col gap-1">
                  <p className="text-white">Effortless Collaboration</p>
                  <p className="text-muted-foreground text-sm">
                    Unite your team with real-time updates and smooth
                    communication. Achieve more together.
                  </p>
                </div>
              </div>
              <div className="fadeUp flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-white" />
                <div className="flex flex-col gap-1">
                  <p className="text-white">Powerful Analytics</p>
                  <p className="text-muted-foreground text-sm">
                    Make informed decisions with clear, actionable insights from
                    our intuitive analytics dashboard.
                  </p>
                </div>
              </div>
              <div className="fadeUp flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-white" />
                <div className="flex flex-col gap-1">
                  <p className="text-white">Customizable Workflows</p>
                  <p className="text-muted-foreground text-sm">
                    Build workflows that match your process with flexible,
                    adaptable tools.
                  </p>
                </div>
              </div>
              <div className="fadeUp flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-white" />
                <div className="flex flex-col gap-1">
                  <p className="text-white">Secure Data Protection</p>
                  <p className="text-muted-foreground text-sm">
                    Your data is safeguarded with industry-leading security
                    measures, ensuring privacy and reliability
                  </p>
                </div>
              </div>
              <div className="fadeUp flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-white" />
                <div className="flex flex-col gap-1">
                  <p className="text-white">Seamless Integrations</p>
                  <p className="text-muted-foreground text-sm">
                    Connect with your favorite tools effortlessly. Integrate
                    with popular apps to streamline your workflow.
                  </p>
                </div>
              </div>
              <div className="fadeUp flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-white" />
                <div className="flex flex-col gap-1">
                  <p className="text-white">AI-Powered Automation</p>
                  <p className="text-muted-foreground text-sm">
                    Boost productivity with AI-driven automation. Automate
                    repetitive tasks and focus on what matters most.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature2;
