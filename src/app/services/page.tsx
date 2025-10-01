"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Camera, Palette, Car } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Personal RAW Edit",
      short: "Private edit — you keep the image (paid) or get a simpler free edit with credit.",
      description:
        "Send me your RAW file and I’ll edit it to match your vision: color grading, detail recovering, denoising, upscaling, lens corrections and cinematic finishing. Paid edits grant you full usage rights without needing to credit me; free edits are simpler and require an Instagram credit / tag. Typical turnaround: 1–3 days. Paid requests get priority.",
      gradient:
        "from-pink-500 to-rose-500 dark:from-pink-600 dark:to-rose-600",
      icon: <Camera />,
      iconColor: "text-pink-600 dark:text-pink-300",
      button: "Request Edit",
      note: "",
      ref: "/workinprogress",
    },
    {
      title: "Credited RAW Edit",
      short: "Edited and featured on my Instagram (you get tagged).",
      description:
        "Perfect for collaborations: I’ll edit your RAW file and post it on my feed with full credit and a tag to your profile. Only accepting high-quality, unique shots that fit my style. Typical turnaround: 1–3 days. Not accepting paid offers.",
      gradient:
        "from-indigo-500 to-blue-500 dark:from-indigo-600 dark:to-blue-600",
      icon: <Camera />,
      iconColor: "text-indigo-600 dark:text-indigo-300",
      button: "Submit Photo",
      note: "Includes Instagram feature and tag",
      ref: "/workinprogress",
    },
    {
      title: "Custom Presets",
      short: "One-click looks for Photomator, Pixelmator and Lightroom.",
      description:
        "Get my curated presets to speed up your editing workflow. Each pack includes multiple variants (portrait, cinematic, vehicle, filmic) plus usage notes and suggested exposure/white-balance starting points. Works great as a base for batch editing.",
      gradient:
        "from-emerald-500 to-teal-500 dark:from-emerald-600 dark:to-teal-600",
      icon: <Palette />,
      iconColor: "text-emerald-600 dark:text-emerald-300",
      button: "Shop Presets",
      note: "Instant download · Includes use guide",
      ref: "/workinprogress",
    },
    {
      title: "Vehicle Photoshoot",
      short: "Cinematic car & bike shoots in selected locations.",
      description:
        "I photograph vehicles with attention to detail: stance, reflections, environment and cinematic lighting. Perfect for personal showcases or promos.",
      gradient:
        "from-orange-500 to-amber-500 dark:from-orange-600 dark:to-amber-600",
      icon: <Car />,
      iconColor: "text-orange-600 dark:text-orange-300",
      button: "Book a Shoot",
      note: "Limited-location sessions · Newer vehicles only",
      ref: "/workinprogress",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-800 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent"
        >
          My Services
        </motion.h1>

        <p className="text-center max-w-2xl mx-auto text-sm text-gray-600 dark:text-gray-300 mb-10">
          I offer tailored edits, presets and vehicle shoots. Pick the one that fits your project and click the CTA to get started.
          <br />
          <span className="italic text-xs text-yellow-600 dark:text-yellow-500">I only accept paypal.</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Card className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 shadow-sm">
                {/* gradient accent bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${s.gradient}`} />

                <CardHeader className="flex items-start gap-4 px-6 py-6">
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-xl bg-white/80 dark:bg-gray-800/80 shadow-sm ${s.iconColor}`}
                    aria-hidden
                  >
                    {/* icons are intentionally single-color (no gradient) */}
                    {s.icon}
                  </div>

                  <div className="flex-1">
                    <CardTitle className="text-lg font-semibold">{s.title}</CardTitle>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{s.short}</p>
                  </div>
                </CardHeader>

                <CardContent className="px-6 pb-6 pt-0">
                  <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">{s.description}</p>

                  <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <Button
                      aria-label={s.button}
                      className={`inline-flex items-center justify-center gap-2 px-5 py-2 rounded-lg font-semibold bg-gradient-to-r ${s.gradient} text-white shadow-md transform transition hover:-translate-y-0.5`}
                    >
                      <a href={s.ref}>
                        {s.button}
                      </a>
                    </Button>

                    {s.note && (
                      <span className="text-xs text-gray-500 dark:text-gray-400">{s.note}</span>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
