import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download } from "lucide-react"
import Image from "next/image"

interface PresetCardProps {
  title: string
  description: string
  image: string
  software: string[]
  gradient: string
}

export function PresetCard({ title, description, image, software, gradient }: PresetCardProps) {
  return (
    <Card className="group relative overflow-hidden transition-all hover:shadow-xl">
      {/* Image Preview */}
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 mix-blend-overlay transition-opacity group-hover:opacity-30`}
        />
      </div>

      <CardHeader>
        <div className="mb-2 flex flex-wrap gap-2">
          {software.map((soft) => (
            <Badge key={soft} variant="secondary" className="text-xs">
              {soft}
            </Badge>
          ))}
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
      </CardHeader>

      <CardContent>
        <button
          className={`flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r ${gradient} px-4 py-2.5 font-semibold text-white shadow-md transition-all hover:shadow-lg hover:brightness-110`}
        >
          <Download className="h-4 w-4" />
          Download Preset
        </button>
      </CardContent>
    </Card>
  )
}
