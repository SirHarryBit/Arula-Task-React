import { Progress } from '../ui/progress';

interface Course {
    image: string;
    title: string;
    featuredImage: string;

}

const CourseProgressCard = (course: Course) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={course.featuredImage} alt={course.title} className="w-full h-32 object-cover" />
            <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">Progress</span>
                    <span className="text-sm font-medium">{60}%</span>
                </div>
                <Progress value={60} className="mb-2 " />
                <div className="text-sm text-gray-500">Last accessed: 26-09-2024</div>
            </div>
        </div>
    );
};

export default CourseProgressCard;
