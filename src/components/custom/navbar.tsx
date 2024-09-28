import { useState, useEffect } from 'react'
import { Button } from '../ui/button'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()

    // Scroll to testimonials section when the URL hash is '#testimonials'
    useEffect(() => {
        if (location.hash === '#testimonials') {
            const testimonialsSection = document.getElementById('testimonials')
            if (testimonialsSection) {
                testimonialsSection.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }, [location.hash])

    return (
        <header className="bg-stone-100 py-4 px-6 flex justify-between items-center border-b sticky top-0 z-10 shadow-sm">
            <div className="flex items-center">
                <img src="/main-logo.png" alt="Logo" className="h-12  mr-4" />
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
                {isMenuOpen ? "Close" : "Menu"}
            </button>
            <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-center absolute md:relative top-full left-0 right-0 bg-white md:bg-transparent p-4 md:p-0`}>
                <Link to='/'><Button variant="ghost">Home</Button></Link>
                <Link to='/about'><Button variant="ghost">About</Button></Link>
                <Link to='/blogs'><Button variant="ghost">Blogs</Button></Link>
                <Link to='/#testimonials'><Button variant="ghost">Testimonials</Button></Link>
                <Link to='/login'><Button variant="outline">Log In</Button></Link>
                <Link to='/schedule'><Button>Book a session</Button></Link>
            </nav>
        </header>
    )
}

export default Navbar
