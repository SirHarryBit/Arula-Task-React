// src/pages/data.ts

import { Clock, Video, MessageCircle, CreditCard, BookOpen, ChartLine, Users } from "lucide-react";

export const therapists = [
    { id: 1, name: "Sindhu N", image: "/therapist1.webp", experience: "10 years", price: "₹1500 for 50 mins", specialties: ["Depression", "Relationship", "Anxiety"], languages: ["English", "Hindi"] },
    { id: 2, name: "Abhiramana Srikin", image: "/therapist2.webp", experience: "12 years", price: "₹1700 for 50 mins", specialties: ["Anxiety", "Depression", "Couples therapy"], languages: ["English", "Tamil", "Kannada"] },
    { id: 3, name: "Prerna Arora", image: "/therapist3.webp", experience: "8 years", price: "₹1600 for 50 mins", specialties: ["Stress", "Work-life balance", "Self-esteem"], languages: ["English", "Hindi", "Punjabi"] },
];

export const benefits = [
    { icon: Clock, title: "Flexible Scheduling", description: "Book sessions at times that suit your lifestyle" },
    { icon: Video, title: "Video or Chat Sessions", description: "Choose your preferred mode of communication" },
    { icon: MessageCircle, title: "Unlimited Messaging", description: "Stay connected with your therapist between sessions" },
    { icon: CreditCard, title: "Affordable Pricing", description: "Various plans to fit your budget and needs" },
];

export const faqs = [
    { question: "How does online therapy work?", answer: "Online therapy allows you to connect with a licensed therapist through video calls, phone calls, or text messaging. You can schedule sessions at your convenience and communicate from the comfort of your own space." },
    { question: "Is online therapy as effective as in-person therapy?", answer: "Research has shown that online therapy can be just as effective as in-person therapy for many mental health issues. It offers the same level of professional care with added convenience and accessibility." },
    { question: "How do I choose the right therapist for me?", answer: "We provide detailed profiles of our therapists, including their specialties, experience, and approach. You can browse through these and select a therapist that best fits your needs. If you're unsure, you can take our matching quiz for personalized recommendations." },
    { question: "What if I want to switch therapists?", answer: "We understand that finding the right fit is crucial. If you feel your current therapist isn't the best match, you can easily switch to a different therapist at any time through your account settings." },
];

export const dailyUsers = [
    { users: 186 },
    { users: 102 },
    { users: 73 },
    { users: 209 },
    { users: 237 },
];

export const totalUsers = [
    { users: 1186 },
    { users: 1288 },
    { users: 1361 },
    { users: 1570 },
    { users: 1807 },
];

export const userGrowth = [
    { growth: 12 },
    { growth: 8 },
    { growth: 15 },
    { growth: 18 },
];

export const testimonials = [
    {
        "id": 1,
        "name": "Alice Johnson",
        "role": "Mother",
        "comment": "This course provided me with the essential skills I needed to advance in my career. The practical examples were incredibly helpful.",
        "avatar": "cust1.webp"
    },
    {
        "id": 2,
        "name": "Bob Smith",
        "role": "Teacher",
        "comment": "As someone transitioning into data science, this course was the perfect starting point. It's comprehensive yet easy to follow.",
        "avatar": "cust2.webp"
    },
    {
        "id": 3,
        "name": "Carol Davis",
        "role": "Counsellor",
        "comment": "The data visualization section was a game-changer for me. I now create much more impactful reports for my team.",
        "avatar": "cust3.webp"
    },
    {
        "id": 1,
        "name": "Alice Johnson",
        "role": "Father",
        "comment": "This course provided me with the essential skills I needed to advance in my career. The practical examples were incredibly helpful.",
        "avatar": "cust4.webp"
    },
    {
        "id": 3,
        "name": "Carol Davis",
        "role": "Children's Home",
        "comment": "The data visualization section was a game-changer for me. I now create much more impactful reports for my team.",
        "avatar": "cust5.webp"
    },
    {
        "id": 2,
        "name": "Bob Smith",
        "role": "NGO",
        "comment": "As someone transitioning into data science, this course was the perfect starting point. It's comprehensive yet easy to follow.",
        "avatar": "cust6.webp"
    },
]

