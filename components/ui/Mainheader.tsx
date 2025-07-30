import { useState } from "react";
import { X, Menu } from "lucide-react";

const MainHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "VISIT", href: "#visit" },
    { label: "EDUCATION", href: "#education" },
    { label: "ABOUT", href: "#about" },
    { label: "GET INVOLVED", href: "#get-involved" },
  ];

  return (
    <header className="relative z-30 ">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          
          {/* Centered Navigation */}
          <div className="absolute inset-0 flex justify-center items-center h-16 pointer-events-none">
            <nav className="hidden md:flex space-x-8 pointer-events-auto">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-900 hover:text-gray-600 font-medium text-sm tracking-wide transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Left spacer to balance layout */}
          <div></div>

          {/* Right Side Button + Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors font-medium text-sm">
              Become a Member
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-900 hover:text-gray-600 font-medium text-sm tracking-wide transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default MainHeader;