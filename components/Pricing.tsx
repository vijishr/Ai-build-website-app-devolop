import { Button } from "./ui/button";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Free",
    price: "$0",
    description: "For personal projects and getting started.",
    features: [
      "1 Website or App",
      "Limited AI Generations",
      "Basic Templates",
      "Community Support",
    ],
    buttonText: "Start for Free",
    buttonVariant: "outline",
  },
  {
    name: "Pro",
    price: "$29",
    description: "For professionals and small businesses.",
    features: [
      "Unlimited AI Generations",
      "Unlimited Pages",
      "Source Code Export",
      "Full AI Branding Tools",
      "Email & Chat Support",
    ],
    buttonText: "Start Free Trial",
    buttonVariant: "default",
  },
  {
    name: "Business",
    price: "$79",
    description: "For agencies and large teams.",
    features: [
      "Multi-App Creation",
      "Team Collaboration",
      "Larger Databases",
      "Priority Servers",
      "Dedicated Support",
    ],
    buttonText: "Contact Sales",
    buttonVariant: "outline",
  },
];

export function Pricing() {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <h3 className="text-4xl font-bold text-center mb-4">Choose Your Plan</h3>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
          Start for free, no credit card required. All plans come with a 7-day free trial of premium features.
        </p>
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => (
            <div key={tier.name} className={`flex flex-col p-8 rounded-lg ${tier.name === 'Pro' ? 'bg-card border-2 border-primary' : 'bg-card border'}`}>
              <h4 className="text-2xl font-semibold">{tier.name}</h4>
              <p className="text-4xl font-bold my-4">{tier.price}<span className="text-sm font-normal text-muted-foreground">/mo</span></p>
              <p className="text-muted-foreground mb-6">{tier.description}</p>
              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check size={16} className="text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant={tier.buttonVariant as any} className="w-full">
                {tier.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
