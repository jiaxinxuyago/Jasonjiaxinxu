import { Briefcase, GraduationCap, Award, Code, Download, Wrench } from 'lucide-react';
import headshot from 'figma:asset/05a1f97e44728cd60eb0e773fa445bf578369a62.png';

export function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 flex flex-col sm:flex-row justify-between items-start gap-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 w-full sm:w-auto">
            <img 
              src={headshot} 
              alt="Jason Jiaxin Xu"
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-cyan-500/50 shadow-lg shadow-cyan-500/20"
            />
            <div className="text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">Jiaxin Xu</h1>
              <p className="text-gray-300 text-sm sm:text-base break-all">jiaxinxuyago@gmail.com | +1(213)820-2771</p>
            </div>
          </div>
          <div className="flex items-center gap-3 sm:gap-6 w-full sm:w-auto justify-center sm:justify-start">
            <a 
              href="https://www.linkedin.com/in/jason-x-b663a6107/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 sm:px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors text-sm sm:text-base"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 sm:px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors text-sm sm:text-base"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Download</span>
            </button>
          </div>
        </div>

        {/* Experience */}
        <div className="bg-slate-900/50 rounded-xl p-4 sm:p-8 border border-cyan-500/20 mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />
            Work Experience
          </h2>
          <div className="space-y-8">
            {/* Meta - Sanzaru Games - Current Project */}
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">Technical Narrative Designer</h3>
                  <p className="text-cyan-400 text-sm sm:text-base">Meta - Sanzaru Games (Unannounced Project)</p>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-gray-400 text-xs sm:text-sm block">Jan 2024 - Jan 2026</span>
                  <span className="text-gray-500 text-xs sm:text-sm">Remote</span>
                </div>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  Led the conception and design of Cinematic Action Events (CAE), a narrative interaction system leveraging time-dilated gameplay to heighten cinematic tension and player engagement
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  Partnered with engineering and UI teams to bring the system to a production-ready prototype, culminating in a fully playable, minute-long CAE sequence integrated into a major boss encounter
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  Expanded the narrative toolset beyond Sequencer-only cinematics by co-developing modular narrative systems—most notably "Vignettes" (narrative flow-graphs) blending AI-driven NPCs to play staged narrative animation clips
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  Owned the design of production cinematics and transitions for key encounters, directing animators and level artists to seamlessly bridge real-time AI gameplay and in-engine cinematics, and scripting narrative flow using Unreal Engine 5 Blueprints
                </li>
              </ul>
            </div>

            {/* Meta - Sanzaru Games - Asgard's Wrath 2 */}
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">Game Designer (Cinematic/Narrative)</h3>
                  <p className="text-cyan-400 text-sm sm:text-base">Meta - Sanzaru Games • Asgard's Wrath 2</p>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-gray-400 text-xs sm:text-sm block">Aug 2021 - Dec 2023</span>
                  <span className="text-gray-500 text-xs sm:text-sm">San Mateo, CA</span>
                </div>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  Led narrative and cinematic design for Asgard's Wrath 2, a critically acclaimed AAA open-world VR action-RPG on Meta Quest, delivering 40+ hours of story-driven content through large-scale gameplay and immersive VR interactions
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  Designed and shipped 20+ core cinematics—including major boss introductions—using Unreal Engine 4.27, while serving as a primary contributor to the development of a custom cinematic system that significantly improved workflow efficiency
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  Pioneered high-fidelity VR NPC interaction systems, including animal interactions, handshakes, head-tracked performances, and character-centric gameplay, establishing a theatrical yet player-driven narrative experience
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  Implemented non-linear, reactive narrative behaviors through a variety of Sequencer, Animation Blueprints, Behavior Trees and custom state-driven AI, bringing dynamic life and emotional responsiveness to NPCs and ambient actors across the game world
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Internships */}
        <div className="bg-slate-900/50 rounded-xl p-4 sm:p-8 border border-cyan-500/20 mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />
            Internship
          </h2>
          <div className="space-y-8">
            {/* Internships */}
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">Game Designer Intern</h3>
                  <p className="text-cyan-400 text-sm sm:text-base">Next Studios - Tencent Games</p>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-gray-400 text-xs sm:text-sm block">Jun 2020 - Sep 2020</span>
                  <span className="text-gray-500 text-xs sm:text-sm">Beijing, China</span>
                </div>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  Co-designed the vertical slice for an unannounced multiplayer survival mobile title from pre-production through Tencent IEG approval, leading iterative UE4 prototyping of a survivor-rescue system and finalizing related UE/UX and narrative flows
                </li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">Creative Technologist Intern</h3>
                  <p className="text-cyan-400 text-sm sm:text-base">Digital FUN</p>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-gray-400 text-xs sm:text-sm block">Sep 2020 - Dec 2020</span>
                  <span className="text-gray-500 text-xs sm:text-sm">Shanghai, China</span>
                </div>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  Curated online exhibitions and staged live performances for the 2020 Shanghai Flare New Media Art Festival (25+ artist groups), designing an interactive AI hostess in TouchDesigner
                </li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">VR Designer Intern</h3>
                  <p className="text-cyan-400 text-sm sm:text-base">Emblematic Group</p>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-gray-400 text-xs sm:text-sm block">Oct 2018 - Feb 2019</span>
                  <span className="text-gray-500 text-xs sm:text-sm">Santa Monica, CA</span>
                </div>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  Built and pipelined 3D art assets for VR documentaries, converting photogrammetry captures into optimized, interactive real-time VR scenes
                </li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">Game Designer Intern</h3>
                  <p className="text-cyan-400 text-sm sm:text-base">The Rogue Initiative</p>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-gray-400 text-xs sm:text-sm block">June 2018 - Oct 2018</span>
                  <span className="text-gray-500 text-xs sm:text-sm">Los Angeles, CA</span>
                </div>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  Designed complex UE4 level geometry with layered traversal, stealth, combat, and puzzle gameplay to support high replayability for the vertical slice of an unannounced AAA third-person action game
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="bg-slate-900/50 rounded-xl p-4 sm:p-8 border border-cyan-500/20 mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
            Education
          </h2>
          <div className="space-y-6">
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">Master of Professional Studies</h3>
                  <p className="text-cyan-400 text-sm sm:text-base">New York University, Tisch School of the Arts</p>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-gray-400 text-xs sm:text-sm block">Sep 2019 - May 2021</span>
                  <span className="text-gray-500 text-xs sm:text-sm">New York, NY</span>
                </div>
              </div>
              <p className="text-gray-300 text-sm sm:text-base">
                Major: Interactive Telecommunications
              </p>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">Bachelor of Arts</h3>
                  <p className="text-cyan-400 text-sm sm:text-base">University of Southern California, School of Cinematic Arts</p>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-gray-400 text-xs sm:text-sm block">Aug 2013 - May 2018</span>
                  <span className="text-gray-500 text-xs sm:text-sm">Los Angeles, CA</span>
                </div>
              </div>
              <p className="text-gray-300 text-sm sm:text-base">
                Major: Interactive Media and Game Design
              </p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="bg-slate-900/50 rounded-xl p-4 sm:p-8 border border-cyan-500/20 mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Code className="w-5 h-5 sm:w-6 sm:h-6" />
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-3">Design Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['Cinematic Design', 'Narrative Design', 'Level Design', 
                  'VR Interaction Design', 'NPC Systems', 'Progression Systems', 
                  'Prototyping'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-cyan-600/20 text-cyan-300 text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-3">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['Unreal Engine 4/5', 'Unity', 'AI Vibe Coding', 'Blueprint', 'Sequencer', 'C#', 
                  'Animation BP', 'Behavior Tree', 'Maya', '3D Modeling', 'Figma', 'Jira', 'Confluence', 
                  'Git', 'Physical Computing'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-cyan-600/20 text-cyan-300 text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="bg-slate-900/50 rounded-xl p-4 sm:p-8 border border-cyan-500/20 mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Wrench className="w-5 h-5 sm:w-6 sm:h-6" />
            Projects
          </h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-lg font-bold text-white">Courtyard</h3>
                <span className="text-gray-400 text-sm">May 2016 - Now</span>
              </div>
              <p className="text-cyan-400 text-sm mb-2">Independent Game • Solo Developer</p>
              <p className="text-gray-300 text-sm">
                In-development project: an outcast child from a rural Chinese village uncover the millennia-old supernatural myth while escaping
              </p>
            </div>

            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-lg font-bold text-white">Path of Light</h3>
                <span className="text-gray-400 text-sm">Oct 2019 - Dec 2019</span>
              </div>
              <p className="text-cyan-400 text-sm mb-2">Interactive Installation • Designer/Programmer</p>
              <p className="text-gray-300 text-sm">
                A physical+virtual maze running experience made with Unity and Arduino; exhibited at ITP winter show and New Jersey Science Center
              </p>
            </div>

            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-lg font-bold text-white">ENCOUNTER</h3>
                <span className="text-gray-400 text-sm">Mar 2021 - May 2021</span>
              </div>
              <p className="text-cyan-400 text-sm mb-2">Social VR - Graduate Thesis • Designer/Programmer</p>
              <p className="text-gray-300 text-sm">
                VR stranger-matching experience made in Unity: Hidden avatars intersect in a virtual garden, fostering non-verbal communication
              </p>
            </div>
          </div>
        </div>

        {/* Awards */}
        <div className="bg-slate-900/50 rounded-xl p-4 sm:p-8 border border-cyan-500/20">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Award className="w-5 h-5 sm:w-6 sm:h-6" />
            Awards & Recognition
          </h2>
          <ul className="space-y-3">
            <li className="text-gray-300">
              <span className="text-white font-bold">Winner ��� Immersive Reality Game of the Year</span>
              <span className="text-gray-400"> • 27th Annual D.I.C.E. Awards 2024</span>
              <span className="text-cyan-400"> • Asgard's Wrath 2</span>
            </li>
            <li className="text-gray-300">
              <span className="text-white font-bold">Winner — XR Game of the Year</span>
              <span className="text-gray-400"> • AIXR Awards</span>
              <span className="text-cyan-400"> • Asgard's Wrath 2</span>
            </li>
            <li className="text-gray-300">
              <span className="text-white font-bold">Nominee — Best VR/AR Game</span>
              <span className="text-gray-400"> • The Game Awards 2024</span>
              <span className="text-cyan-400"> • Asgard's Wrath 2</span>
            </li>
            <li className="text-gray-300">
              <span className="text-white font-bold">Nominated Game</span>
              <span className="text-gray-400"> • USC Winteractive Festival</span>
              <span className="text-cyan-400"> • Shade of the Past (Dec 2016)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}