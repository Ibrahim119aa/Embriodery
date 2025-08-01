"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { CheckCircle, Upload, Eye, CreditCard, Truck } from "lucide-react"

// Assuming ScrollAnimation component exists
const ScrollAnimation = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  return <div style={{ animationDelay: `${delay}ms` }}>{children}</div>
}

export default function HowItWorks() {
  const steps = [
    {
      icon: Upload,
      title: "Upload your designs",
      description: "Share your logo, artwork, or design ideas with our team",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Eye,
      title: "Receive your digital proof for approval",
      description: "Review and approve your digitized embroidery design",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: CreditCard,
      title: "Make the payment",
      description: "Secure payment processing with flexible payment options",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Truck,
      title: "Your order is produced and shipped",
      description: "Professional embroidery and fast, reliable shipping",
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section className="md:py-32 py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200&text=Geometric+Pattern')] opacity-[0.02]"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-500/10 rounded-full blur-xl animate-float"
        style={{ animationDelay: "4s" }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollAnimation>
          <div className="text-center space-y-4 mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              <CheckCircle className="w-4 h-4 mr-2" />
              Simple Process
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-slate-800 via-slate-700 to-blue-800 bg-clip-text text-transparent">
              HOW DOES IT WORK
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Simple Steps to Bring Your Custom Designs to Life!
            </p>
          </div>
        </ScrollAnimation>

        <div className="max-w-4xl mx-auto">
          <ScrollAnimation delay={400}>
            <div className="space-y-8">
              <div className="text-center mb-12">
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Whether you're creating custom apparel or promotional items, our streamlined embroidery process makes
                  it simple to bring your vision to reality.
                </p>
              </div>

              {/* Steps Grid */}
              <div className="grid gap-6 md:gap-8">
                {steps.map((step, index) => {
                  const IconComponent = step.icon
                  return (
                    <div key={index} className="group relative">
                      {/* Connection Line */}
                      {index < steps.length - 1 && (
                        <div className="absolute left-8 top-16 w-0.5 h-12 bg-gradient-to-b from-slate-300 to-transparent hidden md:block"></div>
                      )}

                      <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-100 group-hover:border-slate-200 group-hover:-translate-y-1">
                        {/* Step Number & Icon */}
                        <div className="flex items-start space-x-6">
                          <div className="relative flex-shrink-0">
                            <div
                              className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                            >
                              <IconComponent className="w-8 h-8 text-white" />
                            </div>
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-800 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                              {index + 1}
                            </div>
                          </div>

                          <div className="flex-1 space-y-3">
                            <h4 className="text-xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors">
                              {step.title}
                            </h4>
                            <p className="text-slate-600 leading-relaxed">{step.description}</p>
                          </div>
                        </div>

                        {/* Hover Effect */}
                        <div
                          className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                        ></div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* CTA Section */}
              <div className="text-center pt-12">
                <div className="inline-flex flex-col items-center space-y-6 bg-gradient-to-r from-slate-800 to-blue-800 rounded-3xl p-8 shadow-2xl">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white">Ready to Get Started?</h3>
                    <p className="text-slate-300">Transform your ideas into stunning embroidered products today</p>
                  </div>
                  <Button className="bg-white text-slate-800 hover:bg-slate-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    GET STARTED →
                  </Button>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
