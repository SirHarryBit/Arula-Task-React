import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Edit, Plus, Trash2 } from 'lucide-react';
import { addCourse, getAllCourses } from '@/services/courseService';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface CoursePage {
    title: string;
    description: string;
    videoLink: string;
}

interface Course {
    id: number;
    title: string;
    description: string;
    category: string;
    featuredImage: string;
    pages: CoursePage[];
}

export default function CoursesTab() {
    const [courses, setCourses] = useState<Course[]>([]);
    const [newCourse, setNewCourse] = useState<Omit<Course, 'id'>>({ title: '', description: '', category: '', featuredImage: '', pages: [] });
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            const coursesData = await getAllCourses();
            setCourses(coursesData);
            console.log(coursesData);
        } catch (error: any) {
            console.error('Error fetching courses:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleAddCourse = async () => {
        try {
            const formData = new FormData();
            formData.append('title', newCourse.title);
            formData.append('description', newCourse.description);
            formData.append('category', newCourse.category);
            formData.append('featuredImage', newCourse.featuredImage); // Ensure this is included

            newCourse.pages.forEach((page, index) => {
                formData.append(`pages[${index}][title]`, page.title);
                formData.append(`pages[${index}][description]`, page.description);
                formData.append(`pages[${index}][videoLink]`, page.videoLink);
            });

            const newCourseWithId = await addCourse(formData);
            setCourses([...courses, newCourseWithId]);
            setNewCourse({ title: '', description: '', category: '', featuredImage: '', pages: [] });
            setIsDialogOpen(false);
        } catch (error: any) {
            console.error('Error adding course:', error);
        }
    };


    const addCoursePage = () => {
        setNewCourse({
            ...newCourse,
            pages: [...newCourse.pages, { title: '', description: '', videoLink: '' }]
        });
    };


    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Courses</CardTitle>
                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                        <DialogTrigger asChild>
                            <Button>
                                <Plus className="mr-2 h-4 w-4" />
                                Add New Course
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="scrollable-div max-w-3xl">
                            <DialogHeader>
                                <DialogTitle>Add New Course</DialogTitle>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div>
                                    <label htmlFor="courseTitle" className="block text-sm font-medium text-gray-700">Course Title</label>
                                    <Input
                                        id="courseTitle"
                                        placeholder="Course Title"
                                        value={newCourse.title}
                                        onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="courseDescription" className="block text-sm font-medium text-gray-700">Course Description</label>
                                    <Textarea
                                        id="courseDescription"
                                        placeholder="Course Description"
                                        value={newCourse.description}
                                        onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="courseCategory" className="block text-sm font-medium text-gray-700">Course Category</label>
                                    <Select
                                        // aria-labelledby="courseCategory"
                                        id="courseCategory"
                                        value={newCourse.category}
                                        onValueChange={(value) => setNewCourse({ ...newCourse, category: value })}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="General">General</SelectItem>
                                            <SelectItem value="SelfHelp">Self-Help</SelectItem>
                                            <SelectItem value="Therapy">Therapy</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <label htmlFor="featuredImage" className="block text-sm font-medium text-gray-700">Featured Image</label>
                                    <Input
                                        id="featuredImage"
                                        placeholder="Featured Image URL"
                                        value={newCourse.featuredImage}
                                        onChange={(e) => setNewCourse({ ...newCourse, featuredImage: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <h4 className="font-medium mb-2">Course Pages</h4>
                                    {newCourse.pages.map((page, index) => (
                                        <div key={index} className="grid gap-2 mb-4">
                                            <div>
                                                <label htmlFor={`pageTitle-${index}`} className="block text-sm font-medium text-gray-700">Page Title</label>
                                                <Input
                                                    id={`pageTitle-${index}`}
                                                    placeholder="Page Title"
                                                    value={page.title}
                                                    onChange={(e) => {
                                                        const updatedPages = [...newCourse.pages];
                                                        updatedPages[index].title = e.target.value;
                                                        setNewCourse({ ...newCourse, pages: updatedPages });
                                                    }}
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor={`pageDescription-${index}`} className="block text-sm font-medium text-gray-700">Page Description</label>
                                                <Textarea
                                                    id={`pageDescription-${index}`}
                                                    placeholder="Page Description"
                                                    value={page.description}
                                                    onChange={(e) => {
                                                        const updatedPages = [...newCourse.pages];
                                                        updatedPages[index].description = e.target.value;
                                                        setNewCourse({ ...newCourse, pages: updatedPages });
                                                    }}
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor={`videoLink-${index}`} className="block text-sm font-medium text-gray-700">Video Link</label>
                                                <Input
                                                    id={`videoLink-${index}`}
                                                    placeholder="Video Link"
                                                    value={page.videoLink}
                                                    onChange={(e) => {
                                                        const updatedPages = [...newCourse.pages];
                                                        updatedPages[index].videoLink = e.target.value;
                                                        setNewCourse({ ...newCourse, pages: updatedPages });
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                    <Button onClick={addCoursePage} variant="outline">Add Page</Button>
                                </div>
                                <Button onClick={handleAddCourse}>Add Course</Button>
                            </div>
                        </DialogContent>
                    </Dialog>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {courses.map((course) => (
                            <div key={course.id} className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium">{course.title}</p>
                                    <p className="text-sm text-muted-foreground">Category: {course.category}</p>
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


