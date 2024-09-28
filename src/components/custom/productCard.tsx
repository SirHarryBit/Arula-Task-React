interface Course {
    title: string,
    featuredImage: string,
    level: string,
    duration: string,
    price: string,
    originalPrice: string,
}

const CourseCard = (course: Course) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={course.featuredImage} alt={course.title} className="w-full h-40 object-cover" />
            <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500">Duration: {course.duration}</span>
                    <span className="text-sm text-gray-500">Level: {course.level}</span>
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        <span className="font-bold text-lg">{course.price}</span>
                        <span className="text-sm text-gray-500 line-through ml-2">{course.originalPrice}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
