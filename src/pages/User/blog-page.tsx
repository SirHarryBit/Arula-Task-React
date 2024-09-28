// src/pages/test.tsx
import Footer from "@/components/custom/footer";
import Navbar from "@/components/custom/navbar";
import { Button } from "@/components/ui/button";
import { getBlog } from "@/services/blogService";
import { Facebook, Twitter, Linkedin, Menu } from 'lucide-react';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
// import { blogs } from "@/data/data"; // Import the blogs array
type Blog = {
    id: number;
    title: string;
    description: string;
    date: string;
    featuredImage: string;
};

export default function BlogPost() {
    const [blog, setBlog] = useState<Blog>();
    const { blogId } = useParams<{ blogId: string }>();
    // const blog = blogs.find(blog => blog.id === Number(blogId));
    useEffect(() => {
        fetchBlogs();
        console.log(blog);
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);

    const fetchBlogs = async () => {
        try {
            const blogData = await getBlog(blogId);
            setBlog(blogData);
        } catch (error: any) {
            console.error('Error fetching blogs:', error);
        }
    };

    // Check if id is defined and is a string
    if (!blogId) {
        return <div>Blog ID is missing</div>;
    }

    if (!blog) {
        return <div>Blog not found</div>;
    }

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <article className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

                    <div className="relative aspect-video mb-8">
                        <img
                            src={`${blog.featuredImage}`}
                            alt={blog.title}
                            className="rounded-lg object-cover"
                        />
                        <div className="absolute bottom-4 left-4 bg-white bg-opacity-75 p-2 rounded">
                            <p className="text-sm font-medium">By Arula for Autism</p>
                            <p className="text-xs text-gray-500">5 min read</p>
                        </div>
                        <div className="absolute top-4 right-4 flex space-x-2">
                            <Button size="sm" variant="outline"><Facebook size={16} /></Button>
                            <Button size="sm" variant="outline"><Twitter size={16} /></Button>
                            <Button size="sm" variant="outline"><Linkedin size={16} /></Button>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-12">
                        <aside className="md:w-1/4">
                            <nav className="sticky top-8">
                                <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
                                <ul className="space-y-2 text-sm">
                                    {blog.content.map((item, index) => (
                                        item.type === 'heading' && (
                                            <li key={index}>
                                                <a href={`#heading-${index}`} className="text-blue-600 hover:underline">
                                                    {item.text}
                                                </a>
                                            </li>
                                        )
                                    ))}
                                </ul>
                            </nav>
                        </aside>

                        <div className="md:w-3/4">
                            {blog.content.map((item, index) => (
                                item.type === 'heading' ? (
                                    <section key={index} id={`heading-${index}`} className="mb-8">
                                        <h2 className="text-2xl font-bold mb-4">{item.text}</h2>
                                    </section>
                                ) : (
                                    <p key={index} className="mb-4">{item.text}</p>
                                )
                            ))}
                        </div>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
}
