"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Bell,
  Calendar,
  ClipboardList,
  FileText,
  Home,
  LogOut,
  Menu,
  MessageSquare,
  Settings,
  User,
  X,
} from "lucide-react"

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Mobile sidebar toggle */}
      <button
        className="fixed left-4 top-4 z-50 rounded-md bg-emerald-600 p-2 text-white md:hidden"
        onClick={toggleSidebar}
      >
        {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-16 items-center border-b px-6">
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
          </div>
          <div className="flex-1 overflow-auto py-4">
            <nav className="space-y-1 px-2">
              <Link
                href="/dashboard"
                className="flex items-center rounded-md px-4 py-2 text-sm font-medium text-emerald-600 bg-emerald-50"
              >
                <Home className="mr-3 h-5 w-5" />
                Dashboard
              </Link>
              <Link
                href="/appointments"
                className="flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100"
              >
                <Calendar className="mr-3 h-5 w-5" />
                Appointments
              </Link>
              <Link
                href="/medical-records"
                className="flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100"
              >
                <FileText className="mr-3 h-5 w-5" />
                Medical Records
              </Link>
              <Link
                href="/prescriptions"
                className="flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100"
              >
                <ClipboardList className="mr-3 h-5 w-5" />
                Prescriptions
              </Link>
              <Link
                href="/messages"
                className="flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100"
              >
                <MessageSquare className="mr-3 h-5 w-5" />
                Messages
              </Link>
              <Link
                href="/profile"
                className="flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100"
              >
                <User className="mr-3 h-5 w-5" />
                Profile
              </Link>
              <Link
                href="/settings"
                className="flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100"
              >
                <Settings className="mr-3 h-5 w-5" />
                Settings
              </Link>
            </nav>
          </div>
          <div className="border-t p-4">
            <Link
              href="/logout"
              className="flex w-full items-center rounded-md px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100"
            >
              <LogOut className="mr-3 h-5 w-5" />
              Logout
            </Link>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-1 flex-col md:pl-64">
        {/* Header */}
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-white px-4 md:px-6">
          <h1 className="text-lg font-semibold md:hidden">Dashboard</h1>
          <div className="flex items-center ml-auto">
            <button className="relative mr-4 rounded-full bg-gray-100 p-1">
              <Bell className="h-6 w-6 text-gray-600" />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                3
              </span>
            </button>
            <div className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="User Avatar"
                width={32}
                height={32}
                className="rounded-full"
              />
              <div className="hidden md:block">
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-muted-foreground">Patient</p>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Welcome, John</h1>
            <p className="text-muted-foreground">Here's an overview of your health information</p>
          </div>

          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview" onClick={() => setActiveTab("overview")}>
                Overview
              </TabsTrigger>
              <TabsTrigger value="appointments" onClick={() => setActiveTab("appointments")}>
                Appointments
              </TabsTrigger>
              <TabsTrigger value="records" onClick={() => setActiveTab("records")}>
                Medical Records
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Upcoming Appointments</CardTitle>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">2</div>
                    <p className="text-xs text-muted-foreground">Next: Mar 18, 10:00 AM</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Prescriptions</CardTitle>
                    <ClipboardList className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3</div>
                    <p className="text-xs text-muted-foreground">1 needs renewal</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Unread Messages</CardTitle>
                    <MessageSquare className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">5</div>
                    <p className="text-xs text-muted-foreground">2 from Dr. Smith</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Profile Completion</CardTitle>
                    <User className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">85%</div>
                    <p className="text-xs text-muted-foreground">Update your medical history</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="col-span-2">
                  <CardHeader>
                    <CardTitle>Recent Medical Records</CardTitle>
                    <CardDescription>Your latest medical documents and test results</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b pb-2">
                        <div>
                          <p className="font-medium">Blood Test Results</p>
                          <p className="text-sm text-muted-foreground">Dr. Johnson - Mar 10, 2024</p>
                        </div>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </div>
                      <div className="flex items-center justify-between border-b pb-2">
                        <div>
                          <p className="font-medium">Annual Physical Exam</p>
                          <p className="text-sm text-muted-foreground">Dr. Smith - Feb 15, 2024</p>
                        </div>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">X-Ray Report</p>
                          <p className="text-sm text-muted-foreground">Dr. Williams - Jan 22, 2024</p>
                        </div>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Appointments</CardTitle>
                    <CardDescription>Your scheduled appointments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-lg bg-emerald-50 p-3">
                        <p className="font-medium text-emerald-700">Dr. Smith - Cardiology</p>
                        <p className="text-sm">Mar 18, 2024 - 10:00 AM</p>
                        <div className="mt-2 flex gap-2">
                          <Button variant="outline" size="sm">
                            Reschedule
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-500 hover:text-red-700">
                            Cancel
                          </Button>
                        </div>
                      </div>
                      <div className="rounded-lg bg-gray-100 p-3">
                        <p className="font-medium">Dr. Johnson - General</p>
                        <p className="text-sm">Apr 05, 2024 - 2:30 PM</p>
                        <div className="mt-2 flex gap-2">
                          <Button variant="outline" size="sm">
                            Reschedule
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-500 hover:text-red-700">
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="appointments" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Appointment Calendar</CardTitle>
                  <CardDescription>Manage your upcoming medical appointments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-end">
                      <Button className="bg-emerald-600 hover:bg-emerald-700">Schedule New Appointment</Button>
                    </div>

                    <div className="rounded-lg border">
                      {/* Calendar placeholder */}
                      <div className="p-4 text-center">
                        <p className="text-muted-foreground">Calendar view would be displayed here</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">Upcoming Appointments</h3>
                      <div className="space-y-2">
                        <div className="rounded-lg border p-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Dr. Smith - Cardiology</p>
                              <p className="text-sm text-muted-foreground">Mar 18, 2024 - 10:00 AM</p>
                              <p className="text-sm text-muted-foreground">Medical Center, Room 302</p>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                Reschedule
                              </Button>
                              <Button variant="outline" size="sm" className="text-red-500 hover:text-red-700">
                                Cancel
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-lg border p-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Dr. Johnson - General</p>
                              <p className="text-sm text-muted-foreground">Apr 05, 2024 - 2:30 PM</p>
                              <p className="text-sm text-muted-foreground">Medical Center, Room 105</p>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                Reschedule
                              </Button>
                              <Button variant="outline" size="sm" className="text-red-500 hover:text-red-700">
                                Cancel
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">Past Appointments</h3>
                      <div className="space-y-2">
                        <div className="rounded-lg border p-3 bg-gray-50">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Dr. Williams - Orthopedics</p>
                              <p className="text-sm text-muted-foreground">Feb 10, 2024 - 11:30 AM</p>
                              <p className="text-sm text-muted-foreground">Medical Center, Room 210</p>
                            </div>
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          </div>
                        </div>
                        <div className="rounded-lg border p-3 bg-gray-50">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Dr. Davis - Dermatology</p>
                              <p className="text-sm text-muted-foreground">Jan 22, 2024 - 9:00 AM</p>
                              <p className="text-sm text-muted-foreground">Medical Center, Room 115</p>
                            </div>
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="records" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Medical Records</CardTitle>
                  <CardDescription>Access and manage your medical history</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-muted-foreground" />
                        <h3 className="font-medium">Documents</h3>
                      </div>
                      <Button variant="outline">Upload New Document</Button>
                    </div>

                    <div className="space-y-2">
                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Blood Test Results</p>
                            <p className="text-sm text-muted-foreground">Dr. Johnson - Mar 10, 2024</p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              Download
                            </Button>
                            <Button variant="outline" size="sm">
                              View
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Annual Physical Exam</p>
                            <p className="text-sm text-muted-foreground">Dr. Smith - Feb 15, 2024</p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              Download
                            </Button>
                            <Button variant="outline" size="sm">
                              View
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">X-Ray Report</p>
                            <p className="text-sm text-muted-foreground">Dr. Williams - Jan 22, 2024</p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              Download
                            </Button>
                            <Button variant="outline" size="sm">
                              View
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Vaccination Record</p>
                            <p className="text-sm text-muted-foreground">Dr. Johnson - Dec 05, 2023</p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              Download
                            </Button>
                            <Button variant="outline" size="sm">
                              View
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <div className="flex items-center gap-2">
                        <ClipboardList className="h-5 w-5 text-muted-foreground" />
                        <h3 className="font-medium">Prescriptions</h3>
                      </div>
                      <Button variant="outline">Request Renewal</Button>
                    </div>

                    <div className="space-y-2">
                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Lisinopril 10mg</p>
                            <p className="text-sm text-muted-foreground">Dr. Smith - Feb 15, 2024</p>
                            <p className="text-sm text-muted-foreground">Expires: May 15, 2024</p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              Renew
                            </Button>
                            <Button variant="outline" size="sm">
                              View
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Atorvastatin 20mg</p>
                            <p className="text-sm text-muted-foreground">Dr. Smith - Feb 15, 2024</p>
                            <p className="text-sm text-muted-foreground">Expires: May 15, 2024</p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              Renew
                            </Button>
                            <Button variant="outline" size="sm">
                              View
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Metformin 500mg</p>
                            <p className="text-sm text-muted-foreground">Dr. Johnson - Jan 10, 2024</p>
                            <p className="text-sm text-muted-foreground">Expires: Apr 10, 2024</p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              Renew
                            </Button>
                            <Button variant="outline" size="sm">
                              View
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

