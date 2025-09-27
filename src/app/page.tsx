"use client"
import "./homeResponsive.css"
import { Button } from "@/components/ui/button"
import { Instagram, Mail, Send, MapPin, Car, Mouse as House, Mountain, Trees } from "lucide-react"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-20 dark:bg-black bg-white">
      <div id="topSection" className="w-full h-full flex flex-col justify-start items-center">
        {/* Hero Section */}
        <section id="hero" className="pt-24 pb-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div id="responsiveVertical">
                  <div className="flex justify-center sm:justify-start w-full text-3xl sm:text-4xl lg:text-5xl font-medium mb-1">
                    <p className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">luca</p>
                    <p className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">shot</p>
                    <p className="bg-gradient-to-r from-cyan-600 to-green-500 bg-clip-text text-transparent">edits</p>
                  </div>
                  <p className="text-lg sm:text-xl mb-5 text-gray-400 dark:text-gray-500 text-center sm:text-left">
                    Amateur Photographer
                  </p>
                  <p className="text-base sm:text-lg text-gray-800 dark:text-gray-400 leading-relaxed text-center sm:text-left">
                    Capturing authentic moments and natural beauty through the lens. You can find{" "}
                    <span className="font-bold">any kind of shot</span> here. From landscapes, to vehicles and urban
                    scenes.
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6 gap-4">
                    <div className="flex items-center justify-center sm:justify-start gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>Italy</span>
                    </div>
                    <div className="flex justify-center sm:justify-end gap-4">
                      <Button asChild size="sm" className="gap-2">
                        <Link
                          href="https://instagram.com/lucashotedits"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <Instagram className="w-4 h-4" />
                          Follow
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="sm" className="gap-2 bg-transparent">
                        <Link
                          href="https://wa.me/393311384552?countryName=IT&countryCode=39&phoneNumber=3311384552"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <Send className="w-4 h-4" />
                          WhatsApp
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[1/1] bg-muted rounded-lg overflow-hidden hover:scale-105 transition-transform duration-800">
                  <Image
                    src="/logo.jpg"
                    width={1200}
                    height={800}
                    sizes="(max-width: 768px) 90vw, 33vw"
                    draggable={false}
                    alt="lucashotedits - Photographer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0" onContextMenu={(e) => e.preventDefault()} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-6">
          <div className="max-w-4xl lg:max-w-[70vw] mx-auto">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <div className="md:col-span-1">
                <h2 className="text-2xl sm:text-3xl lg:text-[3vw] font-light mb-6">About</h2>
              </div>
              <div className="md:col-span-2 space-y-6">
                <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                  I'm an amateur photographer passionate about capturing the world around me. What started as a hobby
                  has evolved into a deep appreciation in the art of freezing moments in time.
                </p>
                <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                  My work focuses on authentic human connections, urban landscapes, and the beauty found in everyday
                  life. I believe that photography is about more than just technical skill; It's about seeing the
                  extraordinary in the ordinary and sharing that vision with others.
                </p>
                <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                  I also have many other hobbies: hiking, riding (motorcycles), driving, programming, gaming, and more.
                  I'm currently studying Computer Science and Engineering at university.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Photography Focus Areas */}
        <section id="wic" className="py-16 px-6">
          <div className="max-w-4xl lg:max-w-[70vw] mx-auto">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <div className="md:col-span-1">
                <h2 className="text-2xl sm:text-3xl lg:text-[3vw] font-light mb-6">What I capture</h2>
              </div>
              <div className="md:col-span-2">
                <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                  <Card className="p-6 bg-card border-border">
                    <div className="flex gap-3 mb-3">
                      <House />
                      <h3 className="text-lg sm:text-xl font-medium">Street Photography</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Documenting life as it happens on the streets. Urban architecture, and the rhythm of city life.
                    </p>
                  </Card>
                  <Card className="p-6 bg-card border-border">
                    <div className="flex gap-3 mb-3">
                      <Trees />
                      <h3 className="text-lg sm:text-xl font-medium">Wildlife & Nature</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Sunsets, forests, and the intricate details of flora and fauna.
                    </p>
                  </Card>
                  <Card className="p-6 bg-card border-border">
                    <div className="flex gap-3 mb-3">
                      <Car />
                      <h3 className="text-lg sm:text-xl font-medium">Vehicles</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Strictly non-electric vehicles. Sport cars & motorcycles with powerful combustion engines. Some
                      planes too.
                    </p>
                  </Card>
                  <Card className="p-6 bg-card border-border">
                    <div className="flex gap-3 mb-3">
                      <Mountain />
                      <h3 className="text-lg sm:text-xl font-medium">Landscapes</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Mountains, hills, coastlines and cityscapes. Capturing the beauty of our world.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Work Preview */}
        <section id="work" className="py-16 px-6 w-full items-center justify-center flex flex-col gap-12">
          <div className="max-w-4xl lg:max-w-[70vw] mx-auto">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <div className="md:col-span-1">
                <h2 className="text-2xl sm:text-3xl lg:text-[3vw] font-light mb-6">Recent Work</h2>
              </div>
              <div className="md:col-span-2">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  A selection of recent photographs showcasing different styles and subjects. Each image represents a
                  moment, a story, or an emotion captured through my lens. Updated "weekly", schedule isn't consistent.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full max-w-md sm:max-w-lg lg:w-[40vw] lg:max-w-none h-auto px-4 sm:px-0">
            <a href="https://instagram.com/lucashotedits" target="_blank" rel="noopener noreferrer">
              <Image
                src="/feed.png"
                width={1080}
                height={700}
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 50vw"
                draggable={false}
                alt="lucashotedits - Photographer"
                className="w-full h-full object-cover border-4 border-gray-800 dark:border-gray-500 rounded-2xl overflow-hidden"
              />
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-6">
          <div className="max-w-4xl lg:max-w-[70vw] mx-auto">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <div className="md:col-span-1">
                <h2 className="text-2xl sm:text-3xl lg:text-[3vw] font-light mb-6">Get in Touch</h2>
              </div>
              <div className="md:col-span-2 space-y-6">
                <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                  Interested in collaborating or have questions about my work? I'd love to hear from you. Whether it's
                  for a portrait session, event documentation, or just to chat about photography. I usually reply within
                  a couple of days.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild variant="outline" className="gap-2 bg-transparent">
                    <Link href="mailto:luca@lucashots.com">
                      <Mail className="w-4 h-4" />
                      luca@lucashots.com
                    </Link>
                  </Button>
                  <Button variant="outline" className="gap-2 bg-transparent">
                    <Instagram className="w-4 h-4" />
                    @lucashotedits
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
