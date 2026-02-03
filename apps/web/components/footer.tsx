import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Logo variant="script" scriptClassName="text-xl md:text-2xl font-semibold text-foreground" />
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 AlphaHuman by Harlan Research. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
