import { PresetCard } from "@/components/preset-card"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function PresetsPage() {
  const presets = [
    {
      title: "Golden Hour Glow",
      description:
        "Warm, sun-kissed tones perfect for outdoor portraits and lifestyle photography. Enhances golden hour lighting.",
      image: "/golden-hour-sunset-warm-tones-photography.jpg",
      software: ["Lightroom", "Photomator"],
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
    },
    {
      title: "Moody Cinematic",
      description:
        "Deep shadows and rich colors for dramatic, film-inspired looks. Ideal for urban and street photography.",
      image: "/moody-cinematic-dark-urban-photography.jpg",
      software: ["Lightroom", "Pixelmator", "Photomator"],
      gradient: "from-slate-600 via-gray-700 to-zinc-800",
    },
    {
      title: "Vibrant Pop",
      description:
        "Boost saturation and contrast for eye-catching, energetic photos. Perfect for social media content.",
      image: "/vibrant-colorful-pop-art-photography.jpg",
      software: ["Lightroom", "Photomator"],
      gradient: "from-pink-500 via-purple-500 to-indigo-500",
    },
    {
      title: "Clean Minimal",
      description:
        "Soft, airy tones with reduced contrast for a modern, minimalist aesthetic. Great for product photography.",
      image: "/clean-minimal-white-bright-photography.jpg",
      software: ["Lightroom", "Pixelmator"],
      gradient: "from-blue-400 via-cyan-400 to-teal-400",
    },
    {
      title: "Vintage Film",
      description: "Classic film emulation with subtle grain and faded colors. Brings nostalgic warmth to any image.",
      image: "/vintage-film-retro-analog-photography.jpg",
      software: ["Lightroom", "Photomator", "Pixelmator"],
      gradient: "from-amber-600 via-orange-600 to-red-600",
    },
    {
      title: "Cool Teal & Orange",
      description: "Hollywood-style color grading with complementary teal shadows and orange highlights.",
      image: "/teal-and-orange-cinematic-color-grading.jpg",
      software: ["Lightroom", "Pixelmator"],
      gradient: "from-teal-500 via-cyan-500 to-orange-500",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <Link
            href="/services"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Services
          </Link>
          <div className="text-center">
            <h1 className=" text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent dark:from-orange-400 dark:via-amber-400 dark:to-yellow-400">
                Photo Presets
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Transform your photos instantly with my signature editing presets. Compatible with popular editing
              software for seamless workflow integration.
            </p>
            <Link
              href="#how-it-works"
              className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowRight className="h-4 w-4" />
              How it works
            </Link>
          </div>
        </div>

      </section>

      {/* Presets Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {presets.map((preset, index) => (
            <PresetCard key={index} {...preset} />
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section id="how-it-works" className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 p-8 sm:p-12">
            <div className="relative">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                  How It Works
                </span>
              </h2>
              <div className="grid gap-6 sm:grid-cols-3">
                <div>
                  <div className="mb-2 text-2xl font-bold text-primary">01</div>
                  <h3 className="mb-2 font-semibold">Choose Your Preset</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Browse through the collection and select the preset that matches your style.
                  </p>
                </div>
                <div>
                  <div className="mb-2 text-2xl font-bold text-primary">02</div>
                  <h3 className="mb-2 font-semibold">Download Instantly</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Get immediate access to your preset files compatible with your editing software.
                  </p>
                </div>
                <div>
                  <div className="mb-2 text-2xl font-bold text-primary">03</div>
                  <h3 className="mb-2 font-semibold">Apply & Edit</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Import the preset and apply it to your photos with a single click. Adjust to taste.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
