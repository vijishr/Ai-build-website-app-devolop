import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">AI Builder</h1>
      <Button variant="outline">Sign In</Button>
    </header>
  );
}
