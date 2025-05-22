"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, CheckCircle, Mail, User, KeyRound, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function SignupPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "patient",
    agreeTerms: false,
    agreePrivacy: false,
  })
  const [error, setError] = useState("")
  const [emailVerified, setEmailVerified] = useState(false)
  const [verificationCode, setVerificationCode] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const validateStep1 = () => {
    if (!formData.firstName || !formData.lastName || !formData.email) {
      setError("Please fill in all required fields")
      return false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address")
      return false
    }

    setError("")
    return true
  }

  const validateStep2 = () => {
    if (!formData.password || !formData.confirmPassword) {
      setError("Please fill in all required fields")
      return false
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long")
      return false
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      return false
    }

    setError("")
    return true
  }

  const validateStep3 = () => {
    if (!formData.agreeTerms || !formData.agreePrivacy) {
      setError("You must agree to the terms and privacy policy")
      return false
    }

    setError("")
    return true
  }

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2)
    } else if (step === 2 && validateStep2()) {
      setStep(3)
    } else if (step === 3 && validateStep3()) {
      // Simulate email verification
      setStep(4)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleVerifyEmail = () => {
    if (!verificationCode) {
      setError("Please enter the verification code")
      return
    }

    // Simulate successful verification
    if (verificationCode === "123456") {
      setEmailVerified(true)
      setError("")
    } else {
      setError("Invalid verification code")
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (emailVerified) {
      // Simulate successful registration
      router.push("/dashboard")
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex min-h-screen flex-col items-center justify-center p-4 md:p-8">
        <Link
          href="/"
          className="absolute left-4 top-4 flex items-center text-sm font-medium text-muted-foreground hover:text-emerald-600"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
          <div className="flex flex-col space-y-2 text-center">
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="MediCare Logo"
                width={40}
                height={40}
                className="rounded-md"
              />
            </div>
            <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
            <p className="text-sm text-muted-foreground">Join our healthcare platform to manage your medical needs</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Step {step} of 4</CardTitle>
              <CardDescription>
                {step === 1 && "Personal Information"}
                {step === 2 && "Create Password"}
                {step === 3 && "Terms & Conditions"}
                {step === 4 && "Email Verification"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {error && (
                <Alert variant="destructive" className="mb-4">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="firstName"
                            name="firstName"
                            placeholder="John"
                            className="pl-10"
                            value={formData.firstName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="lastName"
                            name="lastName"
                            placeholder="Doe"
                            className="pl-10"
                            value={formData.lastName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="name@example.com"
                          className="pl-10"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">I am a</Label>
                      <Select value={formData.role} onValueChange={(value) => handleSelectChange("role", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="patient">Patient</SelectItem>
                          <SelectItem value="doctor">Doctor</SelectItem>
                          <SelectItem value="admin">Administrator</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <KeyRound className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="password"
                          name="password"
                          type="password"
                          className="pl-10"
                          value={formData.password}
                          onChange={handleChange}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Password must be at least 8 characters and include uppercase, lowercase, numbers, and special
                        characters
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <div className="relative">
                        <KeyRound className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="confirmPassword"
                          name="confirmPassword"
                          type="password"
                          className="pl-10"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="agreeTerms"
                          name="agreeTerms"
                          checked={formData.agreeTerms}
                          onCheckedChange={(checked) => setFormData({ ...formData, agreeTerms: checked as boolean })}
                        />
                        <label
                          htmlFor="agreeTerms"
                          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          I agree to the{" "}
                          <Link href="/terms" className="text-emerald-600 hover:underline">
                            Terms of Service
                          </Link>
                        </label>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="agreePrivacy"
                          name="agreePrivacy"
                          checked={formData.agreePrivacy}
                          onCheckedChange={(checked) => setFormData({ ...formData, agreePrivacy: checked as boolean })}
                        />
                        <label
                          htmlFor="agreePrivacy"
                          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          I agree to the{" "}
                          <Link href="/privacy" className="text-emerald-600 hover:underline">
                            Privacy Policy
                          </Link>{" "}
                          and consent to the processing of my personal data
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-4">
                    {!emailVerified ? (
                      <>
                        <div className="text-center">
                          <p className="mb-4">
                            We&apos;ve sent a verification code to your email address. Please enter the code below to
                            verify your account.
                          </p>
                          <div className="space-y-2">
                            <Label htmlFor="verificationCode">Verification Code</Label>
                            <Input
                              id="verificationCode"
                              value={verificationCode}
                              onChange={(e) => setVerificationCode(e.target.value)}
                              className="text-center"
                              maxLength={6}
                            />
                          </div>
                          <Button type="button" variant="link" className="text-emerald-600 hover:underline mt-2">
                            Resend verification code
                          </Button>
                          <Button
                            type="button"
                            onClick={handleVerifyEmail}
                            className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700"
                          >
                            Verify Email
                          </Button>
                        </div>
                      </>
                    ) : (
                      <div className="text-center space-y-4">
                        <div className="flex justify-center">
                          <CheckCircle className="h-16 w-16 text-emerald-600" />
                        </div>
                        <h3 className="text-xl font-bold">Email Verified!</h3>
                        <p>Your email has been successfully verified.</p>
                        <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                          Complete Registration
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              {step > 1 && step < 4 && (
                <Button type="button" variant="outline" onClick={handleBack}>
                  Back
                </Button>
              )}
              {step < 4 && (
                <Button type="button" className="ml-auto bg-emerald-600 hover:bg-emerald-700" onClick={handleNext}>
                  Continue
                </Button>
              )}
              {step === 1 && (
                <div className="text-center text-sm ml-auto mr-auto">
                  Already have an account?{" "}
                  <Link href="/login" className="text-emerald-600 hover:underline">
                    Sign in
                  </Link>
                </div>
              )}
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

