import { useState, useRef, useEffect } from 'react';
import ProductCard from './productCard';
import { Button } from '../ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductShowcase = ({ courseAndEvents }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transitioning, setTransitioning] = useState(false);
    const productContainerRef = useRef<HTMLDivElement>(null);

    // Function to handle the next set of products
    const handleNext = () => {
        setTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 4) % courseAndEvents.length);
            setTransitioning(false);
        }, 500); // Match this with the transition duration in CSS
    };

    // Function to handle the previous set of products
    const handlePrevious = () => {
        setTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 4 + courseAndEvents.length) % courseAndEvents.length);
            setTransitioning(false);
        }, 500); // Match this with the transition duration in CSS
    };

    // Get the current set of 4 products to display
    const currentProducts = courseAndEvents.slice(currentIndex, currentIndex + 4);

    // Calculate the total number of sections
    const totalSections = Math.ceil(courseAndEvents.length / 4);

    useEffect(() => {
        if (productContainerRef.current) {
            productContainerRef.current.classList.remove('fade-in-left', 'fade-in-right', 'active');
            if (transitioning) {
                productContainerRef.current.classList.add('fade-in-right');
            } else {
                productContainerRef.current.classList.add('fade-in-left');
            }
            setTimeout(() => {
                productContainerRef.current?.classList.add('active');
            },); // Small delay to ensure the transition starts
        }
    }, [currentIndex, transitioning]);

    return (
        <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-opacity duration-500 ease-in-out" ref={productContainerRef}>
                {currentProducts.map((course, index) => (
                    <div
                        key={index}
                        data-index={index}
                    >
                        <ProductCard {...course} />
                    </div>
                ))}
            </div>
            <div className="mt-8 flex justify-between absolute inset-x-0 top-full z-10">
                <Button variant={'ghost'} onClick={handlePrevious}>
                    <ChevronLeft />
                </Button>
                <Button variant={'ghost'} onClick={handleNext} >
                    <ChevronRight />
                </Button>
            </div>
            <div className="mt-8 flex justify-center">
                {Array.from({ length: totalSections }).map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 mx-1 rounded-full ${index === Math.floor(currentIndex / 4) ? 'bg-blue-500' : 'bg-gray-300'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductShowcase;
