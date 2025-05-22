"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  AlertCircle,
  Bell,
  Calendar,
  ChevronDown,
  FileText,
  Home,
  LogOut,
  Menu,
  Search,
  Settings,
  Shield,
  User,
  Users,
  X,
} from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function AdminDashboardPage() {
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
                href="/admin"
                className="flex items-center rounded-md px-4 py-2 text-sm font-medium text-emerald-600 bg-emerald-50"
              >
                <Home className="mr-3 h-5 w-5" />
                Dashboard
              </Link>
              <Link
                href="/admin/users"
                className="flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100"
              >
                <Users className="mr-3 h-5 w-5" />
                User Management
              </Link>
              <Link
                href="/admin/appointments"
                className="flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100"
              >
                <Calendar className="mr-3 h-5 w-5" />
                Appointments
              </Link>
              <Link
                href="/admin/records"
                className="flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100"
              >
                <FileText className="mr-3 h-5 w-5" />
                Medical Records
              </Link>
              <Link
                href="/admin/security"
                className="flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100"
              >
                <Shield className="mr-3 h-5 w-5" />
                Security
              </Link>
              <Link
                href="/admin/settings"
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
          <h1 className="text-lg font-semibold md:hidden">Admin Dashboard</h1>
          <div className="relative w-full max-w-md">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search..." className="pl-8" />
          </div>
          <div className="flex items-center ml-auto">
            <button className="relative mr-4 rounded-full bg-gray-100 p-1">
              <Bell className="h-6 w-6 text-gray-600" />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                5
              </span>
            </button>
            <div className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="Admin Avatar"
                width={32}
                height={32}
                className="rounded-full"
              />
              <div className="hidden md:block">
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-muted-foreground">Administrator</p>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage users, appointments, and system settings</p>
          </div>

          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview" onClick={() => setActiveTab("overview")}>
                Overview
              </TabsTrigger>
              <TabsTrigger value="users" onClick={() => setActiveTab("users")}>
                User Management
              </TabsTrigger>
              <TabsTrigger value="security" onClick={() => setActiveTab("security")}>
                Security
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1,248</div>
                    <p className="text-xs text-muted-foreground">+12% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Appointments Today</CardTitle>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">42</div>
                    <p className="text-xs text-muted-foreground">8 doctors on duty</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">New Registrations</CardTitle>
                    <User className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">24</div>
                    <p className="text-xs text-muted-foreground">Last 7 days</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Security Alerts</CardTitle>
                    <AlertCircle className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3</div>
                    <p className="text-xs text-muted-foreground">Requires attention</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>Recent User Activity</CardTitle>
                    <CardDescription>Latest login and registration activities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b pb-2">
                        <div>
                          <p className="font-medium">John Doe</p>
                          <p className="text-sm text-muted-foreground">Logged in - Mar 16, 2024 10:23 AM</p>
                        </div>
                        <Badge>Patient</Badge>
                      </div>
                      <div className="flex items-center justify-between border-b pb-2">
                        <div>
                          <p className="font-medium">Dr. Sarah Smith</p>
                          <p className="text-sm text-muted-foreground">Logged in - Mar 16, 2024 9:45 AM</p>
                        </div>
                        <Badge>Doctor</Badge>
                      </div>
                      <div className="flex items-center justify-between border-b pb-2">
                        <div>
                          <p className="font-medium">Michael Johnson</p>
                          <p className="text-sm text-muted-foreground">New registration - Mar 15, 2024 3:12 PM</p>
                        </div>
                        <Badge>Patient</Badge>
                      </div>
                      <div className="flex items-center justify-between border-b pb-2">
                        <div>
                          <p className="font-medium">Dr. Robert Williams</p>
                          <p className="text-sm text-muted-foreground">Password reset - Mar 15, 2024 11:30 AM</p>
                        </div>
                        <Badge>Doctor</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Emily Davis</p>
                          <p className="text-sm text-muted-foreground">New registration - Mar 14, 2024 2:45 PM</p>
                        </div>
                        <Badge>Patient</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>Security Alerts</CardTitle>
                    <CardDescription>Recent security issues that need attention</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Alert variant="destructive" className="bg-red-50">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">Multiple failed login attempts</p>
                            <p className="text-sm">User: james.wilson@example.com</p>
                            <p className="text-sm">Mar 16, 2024 - 11:20 AM</p>
                          </div>
                          <Button size="sm">Investigate</Button>
                        </AlertDescription>
                      </Alert>
                      <Alert variant="destructive" className="bg-red-50">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">Unusual access pattern detected</p>
                            <p className="text-sm">User: dr.johnson@example.com</p>
                            <p className="text-sm">Mar 15, 2024 - 9:45 PM</p>
                          </div>
                          <Button size="sm">Investigate</Button>
                        </AlertDescription>
                      </Alert>
                      <Alert className="bg-amber-50">
                        <AlertCircle className="h-4 w-4 text-amber-600" />
                        <AlertDescription className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">Password expiring soon</p>
                            <p className="text-sm">5 staff accounts need password updates</p>
                            <p className="text-sm">Expires in 7 days</p>
                          </div>
                          <Button size="sm" variant="outline">
                            Notify Users
                          </Button>
                        </AlertDescription>
                      </Alert>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="users" className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>User Management</CardTitle>
                      <CardDescription>Manage system users and their access</CardDescription>
                    </div>
                    <Button className="bg-emerald-600 hover:bg-emerald-700">Add New User</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Input placeholder="Search users..." className="w-64" />
                        <Button variant="outline">Search</Button>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">Filter by:</span>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="flex items-center gap-1">
                              Role <ChevronDown className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem>All Roles</DropdownMenuItem>
                            <DropdownMenuItem>Patients</DropdownMenuItem>
                            <DropdownMenuItem>Doctors</DropdownMenuItem>
                            <DropdownMenuItem>Administrators</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="flex items-center gap-1">
                              Status <ChevronDown className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem>All Status</DropdownMenuItem>
                            <DropdownMenuItem>Active</DropdownMenuItem>
                            <DropdownMenuItem>Inactive</DropdownMenuItem>
                            <DropdownMenuItem>Locked</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>

                    <div className="rounded-md border">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Last Login</TableHead>
                            <TableHead>Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">John Doe</TableCell>
                            <TableCell>john.doe@example.com</TableCell>
                            <TableCell>
                              <Badge>Patient</Badge>
                            </TableCell>
                            <TableCell>
                              <Badge className="bg-green-500">Active</Badge>
                            </TableCell>
                            <TableCell>Mar 16, 2024 10:23 AM</TableCell>
                            <TableCell>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="sm">
                                    Actions <ChevronDown className="h-4 w-4 ml-1" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>View Profile</DropdownMenuItem>
                                  <DropdownMenuItem>Edit User</DropdownMenuItem>
                                  <DropdownMenuItem>Reset Password</DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem className="text-red-600">Deactivate</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Dr. Sarah Smith</TableCell>
                            <TableCell>dr.smith@example.com</TableCell>
                            <TableCell>
                              <Badge>Doctor</Badge>
                            </TableCell>
                            <TableCell>
                              <Badge className="bg-green-500">Active</Badge>
                            </TableCell>
                            <TableCell>Mar 16, 2024 9:45 AM</TableCell>
                            <TableCell>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="sm">
                                    Actions <ChevronDown className="h-4 w-4 ml-1" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>View Profile</DropdownMenuItem>
                                  <DropdownMenuItem>Edit User</DropdownMenuItem>
                                  <DropdownMenuItem>Reset Password</DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem className="text-red-600">Deactivate</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Michael Johnson</TableCell>
                            <TableCell>michael.j@example.com</TableCell>
                            <TableCell>
                              <Badge>Patient</Badge>
                            </TableCell>
                            <TableCell>
                              <Badge className="bg-green-500">Active</Badge>
                            </TableCell>
                            <TableCell>Mar 15, 2024 3:12 PM</TableCell>
                            <TableCell>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="sm">
                                    Actions <ChevronDown className="h-4 w-4 ml-1" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>View Profile</DropdownMenuItem>
                                  <DropdownMenuItem>Edit User</DropdownMenuItem>
                                  <DropdownMenuItem>Reset Password</DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem className="text-red-600">Deactivate</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Dr. Robert Williams</TableCell>
                            <TableCell>dr.williams@example.com</TableCell>
                            <TableCell>
                              <Badge>Doctor</Badge>
                            </TableCell>
                            <TableCell>
                              <Badge className="bg-green-500">Active</Badge>
                            </TableCell>
                            <TableCell>Mar 15, 2024 11:30 AM</TableCell>
                            <TableCell>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="sm">
                                    Actions <ChevronDown className="h-4 w-4 ml-1" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>View Profile</DropdownMenuItem>
                                  <DropdownMenuItem>Edit User</DropdownMenuItem>
                                  <DropdownMenuItem>Reset Password</DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem className="text-red-600">Deactivate</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">James Wilson</TableCell>
                            <TableCell>james.wilson@example.com</TableCell>
                            <TableCell>
                              <Badge>Patient</Badge>
                            </TableCell>
                            <TableCell>
                              <Badge className="bg-red-500">Locked</Badge>
                            </TableCell>
                            <TableCell>Mar 14, 2024 8:15 AM</TableCell>
                            <TableCell>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="sm">
                                    Actions <ChevronDown className="h-4 w-4 ml-1" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>View Profile</DropdownMenuItem>
                                  <DropdownMenuItem>Edit User</DropdownMenuItem>
                                  <DropdownMenuItem>Reset Password</DropdownMenuItem>
                                  <DropdownMenuItem>Unlock Account</DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem className="text-red-600">Deactivate</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>Manage system security and access controls</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Login Security</h3>
                      <div className="rounded-lg border p-4 space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Two-Factor Authentication</p>
                            <p className="text-sm text-muted-foreground">Require 2FA for all administrative accounts</p>
                          </div>
                          <Button variant="outline">Configure</Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Password Policy</p>
                            <p className="text-sm text-muted-foreground">Set password complexity requirements</p>
                          </div>
                          <Button variant="outline">Configure</Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Account Lockout</p>
                            <p className="text-sm text-muted-foreground">Set failed login attempt thresholds</p>
                          </div>
                          <Button variant="outline">Configure</Button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Security Alerts</h3>
                      <div className="rounded-lg border p-4 space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Login Monitoring</p>
                            <p className="text-sm text-muted-foreground">Alert on suspicious login activities</p>
                          </div>
                          <Button variant="outline">Configure</Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Data Access Alerts</p>
                            <p className="text-sm text-muted-foreground">Alert on unusual data access patterns</p>
                          </div>
                          <Button variant="outline">Configure</Button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Security Audit</h3>
                      <div className="rounded-lg border p-4 space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Activity Logs</p>
                            <p className="text-sm text-muted-foreground">View system activity logs</p>
                          </div>
                          <Button variant="outline">View Logs</Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Security Audit Report</p>
                            <p className="text-sm text-muted-foreground">Generate security audit report</p>
                          </div>
                          <Button variant="outline">Generate Report</Button>
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

