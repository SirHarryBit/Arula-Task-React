import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { AuthContext } from "@/context/AuthContext";
import { Search } from "lucide-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';

export default function userSettings() {

    const { setToken } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        try {
            setToken('');
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
                                <Button variant="ghost" className="w-10 h-10 rounded-full p-0">
                                    <img
                                        src="/vite.svg?height=40&width=40"
                                        alt="Profile"
                                        className="rounded-full"
                                    />
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
            <Card>
                <ToastContainer />
                <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                    <CardDescription>Update your account information and security settings.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="username">Username</Label>
                            <Input id="username" placeholder="Enter new username" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Current Password</Label>
                            <Input id="password" type="password" placeholder="Enter new password" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">New Password</Label>
                            <Input id="password" type="password" placeholder="Enter new password" />
                        </div>
                        <div className="flex items-center space-x-2">
                            <Switch id="2fa" />
                            <Label htmlFor="2fa">Enable Two-Factor Authentication</Label>
                        </div>
                        <Button type="submit" onClick={() => { toast.success("Changes saved. Implementation to be added in final build.") }} className="w-full">Save Changes</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
