import { Link } from 'react-router';
import { ArrowRight, Github, Mail } from 'lucide-react';
import imgAsgardsWrath2 from "figma:asset/50c3d4f7056af475f30494dd1c18761689433478.png";
import imgPathOfLight from "figma:asset/444aac399f2a31e92820e4ccccda80dd909e0e8c.png";
import imgEncounter from "figma:asset/ede4eb82e423235da459a3a9c9ff3df40ca8e3b1.png";
import imgVitaZoa from "figma:asset/b4b9c5bf9de515bbbcaf6ceec0251f7a6bb96216.png";
import imgElementum from "figma:asset/elementum-thumb.jpg";

const featuredProjects = [
  {
    id: '11',
    title: 'Elementum',
    type: 'Personal-Energy App',
    image: imgElementum
  },
  {
    id: '1',
    title: "Asgard's Wrath 2",
    type: 'AAA VR Title',
    image: imgAsgardsWrath2
  },
  {
    id: '2',
    title: 'Path of Light',
    type: 'Interactive Installation',
    image: imgPathOfLight
  },
  {
    id: '6',
    title: 'ENCOUNTER',
    type: 'Multiplayer VR',
    image: imgEncounter
  },
  {
    id: '4',
    title: 'Vita Zoa',
    type: 'Roguelike',
    image: imgVitaZoa
  },
];

export function LandingPage() {
  return (
    <div className="pt-20 pb-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              {/* Labels */}
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <div className="px-3 sm:px-4 py-2 bg-[rgba(0,146,184,0.2)] border border-[rgba(0,184,219,0.3)] rounded-full">
                  <p className="text-[#53eafd] text-xs sm:text-sm font-['Neue_Montreal']">Technical Narrative Designer</p>
                </div>
                <div className="px-3 sm:px-4 py-2 bg-[rgba(0,146,184,0.2)] border border-[rgba(0,184,219,0.3)] rounded-full">
                  <p className="text-[#53eafd] text-xs sm:text-sm font-['Neue_Montreal']">Indie Developer</p>
                </div>
                <div className="px-3 sm:px-4 py-2 bg-[rgba(0,146,184,0.2)] border border-[rgba(0,184,219,0.3)] rounded-full">
                  <p className="text-[#53eafd] text-xs sm:text-sm font-['Neue_Montreal']">Creative Technologist</p>
                </div>
              </div>
              
              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-['Neue_Montreal'] leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d3f2] to-white">
                  Jason Jiaxin Xu
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d3f2] to-white">
                  Game Designer
                </span>
              </h1>
              
              {/* Paragraph */}
              <p className="text-base sm:text-lg md:text-xl text-[#d1d5dc] leading-relaxed font-['Neue_Montreal']">
                I'm a game and narrative designer specializing in cinematic storytelling and interactive systems. I've spent 4.5 years at <span className="font-bold">Meta / Sanzaru Games</span>, designing and shipping large-scale narrative experiences for the VR game <span className="font-bold">Asgard's Wrath 2</span>. Alongside studio work, I pursue indie projects that allow for more personal and experimental exploration. With a creative technology background from <span className="font-bold">New York University</span>, my work focuses on bridging virtual experiences and physical reality to create lasting emotional connection.
              </p>
              
              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/projects" 
                  className="flex items-center gap-2 px-6 py-3 bg-[#0092b8] hover:bg-[#007a9a] text-white rounded-lg transition-colors font-['Neue_Montreal']"
                >
                  More Projects
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Right - Project Collage */}
            <div className="relative w-full max-w-[616px] mx-auto">
              {/* Background blur effect */}
              <div className="absolute inset-0 bg-[rgba(0,146,184,0.1)] blur-[64px] rounded-full"></div>
              
              {/* Collage Container */}
              <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
                {/* Grid Layout */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 h-full">
                  {/* Left Column - Elementum (1, top) over Asgard's Wrath 2 (2, bottom) */}
                  <div className="flex flex-col gap-2 sm:gap-3 h-full">
                    {featuredProjects.slice(0, 2).map((p, i) => (
                      <Link
                        key={p.id}
                        to={`/projects/${p.id}`}
                        className="group relative flex-1 min-h-0 overflow-hidden rounded-xl border-2 border-transparent hover:border-[#00d3f2] transition-all duration-300"
                      >
                        <img
                          src={p.image}
                          alt={p.title}
                          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#162456] via-[rgba(22,36,86,0.6)] to-transparent opacity-60"></div>

                        {i === 0 && (
                          <div className="absolute top-3 left-3 z-10">
                            <span className="px-2.5 py-1 bg-[rgba(0,146,184,0.35)] border border-[rgba(0,184,219,0.4)] rounded-full text-[#53eafd] text-[10px] sm:text-xs font-['Neue_Montreal']">Featured</span>
                          </div>
                        )}

                        <div className="absolute bottom-3 left-3 right-3 z-10">
                          <h3 className="text-white text-base sm:text-lg font-bold font-['Neue_Montreal'] leading-tight">{p.title}</h3>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Right Column - 3 stacked projects */}
                  <div className="flex flex-col gap-2 sm:gap-3 h-full">
                    {featuredProjects.slice(2, 5).map((p) => (
                      <Link
                        key={p.id}
                        to={`/projects/${p.id}`}
                        className="group relative flex-1 min-h-0 overflow-hidden rounded-xl border-2 border-transparent hover:border-[#00d3f2] transition-all duration-300"
                      >
                        <img
                          src={p.image}
                          alt={p.title}
                          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#162456] via-[rgba(22,36,86,0.6)] to-transparent opacity-60"></div>

                        <div className="absolute bottom-2 left-2.5 right-2.5 z-10">
                          <h3 className="text-white text-xs sm:text-sm font-bold font-['Neue_Montreal'] leading-tight">{p.title}</h3>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Get In Touch Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-['Neue_Montreal']">Get In Touch</h2>
            <p className="text-[#d1d5dc] text-lg md:text-xl font-['Neue_Montreal']">
              Let's connect and discuss your next project or collaboration
            </p>
          </div>
          
          {/* Contact Buttons */}
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="https://www.linkedin.com/in/jason-x-b663a6107/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-[#0092b8] hover:bg-[#007a9a] text-white rounded-lg transition-all duration-300 hover:transform hover:scale-105 font-['Neue_Montreal'] text-lg shadow-lg"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            
            <a 
              href="https://github.com/jiaxinxuyago" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-[#0092b8] hover:bg-[#007a9a] text-white rounded-lg transition-all duration-300 hover:transform hover:scale-105 font-['Neue_Montreal'] text-lg shadow-lg"
            >
              <Github className="w-6 h-6" />
              GitHub
            </a>
            
            <a 
              href="https://mail.google.com/mail/?view=cm&to=jiaxinxuyago@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-[#0092b8] hover:bg-[#007a9a] text-white rounded-lg transition-all duration-300 hover:transform hover:scale-105 font-['Neue_Montreal'] text-lg shadow-lg"
            >
              <Mail className="w-6 h-6" />
              Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}