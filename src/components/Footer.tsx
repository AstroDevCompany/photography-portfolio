"use client";
import { Camera } from "lucide-react"

export default function Header() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Camera className="w-5 h-5" />
            <span className="font-mono">Luca's Photography</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2025 Luca Montanari. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
