// src/pages/User/blogs.tsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/custom/navbar";
import { getAllBlogs } from '@/services/blogService';
import Footer from '@/components/custom/footer';


type Blog = {
    id: number;
    title: string;
    description: string;
    date: string;
    featuredImage: string;
};

export default function Component() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    // const [blogsList, setBlogsList] = useState(blogs);


    useEffect(() => {
        fetchBlogs();
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);

    const fetchBlogs = async () => {
        try {
            const blogsData = await getAllBlogs();
            setBlogs(blogsData);
            console.log(blogsData);
        } catch (error: any) {
            console.error('Error fetching blogs:', error);
        }
    };
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />

            <main>
                <div className="relative h-[400px] overflow-hidden">
                    <img
                        src="/blogtop.webp"
                        alt="Peaceful meditation scene"
                        className="object-cover w-full"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
                        <h2 className="text-4xl font-bold mb-4 text-center">Embracing Technology to Enhance Mental Wellness</h2>
                        <div className="w-full max-w-md flex">
                            <Input className="flex-grow text-gray-50 placeholder:text-gray-200" placeholder="Search articles..." />
                            <Button className="ml-2">Search</Button>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h3 className="text-2xl font-semibold mb-6">Popular Articles</h3>
                    <div className="flex flex-col md:flex-row gap-8">

                        <div className="md:w-1/2 bg-white rounded-lg shadow overflow-hidden flex flex-col">
                            <Link to={`/blogs/66f5b435de5b173169f65ef0`}>
                                <img src="https://images.unsplash.com/photo-1593634804965-0394d1324bc4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Mindfulness meditation" className="w-[600px] h-[300px] object-cover" />
                                <div className="p-4 flex flex-col flex-grow">
                                    <p className="text-sm text-gray-500 mb-2">October 23, 2023</p>
                                    <h4 className="text-xl font-semibold mb-2">Understanding Cognitive Behavioral Therapy</h4>
                                    <p className="text-gray-600 flex-grow">An introduction to Cognitive Behavioral Therapy (CBT) and its applications.</p>
                                </div>
                            </Link>
                        </div>

                        <div className="md:w-1/2 space-y-4">

                            <div>
                                <Link to={`/blogs/66f5b4c6de5b173169f65ef8`}>
                                    <div className="bg-white rounded-lg shadow overflow-hidden flex ">
                                        <img src="https://images.unsplash.com/photo-1475483768296-6163e08872a1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Online therapy session" className=" w-[150px] h-[150px] object-cover" />
                                        <div className="p-4 flex-1">
                                            <p className="text-sm text-gray-500 mb-1">October 23, 2023</p>
                                            <h4 className="text-xl font-semibold mb-2">The Benefits of Group Therapy</h4>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div>
                                <Link to={`/blogs/66f5b541de5b173169f65f00`}>
                                    <div className="bg-white rounded-lg shadow overflow-hidden flex ">
                                        <img src="https://images.unsplash.com/photo-1456086272160-b28b0645b729?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Cognitive Behavioral Therapy illustration" className="w-[150px] h-[150px] object-cover" />
                                        <div className="p-4 flex-1">
                                            <p className="text-sm text-gray-500 mb-1">October 23, 2023</p>
                                            <h4 className="text-xl font-semibold mb-2">The Role of Art Therapy in Mental Health</h4>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div>
                                <Link to={`/blogs/66f5b603de5b173169f65f18`}>
                                    <div className="bg-white rounded-lg shadow overflow-hidden flex">
                                        <img src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Mental health apps" className="w-[150px] h-[150px] object-cover" />
                                        <div className="p-4 flex-1">
                                            <p className="text-sm text-gray-500 mb-1">October 23, 2023</p>
                                            <h4 className="text-xl font-semibold mb-2">The Impact of Music Therapy on Mental Health</h4>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h3 className="text-2xl font-semibold mb-6">Latest Articles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs?.map((blog) => (
                            <Link key={blog.id} to={`/blogs/${blog._id}`} className="block">
                                <div className="bg-white rounded-lg shadow overflow-hidden">
                                    <img src={`${blog.featuredImage}`} alt={blog.title} className="w-[400px] h-[200px] object-cover" />
                                    <div className="p-4">
                                        <h4 className="font-semibold mb-2">{blog.title}</h4>
                                        <p className="text-gray-600 text-sm mb-2">{blog.description}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
