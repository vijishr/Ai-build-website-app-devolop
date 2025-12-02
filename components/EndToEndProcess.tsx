import { GitBranch, BrainCircuit, Pencil, Rocket, LayoutDashboard } from "lucide-react";

const processSteps = [
  {
    icon: <BrainCircuit size={32} />,
    title: "1. Idea & Input Flow",
    description: "Describe your project, requirements, pages, features, and select your desired style and color theme.",
  },
  {
    icon: <GitBranch size={32} />,
    title: "2. AI Generation Engine",
    description: "The AI generates the full website layout, app screens, content, branding, sitemap, and navigation system.",
  },
  {
    icon: <Pencil size={32} />,
    title: "3. Editor & Customization",
    description: "Use the real-time drag-and-drop editor to customize every aspect of your generated project.",
  },
  {
    icon: <Rocket size={32} />,
    title: "4. One-Click Deployment",
    description: "Publish your full stack application, including frontend and backend, with a single click.",
  },
  {
    icon: <LayoutDashboard size={32} />,
    title: "5. Dashboard & Management",
    description: "Manage your live application, view analytics, user data, and access hosting information.",
  },
];

export function EndToEndProcess() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h3 className="text-4xl font-bold text-center mb-12">Our End-to-End Process</h3>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border" aria-hidden="true"></div>
          {processSteps.map((step, index) => (
            <div key={index} className="relative flex items-start gap-8 mb-12">
              <div className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-secondary text-primary">
                  {step.icon}
                </div>
              </div>
              <div className={index % 2 === 0 ? 'text-left' : 'text-left'}>
                <h4 className="text-2xl font-semibold mb-2">{step.title}</h4>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
