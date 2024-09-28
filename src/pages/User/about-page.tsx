import Footer from "@/components/custom/footer";
import Navbar from "@/components/custom/navbar";
import { Accordion, AccordionContent, AccordionTrigger, AccordionItem } from "@/components/ui/accordion";
import { faqs } from "@/data/data";
import { useEffect } from "react";
export default function AboutPage() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      {/* Top Section */}
      <section className="container mx-auto px-8 pt-12">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-12 text-teal-800">
          Compassionate Care for Your Mental Well-being
        </h1>
        <img
          src="/about1.webp"
          width={1200}
          height={400}
          alt="Therapy session in progress"
          className="w-full max-h-[600px] h-auto object-cover rounded-lg shadow-lg"
        />
      </section>

      {/* About Company Section */}
      <section className="text-center container mx-auto px-8 py-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-teal-800">About Our Practice</h2>
        <p className="text-lg mb-12  text-gray-700">
          At our therapy consultation practice, we've assembled a team of experienced and empathetic professionals dedicated to supporting your mental health journey. Our approach combines evidence-based techniques with personalized care to help you navigate life's challenges and achieve emotional well-being.
        </p>
        <a href="/schedule" className="inline-block bg-teal-600 text-white px-8 py-4 text-lg font-semibold hover:bg-teal-700 transition duration-300 rounded-lg">
          Schedule a Consultation
        </a>
      </section>

      {/* Core Values Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-teal-800">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Empathy and Compassion", description: "We approach every client with genuine care and understanding, creating a safe and supportive environment for healing and growth." },
              { title: "Evidence-Based Practice", description: "Our therapeutic approaches are grounded in scientific research, ensuring that you receive the most effective and up-to-date care possible." },
              { title: "Personalized Treatment", description: "We recognize that each individual is unique, and we tailor our therapy plans to meet your specific needs and goals." },
              { title: "Continuous Growth", description: "We are committed to ongoing professional development, constantly expanding our knowledge and skills to better serve our clients." },
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-teal-700">{value.title}</h3>
                <p className="text-lg text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Founder Section */}
      <section className="container mx-auto px-8 py-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-teal-800">About Our Founder</h2>
        <div className="flex flex-col md:flex-row items-center  gap-12">
          <img
            src="/hero1.webp"
            width={400}
            height={400}
            alt="Dr. Emily Johnson"
            className="rounded-full w-72 h-72 object-cover"
          />
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4 text-teal-700">Dr. Emily Johnson</h3>
            <p className="text-lg mb-8 text-gray-700">
              Dr. Emily Johnson, a licensed clinical psychologist with over 15 years of experience, founded our practice with a vision of providing accessible, high-quality mental health care. Her expertise in cognitive-behavioral therapy and mindfulness-based approaches has helped countless individuals overcome challenges and lead fulfilling lives.
            </p>
            <blockquote className="text-lg italic text-gray-600 border-l-4 border-gray-300 pl-6">
              "Our goal is to create a warm, accepting space where individuals can explore their thoughts and feelings, develop coping strategies, and work towards personal growth and healing."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Services Offered Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-teal-800">Services Offered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Individual Therapy", description: "One-on-one sessions tailored to address your unique concerns and goals.", image: "/about2.webp" },
              { title: "Couples Counseling", description: "Support for partners seeking to improve communication and strengthen their relationship.", image: "/about3.webp" },
              { title: "Group Therapy", description: "Facilitated sessions where you can connect with others facing similar challenges.", image: "/about4.webp" },
              { title: "Anxiety Management", description: "Learn effective techniques to reduce anxiety and regain control of your life.", image: "/about5.webp" },
              { title: "Depression Treatment", description: "Comprehensive care to help you overcome depression and rediscover joy.", image: "/about6.webp" },
              { title: "Stress Reduction", description: "Develop strategies to manage stress and improve your overall well-being.", image: "/about7.webp" },
            ].map((service, index) => (
              <div key={index} className="bg-white overflow-hidden rounded-lg shadow-md">
                <img
                  src={service.image}
                  width={300}
                  height={200}
                  alt={service.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-teal-700">{service.title}</h3>
                  <p className="text-lg text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="bg-teal-800 text-white py-16">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <h3 className="text-4xl font-bold mb-4">1000+</h3>
              <p className="text-lg">Clients Helped</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-4">15+</h3>
              <p className="text-lg">Years of Experience</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-4">98%</h3>
              <p className="text-lg">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-teal-800">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-teal-700 hover:text-teal-800">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <Footer />
    </div>
  )
}


