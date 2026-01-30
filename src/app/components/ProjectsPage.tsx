import { Link } from 'react-router';
import { Play, Clock, Users } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import imgAsgardsWrath2 from "figma:asset/50c3d4f7056af475f30494dd1c18761689433478.png";
import imgPathOfLight from "figma:asset/444aac399f2a31e92820e4ccccda80dd909e0e8c.png";
import imgCourtyard from "figma:asset/19ae7cf3c1f427a48025b11360c882198fd91ab3.png";
import imgVitaZoa from "figma:asset/a06ddda98549352d8ed653d388825aa18413e6d8.png";
import imgSmoothCriminals from "figma:asset/9f8ff115dd1b5cf4571ab004139bfb4743bb7b58.png";
import imgEncounter from "figma:asset/ede4eb82e423235da459a3a9c9ff3df40ca8e3b1.png";
import imgShadesOfThePast from "figma:asset/696281b8280b6fa1d6c3fb24e7caca7d444ac7c2.png";
import imgFrankLloydWright from "figma:asset/86dbfbf3c2652728b06ac820d1bb4fe064cae795.png";

const projects = [
  {
    id: '1',
    title: "Asgard's Wrath 2",
    type: 'AAA VR Title',
    description: 'Epic VR action-RPG with immersive combat, cinematic storytelling, and expansive world exploration for Meta Quest.',
    image: imgAsgardsWrath2,
    date: '2024',
    team: 'Sanzaru Games / Meta',
    tags: ['Narrative Design', 'VR Gameplay', 'Cinematic Systems']
  },
  {
    id: '2',
    title: 'Path of Light',
    type: 'Interactive Installation',
    description: 'A mind-bending puzzle game where players navigate through intricate mazes guided by beams of light.',
    image: imgPathOfLight,
    date: '2019',
    team: 'Jason Xu, Rae Huang',
    tags: ['Interactive Installation', 'Virtual Reality', 'Puzzle Design']
  },
  {
    id: '6',
    title: 'ENCOUNTER',
    type: 'Multiplayer VR',
    description: 'A one-to-one VR encounter where collaborative presence transforms virtual gardens into living light.',
    image: imgEncounter,
    date: '2021',
    team: 'NYU ITP Thesis Project',
    tags: ['VR', 'Multiplayer', 'Light Installation']
  },
  {
    id: '4',
    title: 'Vita Zoa',
    type: 'Game Jam',
    description: 'An atmospheric underwater adventure game made from a three-week game jam.',
    image: imgVitaZoa,
    date: '2025',
    team: 'Sanzaru Game Jam',
    tags: ['Underwater', 'Exploration', 'Restoration']
  },
  {
    id: '5',
    title: 'Smooth Criminals',
    type: 'Co-op Action',
    description: 'A stylish co-op game that requires switching among four characters to coordinate a museum heist adventure',
    image: imgSmoothCriminals,
    date: '2017',
    team: 'USC Advanced Game Projects',
    tags: ['Co-op', 'Multiplayer', 'Heist']
  },
  {
    id: '7',
    title: 'Shades of the Past',
    type: 'Room Escape',
    description: 'A time-traveling first-person escape game uncovering a WWII-era mystery in a ruined Nagasaki house.',
    image: imgShadesOfThePast,
    date: '2016',
    team: 'Jason Xu, Jason Ulloa',
    tags: ['Room Escape', 'Puzzle', 'Horror']
  },
  {
    id: '3',
    title: 'Courtyard',
    type: 'In Dev Project',
    description: 'A young boy explores abandoned Chinese courtyards by day, uncovering mythic worlds that awaken at night.',
    image: imgCourtyard,
    date: 'Since 2016',
    team: 'Jason Xu',
    tags: ['Narrative', 'Exploration', 'Solo Development']
  },
  {
    id: '8',
    title: 'Reimagined Frank Lloyd Wright - Los Angeles Civic Center',
    type: 'Architecture Visualization',
    description: 'A speculative Unreal Engine visualization reimagining Frank Lloyd Wright\'s vision for the Los Angeles Civic Center.',
    image: imgFrankLloydWright,
    date: '2021',
    team: 'Jason Xu',
    tags: ['Unreal Engine', 'Architecture Visualization']
  },
  {
    id: '9',
    title: 'Project C',
    type: 'Narrative RPG',
    description: 'Story-driven fantasy RPG with branching narratives, tactical combat, and meaningful player choices.',
    image: 'https://images.unsplash.com/photo-1629113425691-96947e1bb2b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwcnBnJTIwbWVkaWV2YWwlMjBjYXN0bGV8ZW58MXx8fHwxNzY5NTg1OTM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '2023',
    team: '25 members',
    tags: ['RPG', 'Branching Narrative', 'Tactical Combat']
  },
  {
    id: '10',
    title: 'AR Quest: City Explorer',
    type: 'AR Mobile Game',
    description: 'Location-based augmented reality adventure that transforms real-world exploration into epic quests.',
    image: 'https://images.unsplash.com/photo-1650573547848-d7b93ed79782?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWdtZW50ZWQlMjByZWFsaXR5JTIwbW9iaWxlJTIwcGhvbmV8ZW58MXx8fHwxNzY5NTkyODYwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '2024',
    team: '12 members',
    tags: ['AR', 'Location-Based', 'Social Multiplayer']
  }
];

export function ProjectsPage() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">My Projects</h1>
          <p className="text-gray-400 text-lg">
            Explore the games I've designed and developed over the years
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="group bg-slate-900/50 rounded-xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/50 transition-all hover:transform hover:scale-105"
            >
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ${project.id === '4' ? 'object-top' : ''}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/40 to-transparent"></div>
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-cyan-600 flex items-center justify-center">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-cyan-400 text-sm mb-2">{project.type}</p>
                <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {project.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {project.team}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-cyan-600/20 text-cyan-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}