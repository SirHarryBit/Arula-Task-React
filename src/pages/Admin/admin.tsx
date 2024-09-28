import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Settings, LogOut, Home, BookOpen, PenTool, ChevronLeft, Menu } from 'lucide-react'
import HomeTab from './HomeTab'
import BlogsTab from './BlogsTab'
import CoursesTab from './CoursesTab'
import SettingsTab from './SettingsTab'
import { getAllUsers } from '@/services/adminService'
import { useNavigate } from 'react-router-dom'

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState('Home')
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
    const [users, setUsers] = useState([])
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const usersData = await getAllUsers()
                setUsers(usersData)
                console.log(usersData)

            } catch (error: any) {
                console.error('Error fetching data:', error)
            }
        }

        fetchData()
    }, [])

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className={`bg-white shadow-md flex flex-col transition-all duration-300 ${isSidebarCollapsed ? 'w-16' : 'w-64'}`}>
                <div className="flex items-center justify-between p-4">
                    {!isSidebarCollapsed && (
                        <div className="flex items-center">
                            <img src="/main-logo.png" alt="Logo" className="h-12  mr-4" />
                        </div>
                    )}
                    <Button variant="ghost" size="icon" onClick={toggleSidebar}>
                        {isSidebarCollapsed ? <Menu size={24} /> : <ChevronLeft size={24} />}
                    </Button>
                </div>
                <nav>
                    <Button
                        variant={activeTab === 'Home' ? 'secondary' : 'ghost'}
                        className="w-full justify-start mb-2"
                        onClick={() => setActiveTab('Home')}
                    >
                        <Home className="ml-2 h-4 w-4" />
                        {!isSidebarCollapsed && <span className='ml-2'>Home</span>}
                    </Button>
                    <Button
                        variant={activeTab === 'Blogs' ? 'secondary' : 'ghost'}
                        className="w-full justify-start mb-2"
                        onClick={() => setActiveTab('Blogs')}
                    >
                        <PenTool className="ml-2 h-4 w-4" />
                        {!isSidebarCollapsed && <span className='ml-2'>Blogs</span>}
                    </Button>
                    <Button
                        variant={activeTab === 'Courses' ? 'secondary' : 'ghost'}
                        className="w-full justify-start mb-2"
                        onClick={() => setActiveTab('Courses')}
                    >
                        <BookOpen className="ml-2 h-4 w-4" />
                        {!isSidebarCollapsed && <span className='ml-2'>Courses</span>}
                    </Button>
                    <Button
                        variant={activeTab === 'Settings' ? 'secondary' : 'ghost'}
                        className="w-full justify-start mb-2"
                        onClick={() => setActiveTab('Settings')}
                    >
                        <Settings className="ml-2 h-4 w-4" />
                        {!isSidebarCollapsed && <span className='ml-2'>Settings</span>}
                    </Button>
                </nav>
                <Button
                    variant='ghost'
                    onClick={() => { navigate('/') }}
                    className=" flex w-full justify-start mb-2"
                >
                    <LogOut className="ml-2 h-4 w-4" />
                    {!isSidebarCollapsed && <span className='ml-2'>Log Out</span>}
                </Button>
            </aside>

            {/* Main content */}
            <main className="flex-1 p-8 overflow-auto">
                <h2 className="text-2xl font-bold mb-6">{activeTab}</h2>
                {activeTab === 'Home' && <HomeTab users={users} />}
                {activeTab === 'Blogs' && <BlogsTab />}
                {activeTab === 'Courses' && <CoursesTab />}
                {activeTab === 'Settings' && <SettingsTab />}
            </main>
        </div>
    )
}
