import { PencilRuler, Bot, Rocket } from "lucide-react";

const steps = [
  {
    icon: <PencilRuler size={40} />,
    title: "1. Describe Your Idea",
    description: "Start by providing a detailed description of your business, project, or app concept. Our AI understands your requirements.",
  },
  {
    icon: <Bot size={40} />,
    title: "2. AI Generates Everything",
    description: "The AI engine builds the full application stack: frontend, backend, database, and all necessary content and branding.",
  },
  {
    icon: <Rocket size={40} />,
    title: "3. Customize & Deploy",
    description: "Use the drag-and-drop editor to make final tweaks, then deploy your live website or app with a single click.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <h3 className="text-4xl font-bold text-center mb-12">How It Works</h3>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-4 text-primary">{step.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
