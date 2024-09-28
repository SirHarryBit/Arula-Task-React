import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Edit, Trash2 } from 'lucide-react';
import { addBlog, getAllBlogs } from '@/services/blogService';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Define the type for the value and onChange parameters
type RichTextEditorProps = {
    value: string;
    onChange: (newValue: string) => void;
    isHeading?: boolean;
};

// Note: This is a simplified rich text editor component. In a real-world scenario, you'd use a more robust solution.
const RichTextEditor = ({ value, onChange, isHeading }: RichTextEditorProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        onChange(e.target.value);
    };



    return (
        <div className="border rounded-md p-2">
            {isHeading ? (
                <>
                    <div className="flex gap-2 mb-2">
                        Heading
                    </div>
                    <Input
                        className="w-full p-2 border rounded-md"
                        value={value}
                        onChange={handleChange}
                    />
                </>
            ) : (
                <div
                    className="w-full p-2 border rounded-md"
                    contentEditable
                    dangerouslySetInnerHTML={{ __html: value }}
                    onInput={(e: React.ChangeEvent<HTMLDivElement>) => onChange(e.currentTarget.innerHTML)}
                />
            )}
        </div>
    );
};

type ContentItem = {
    type: string;
    text: string;
};

type Blog = {
    id: number;
    title: string;
    description: string;
    date: string;
    featuredImage: string;
    content: ContentItem[];
};

export default function BlogsTab() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [newBlog, setNewBlog] = useState<Omit<Blog, 'id'>>({
        title: '',
        description: '',
        date: '',
        featuredImage: '',
        content: [],
    });
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const blogsData = await getAllBlogs();
            setBlogs(blogsData);
        } catch (error: any) {
            console.error('Error fetching blogs:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleAddBlog = async () => {
        try {
            // Add the current date to the newBlog object
            const currentDate = new Date().toISOString();
            const newBlogWithDate = { ...newBlog, date: currentDate };

            const newBlogWithId = await addBlog(newBlogWithDate);
            setBlogs([...blogs, newBlogWithId]);
            setNewBlog({
                title: '',
                description: '',
                date: '',
                featuredImage: '',
                content: [],
            });
            setIsDialogOpen(false); // Close the dialog
        } catch (error: any) {
            console.error('Error adding blog:', error);
        }
    };


    const addContentItem = (type: 'heading' | 'paragraph') => {
        setNewBlog({
            ...newBlog,
            content: [...newBlog.content, { type, text: '' }],
        });
    };

    const updateContentItem = (index: number, text: string) => {
        const updatedContent = [...newBlog.content];
        updatedContent[index].text = text;
        setNewBlog({
            ...newBlog,
            content: updatedContent,
        });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Blog Posts</CardTitle>
                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                        <DialogTrigger asChild>
                            <Button onClick={() => setIsDialogOpen(true)}>
                                <Plus className="mr-2 h-4 w-4" />
                                Add New Blog
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl">
                            <DialogHeader>
                                <DialogTitle>Add New Blog Post</DialogTitle>
                            </DialogHeader>
                            <div className="scrollable-div grid bg gap-4 py-4">
                                <Input
                                    placeholder="Blog Title"
                                    value={newBlog.title}
                                    onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
                                />
                                <Input
                                    placeholder="Blog Description"
                                    value={newBlog.description}
                                    onChange={(e) => setNewBlog({ ...newBlog, description: e.target.value })}
                                />
                                <div>
                                    <Input
                                        placeholder="Featured Image URL"
                                        value={newBlog.featuredImage}
                                        onChange={(e) => setNewBlog({ ...newBlog, featuredImage: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    {newBlog.content.map((item, index) => (
                                        <div key={index}>
                                            <RichTextEditor
                                                value={item.text}
                                                onChange={(newValue) => updateContentItem(index, newValue)}
                                                isHeading={item.type === 'heading'}
                                            />
                                        </div>
                                    ))}
                                    <div className="flex gap-2">
                                        <Button onClick={() => addContentItem('heading')}>Add Heading</Button>
                                        <Button onClick={() => addContentItem('paragraph')}>Add Paragraph</Button>
                                    </div>
                                </div>
                                <Button onClick={handleAddBlog}>Add Blog Post</Button>
                            </div>
                        </DialogContent>
                    </Dialog>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {blogs.map((blog) => (
                            <div key={blog.id} className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium">{blog.title}</p>
                                    <p className="text-sm text-muted-foreground">{blog.description}</p>
                                    <p className="text-sm text-muted-foreground">Published on: {blog.date}</p>
                                </div>
                                <div className="flex space-x-2">
                                    <Button variant="outline" size="sm" onClick={() => { toast.success("Command recieved. Implementation to be added in final build.") }}>
                                        <Edit className="mr-2 h-4 w-4" />
                                        Edit
                                    </Button>
                                    <Button variant="outline" size="sm" onClick={() => { toast.success("Command recieved. Implementation to be added in final build.") }}>
                                        <Trash2 className="mr-2 h-4 w-4" />
                                        Delete
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
            <ToastContainer />
        </>
    );
}
