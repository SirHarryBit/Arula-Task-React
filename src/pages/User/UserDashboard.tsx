import { useContext, useEffect, useState } from 'react';
import { Search, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { analyticsOverview, upcomingCourses } from "@/data/data";
import CourseProgressCard from '@/components/custom/courseProgressCard';
import ProductShowcase from '@/components/custom/productShowcase';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '@/context/AuthContext';
import { getUserCoursesByID } from '@/services/courseService';

type Course = {
    id: number;
    title: string;
    description: string;
    category: string;
    featuredImage: string;
};



export default function UserDashboard() {
    const { getUserId, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [myCourses, setMyCourses] = useState<Course[]>([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const id = getUserId();
                console.log('token present:', id);
                if (id) {
                    console.log('requesting my courses')
                    const userCourses = await getUserCoursesByID(id);
                    console.log('user courses:', userCourses);
                    setMyCourses(userCourses);
                }
            } catch (error: any) {
                console.error('Error fetching courses:', error);
            }
        };
        fetchCourses();

    }, []);

    const handleLogout = () => {
        try {
            logout();
            navigate('/');
            console.log('Logged out successfully.');
        } catch (error: any) {
            console.log(error);
        }
    }

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <header className="bg-gradient-to-br from-emerald-100 to-teal-100 py-4 mb-8">
                <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
                    <div onClick={() => { navigate('/user/dashboard') }} className="flex items-center">
                        <img src="/main-logo.png" alt="Logo" className="h-12  mr-4" />
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <Input type="search" placeholder="Search courses" className="pl-4 pr-10 py-2 w-64 bg-gray-100" />
                        </div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="w-10 h-10 rounded-full border-[3px] border-gray-600 p-0">
                                    <User className="h-6 w-6 text-gray-600" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => { navigate('/user/settings') }}>Settings</DropdownMenuItem>
                                <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </header>

            <main className="flex-grow container mx-auto px-4 sm:px-18 lg:px-24 py-5">
                <div className="mb-12">
                    <h2 className="text-xl font-bold text-left mb-4 text-teal-800">Analytics Overview</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {analyticsOverview.map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-sm font-medium text-gray-500">{item.title}</span>
                                    <item.icon className={item.color} />
                                </div>
                                <div className="text-2xl font-bold">{item.value}</div>
                                <div className="text-sm text-gray-500">{item.description}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-12">
                    <h2 className="text-xl font-bold text-left mb-4 text-teal-800">My Courses</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {(myCourses.length == 0) && <div> No Courses Assigned</div>}
                        {myCourses.map((course, index) => (
                            <Link key={course._id} to={`/course/${course._id}`}>
                                <CourseProgressCard key={index} {...course} />
                            </Link>

                        ))}
                    </div>
                </div>

                <div>
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold text-left mb-4 text-teal-800">Upcoming Courses and Events For You</h2>
                    </div>
                    <ProductShowcase courseAndEvents={upcomingCourses} />

                </div>
            </main>
        </div>
    );
}
