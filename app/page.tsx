import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Calendar, ClipboardList, UserCircle, ShieldCheck } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="MediCare Logo"
              width={32}
              height={32}
              className="rounded-md"
            />
            <span className="text-xl font-bold text-emerald-600">MediCare</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Features
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Services
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Login
            </Link>
            <Link href="/signup">
              <Button className="bg-emerald-600 hover:bg-emerald-700">Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-emerald-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Modern Healthcare Platform for Everyone
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Secure, efficient, and user-friendly healthcare management system for patients and medical
                    professionals.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/signup">
                    <Button className="bg-emerald-600 hover:bg-emerald-700">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#features">
                    <Button variant="outline">Learn More</Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Healthcare Dashboard"
                  width={500}
                  height={500}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Our platform offers comprehensive healthcare management tools for patients and medical professionals.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <ShieldCheck className="h-12 w-12 text-emerald-600" />
                <h3 className="text-xl font-bold">Secure Authentication</h3>
                <p className="text-center text-muted-foreground">
                  Multi-factor authentication, role-based access control, and encrypted data storage.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <UserCircle className="h-12 w-12 text-emerald-600" />
                <h3 className="text-xl font-bold">Patient Registration</h3>
                <p className="text-center text-muted-foreground">
                  Comprehensive patient profiles with medical history, emergency contacts, and preferences.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <ClipboardList className="h-12 w-12 text-emerald-600" />
                <h3 className="text-xl font-bold">Medical Records</h3>
                <p className="text-center text-muted-foreground">
                  Secure access to medical histories, test results, and treatment plans.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Calendar className="h-12 w-12 text-emerald-600" />
                <h3 className="text-xl font-bold">Appointment Scheduling</h3>
                <p className="text-center text-muted-foreground">
                  Easy booking, rescheduling, and reminders for medical appointments.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <CheckCircle className="h-12 w-12 text-emerald-600" />
                <h3 className="text-xl font-bold">Compliance</h3>
                <p className="text-center text-muted-foreground">
                  Fully compliant with healthcare regulations and data privacy standards.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <ArrowRight className="h-12 w-12 text-emerald-600" />
                <h3 className="text-xl font-bold">Seamless Experience</h3>
                <p className="text-center text-muted-foreground">
                  Intuitive interface for both patients and healthcare providers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Join thousands of patients and healthcare providers already using our platform.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">Create an Account</Button>
                </Link>
                <Link href="/login">
                  <Button variant="outline">Login</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=24&width=24"
              alt="MediCare Logo"
              width={24}
              height={24}
              className="rounded-md"
            />
            <span className="text-sm font-medium text-emerald-600">MediCare</span>
          </div>
          <p className="text-xs text-muted-foreground">© 2024 MediCare. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-emerald-600">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-emerald-600">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-xs text-muted-foreground hover:text-emerald-600">
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

