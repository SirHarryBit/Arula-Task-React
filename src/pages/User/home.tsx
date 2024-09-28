
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { benefits, therapists, faqs, testimonials } from "@/data/data"
import BenefitCard from "@/components/custom/benefitCard"
import TherapistCard from "@/components/custom/therapistCard"
import Navbar from "@/components/custom/navbar"
import Footer from "@/components/custom/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Suspense, useEffect } from "react"
import { Link, useHref, useLocation } from "react-router-dom"


function Home() {
    const location = useLocation();

    useEffect(() => {
        // Scroll to the top of the page only if the current location is the home page and there is no hash
        if (location.pathname === '/' && !location.hash) {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Navbar />
            <main className="flex-grow">
                <section className="bg-gradient-to-br from-emerald-100 to-teal-100 min-h-[600px] flex items-center">
                    <div className="container mx-auto flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 p-8">
                            <h2 className="text-4xl md:text-5xl font-bold text-teal-800 mb-6 leading-tight">
                                Online therapy with a licensed therapist
                            </h2>
                            <p className="text-lg text-teal-700 mb-8">
                                Our online therapy is as effective as in-person therapy, and it's a lot easier to get started. Sign up today to get paired with a licensed counselor and receive whatever support you need.
                            </p>
                            <div className="space-y-4">
                                <Link to='/about'>
                                    <Button size="lg" className="w-full md:w-auto bg-teal-600 hover:bg-teal-700 transition-colors duration-300" >
                                        Know More
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="md:w-1/2 px-8">
                            <img
                                src="/hero2.webp"
                                alt="Therapist"
                                className="w-full h-[700px] object-cover rounded-lg "
                            />
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-white">
                    <div className="container mx-auto px-8 items-center">
                        <h2 className="text-3xl font-bold text-center mb-12 text-teal-800">Why Choose Us?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {benefits.map((benefit, index) => (
                                <BenefitCard key={index} {...benefit} />
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-8 items-center">
                        <h2 className="text-3xl font-bold text-center mb-12 text-teal-800">Our Therapists</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {therapists.map(therapist => (
                                <TherapistCard key={therapist.id} {...therapist} />
                            ))}
                        </div>
                    </div>
                </section>
                <section id="testimonials" className="py-16 bg-gray-50">
                    <div className="container mx-auto px-8 items-center">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">What Our Customers Say</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {testimonials.map((testimonial) => (
                                <Card key={testimonial.id} className="bg-white">
                                    <CardContent className="p-6">
                                        <div className="flex items-center mb-4">
                                            <Suspense fallback={<div className="h-[150] w-[400]"></div>}>
                                                <Avatar className="h-10 w-10 mr-4">
                                                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                                                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                                                </div>
                                            </Suspense>
                                        </div>
                                        <p className="text-gray-700">{testimonial.comment}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12 text-teal-800">Frequently Asked Questions</h2>
                        <Accordion type="single" collapsible className="max-w-4xl mx-auto">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger ><p className=" text-left text-teal-700 hover:text-teal-800">{faq.question}</p></AccordionTrigger>
                                    <AccordionContent >
                                        <p className=" text-gray-600">{faq.answer}</p>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section>
            </main>
            <Footer />
        </div>

    )
}

export default Home
