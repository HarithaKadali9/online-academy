import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons from lucide-react
import image from "../assets/image.png";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="h-14 w-14">
          <img src={image} alt="My Logo" className="h-full w-full object-cover" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/courses" className="hover:text-blue-600">Courses</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        </nav>

        {/* Hamburger Menu Icon */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 py-2 space-y-2 shadow-md">
          <Link to="/" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/courses" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>Courses</Link>
          <Link to="/contact" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}
