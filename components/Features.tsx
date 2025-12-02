import { Component, Smartphone, Code, Rocket, ShieldCheck, Brush } from "lucide-react";

const features = [
  {
    icon: <Component size={32} />,
    title: "AI Website Builder",
    description: "Generate entire websites with stunning layouts and content automatically.",
  },
  {
    icon: <Smartphone size={32} />,
    title: "AI Mobile App Builder",
    description: "Create fully functional iOS and Android apps from a simple text prompt.",
  },
  {
    icon: <Code size={32} />,
    title: "No-Code + Low-Code",
    description: "Start with a drag-and-drop editor and extend with custom code anytime.",
  },
  {
    icon: <Brush size={32} />,
    title: "Auto UI/UX Design",
    description: "AI generates a beautiful, user-friendly interface and branding for you.",
  },
  {
    icon: <Rocket size={32} />,
    title: "Auto Deployment",
    description: "One-click deployment to our secure cloud hosting with CDN and SSL.",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Full Security Stack",
    description: "Enterprise-grade security features are built-in from the ground up.",
  },
];

export function Features() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h3 className="text-4xl font-bold text-center mb-12">Powerful Features, Fully Automated</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-secondary/30 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="text-primary mt-1">{feature.icon}</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
