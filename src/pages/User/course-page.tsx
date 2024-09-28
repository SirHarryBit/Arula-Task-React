// src/pages/test.tsx
import { Button } from '@/components/ui/button';
import { getCourse } from '@/services/courseService';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface Page {
  title: string;
  description: string;
  videoLink: string;
}

export default function CoursePage() {
  const { courseId } = useParams<{ courseId: string }>();
  const [selectedPage, setSelectedPage] = useState<Page | null>(null);
  const [course, setCourse] = useState<{ title: string; description: string; pages: Page[] } | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const foundCourse = await getCourse(courseId);
        if (foundCourse) {
          setCourse(foundCourse);
          setSelectedPage(foundCourse.pages[0]); // Set the first page as default
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    fetchCourse();
  }, [courseId]);



  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4 border-b">
          <Button
            variant="ghost"
            onClick={() => navigate('/user/dashboard')}
          >Go Back</Button>
          <h2 className="text-xl font-semibold text-gray-800">{course.title}</h2>
          <p className="mt-2 text-sm text-gray-600">{course.description}</p>
        </div>
        <nav className="mt-4">
          {course.pages.map((page, index) => (
            <button
              key={index}
              className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${selectedPage === page ? 'bg-teal-100 text-teal-800' : 'text-gray-700'
                }`}
              onClick={() => setSelectedPage(page)}
            >
              {page.title}
            </button>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8 overflow-auto">
        {selectedPage ? (
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{selectedPage.title}</h1>
            <p className="text-gray-600 mb-6">{selectedPage.description}</p>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <iframe width="560" height="315" src={selectedPage.videoLink} title={selectedPage.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-20">
            <h2 className="text-2xl font-semibold">Select a page to begin</h2>
            <p className="mt-2">Choose a topic from the sidebar to start learning</p>
          </div>
        )}
      </div>
    </div>
  );
}