export const upcomingCourses = [
    {
        "id": 1,
        "title": "Understanding Anxiety",
        "featuredImage": "/about6.webp",
        "level": "Beginner",
        "duration": "2h",
        "price": "Rs. 800.00",
        "originalPrice": "Rs. 1500.00"
    },
    {
        "id": 2,
        "title": "Coping with Depression",
        "featuredImage": "/cust3.webp",
        "level": "Intermediate",
        "duration": "3h",
        "price": "Rs. 1200.00",
        "originalPrice": "Rs. 2200.00"
    },
    {
        "id": 3,
        "title": "Stress Management Techniques",
        "featuredImage": "/about7.webp",
        "level": "Beginner",
        "duration": "2h",
        "price": "Rs. 900.00",
        "originalPrice": "Rs. 1800.00"
    },
    {
        "id": 4,
        "title": "Building Resilience",
        "featuredImage": "/course3.webp",
        "level": "Intermediate",
        "duration": "3h",
        "price": "Rs. 1100.00",
        "originalPrice": "Rs. 2000.00"
    },
    {
        "id": 5,
        "title": "Mindfulness and Meditation",
        "featuredImage": "/course1.webp",
        "level": "Beginner",
        "duration": "2h",
        "price": "Rs. 750.00",
        "originalPrice": "Rs. 1400.00"
    },
    {
        "id": 6,
        "title": "Cognitive Therapy Basics",
        "featuredImage": "/course2.webp",
        "level": "Intermediate",
        "duration": "3h",
        "price": "Rs. 1300.00",
        "originalPrice": "Rs. 2400.00"
    },
    {
        "id": 7,
        "title": "Healthy Sleep Habits",
        "featuredImage": "/about5.webp",
        "level": "Beginner",
        "duration": "2h",
        "price": "Rs. 850.00",
        "originalPrice": "Rs. 1600.00"
    },
    {
        "id": 8,
        "title": "Supporting a Loved One",
        "featuredImage": "/about4.webp",
        "level": "Intermediate",
        "duration": "3h",
        "price": "Rs. 1000.00",
        "originalPrice": "Rs. 1900.00"
    }
]


export const analyticsOverview = [
    {
        title: "Courses Completed",
        icon: BookOpen,
        value: 12,
        description: "+2 this month",
        color: "text-teal-500",
    },
    {
        title: "Hours Learned",
        icon: Clock,
        value: 87,
        description: "+5 this week",
        color: "text-teal-500",
    },
    {
        title: "Certifications",
        icon: ChartLine,
        value: 3,
        description: "1 in progress",
        color: "text-teal-500",
    },
    {
        title: "Forum Contributions",
        icon: Users,
        value: 28,
        description: "+7 this month",
        color: "text-teal-500",
    },
];

export const myCourses = [
    {
        id: 1,
        title: "Web Development Fundamentals",
        progress: 75,
        image: "/placeholder.svg?height=150&width=250",
        lastAccessed: "2 days ago",
    },
    {
        id: 2,
        title: "Data Science Essentials",
        progress: 40,
        image: "/placeholder.svg?height=150&width=250",
        lastAccessed: "1 week ago",
    },
    {
        title: "UI/UX Design Principles",
        progress: 90,
        image: "/placeholder.svg?height=150&width=250",
        lastAccessed: "Yesterday",
    },
];

export const courseAndEvents = [
    {
        title: "Mastering Interaction Design: From Principle...",
        image: "/placeholder.svg?height=200&width=300",
        instructor: "Luis Mark",
        level: "Beginner",
        duration: "4h",
        price: "$00.00",
        originalPrice: "$69.00",
    },
    {
        title: "Apple HIG Mastery: Creating Seamless Use...",
        image: "/placeholder.svg?height=200&width=300",
        instructor: "Luis Mark",
        level: "Beginner",
        duration: "4h",
        price: "$56.66",
        originalPrice: "$69.00",
    },
    {
        title: "Creating Impactful Icons: Design Techniqu...",
        image: "/placeholder.svg?height=200&width=300",
        instructor: "Luis Mark",
        level: "Beginner",
        duration: "32h",
        price: "$66.66",
        originalPrice: "$69.00",
    },
    {
        title: "Advanced Interaction Design: Techniques an...",
        image: "/placeholder.svg?height=200&width=300",
        instructor: "Luis Mark",
        level: "Beginner",
        duration: "32h",
        price: "$10.00",
        originalPrice: "$69.00",
    },
    {
        title: "Apple HIG Mastery: Creating Seamless Use...",
        image: "/placeholder.svg?height=200&width=300",
        instructor: "Luis Mark",
        level: "Beginner",
        duration: "4h",
        price: "$56.66",
        originalPrice: "$69.00",
    },
    {
        title: "Creating Impactful Icons: Design Techniqu...",
        image: "/placeholder.svg?height=200&width=300",
        instructor: "Luis Mark",
        level: "Beginner",
        duration: "32h",
        price: "$66.66",
        originalPrice: "$69.00",
    },
    {
        title: "Advanced Interaction Design: Techniques an...",
        image: "/placeholder.svg?height=200&width=300",
        instructor: "Luis Mark",
        level: "Beginner",
        duration: "32h",
        price: "$10.00",
        originalPrice: "$69.00",
    },
    {
        title: "Apple HIG Mastery: Creating Seamless Use...",
        image: "/placeholder.svg?height=200&width=300",
        instructor: "Luis Mark",
        level: "Beginner",
        duration: "4h",
        price: "$56.66",
        originalPrice: "$69.00",
    },
];
