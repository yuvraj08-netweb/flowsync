import Link from "next/link";

const Footer1 = () => {
    const navigationItems = [
        {
          title: "Home",
          href: "/",
          description: "The homepage of our SaaS product showcasing all features.",
        },
        {
          title: "Product",
          description:
            "FlowSync helps you manage your team, tasks, and projects in one place.",
          button: {
            text: "Explore Features",
            href: "/",
          },
          items: [
            {
              title: "Task Management",
              href: "/task-management",
            },
            {
              title: "Team Collaboration",
              href: "/team-collaboration",
            },
            {
              title: "Analytics",
              href: "/analytics",
            },
            {
              title: "Integrations",
              href: "/integrations",
            },
          ],
        },
        {
          title: "Pricing",
          description: "Affordable pricing plans for all business sizes.",
          button: {
            text: "Choose Plan",
            href: "/",
          },
          items: [
            {
              title: "Basic Plan",
              href: "/pricing#basic",
            },
            {
              title: "Pro Plan",
              href: "/pricing#pro",
            },
            {
              title: "Enterprise Plan",
              href: "/pricing#enterprise",
            },
          ],
        },
        {
          title: "Company",
          description: "Learn more about us and our mission.",
          button: {
            text: "Learn More",
            href: "/",
          },
          items: [
            {
              title: "About Us",
              href: "/about",
            },
            {
              title: "Careers",
              href: "/careers",
            },
            {
              title: "Blog",
              href: "/blog",
            },
            {
              title: "Contact Us",
              href: "/contact",
            },
          ],
        },
      ];
    

  return (
    <div className="w-full py-20 lg:py-40 bg-foreground text-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="flex gap-8 flex-col items-start">
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                TWBlocks™
              </h2>
              <p className="text-lg max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                Managing a small business today is already tough.
              </p>
            </div>
            <div className="flex gap-20 flex-row">
              <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                <p>1 Tailwind Way</p>
                <p>Menlo Park</p>
                <p>CA 94025</p>
              </div>
              <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                <Link href="/">Terms of service</Link>
                <Link href="/">Privacy Policy</Link>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 gap-10 items-start">
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className="flex text-base gap-1 flex-col items-start"
              >
                <div className="flex flex-col gap-2">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="flex justify-between items-center"
                    >
                      <span className="text-xl">{item.title}</span>
                    </Link>
                  ) : (
                    <p className="text-xl">{item.title}</p>
                  )}
                  {item.items &&
                    item.items.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        className="flex justify-between items-center"
                      >
                        <span className="text-background/75">
                          {subItem.title}
                        </span>
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer1;