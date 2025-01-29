import { Check, MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Pricing1 = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex text-center justify-center items-center gap-4 flex-col">
        <Badge>Pricing</Badge>
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
            Prices that make sense!
          </h2>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
            Managing a small business today is already tough.
          </p>
        </div>
        <div className="grid pt-20 text-left grid-cols-1 lg:grid-cols-3 w-full gap-8">
          <Card className="w-full rounded-md">
            <CardHeader>
              <CardTitle>
                <span className="flex flex-row gap-4 items-center font-normal">
                Basic Plan
                </span>
              </CardTitle>
              <CardDescription>
              For Individuals & Small Teams
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-8 justify-start">
                <p className="flex flex-row  items-center gap-2 text-xl">
                  <span className="text-4xl">$9.99</span>
                  <span className="text-sm text-muted-foreground">
                    {" "}
                    / month
                  </span>
                </p>
                <div className="flex flex-col gap-4 justify-start">
                  <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Access to core features</p>
                      {/* <p className="text-muted-foreground text-sm">
                        We&apos;ve made it fast and reliable.
                      </p> */}
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>1 GB storage per user</p>
                      {/* <p className="text-muted-foreground text-sm">
                        We&apos;ve made it fast and reliable.
                      </p> */}
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Email support</p>
                      {/* <p className="text-muted-foreground text-sm">
                        We&apos;ve made it fast and reliable.
                      </p> */}
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Basic analytics tools</p>
                      {/* <p className="text-muted-foreground text-sm">
                        We&apos;ve made it fast and reliable.
                      </p> */}
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="gap-4">
                  Sign up today <MoveRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full shadow-2xl rounded-md">
            <CardHeader>
              <CardTitle>
                <span className="flex flex-row gap-4 items-center font-normal">
                Pro Plan
                </span>
              </CardTitle>
              <CardDescription>
              For Growing Businesses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-8 justify-start">
                <p className="flex flex-row  items-center gap-2 text-xl">
                  <span className="text-4xl">$29.99</span>
                  <span className="text-sm text-muted-foreground">
                    {" "}
                    / month
                  </span>
                </p>
                <div className="flex flex-col gap-4 justify-start">
                  <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>All Basic Plan features</p>
                      {/* <p className="text-muted-foreground text-sm">
                        We&apos;ve made it fast and reliable.
                      </p> */}
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>10 GB storage per user</p>
                      {/* <p className="text-muted-foreground text-sm">
                        We&apos;ve made it fast and reliable.
                      </p> */}
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Priority support</p>
                      {/* <p className="text-muted-foreground text-sm">
                        We&apos;ve made it fast and reliable.
                      </p> */}
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Advanced analytics and reporting</p>
                      {/* <p className="text-muted-foreground text-sm">
                        We&apos;ve made it fast and reliable.
                      </p> */}
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Integration with third-party tools</p>
                      {/* <p className="text-muted-foreground text-sm">
                        We&apos;ve made it fast and reliable.
                      </p> */}
                    </div>
                  </div>
                </div>
                <Button className="gap-4">
                  Sign up today <MoveRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full rounded-md">
            <CardHeader>
              <CardTitle>
                <span className="flex flex-row gap-4 items-center font-normal">
                Enterprise Plan
                </span>
              </CardTitle>
              <CardDescription>
              For Large Organizations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-8 justify-start">
                <p className="flex flex-row  items-center gap-2 text-xl">
                  {/* <span className="text-4xl"></span> */}
                  <span className="text-sm text-muted-foreground">
                    {" "}
                    Contact Us
                  </span>
                </p>
                <div className="flex flex-col gap-4 justify-start">
                  <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>All Pro Plan features</p>
                      {/* <p className="text-muted-foreground text-sm">
                        We&apos;ve made it fast and reliable.
                      </p> */}
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Unlimited storage</p>
                      {/* <p className="text-muted-foreground text-sm">
                        We&apos;ve made it fast and reliable.
                      </p> */}
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Dedicated account managere</p>
                      {/* <p className="text-muted-foreground text-sm">
                        We&apos;ve made it fast and reliable.
                      </p> */}
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Custom integrations and API access</p>
                      {/* <p className="text-muted-foreground text-sm">
                        We&apos;ve made it fast and reliable.
                      </p> */}
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col">
                      <p>Enterprise-grade security</p>
                      {/* <p className="text-muted-foreground text-sm">
                        We&apos;ve made it fast and reliable.
                      </p> */}
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="gap-4">
                  Book a meeting <PhoneCall className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </div>
);

export default Pricing1;