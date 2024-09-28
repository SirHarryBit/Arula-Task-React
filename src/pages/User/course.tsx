import { Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
function course() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <header className="bg-gradient-to-br from-emerald-100 to-teal-100 py-4 mb-8">
                <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center">
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
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem>Settings</DropdownMenuItem>
                                <DropdownMenuItem>Logout</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </header>

            <main className="flex-grow container mx-auto px-4 sm:px-18 lg:px-24 py-5">
            </main>
        </div>
    )
}

export default course