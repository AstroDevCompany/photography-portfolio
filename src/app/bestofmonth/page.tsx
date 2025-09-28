"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Camera, Eye, X } from "lucide-react"

interface Photo {
  id: number
  title: string
  description: string
  views: number
  src: string
}

const photos: Photo[] = [
  {
    id: 1,
    title: "Gares' Waterfall",
    description: "Captured during the perfect golden hour when the light danced across the still waters.",
    views: 100,
    src: "/bestofmonth/IMG_1020.jpg",
  },
  {
    id: 2,
    title: "Fedaia Lake",
    description: "The rhythm of city life captured in a single frame during rush hour.",
    views: 75,
    src: "/bestofmonth/IMG_0905.jpg",
  },
  {
    id: 3,
    title: "Valparola Pass Lake",
    description: "Morning mist revealing the ancient secrets of the old-growth forest.",
    views: 100,
    src: "/bestofmonth/IMG_0907.jpg",
  },
  {
    id: 4,
    title: "Giau Pass",
    description: "Modern geometry meets timeless design in this downtown masterpiece.",
    views: 100,
    src: "/bestofmonth/BS_Mountain.jpg",
  },
]

export default function BestOfMonthPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-light text-balance">
                Best Shots of the Month
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base text-pretty">
                September 2025 • Curated collection of my finest work
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="text-xs sm:text-sm">
                <Camera className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />4 Featured
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Photo Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {photos.map((photo, index) => (
            <article key={photo.id} className="group cursor-pointer" onClick={() => setSelectedPhoto(photo)}>
              <div className="relative overflow-hidden rounded-sm bg-muted">
                <img
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.title}
                  className="w-full h-64 sm:h-72 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Badge variant="secondary" className="text-xs bg-background/90 text-foreground">
                    <Eye className="w-3 h-3 mr-1" />
                    {photo.views.toLocaleString()}+
                  </Badge>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
                <h2 className="text-lg sm:text-xl font-playfair font-light text-balance group-hover:text-primary transition-colors">
                  {photo.title}
                </h2>

                <p className="text-sm text-muted-foreground text-pretty leading-relaxed line-clamp-2 sm:line-clamp-none">
                  {photo.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </main>

      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="max-w-4xl w-full bg-card rounded-sm overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedPhoto.src || "/placeholder.svg"}
                alt={selectedPhoto.title}
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white hover:bg-white/20 bg-black/20"
                onClick={() => setSelectedPhoto(null)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-playfair font-light">{selectedPhoto.title}</h3>
                <p className="text-muted-foreground text-pretty text-sm sm:text-base">{selectedPhoto.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
