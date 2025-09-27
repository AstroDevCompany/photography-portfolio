"use client";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button"
import { Instagram, Mail, Send, MapPin } from "lucide-react"
import { Card } from "@/components/ui/card"
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-20 dark:bg-black bg-white">
      <div id="topSection" className="w-full h-full flex flex-col justify-start items-center">

        {/* Hero Section */}
        <section id="hero" className="pt-24 pb-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <div className="flex justify-center w-[50%] text-5xl font-medium mb-1">
                    <p className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">luca</p>
                    <p className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">shot</p>
                    <p className="bg-gradient-to-r from-cyan-600 to-green-500 bg-clip-text text-transparent">edits</p>
                  </div>
                  <p className="text-xl mb-5 text-gray-400 dark:text-gray-500">Amateur Photographer</p>
                  <p className="text-lg text-gray-800 dark:text-gray-400 leading-relaxed">
                    Capturing authentic moments and natural beauty through the lens. You can find <span className="font-bold">any kind of shot</span> here. From landscapes, to vehicles and urban scenes.
                  </p>
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>Italy</span>
                    </div>
                    <div className="flex justify-end gap-4 mr-2">
                      <Button asChild size="sm" className="gap-2">
                        <Link href="https://instagram.com/lucashotedits" target="_blank" rel="noopener noreferrer" className="flex items-center">
                          <Instagram className="w-4 h-4" />
                          Follow
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="sm" className="gap-2 bg-transparent">
                        <Link href="https://wa.me/393311384552?countryName=IT&countryCode=39&phoneNumber=3311384552" target="_blank" rel="noopener noreferrer" className="flex items-center">
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
                    sizes="33vw" //Render resolution = 1/3 of screen
                    draggable={false}
                    alt="lucashotedits - Photographer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0" onContextMenu={(e) => e.preventDefault()} /> {/* Prevent right-click on image */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-1">
                <h2 className="text-2xl font-light mb-6">About</h2>
              </div>
              <div className="md:col-span-2 space-y-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I'm an amateur photographer passionate about capturing the world around me. What started as a hobby has
                  evolved into a deep appreciation for visual storytelling and the art of freezing moments in time.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  My work focuses on authentic human connections, urban landscapes, and the beauty found in everyday life.
                  I believe that photography is about more than just technical skill—it's about seeing the extraordinary
                  in the ordinary and sharing that vision with others.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  When I'm not behind the camera, you can find me exploring new neighborhoods, reading about photography
                  techniques, or planning my next photo walk through the city.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Photography Focus Areas */}
        <section id="wic" className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-1">
                <h2 className="text-2xl font-light mb-6">What I Capture</h2>
              </div>
              <div className="md:col-span-2">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="p-6 bg-card border-border">
                    <h3 className="text-xl font-medium mb-3">Street Photography</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Documenting life as it happens on the streets of San Francisco. Candid moments, urban architecture,
                      and the rhythm of city life.
                    </p>
                  </Card>
                  <Card className="p-6 bg-card border-border">
                    <h3 className="text-xl font-medium mb-3">Portraits</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Natural, authentic portraits that capture personality and emotion. Working with available light to
                      create intimate, genuine images.
                    </p>
                  </Card>
                  <Card className="p-6 bg-card border-border">
                    <h3 className="text-xl font-medium mb-3">Landscapes</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Exploring the natural beauty of Northern California. From coastal scenes to mountain vistas,
                      capturing the changing light and seasons.
                    </p>
                  </Card>
                  <Card className="p-6 bg-card border-border">
                    <h3 className="text-xl font-medium mb-3">Documentary</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Telling stories through images. Local events, community gatherings, and the small moments that make
                      up our shared human experience.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Work Preview */}
        <section id="work" className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              <div className="md:col-span-1">
                <h2 className="text-2xl font-light mb-6">Recent Work</h2>
              </div>
              <div className="md:col-span-2">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A selection of recent photographs showcasing different styles and subjects. Each image represents a
                  moment, a story, or an emotion captured through my lens.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                <img
                  src="/urban-street-bw.png"
                  alt="Street photography sample"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                <img
                  src="/natural-portrait-photography-golden-hour.jpg"
                  alt="Portrait photography sample"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                <img
                  src="/landscape-photography-california-coast-sunset.jpg"
                  alt="Landscape photography sample"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                <img
                  src="/documentary-photography-community-event.jpg"
                  alt="Documentary photography sample"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                <img
                  src="/architectural-photography-san-francisco-buildings.jpg"
                  alt="Architecture photography sample"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                <img
                  src="/nature-photography-macro-close-up-details.jpg"
                  alt="Nature photography sample"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-1">
                <h2 className="text-2xl font-light mb-6">Get in Touch</h2>
              </div>
              <div className="md:col-span-2 space-y-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Interested in collaborating or have questions about my work? I'd love to hear from you. Whether it's for
                  a portrait session, event documentation, or just to chat about photography.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild variant="outline" className="gap-2">
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
  );
}
