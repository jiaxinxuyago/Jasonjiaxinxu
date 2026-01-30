import { Link, useLocation, useNavigate } from 'react-router';
import { Gamepad2, Home, FolderOpen, FileText, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); // Close mobile menu
    if (location.pathname === '/') {
      // If already on home page, just scroll to contact section
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to home page, then scroll to contact section
      navigate('/');
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(2,6,24,0.8)] backdrop-blur-md border-b border-[rgba(0,184,219,0.2)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group" onClick={closeMobileMenu}>
            <Gamepad2 className="w-6 h-6 text-[#00d3f2]" />
            <span className="text-xl font-bold font-['Neue_Montreal'] text-white">JX</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                isActive('/') 
                  ? 'bg-[#0092b8] text-white' 
                  : 'text-gray-300 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Home className="w-4 h-4" />
              Home
            </Link>
            
            <Link 
              to="/projects" 
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                isActive('/projects') || location.pathname.startsWith('/projects/')
                  ? 'bg-[#0092b8] text-white' 
                  : 'text-gray-300 hover:text-white hover:bg-slate-900'
              }`}
            >
              <FolderOpen className="w-4 h-4" />
              Projects
            </Link>
            
            <Link 
              to="/resume" 
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                isActive('/resume') 
                  ? 'bg-[#0092b8] text-white' 
                  : 'text-gray-300 hover:text-white hover:bg-slate-900'
              }`}
            >
              <FileText className="w-4 h-4" />
              Resume
            </Link>
            
            <Link 
              to="/contact" 
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                isActive('/contact') 
                  ? 'bg-[#0092b8] text-white' 
                  : 'text-gray-300 hover:text-white hover:bg-slate-900'
              }`}
              onClick={handleContactClick}
            >
              <Mail className="w-4 h-4" />
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-slate-900 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <Link 
              to="/" 
              className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all ${
                isActive('/') 
                  ? 'bg-[#0092b8] text-white' 
                  : 'text-gray-300 hover:text-white hover:bg-slate-900'
              }`}
              onClick={closeMobileMenu}
            >
              <Home className="w-4 h-4" />
              Home
            </Link>
            
            <Link 
              to="/projects" 
              className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all ${
                isActive('/projects') || location.pathname.startsWith('/projects/')
                  ? 'bg-[#0092b8] text-white' 
                  : 'text-gray-300 hover:text-white hover:bg-slate-900'
              }`}
              onClick={closeMobileMenu}
            >
              <FolderOpen className="w-4 h-4" />
              Projects
            </Link>
            
            <Link 
              to="/resume" 
              className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all ${
                isActive('/resume') 
                  ? 'bg-[#0092b8] text-white' 
                  : 'text-gray-300 hover:text-white hover:bg-slate-900'
              }`}
              onClick={closeMobileMenu}
            >
              <FileText className="w-4 h-4" />
              Resume
            </Link>
            
            <Link 
              to="/contact" 
              className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all ${
                isActive('/contact') 
                  ? 'bg-[#0092b8] text-white' 
                  : 'text-gray-300 hover:text-white hover:bg-slate-900'
              }`}
              onClick={handleContactClick}
            >
              <Mail className="w-4 h-4" />
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}