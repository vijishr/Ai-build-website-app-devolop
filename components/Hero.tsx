import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-4">
      <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
        Build Your App with AI
      </h2>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
        Describe your vision, and let our AI generate everything from UI design to backend code. Go from idea to deployment in minutes.
      </p>
      <Button size="lg">
        Start Your 7-Day Free Trial
      </Button>
    </section>
  );
}
