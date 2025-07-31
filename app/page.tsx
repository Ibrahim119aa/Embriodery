"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Scissors,
  Star,
  ArrowRight,
  Play,
  Palette,
  Truck,
  Award,
  Clock,
  Users,
  Shield,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ScrollAnimation } from "@/components/scroll-animation"
import { useEffect, useState } from "react"

export default function LandingPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 transition-all duration-300">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2 animate-fade-in-left">
            <Image src={'/logo.png'} width={20} height={15} className="w-20 h-14" alt=""></Image>
          </div>

          <nav className="hidden md:flex items-center space-x-8 animate-fade-in-up">
            <Link
              href="#products"
              className="text-sm font-medium hover:text-blue-600 transition-all duration-300 hover:scale-105"
            >
              Products
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium hover:text-blue-600 transition-all duration-300 hover:scale-105"
            >
              Services
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium hover:text-blue-600 transition-all duration-300 hover:scale-105"
            >
              Reviews
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium hover:text-blue-600 transition-all duration-300 hover:scale-105"
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-blue-600 transition-all duration-300 hover:scale-105"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4 animate-fade-in-right">
            <Button variant="ghost" className="hidden md:inline-flex hover:scale-105 transition-transform duration-300">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-[#51b9e5] hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-300 hover-glow">
              Order Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200&text=Pattern')] opacity-5 parallax"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge
                  variant="secondary"
                  className={`bg-blue-100 text-blue-700 hover:bg-blue-200 animate-scale-in ${isLoaded ? "stagger-1" : ""}`}
                >
                  🧵 Premium Quality Embroidery
                </Badge>
                <h1
                  className={`text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up ${isLoaded ? "stagger-2" : ""}`}
                >
                  Custom Embroidery
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent gradient-text">
                    {" "}
                    Made Perfect
                  </span>
                </h1>
                <p className={`text-xl text-gray-600 max-w-2xl animate-fade-in-up ${isLoaded ? "stagger-3" : ""}`}>
                  Transform your ideas into stunning embroidered products. From corporate apparel to custom accessories,
                  we bring your designs to life with precision and quality.
                </p>
              </div>

              <div className={`flex flex-col sm:flex-row gap-4 animate-fade-in-up ${isLoaded ? "stagger-4" : ""}`}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6 hover-lift animate-shimmer"
                >
                  Start Your Order
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent hover-lift">
                  <Play className="mr-2 h-5 w-5" />
                  View Gallery
                </Button>
              </div>

              <div
                className={`flex items-center space-x-8 text-sm text-gray-600 animate-fade-in-up ${isLoaded ? "stagger-5" : ""}`}
              >
                <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Free design consultation</span>
                </div>
                <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Fast turnaround</span>
                </div>
                <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Quality guarantee</span>
                </div>
              </div>
            </div>

            <div className={`relative animate-fade-in-right ${isLoaded ? "stagger-3" : ""}`}>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-3xl opacity-20 animate-float"></div>
              <Image
                src="/placeholder.svg?height=600&width=800&text=Embroidery+Showcase"
                alt="Custom Embroidery Showcase"
                width={800}
                height={600}
                className="relative rounded-2xl shadow-2xl hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <ScrollAnimation>
            <div className="text-center space-y-4 mb-16">
              <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                Our Services
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Professional embroidery services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From concept to completion, we offer comprehensive embroidery solutions for all your needs.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <ScrollAnimation delay={100}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover-lift hover-glow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mb-4 animate-float">
                    <Scissors className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Custom Embroidery</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    High-quality custom embroidery on apparel, accessories, and promotional items with precision
                    stitching.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover-lift hover-glow">
                <CardHeader>
                  <div
                    className="h-12 w-12 rounded-lg bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center mb-4 animate-float"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <Palette className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Design Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Professional design consultation and digitization services to bring your vision to life perfectly.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover-lift hover-glow">
                <CardHeader>
                  <div
                    className="h-12 w-12 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mb-4 animate-float"
                    style={{ animationDelay: "1s" }}
                  >
                    <Truck className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Fast Delivery</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Quick turnaround times with reliable shipping options to meet your deadlines and expectations.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={400}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover-lift hover-glow">
                <CardHeader>
                  <div
                    className="h-12 w-12 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center mb-4 animate-float"
                    style={{ animationDelay: "1.5s" }}
                  >
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Quality Guarantee</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Premium materials and expert craftsmanship with 100% satisfaction guarantee on all orders.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section id="products" className="py-20 md:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container px-4 md:px-6">
          <ScrollAnimation>
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Fuel Your Brand's
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent gradient-text">
                  {" "}
                  Next Big Move
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Create with custom embroidery, labels, and accessories that make your brand memorable to achieve.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {[
              {
                title: "Apparel & Accessories",
                description:
                  "Custom embroidery on t-shirts, polos, hoodies, hats, bags, and more. Perfect for corporate uniforms, team apparel, and promotional merchandise.",
                features: [
                  "Corporate and team apparel",
                  "Custom logo embroidery",
                  "Wide range of materials and colors",
                ],
                gradient: "from-blue-500 to-blue-600",
                delay: 100,
              },
              {
                title: "Labels & Packaging",
                description:
                  "Professional embroidered labels, patches, and packaging solutions. Perfect for branding, product identification, and premium finishing touches.",
                features: [
                  "Custom woven and embroidered labels",
                  "Iron-on and sew-on patches",
                  "Premium packaging solutions",
                ],
                gradient: "from-amber-600 to-amber-700",
                delay: 200,
              },
              {
                title: "Pins & Keychains",
                description:
                  "Custom embroidered pins, keychains, and small accessories. Great for promotional items, awards, and memorable keepsakes.",
                features: [
                  "Embroidered fabric pins and patches",
                  "Custom keychains and lanyards",
                  "Promotional and award items",
                ],
                gradient: "from-emerald-500 to-emerald-600",
                delay: 300,
              },
              {
                title: "Ribbons & Tapes",
                description:
                  "Custom embroidered ribbons, tapes, and trims for special occasions, awards, and decorative purposes. Perfect for events and ceremonies.",
                features: [
                  "Award ribbons and sashes",
                  "Decorative trims and borders",
                  "Event and ceremony accessories",
                ],
                gradient: "from-purple-500 to-purple-600",
                delay: 400,
              },
              {
                title: "Drinkware & Flasks",
                description:
                  "Custom embroidered cozies, sleeves, and accessories for drinkware. Perfect for corporate gifts, events, and promotional merchandise.",
                features: ["Bottle and can cozies", "Flask sleeves and accessories", "Corporate gift solutions"],
                gradient: "from-orange-500 to-orange-600",
                delay: 500,
              },
              {
                title: "Custom Accessories",
                description:
                  "Unique embroidered accessories and specialty items. From custom designs to personalized gifts, we create exactly what you envision.",
                features: [
                  "Personalized gifts and keepsakes",
                  "Specialty embroidered items",
                  "Custom design consultation",
                ],
                gradient: "from-pink-500 to-pink-600",
                delay: 600,
              },
            ].map((product, index) => (
              <ScrollAnimation key={index} delay={product.delay}>
                <Card
                  className={`border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-gradient-to-br ${product.gradient} text-white overflow-hidden relative hover-lift hover-glow group`}
                >
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold">{product.title}</CardTitle>
                    <p className="text-white/90 text-sm">{product.description}</p>
                    <ul className="space-y-2 text-sm text-white/80 mt-4">
                      {product.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center space-x-2 transform transition-transform duration-300 group-hover:translate-x-1"
                        >
                          <CheckCircle className="h-4 w-4" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button className="bg-red-600 hover:bg-red-700 text-white hover-lift transition-all duration-300">
                      EXPLORE MORE →
                    </Button>
                  </CardContent>
                  <div className="absolute -bottom-4 -right-4 opacity-20 transition-all duration-500 group-hover:opacity-30 group-hover:scale-110">
                    <Image
                      src={`/placeholder.svg?height=120&width=120&text=${product.title.split(" ")[0]}`}
                      alt={product.title}
                      width={120}
                      height={120}
                    />
                  </div>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className=" md:py-32 bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200&text=Embroidery+Pattern')] opacity-5 parallax"></div>
        <div className="flex  justify-center items-center flex-col md:px-6 relative">
          <ScrollAnimation>
            <div className="text-center space-y-2 mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white gradient-text">
                HOW DOES IT WORK
              </h2>
            </div>
          </ScrollAnimation>

          <div className="flex   justify-center items-center">


            <ScrollAnimation delay={400}>
              <div className="space-y-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white">
                    Simple Steps to Bring

                    Your Custom Designs

                    to Life!
                  </h3>
                  <p className="text-blue-200 text-lg">
                    Whether you're creating custom apparel or promotional items, our streamlined embroidery process
                    makes it simple to bring your vision to reality.
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        title: "Upload your designs",
                        description: "Share your logo, artwork, or design ideas with our team",
                      },
                      {
                        title: "Receive your digital proof for approval",
                        description: "Review and approve your digitized embroidery design",
                      },
                      {
                        title: "Make the payment",
                        description: "Secure payment processing with flexible payment options",
                      },
                      {
                        title: "Your order is produced and shipped",
                        description: "Professional embroidery and fast, reliable shipping",
                      },
                    ].map((step, index) => (
                      <div
                        key={index}
                        className={`flex items-start space-x-4 animate-fade-in-right stagger-${index + 1} hover:translate-x-2 transition-transform duration-300`}
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0 animate-pulse-glow">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">{step.title}</h4>
                          <p className="text-blue-200 text-sm">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-semibold hover-lift animate-shimmer">
                    GET STARTED →
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 md:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <ScrollAnimation>
            <div className="text-center space-y-4 mb-16">
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                Customer Reviews
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Trusted by businesses worldwide
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See what our customers have to say about our embroidery services.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Sarah Johnson",
                role: "Marketing Director, TechStart",
                review:
                  "EmbroidCraft delivered exceptional quality on our corporate polo shirts. The embroidery was perfect and the turnaround time was impressive. Highly recommended!",
                delay: 100,
              },
              {
                name: "Michael Chen",
                role: "Owner, Chen's Restaurant",
                review:
                  "The custom embroidered aprons and uniforms look fantastic! The team helped us design something unique that perfectly represents our brand. Great service!",
                delay: 200,
              },
              {
                name: "Emily Rodriguez",
                role: "Event Coordinator, Elite Events",
                review:
                  "We needed custom patches and ribbons for a large corporate event. EmbroidCraft handled everything professionally and delivered on time. The quality exceeded our expectations!",
                delay: 300,
              },
            ].map((testimonial, index) => (
              <ScrollAnimation key={index} delay={testimonial.delay}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover-lift hover-glow">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Image
                        src={`/placeholder.svg?height=48&width=48&text=${testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}`}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="rounded-full animate-float"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 fill-yellow-400 text-yellow-400 animate-scale-in stagger-${i + 1}`}
                        />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">"{testimonial.review}"</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <ScrollAnimation>
            <div className="text-center space-y-4 mb-16">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                Pricing
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Professional embroidery pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transparent pricing for quality embroidery services. Volume discounts and custom quotes available.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            <ScrollAnimation delay={100}>
              <Card className="border-2 hover:border-blue-200 transition-all duration-500 hover-lift">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">Basic</CardTitle>
                    <Clock className="h-5 w-5 text-gray-400" />
                  </div>
                  <CardDescription>Perfect for small orders and simple designs</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold gradient-text">$25</span>
                    <span className="text-gray-600">/setup + $8/piece</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Minimum order: 12 pieces</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Up to 8,000 stitches</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Standard thread colors</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">7-10 business days</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Basic digitizing included</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Email support</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-transparent hover-lift" variant="outline">
                    Get Quote
                  </Button>
                </CardFooter>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <Card className="border-2 border-blue-500 relative hover:border-blue-600 transition-all duration-500 hover-lift hover-glow">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-500 text-white animate-pulse-glow">Most Popular</Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">Professional</CardTitle>
                    <Users className="h-5 w-5 text-blue-500" />
                  </div>
                  <CardDescription>Best for businesses and bulk orders</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold gradient-text">$50</span>
                    <span className="text-gray-600">/setup + $6/piece</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Minimum order: 24 pieces</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Up to 15,000 stitches</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Premium thread options</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">5-7 business days</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Professional digitizing</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Priority support</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Free design consultation</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover-lift animate-shimmer">
                    Get Quote
                  </Button>
                </CardFooter>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <Card className="border-2 hover:border-purple-200 transition-all duration-500 hover-lift">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">Enterprise</CardTitle>
                    <Shield className="h-5 w-5 text-purple-500" />
                  </div>
                  <CardDescription>For large corporations and ongoing projects</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold gradient-text">$100</span>
                    <span className="text-gray-600">/setup + $4/piece</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Minimum order: 50 pieces</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Unlimited stitches</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Specialty threads & materials</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">3-5 business days</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Custom digitizing & editing</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Dedicated account manager</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Volume discounts available</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-transparent hover-lift" variant="outline">
                    Contact Sales
                  </Button>
                </CardFooter>
              </Card>
            </ScrollAnimation>
          </div>

          <ScrollAnimation delay={400}>
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                * Setup fees are one-time charges per design. Volume discounts available for orders over 100 pieces.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                <span className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Free shipping on orders over $500</span>
                </span>
                <span className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Rush orders available</span>
                </span>
                <span className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>100% satisfaction guarantee</span>
                </span>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Final CTA Section */}
      {/* <section className="py-20 md:py-32 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200&text=Pattern')] opacity-10 parallax"></div>
        <div className="container px-4 md:px-6 relative">
          <ScrollAnimation>
            <div className="text-center space-y-8 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white animate-fade-in-up">
                Ready to bring your designs to life?
              </h2>
              <p className="text-xl text-blue-100 animate-fade-in-up stagger-2">
                Join thousands of satisfied customers who trust EmbroidCraft for their custom embroidery needs. Get
                started with your project today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-3">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 hover-lift animate-shimmer"
                >
                  Start Your Order
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6 bg-transparent hover-lift"
                >
                  View Portfolio
                </Button>
              </div>
              <p className="text-sm text-blue-100 animate-fade-in-up stagger-4">
                Free design consultation • Fast turnaround • Quality guarantee
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section> */}

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="container px-4 md:px-6">
          <ScrollAnimation>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 animate-fade-in-left">
                  <Image src={'/logo.png'} width={20} height={15} className="w-20 h-14" alt=""></Image>
                </div>
                <p className="text-gray-400 max-w-xs">
                  Professional custom embroidery services for businesses, organizations, and individuals. Quality
                  craftsmanship guaranteed.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Services</h4>
                <div className="space-y-2 text-sm">
                  <Link
                    href="#"
                    className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1"
                  >
                    Custom Embroidery
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1"
                  >
                    Design Services
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1"
                  >
                    Corporate Apparel
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1"
                  >
                    Promotional Items
                  </Link>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Company</h4>
                <div className="space-y-2 text-sm">
                  <Link
                    href="#"
                    className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1"
                  >
                    About Us
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1"
                  >
                    Portfolio
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1"
                  >
                    Quality Promise
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1"
                  >
                    Contact
                  </Link>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Support</h4>
                <div className="space-y-2 text-sm">
                  <Link
                    href="#"
                    className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1"
                  >
                    Order Tracking
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1"
                  >
                    Size Guides
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1"
                  >
                    Care Instructions
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1"
                  >
                    Returns & Exchanges
                  </Link>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-400">© {new Date().getFullYear()} EmbroidCraft. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </footer>
    </div>
  )
}
