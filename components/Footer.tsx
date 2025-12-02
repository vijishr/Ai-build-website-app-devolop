export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto py-8 px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-muted-foreground text-sm text-center md:text-left">
          © {new Date().getFullYear()} AI Builder, Inc. All rights reserved.
        </p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="text-muted-foreground hover:text-primary">Twitter</a>
          <a href="#" className="text-muted-foreground hover:text-primary">LinkedIn</a>
          <a href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
