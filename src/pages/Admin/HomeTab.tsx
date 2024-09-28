import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { ChartLine, ChartNoAxesCombined, Users } from 'lucide-react';
import { CartesianGrid, LineChart, Line, AreaChart, Area, Bar, BarChart } from "recharts";
import { dailyUsers, totalUsers, userGrowth } from "@/data/data";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { getAllCourses, getUserCoursesByID } from "@/services/courseService";
import { assignCourse } from "@/services/adminService";

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#12211D",
    },
} satisfies ChartConfig

export default function HomeTab({ users }: { users: any[] }) {
    const [selectedUser, setSelectedUser] = useState<any>(null);
    const [courses, setCourses] = useState<any[]>([]);
    const [userCourses, setUserCourses] = useState<any[]>([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState<any>(null);

    useEffect(() => {
        const fetchCourses = async () => {
            const allCourses = await getAllCourses();
            setCourses(allCourses);
            console.log(courses);
        };
        fetchCourses();
    }, []);

    const handleUserDetails = async (user: any) => {
        const userId = user._id;
        console.log("handleUserDetails:", userId);
        setSelectedUser(user);
        try {
            const userCourses = await getUserCoursesByID(userId);
            setUserCourses(userCourses);
            setOpenDialog(true);
        } catch (error: any) {
            console.error(error);
        }
    };

    const handleAssignCourse = async (courseId: any) => {
        try {
            console.log(selectedUser._id);
            await assignCourse(selectedUser._id, courseId);
            const updatedUserCourses = await getUserCoursesByID(selectedUser._id);
            setUserCourses(updatedUserCourses);
        } catch (error: any) {
            console.error(error);
        }
    };


    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Daily Users</CardTitle>
                        <ChartLine className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">2,345</div>
                        <p className="text-xs text-muted-foreground">+5.2% from yesterday</p>
                        <ChartContainer config={chartConfig}>
                            <LineChart
                                accessibilityLayer
                                data={dailyUsers}
                                margin={{
                                    left: 12,
                                    right: 12,
                                }}
                            >
                                <CartesianGrid vertical={false} />
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent hideLabel />}
                                />
                                <Line
                                    dataKey="users"
                                    type="linear"
                                    stroke="var(--color-desktop)"
                                    strokeWidth={2}
                                    dot={false}
                                />
                            </LineChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">10,483</div>
                        <p className="text-xs text-muted-foreground">+2.5% from last month</p>
                        <ChartContainer config={chartConfig}>
                            <AreaChart
                                accessibilityLayer
                                data={totalUsers}
                                margin={{
                                    left: 12,
                                    right: 12,
                                }}
                            >
                                <CartesianGrid vertical={false} />

                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent indicator="dot" hideLabel />}
                                />
                                <Area
                                    dataKey="users"
                                    type="linear"
                                    fill="var(--color-desktop)"
                                    fillOpacity={0.4}
                                    stroke="var(--color-desktop)"
                                />
                            </AreaChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">User Growth</CardTitle>
                        <ChartNoAxesCombined className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">18%</div>
                        <p className="text-xs text-muted-foreground">+3 from last month</p>
                        <ChartContainer config={chartConfig}>
                            <BarChart
                                accessibilityLayer
                                data={userGrowth}
                            >
                                <CartesianGrid vertical={false} />
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent hideLabel />}
                                />
                                <Bar dataKey="growth" fill="var(--color-desktop)" radius={8} />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>User List</CardTitle>
                    <p className="text-sm text-muted-background">Manage your registered users.</p>
                </CardHeader>
                <CardContent>
                    <Input className="mb-4" placeholder="Search users..." />
                    <div className="space-y-4">
                        {users.map((user) => (
                            <div key={user._id.$oid} className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <Avatar className="h-9 w-9">
                                        <AvatarFallback>{user.name[0]}</AvatarFallback>
                                    </Avatar>
                                    <div className="ml-4">
                                        <p className="text-sm font-medium">{user.name}</p>
                                        <p className="text-sm text-muted-foreground">{user.email}</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <Button variant="outline" size="sm" onClick={() => handleUserDetails(user)}>Details</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{selectedUser?.name}</DialogTitle>
                        <DialogDescription>{selectedUser?.email}</DialogDescription>
                    </DialogHeader>
                    <div className="mt-4">
                        <h3 className="text-lg font-medium">Assigned Courses</h3>
                        <ul className="list-disc pl-5">
                            {userCourses.map((course) => (
                                <li key={course._id}>{course.title}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-4">
                        <h3 className="text-lg font-medium">Add New Course</h3>
                        <select
                            className="w-full p-2 border border-gray-300 rounded"
                            onChange={(e) => setSelectedCourse(e.target.value)}
                        >
                            <option value="">Select a course</option>
                            {courses
                                .filter((course) => !userCourses.some((uc) => uc._id === course._id))
                                .map((course) => (
                                    <option key={course._id} value={course._id}>{course.title}</option>
                                ))}
                        </select>
                    </div>
                    <div className="items-end mt-4">
                        <Button variant="secondary" size="sm" onClick={() => setOpenDialog(false)}>Cancel</Button>
                        <Button size="sm" onClick={() => handleAssignCourse(selectedCourse)}>Assign Course</Button>
                    </div>
                </DialogContent>



            </Dialog>
        </>
    );
}
