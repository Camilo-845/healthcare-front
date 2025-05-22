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
import { AlertCircle, ArrowLeft, KeyRound, Mail, ShieldCheck } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [code, setCode] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [showTwoFactor, setShowTwoFactor] = useState(false)
  const [error, setError] = useState("")
  const [loginAttempts, setLoginAttempts] = useState(0)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    // Simulate login validation
    if (!email || !password) {
      setError("Please enter both email and password")
      return
    }

    // Simulate failed login attempts
    if (password !== "correct-password") {
      const attempts = loginAttempts + 1
      setLoginAttempts(attempts)

      if (attempts >= 3) {
        setError("Too many failed attempts. Your account has been temporarily locked.")
        return
      }

      setError("Invalid email or password")
      return
    }

    // Simulate 2FA
    setShowTwoFactor(true)
    setError("")
  }

  const handleTwoFactorSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!code) {
      setError("Please enter the verification code")
      return
    }

    // Simulate successful login
    router.push("/dashboard")
  }

  const handleForgotPassword = () => {
    router.push("/reset-password")
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

        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
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
            <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
            <p className="text-sm text-muted-foreground">Enter your credentials to access your account</p>
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {!showTwoFactor ? (
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    className="pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    className="text-xs text-emerald-600 hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <KeyRound className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    className="pl-10"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </label>
              </div>
              <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                Sign In
              </Button>
            </form>
          ) : (
            <form onSubmit={handleTwoFactorSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="code">Verification Code</Label>
                <div className="relative">
                  <ShieldCheck className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="code"
                    type="text"
                    placeholder="Enter 6-digit code"
                    className="pl-10"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  Enter the verification code sent to your email or authentication app
                </p>
              </div>
              <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                Verify
              </Button>
              <Button type="button" variant="outline" className="w-full" onClick={() => setShowTwoFactor(false)}>
                Back to Login
              </Button>
            </form>
          )}

          <div className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-emerald-600 hover:underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

