"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Heart, Award, Users, Target } from "lucide-react"

// ScrollAnimation component (assuming it exists in your project)
const ScrollAnimation = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  return (
    <div className="animate-fade-in-up" style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export default function AboutUsSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">About Our Company</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Crafting Excellence Since 2010</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate about bringing your designs to life with precision, quality, and unmatched attention to
            detail.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          <ScrollAnimation delay={100}>
            <Card className="border-2 hover:border-blue-200 transition-all duration-500 hover-lift">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                  <Target className="h-5 w-5 text-blue-500" />
                </div>
                <div className="mt-4">
                  <span className="text-4xl font-bold gradient-text">15+</span>
                  <span className="text-gray-600"> Years Experience</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 mb-4">
                  To deliver premium embroidery services that exceed expectations and help businesses make lasting
                  impressions.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Quality-first approach</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Customer satisfaction guaranteed</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Innovative design solutions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Sustainable practices</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <Card className="border-2 border-blue-500 relative hover:border-blue-600 transition-all duration-500 hover-lift hover-glow">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-500 text-white animate-pulse-glow">Our Expertise</Badge>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Master Craftsmen</CardTitle>
                  <Award className="h-5 w-5 text-blue-500" />
                </div>
                <div className="mt-4">
                  <span className="text-4xl font-bold gradient-text">50K+</span>
                  <span className="text-gray-600"> Projects Completed</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 mb-4">
                  Our team of skilled artisans combines traditional techniques with cutting-edge technology.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Certified embroidery specialists</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Advanced digitizing expertise</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Multi-industry experience</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Continuous training & development</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Award-winning designs</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation delay={300}>
            <Card className="border-2 hover:border-purple-200 transition-all duration-500 hover-lift">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Our Promise</CardTitle>
                  <Heart className="h-5 w-5 text-purple-500" />
                </div>
                <div className="mt-4">
                  <span className="text-4xl font-bold gradient-text">99%</span>
                  <span className="text-gray-600"> Customer Satisfaction</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 mb-4">
                  We're committed to building lasting relationships through exceptional service and quality.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">On-time delivery guarantee</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Quality assurance process</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Transparent communication</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Competitive pricing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Eco-friendly materials</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>

        <div className="text-center mt-16">
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover-lift animate-shimmer text-lg px-8 py-3">
            <Users className="mr-2 h-5 w-5" />
            Meet Our Team
          </Button>
        </div>
      </div>
    </section>
  )
}
