import { ArrowLeft, Play, Calendar, Users, Medal, Code, Clock, Badge, Gamepad2, ExternalLink, Github, ChevronLeft, ChevronRight, X, FileText } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { useState, useRef } from 'react';
import { useParams, Link } from 'react-router';
import imgAsgardsWrath2 from "figma:asset/50c3d4f7056af475f30494dd1c18761689433478.png";
import imgPathOfLight from "figma:asset/444aac399f2a31e92820e4ccccda80dd909e0e8c.png";
import imgPathOfLightSetup from "figma:asset/71858449365ce463c1a1ba46ddc6ea941f139dae.png";
import gifPathOfLightDemo from "figma:asset/9c7c1cc0e354cb3c2730b26ddd8d8699a8fead7d.png";
import imgAcrylicMaze from "figma:asset/28fb76b3455799ca383e21cd25fdc7848cb4966b.png";
import gifLEDFeedback from "figma:asset/5d802f4bc4793da00974c46a59615361e7d589ad.png";
import imgWiring from "figma:asset/d2f6f9c31df7c9fbddc2269196b88c4afa340761.png";
import imgMultiplexerSetup from "figma:asset/8c2417d018b10c3cbf398f14db8870f674519e9c.png";
import imgArduinoMUXWiring from "figma:asset/a02ad479585c99c8307767310cd4148dfd74e489.png";
import imgUnityMazeEditor from "figma:asset/d01af2d132559327ccf30847730e2a8d0eb5ad82.png";
import imgTeamPhoto from "figma:asset/a2dc80a0734da4b1c96a16f4ff31e934fde12ed3.png";
import imgCourtyard from "figma:asset/19ae7cf3c1f427a48025b11360c882198fd91ab3.png";
import imgCourtyardVideoCover from "figma:asset/cbdbfb250d73e3d131e101522bbdaa6cf67f55ad.png";
import imgDungeonDepths from "figma:asset/2cb41bd045b30b45d2f80dcf438050413a079058.png";
import imgVitaZoa from "figma:asset/a06ddda98549352d8ed653d388825aa18413e6d8.png";
import imgSmoothCriminals from "figma:asset/9f8ff115dd1b5cf4571ab004139bfb4743bb7b58.png";
import imgSmoothCriminalsGallery1 from "figma:asset/c94d3f2b814f69f8f894bc6bea21d3b3b1efa276.png";
import imgSmoothCriminalsGallery2 from "figma:asset/65b601ed74f317fd58598e5214b2ad1c068654f0.png";
import imgSmoothCriminalsGallery3 from "figma:asset/876d0ca88741d53d6a99eb4ccb25b08c11b124f8.png";
import imgSmoothCriminalsGallery4 from "figma:asset/b4d50fbe38d46ccaa12860dcced1aa54eb9c4081.png";
import imgSmoothCriminalsGallery5 from "figma:asset/14052361b4db48514e648cf9f2f831b0eb434c4c.png";
import imgSmoothCriminalsGallery6 from "figma:asset/0597464c391c8a9aa775be5ed16f80bfb20d18a5.png";
import imgSmoothCriminalsGallery7 from "figma:asset/ee5d2b118e5710ee5d5113d9860f52955d9cd4c4.png";
import imgSmoothCriminalsGallery8 from "figma:asset/e7895edec2fbdb7f5fba502bd9043270f44338bf.png";
import imgSmoothCriminalsGallery9 from "figma:asset/a4682a8c74da2f9e601310075c82106e3b1b2e10.png";
import imgSmoothCriminalsGallery10 from "figma:asset/ad39007a1285810818d1b946d0ba65721b79d90f.png";
import imgEncounter from "figma:asset/ede4eb82e423235da459a3a9c9ff3df40ca8e3b1.png";
import imgShadesOfThePast from "figma:asset/696281b8280b6fa1d6c3fb24e7caca7d444ac7c2.png";
import imgFrankLloydWright from "figma:asset/86dbfbf3c2652728b06ac820d1bb4fe064cae795.png";
import imgFrankLloydWrightGallery1 from "figma:asset/3aa9f1316129c785e016137fb5a4e6ec549f7ae4.png";
import imgFrankLloydWrightGallery2 from "figma:asset/e618ce32c67abf351fca57fe72cb5dae1eddc763.png";
import imgFrankLloydWrightGallery3 from "figma:asset/c2ccb754ebc43536865a19df3c633844fc285871.png";
import imgFrankLloydWrightGallery4 from "figma:asset/97e892e61f86f3ffd5b460e10fcadb20fcbe4609.png";
import imgFrankLloydWrightGallery5 from "figma:asset/bb59dba9032fd6dc89cc5ab4398174a159c30ad3.png";
import imgFrankLloydWrightGallery6 from "figma:asset/c2ccb754ebc43536865a19df3c633844fc285871.png";
import imgFrankLloydWrightGallery7 from "figma:asset/04c0230f652afb4697b33b0b25febb500238701d.png";
import imgFrankLloydWrightGallery8 from "figma:asset/cc443f4cf9b3b95f379b6b106361e789a445af68.png";
import imgFrankLloydWrightGallery9 from "figma:asset/69287c7d37f2f2bf3c89e9704e09efbb394a655c.png";
import imgTechArchitecture from "figma:asset/60285b23194c8b2be2aa4af945d0e2c431a31377.png";
import gifEchoing from "figma:asset/9b3809122ccac06216944add973e175b674d5a2c.png";
import gifPainting from "figma:asset/b6cdfd9a6280f49066f61c750c636b9b52b3aa93.png";
import gifRecharging from "figma:asset/d264c6b1c206f457c21a54bb3db16bb9353bb1af.png";
import imgProjectCGallery1 from "figma:asset/2ac29f7b60a780864d25b8273994e1fdee49e811.png";
import imgProjectCGallery2 from "figma:asset/df1e4d7e0b28462c0f893657212bbeaaf103313d.png";
import imgProjectCGallery3 from "figma:asset/22512569dfe6c4ea8a367843dc1202b5223744de.png";
import imgProjectCGallery4 from "figma:asset/37eb66043ebcd711e6c950eba07ae7d004268461.png";
import imgProjectCGallery5 from "figma:asset/d847060d9faf047fdb1c4e9f8bc974bbfef38066.png";
import imgProjectCGallery6 from "figma:asset/eaafd51106cef5f0d91bbb44ec7f09b45392e17a.png";
import imgProjectCGallery7 from "figma:asset/604483944dcc28dea56035850f414639538ce23e.png";
import imgProjectCGallery8 from "figma:asset/0822334a870900fc3b855a5805340318571f9c84.png";
import imgProjectCGallery9 from "figma:asset/79440c2dff7282fed7b20529097eafb2c7142bf7.png";
import imgProjectCGallery10 from "figma:asset/3e2b6ecf965f455ddb6f03104cc76605f59fc7b5.png";
import imgProjectCGallery11 from "figma:asset/d76790395d68737d3be2094cdebb8ad1d59a3e39.png";
import imgProjectCGallery12 from "figma:asset/0e45da71b09088dcb6c63360577ee9c8662e7863.png";
import imgProjectCGallery13 from "figma:asset/1bbebe81a166ef2c6bed9fae4a29b0f2be6427c0.png";
import imgProjectCGallery14 from "figma:asset/c51355c3a6ee802fe10857ad206028cd959d3f3d.png";

const projectData: Record<string, any> = {
  '1': {
    id: '1',
    title: "Asgard's Wrath 2",
    description: 'Epic VR action-RPG with immersive combat, cinematic storytelling, and expansive world exploration for Meta Quest.',
    image: imgAsgardsWrath2,
    date: '2024',
    duration: '2.5 years',
    team: 'Sanzaru Games / Meta',
    role: 'Technical Narrative Designer',
    platform: 'Meta Quest 2 & 3',
    overview: "Asgard's Wrath 2 is a critically acclaimed AAA VR action-RPG built exclusively for Meta Quest, delivering over 40 hours of story-driven content. The game blends large-scale gameplay with real-time cinematics and immersive, physically grounded player interaction, setting a new standard for narrative ambition and cinematic presentation in virtual reality.",
    responsibilities: [
      'Designed and shipped 20+ core cinematics, including major boss encounters and NPC introductions.',
      'Authored cinematics in Unreal Engine 4.27, collaborating closely with animation, engineering, and design teams.',
      'Contributed to the development of a custom cinematic system, improving iteration speed and production efficiency.',
      'Pioneered high-fidelity VR NPC interaction systems, including handshakes, animal interactions, and character-centric gameplay moments.',
      'Designed head-tracked and proximity-based performances to support theatrical yet player-driven storytelling.',
      'Implemented non-linear, reactive narrative behaviors for NPCs and ambient actors.',
      'Used Sequencer, Animation Blueprints, Behavior Trees, and custom state-driven AI to enable emotionally responsive characters and living worlds.'
    ],
    achievements: [
      'Winner — Immersive Reality Game of the Year, 27th Annual D.I.C.E. Awards (peer-voted industry award)',
      'Winner — XR Game of the Year, AIXR Awards (recognized for excellence in extended reality)',
      'Winner — 29 awards including Gold for Best Audio Design at the 2024 NYX Game Awards (various categories)',
      'Nominee — Best VR/AR Game, The Game Awards 2024 (one of the leading industry award shows)'
    ],
    technologies: ['Unreal Engine 4.27', 'Sequencer', 'Blueprint Scripting', 'Animation BP', 'Behavior Tree', 'Jira', 'Confluence', 'FigJam'],
    videoUrl: 'https://www.youtube.com/embed/1fmrPW6wEdc',
    galleryVideos: [
      { url: 'https://www.youtube.com/embed/bCcpHv2uiJs', start: 796 },
      { url: 'https://www.youtube.com/embed/LHktc8D52xI', start: 1324 },
      { url: 'https://www.youtube.com/embed/lYkDuf7KmEg', start: 2125 },
      { url: 'https://www.youtube.com/embed/h1LThpdnI_k', start: 1220 }
    ]
  },
  '2': {
    id: '2',
    title: 'Path of Light',
    type: 'Interactive Installation',
    description: 'A mind-bending puzzle game where players navigate through intricate mazes guided by beams of light.',
    image: imgPathOfLight,
    date: '2019',
    duration: '2.5 months',
    team: 'Jason Xu, Rae Huang',
    role: 'Designer, Engineer',
    platform: 'Oculus Rift + Physical Installation',
    overview: 'Path of Light is a two-player, collaborative VR + physical computing installation where one player navigates a dark, invisible-walled VR maze, and a second (physical) player guides them using a real tabletop maze and a flashlight. The experience turns "seeing" into a shared responsibility: the VR player can\'t perceive the maze until they collide, while the physical player reveals the correct route by casting light onto sensor points that appear as guiding signals in VR.',
    responsibilities: [
      'Conceived the core concept and designed the asymmetric gameplay and collaborative puzzle loop.',
      'Built bi-directional serial communication between Unity and Arduino for real-time hardware integration.',
      'Led the design of the physical maze installation, including spatial layout and interaction mapping.',
      'Designed and programmed the VR experience in Unity, implementing maze logic, feedback systems, and player progression.'
    ],
    achievements: [
      'Showcased on USC Games Demo Day: Advanced Game Projects 2016-17'
    ],
    technologies: ['Unity', 'Arduino', 'Physical Computing', 'Serial Communication', 'LED', 'Phototransistor', 'Acrylic Fabrication'],
    videoUrl: 'https://www.youtube.com/embed/cmCGG4j3BZk'
  },
  '3': {
    title: 'Courtyard',
    type: 'Narrative Indie',
    description: 'A young boy explores abandoned Chinese courtyards by day, uncovering mythic worlds that awaken at night.',
    image: imgCourtyard,
    videoCover: imgCourtyardVideoCover,
    date: 'Since 2016',
    duration: 'In Dev',
    team: 'Jason Xu',
    role: 'Solo Developer',
    platform: 'PC',
    overview: 'Courtyard is a narrative-driven exploration adventure set in a remote mountain village in southwest China, where players step into the shoes of Chin, a young outcast determined to reunite with his mother. By day, players stealthily navigate maze-like village courtyards, scavenging and restoring ancient relics hidden behind superstition and neglect. By night, these restored spaces transform into liminal portals, revealing a forgotten mythic city buried beneath the village—an echo of a Tang-dynasty world filled with surreal architecture, environmental puzzles, and wandering spirit creatures. Through a cyclical day-night structure, Courtyard blends quiet realism with dreamlike mythology, telling a story about poverty, curiosity, and the thin boundary between the ordinary and the otherworldly.',
    responsibilities: [
      'Designed economic and resource systems',
      'Created AI behaviors for different factions',
      'Balanced unit types and combat mechanics',
      'Developed technology tree and research progression',
      'Designed multiplayer matchmaking systems'
    ],
    achievements: [
      'Esports tournament with $100K prize pool',
      '250K concurrent players at peak',
      'Steam rating: Very Positive (92%)',
      'Best Strategy Game finalist'
    ],
    technologies: ['Narrative', 'Exploration', 'Solo Development'],
    videoUrl: 'https://www.youtube.com/embed/DS9zOAKTK0M'
  },
  '4': {
    title: 'Vita Zoa',
    type: 'Game Jam',
    description: 'An atmospheric underwater adventure game made from a three-week game jam.',
    image: imgVitaZoa,
    date: '2025',
    duration: '3 weeks',
    team: 'Ketul Majmudar, Jason Xu, Dave Walsh, Nick Vollmer and 3+',
    role: 'Game Designer, Programmer',
    platform: 'PC',
    overview: 'Vita Zoa (Restoring Reef) is an atmospheric underwater adventure where you become Zoa, a guardian of the ocean. Explore the depths, gather life-giving energy from natural resources, and restore dying coral reefs to their former beauty. Watch barren waters transform into vibrant, living ecosystems as the ocean comes back to life through your actions.',
    responsibilities: [
      'Designed and implemented the player character Zoa and the core gameplay loop',
      'Co-developed the resource collection system driving reef restoration',
      'Scripted creature behaviors and animations using Animation Blueprints and state machines'
    ],
    achievements: [
      'Showcased on Sanzaru 2025 Game Jam'
    ],
    technologies: ['Unreal Engine 5', 'Blueprint Scripting', 'Shader Graph'],
    videoUrl: 'https://www.youtube.com/embed/lejB8egkDas'
  },
  '5': {
    title: 'Smooth Criminals',
    type: 'Co-op Action',
    description: 'A stylish multiplayer heist game where teamwork and precision turn ordinary thieves into master criminals.',
    image: imgSmoothCriminals,
    videoUrl: 'https://www.youtube.com/embed/tRFiyusxVGY',
    date: '2017',
    duration: '3 months',
    team: '18 members',
    role: 'Level Designer',
    platform: 'PC',
    overview: 'Smooth Criminals is a 3D action-adventure heist game built as a USC Advanced Game Project, where players switch between four uniquely skilled art thieves to infiltrate a museum and steal valuable paintings from the villainous Count Egor von Vile. It emphasizes strategic character coordination, stealth, combat, and traversal, requiring players to disable security and evade guards. Players can seamlessly swap among characters with different abilities to solve varied challenges and progress through the levels.',
    responsibilities: [
      'Designed and grey-boxed 6 playable levels (2 story, 4 heist) supporting co-op heist gameplay',
      'Created multi-path level layouts tailored to four characters\' unique abilities, turning heists into collaborative puzzle experiences'
    ],
    achievements: [
      'Showcased on USC Games Demo Day: Advanced Game Projects 2016-17'
    ],
    technologies: ['Unreal Engine 4', 'Autodesk Maya'],
    galleryImages: [
      imgSmoothCriminalsGallery1,
      imgSmoothCriminalsGallery2,
      imgSmoothCriminalsGallery3,
      imgSmoothCriminalsGallery4,
      imgSmoothCriminalsGallery5,
      imgSmoothCriminalsGallery6,
      imgSmoothCriminalsGallery7,
      imgSmoothCriminalsGallery8,
      imgSmoothCriminalsGallery9,
      imgSmoothCriminalsGallery10
    ]
  },
  '6': {
    id: '6',
    title: 'ENCOUNTER',
    type: 'Multiplayer VR',
    description: 'A one-to-one VR encounter where collaborative presence transforms virtual gardens into living light.',
    image: imgEncounter,
    videoUrl: 'https://www.youtube.com/embed/nAJ7X0vzb44',
    date: '2021',
    duration: '4 months',
    team: 'Jason Xu',
    role: 'Designer, Engineer',
    platform: 'Oculus Quest',
    overview: 'ENCOUNTER is an experimental VR narrative experience that explores the boundaries of human connection in virtual spaces. Through a series of carefully crafted encounters with virtual characters, players experience moments of empathy, understanding, and emotional resonance that challenge conventional notions of presence and interaction in VR.',
    responsibilities: [
      'Designed and scripted emotional narrative beats that leverage VR-specific affordances',
      'Created character interaction systems using gaze, proximity, and gesture-based mechanics',
      'Developed branching dialogue systems that respond to player body language and attention',
      'Collaborated with artists and sound designers to create atmospheric environments that support emotional storytelling',
      'Conducted user testing to refine emotional pacing and player comfort'
    ],
    achievements: [
      'ITP Master\'s Thesis Project (NYU Tisch School of the Arts, Interactive Telecommunications Program) 2021'
    ],
    technologies: ['Unity', 'Photon Bolt', 'Arduino', 'C#', 'C++', 'Multiplayer Networking', 'Physical Computing', 'Uduino Protocol', 'Wifi Communication']
  },
  '7': {
    id: '7',
    title: 'Shades of the Past',
    type: 'Room Escape',
    description: 'A time-traveling first-person escape game uncovering a WWII-era mystery in a ruined Nagasaki house.',
    image: imgShadesOfThePast,
    date: '2016',
    duration: '3 months',
    team: 'Jason Xu, Jason Ulloa',
    role: 'Game Designer, 3D Artist',
    platform: 'PC',
    overview: 'Shades of the Past is a first-person room escape game where players investigate a trashed Japanese house in Nagasaki, destroyed by the 1945 nuclear explosion. Using a broken pair of sunglasses, players time-travel between the devastated present and the intact past to restore the room\'s arrangement, solve puzzles, and ultimately uncover the story behind the room\'s mystery before escaping.',
    responsibilities: [
      'Defined the high-level concept and designed the core puzzle experience around time, memory, and environmental contrast.',
      'Designed and prototyped the world-switching mechanic to drive spatial reasoning, discovery, and narrative progression.',
      'Crafted the environment and props to support visual storytelling and puzzle readability, modeling all assets in Maya.'
    ],
    achievements: [
      'Featured in USC Winteractive Festival 2016'
    ],
    technologies: ['Unity', 'Autodesk Maya'],
    videoUrl: 'https://www.youtube.com/embed/bt0l5nh_SxA',
    galleryVideos: [
      { url: 'https://www.youtube.com/embed/LUy4Iq6yrO8', start: 0 }
    ]
  },
  '8': {
    id: '8',
    title: 'Reimagined Frank Lloyd Wright - Los Angeles Civic Center',
    type: 'Architecture Visualization',
    description: 'A speculative Unreal Engine visualization reimagining Frank Lloyd Wright\'s vision for the Los Angeles Civic Center.',
    image: imgFrankLloydWright,
    date: '2021',
    duration: '1 month',
    team: 'Jason Xu',
    role: 'Artist',
    platform: 'PC',
    overview: 'This project is an Unreal Engine architectural visualization inspired by Frank Lloyd Wright\'s proposed Los Angeles Civic Center. It presents a reimagined interpretation of the original concept through real-time rendering, focusing on architectural form, materials, and spatial composition. The visualization highlights key design elements using cinematic lighting, environment design, and camera movement to communicate scale and atmosphere. The project serves as a study in translating conceptual architecture into a polished real-time visual experience.',
    responsibilities: [
      'Modeled the architectural structure and key design elements, translating the concept into a detailed 3D environment.',
      'Visualized and rendered the project in Unreal Engine, focusing on lighting, materials, and cinematic presentation.'
    ],
    achievements: [
      'Presented as the Final Project for Video Sculpture - NYU ITP 2021'
    ],
    technologies: ['Unreal Engine', 'Architecture Visualization'],
    videoUrl: 'https://www.youtube.com/embed/-6_sjkhSWWY',
    galleryImages: [
      imgFrankLloydWrightGallery1,
      imgFrankLloydWrightGallery2,
      imgFrankLloydWrightGallery3,
      imgFrankLloydWrightGallery4,
      imgFrankLloydWrightGallery5,
      imgFrankLloydWrightGallery6,
      imgFrankLloydWrightGallery7,
      imgFrankLloydWrightGallery8,
      imgFrankLloydWrightGallery9
    ]
  },
  '9': {
    id: '9',
    title: 'Project C',
    type: 'AR Mobile Game',
    description: 'Location-based augmented reality adventure that transforms real-world exploration into epic quests.',
    image: 'https://images.unsplash.com/photo-1650573547848-d7b93ed79782?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWdtZW50ZWQlMjByZWFsaXR5JTIwbW9iaWxlJTIwcGhvbmV8ZW58MXx8fHwxNzY5NTkyODYwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    videoCover: imgProjectCGallery1,
    date: '2024',
    duration: '2 months',
    team: '5 members',
    role: 'Designer',
    platform: 'iOS & Android',
    overview: 'Project C is a vertical slice and art demo showcasing a story level from an adventure RPG set in the world of ancient Nordic mythology. Developed during my time as a game designer in Beijing in 2016, the level demonstrates cinematic pacing, architectural world-building, and the integration of narrative beats within explorable spaces, serving as both a proof-of-concept for gameplay systems and a showcase of visual direction inspired by Norse legends.',
    responsibilities: [
      'Designed the complete story level, including cinematic pacing, architectural layout, and environmental storytelling beats within the Nordic mythology setting.',
      'Created concept art sketches and storyboards to visualize the level flow, key narrative moments, and visual direction.'
    ],
    technologies: ['Unreal Engine', 'Autodesk Maya', 'Adobe Photoshop'],
    videoUrl: 'https://www.youtube.com/embed/sLyIvgliN_g',
    galleryImages: [
      imgProjectCGallery1,
      imgProjectCGallery2,
      imgProjectCGallery3,
      imgProjectCGallery4,
      imgProjectCGallery5,
      imgProjectCGallery6,
      imgProjectCGallery7,
      imgProjectCGallery8,
      imgProjectCGallery9,
      imgProjectCGallery10,
      imgProjectCGallery11,
      imgProjectCGallery12,
      imgProjectCGallery13,
      imgProjectCGallery14
    ]
  },
  '10': {
    id: '10',
    title: 'Experiments in Mobile AR',
    type: 'AR Experiments',
    description: 'Showcase little AR experiments I did for an NYU ITP class about AR using Unity and AR developer tools.',
    image: 'https://images.unsplash.com/photo-1650573547848-d7b93ed79782?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWdtZW50ZWQlMjByZWFsaXR5JTIwbW9iaWxlJTIwcGhvbmV8ZW58MXx8fHwxNzY5NTkyODYwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    videoCover: 'https://img.youtube.com/vi/DmLkDwK7Kd0/maxresdefault.jpg',
    date: '2021',
    duration: '1 semester',
    team: 'Jason Xu',
    role: 'AR Developer',
    platform: 'iOS & Android',
    overview: 'A collection of experimental mobile AR applications developed during an NYU ITP course on augmented reality. These projects explore various AR concepts and techniques including marker-based tracking, plane detection, image recognition, and interactive 3D object placement. Each experiment demonstrates different AR capabilities and interaction paradigms, showcasing the potential of mobile AR technology to blend digital content with the physical world.',
    responsibilities: [
      'Developed multiple AR prototypes exploring different tracking methods and interaction techniques.',
      'Implemented marker-based AR experiences using image targets.'
    ],
    technologies: ['Unity', 'ARCore', 'ARKit', 'C#', 'Vuforia', 'AR Foundation'],
    videoUrl: 'https://www.youtube.com/embed/DmLkDwK7Kd0',
    galleryVideos: [
      { url: 'https://www.youtube.com/embed/ihcdv6yrXtg', start: 0 },
      { url: 'https://www.youtube.com/embed/NC0BXT01Qio', start: 0 }
    ]
  }
};

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectData[id] : null;
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);
  const galleryRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (galleryRef.current) {
      const scrollAmount = 420; // Slightly more than image width to show next image
      galleryRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const openLightbox = (imageUrl: string, index: number) => {
    setLightboxImage(imageUrl);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (!project?.galleryImages) return;
    
    const newIndex = direction === 'prev' 
      ? (lightboxIndex - 1 + project.galleryImages.length) % project.galleryImages.length
      : (lightboxIndex + 1) % project.galleryImages.length;
    
    setLightboxIndex(newIndex);
    setLightboxImage(project.galleryImages[newIndex]);
  };

  if (!project) {
    return (
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-purple-400 hover:text-purple-300">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm sm:text-base text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-12">
          <p className="text-cyan-400 mb-2 text-sm sm:text-base">{project.type}</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">{project.title}</h1>
        </div>

        {/* Video Section */}
        <div className="mb-12 bg-slate-900/50 rounded-xl overflow-hidden border border-cyan-500/20">
          <div className="aspect-video relative">
            {!isVideoPlaying ? (
              <div 
                className="relative w-full h-full cursor-pointer group"
                onClick={() => setIsVideoPlaying(true)}
              >
                <ImageWithFallback
                  src={project.videoCover || project.image}
                  alt={`${project.title} video thumbnail`}
                  className={`w-full h-full object-cover ${id === '4' ? 'object-[center_10%]' : ''}`}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-cyan-500 group-hover:bg-cyan-400 rounded-full flex items-center justify-center transition-all transform group-hover:scale-110">
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1" fill="white" />
                  </div>
                </div>
              </div>
            ) : (
              <iframe
                className="w-full h-full"
                src={`${project.videoUrl}?autoplay=1`}
                title={`${project.title} Gameplay Video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="bg-slate-900/50 rounded-xl p-4 sm:p-6 lg:p-8 border border-cyan-500/20">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Overview</h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">{project.overview}</p>
              
              {/* GitHub Link - Only for Path of Light */}
              {id === '2' && (
                <a
                  href="https://github.com/jiaxinxuyago/PathOfLight"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 text-sm sm:text-base"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>View on GitHub</span>
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
              )}
              
              {/* GitHub Link - Only for ENCOUNTER */}
              {id === '6' && (
                <div className="flex flex-col gap-3 w-full sm:w-fit">
                  <a
                    href="https://github.com/jiaxinxuyago/ENCOUNTER-VR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 w-full text-sm sm:text-base"
                  >
                    <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>View on GitHub</span>
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                  </a>
                  <a
                    href="https://itp.nyu.edu/thesis/2021/?student=jiaxin-xu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 w-full text-sm sm:text-base"
                  >
                    <Badge className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>ITP Thesis Archive 2021</span>
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                  </a>
                </div>
              )}
              
              {/* Meta Store Link - Only for Asgard's Wrath 2 */}
              {id === '1' && (
                <a
                  href="https://www.meta.com/experiences/asgards-wrath-2/2603836099654226/?srsltid=AfmBOoo7duZJpfUCRu0SVh-xnFvNzbApEZbeWgbmAZ9sb7Y0_EkTFKOQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 text-sm sm:text-base"
                >
                  <Gamepad2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden sm:inline">Download & Play on Meta Quest</span>
                  <span className="sm:hidden">Meta Quest Store</span>
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
              )}
              
              {/* itch.io Link - Only for Smooth Criminals */}
              {id === '5' && (
                <a
                  href="https://smoothcriminalsgame.weebly.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 text-sm sm:text-base"
                >
                  <Gamepad2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden sm:inline">Visit Smooth Criminals Website</span>
                  <span className="sm:hidden">Game Website</span>
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
              )}
              
              {/* Notion GDD Link - Only for Courtyard */}
              {id === '3' && (
                <a
                  href="https://common-cupboard-d1b.notion.site/ebd/03c26fc93ff348feb4f1110ad9a6df45"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 text-sm sm:text-base"
                >
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>View Game Design Document</span>
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
              )}
            </div>

            {/* Achievements / Timeline */}
            {project.achievements && (
              <div className="bg-slate-900/50 rounded-xl p-4 sm:p-6 lg:p-8 border border-cyan-500/20">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
                  {id === '3' ? 'Project Timeline' : 'Achievements'}
                </h2>
                
                {id === '3' ? (
                <div className="relative pl-6 sm:pl-8 space-y-6 sm:space-y-8">
                  {/* Vertical line with gradient */}
                  <div className="absolute left-2 sm:left-3 top-2 bottom-2 w-[2px] bg-gradient-to-b from-cyan-500/50 via-cyan-500/30 to-cyan-400/50"></div>
                  
                  {/* Timeline items */}
                  {/* 2016 */}
                  <div className="relative group">
                    <div className="absolute -left-[18px] sm:-left-[26px] top-0 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full border-[3px] border-slate-900 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform"></div>
                    <div className="bg-slate-800/50 rounded-lg p-3 sm:p-4 border border-cyan-500/10 group-hover:border-cyan-500/30 transition-all">
                      <div className="text-cyan-400 font-bold text-lg sm:text-xl mb-1.5">2016</div>
                      <div className="text-gray-300 text-sm sm:text-base">Initial concept and prototyping began</div>
                    </div>
                  </div>
                  
                  {/* 2017 */}
                  <div className="relative group">
                    <div className="absolute -left-[18px] sm:-left-[26px] top-0 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full border-[3px] border-slate-900 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform"></div>
                    <div className="bg-slate-800/50 rounded-lg p-3 sm:p-4 border border-cyan-500/10 group-hover:border-cyan-500/30 transition-all">
                      <div className="text-cyan-400 font-bold text-lg sm:text-xl mb-1.5">2017</div>
                      <div className="text-gray-300 text-sm sm:text-base">Core narrative framework established</div>
                    </div>
                  </div>
                  
                  {/* 2018 */}
                  <div className="relative group">
                    <div className="absolute -left-[18px] sm:-left-[26px] top-0 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full border-[3px] border-slate-900 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform"></div>
                    <div className="bg-slate-800/50 rounded-lg p-3 sm:p-4 border border-cyan-500/10 group-hover:border-cyan-500/30 transition-all">
                      <div className="text-cyan-400 font-bold text-lg sm:text-xl mb-1.5">2018</div>
                      <div className="text-gray-300 text-sm sm:text-base">World-building and character development</div>
                    </div>
                  </div>
                  
                  {/* 2021 */}
                  <div className="relative group">
                    <div className="absolute -left-[18px] sm:-left-[26px] top-0 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full border-[3px] border-slate-900 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform"></div>
                    <div className="bg-slate-800/50 rounded-lg p-3 sm:p-4 border border-cyan-500/10 group-hover:border-cyan-500/30 transition-all">
                      <div className="text-cyan-400 font-bold text-lg sm:text-xl mb-1.5">2021</div>
                      <div className="text-gray-300 text-sm sm:text-base">Major design iteration and technical foundation</div>
                    </div>
                  </div>
                  
                  {/* 2023-Now */}
                  <div className="relative group">
                    <div className="absolute -left-[18px] sm:-left-[26px] top-0 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-cyan-300 to-cyan-500 rounded-full border-[3px] border-slate-900 shadow-xl shadow-cyan-400/60 animate-pulse"></div>
                    <div className="bg-gradient-to-br from-slate-800/70 to-slate-800/50 rounded-lg p-3 sm:p-4 border border-cyan-500/30 shadow-lg shadow-cyan-500/10">
                      <div className="text-cyan-300 font-bold text-lg sm:text-xl mb-1.5">2023 - Now</div>
                      <div className="text-gray-200 text-sm sm:text-base font-medium">Active development and refinement</div>
                    </div>
                  </div>
                </div>
              ) : (
                <ul className="space-y-3">
                  {project.achievements.map((item: string, index: number) => (
                    <li key={index} className="flex gap-3 text-sm sm:text-base text-gray-300">
                      <Medal className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              </div>
            )}

            {/* Screenshots */}
            <div className="bg-slate-900/50 rounded-xl p-4 sm:p-6 lg:p-8 border border-cyan-500/20">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                {id === '10' ? 'Others' : (project.galleryVideos ? 'In Game Cinematics' : (id === '2' ? 'The Experience' : (id === '8' ? 'Gallery' : (id === '3' ? 'Development Journey' : 'Details'))))}
              </h2>
              {id === '6' && (
                <h3 className="text-base sm:text-lg text-cyan-400 mb-4">Thesis Presentation</h3>
              )}
              <div className="space-y-4">
                {project.galleryVideos ? (
                  project.galleryVideos.map((video: { url: string; start: number; autoplay?: number }, index: number) => (
                    <div key={index} className="aspect-video rounded-lg overflow-hidden bg-black">
                      <iframe
                        className="w-full h-full"
                        src={`${video.url}?start=${video.start}${video.autoplay ? '&autoplay=1' : ''}`}
                        title={`${project.title} gameplay ${index + 1}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  ))
                ) : project.galleryImages ? (
                  <div className="relative group">
                    {/* Left Arrow */}
                    <button
                      onClick={() => scroll('left')}
                      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/30 rounded-full flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 ml-0 sm:-ml-6"
                      aria-label="Scroll left"
                    >
                      <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                    </button>

                    {/* Right Arrow */}
                    <button
                      onClick={() => scroll('right')}
                      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/30 rounded-full flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 mr-0 sm:-mr-6"
                      aria-label="Scroll right"
                    >
                      <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                    </button>

                    {/* Gallery Container */}
                    <div 
                      ref={galleryRef}
                      className="overflow-x-auto scrollbar-hide -mx-4 px-4 sm:-mx-8 sm:px-8"
                      onWheel={(e) => {
                        e.preventDefault();
                        if (galleryRef.current) {
                          galleryRef.current.scrollLeft += e.deltaY;
                        }
                      }}
                    >
                      <div className="flex gap-4 pb-4">
                        {project.galleryImages.map((imageUrl: string, index: number) => (
                          <div 
                            key={index} 
                            className="flex-shrink-0 w-[280px] sm:w-[350px] lg:w-[400px] h-[200px] sm:h-[245px] lg:h-[280px] rounded-lg overflow-hidden bg-black cursor-pointer"
                            onClick={() => openLightbox(imageUrl, index)}
                          >
                            <ImageWithFallback
                              src={imageUrl}
                              alt={`${project.title} screenshot ${index + 1}`}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : id === '2' ? (
                  <>
                    <div className="aspect-video rounded-lg overflow-hidden bg-black">
                      <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/292IxWblVf0"
                        title={`${project.title} experience video`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    
                    {/* Path of Light detailed explanation */}
                    <div className="space-y-6 text-sm sm:text-base text-gray-300 mt-6">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Path of Light is designed around an asymmetric relationship between presence and perception:</h3>
                        
                        <div className="space-y-3 ml-0 sm:ml-4">
                          <p>
                            <span className="font-semibold text-cyan-400">In VR:</span> the player is placed into a dreamy environment (sand beach, stars, distant exit landmark). The maze walls are effectively invisible—the VR player only discovers a wall when they bump into it, at which point the wall gradually reveals itself.
                          </p>
                          
                          <p>
                            <span className="font-semibold text-cyan-400">In the physical world:</span> a second player stands over a real acrylic maze. When the physical player shines a flashlight onto specific locations, corresponding signals appear in VR to indicate where to turn and where the safe path is.
                          </p>
                          
                          <p>
                            <span className="font-semibold text-cyan-400">Two-way feedback loop:</span> when the VR player collides with a wall, the corresponding wall/location on the physical maze lights up via LEDs—helping the physical player infer where the VR player is "stuck" in the virtual maze.
                          </p>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Why it works as an installation</h3>
                        <p className="mb-3">This piece is less about "winning a maze" and more about coordinating two imperfect viewpoints:</p>
                        
                        <ul className="space-y-2 ml-2 sm:ml-4 text-sm sm:text-base">
                          <li className="flex gap-2">
                            <span className="text-cyan-400">•</span>
                            <span>The VR player has immersion and agency, but lacks information.</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-cyan-400">•</span>
                            <span>The physical player has the map (and light), but relies on interpreting VR feedback.</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-cyan-400">•</span>
                            <span>The most efficient play emerges through communication, trust, and shared problem-solving.</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Exhibition / playtesting notes</h3>
                        <p className="text-sm sm:text-base">
                          During the show, the piece drew sustained engagement—people lined up, times were recorded, and the team observed meaningful social dynamics (for example: couples often coordinated more smoothly than strangers, and many participants preferred the physical role rather than VR).
                        </p>
                      </div>
                    </div>
                  </>
                ) : id === '6' ? (
                  <>
                    <div className="aspect-video rounded-lg overflow-hidden bg-black">
                      <iframe
                        className="w-full h-full"
                        src="https://player.vimeo.com/video/549763532"
                        title={`${project.title} thesis presentation`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    
                    <div className="text-sm sm:text-base text-gray-300 mt-6">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Project Overview</h3>
                      <p>
                        ENCOUNTER is an innovative one-to-one social VR experience that explores the intersection of virtual presence and physical interaction in the post-pandemic era. The project transcends traditional online-only experiences by creating a bridge between virtual reality interactions and real-world physical installations.
                      </p>
                      <p className="mt-4">
                        The core concept involves players participating in a collaborative virtual gardening experience with matched strangers, where they "paint" flowers together in a deserted river valley within VR. When one player is offline, the other discovers evidence of their digital presence through a responsive light installation in physical space.
                      </p>
                      
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-3 mt-8">Research Framework</h3>
                      <p className="mb-3">The thesis is grounded in four core research dimensions:</p>
                      <ol className="space-y-4 ml-2 sm:ml-4">
                        <li>
                          <span className="font-semibold text-cyan-400">Virtual Presence in Social Media</span>
                          <p className="mt-1">Examining how virtual presence fundamentally differs from traditional physical interaction and its significance for future social platforms.</p>
                        </li>
                        <li>
                          <span className="font-semibold text-cyan-400">Verbal vs. Physical Communication</span>
                          <p className="mt-1">Investigating the interplay between verbal language and physical interaction in social contexts, particularly in dating applications. The research explores how intimacy and meaningful bonding can form between strangers through alternative communication paradigms.</p>
                        </li>
                        <li>
                          <span className="font-semibold text-cyan-400">VR as Social Diversity Catalyst</span>
                          <p className="mt-1">Despite the time investment and limitations of online networking, the project explores how VR technology introduces new dimensions and possibilities for human connection.</p>
                        </li>
                        <li>
                          <span className="font-semibold text-cyan-400">Technical Framework & Implementation</span>
                          <p className="mt-1">Developing a technological solution that unifies the previous three research questions through a cohesive technical pipeline.</p>
                        </li>
                      </ol>
                      
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-3 mt-8">Conceptual Framework</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-cyan-400 mb-2">Historical Context</h4>
                          <p>Prior to online social media, human interaction necessitated mutual physical presence and direct engagement (voice, body-to-body activities). Modern platforms like QQ introduced status-based presence (online, do-not-disturb, hidden, offline), fundamentally changing how we conceptualize being "present" with others.</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-cyan-400 mb-2">COVID-19 Context</h4>
                          <p>The pandemic accelerated humanity's reliance on digital communication platforms, prompting a reevaluation of how we socialize. ENCOUNTER proposes that the post-pandemic era will demand hybrid approaches—maintaining safety precautions while seeking richer forms of digital presence that transcend text-based interactions.</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-cyan-400 mb-2">Innovation Statement</h4>
                          <p>Rather than viewing virtual and physical interaction as mutually exclusive, ENCOUNTER demonstrates a technical pipeline where VR presence generates real-world consequences. This creates a novel social experience that validates digital connection with tangible manifestations.</p>
                        </div>
                      </div>
                      
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-3 mt-8">Technical Architecture</h3>
                      
                      <div className="space-y-4">
                        <h4 className="font-semibold text-cyan-400 mb-2">Hardware & Software Stack</h4>
                        
                        <div className="ml-2 sm:ml-4 space-y-3">
                          <div>
                            <p className="font-semibold text-white mb-1">Game Engine & Networking:</p>
                            <ul className="list-disc ml-4 sm:ml-6 space-y-1 text-sm sm:text-base">
                              <li><span className="font-medium">Unity</span> - Primary game development platform</li>
                              <li><span className="font-medium">Photon Bolt</span> - Networking plugin for one-to-one VR networking between remote players</li>
                              <li><span className="font-medium">Oculus VR</span> - VR platform and controller integration</li>
                            </ul>
                          </div>
                          
                          <div>
                            <p className="font-semibold text-white mb-1">Physical Computing:</p>
                            <ul className="list-disc ml-4 sm:ml-6 space-y-1 text-sm sm:text-base">
                              <li><span className="font-medium">Arduino</span> - Microcontroller for managing physical devices</li>
                              <li><span className="font-medium">LED Mapping</span> - Physical light installation for offline player presence feedback</li>
                            </ul>
                          </div>
                          
                          <div>
                            <p className="font-semibold text-white mb-1">Data Communication:</p>
                            <ul className="list-disc ml-4 sm:ml-6 space-y-1 text-sm sm:text-base">
                              <li><span className="font-medium">Uduino</span> - Serial and WiFi communication plugin between Unity and Arduino</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="mt-6">
                          <img 
                            src={imgTechArchitecture} 
                            alt="Technical Architecture - Physical Installation" 
                            className="w-full rounded-lg"
                          />
                        </div>
                      </div>
                      
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-3 mt-8">Technical Innovation: Simultaneous Serial Communication & Networking</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <p><span className="font-semibold text-cyan-400">Key Challenge:</span> Previous projects had explored either serial communication (Unity ↔ Arduino) or networking (online multiplayer), but not both simultaneously.</p>
                        </div>
                        
                        <div>
                          <p className="font-semibold text-cyan-400 mb-2">Solution:</p>
                          <p className="mb-2">The thesis establishes a unified technical pipeline where:</p>
                          <ul className="list-disc ml-4 sm:ml-6 space-y-1 text-sm sm:text-base">
                            <li>Online VR players' controller inputs are transmitted via Photon Bolt networking</li>
                            <li>These inputs are converted into serial commands through Uduino</li>
                            <li>Arduino controls physical output devices (LED projections, light matrices)</li>
                          </ul>
                          <p className="mt-2 text-sm sm:text-base"><span className="font-semibold">Result:</span> A remote player's virtual action creates real-world physical feedback visible to their offline partner</p>
                        </div>
                        
                        <div>
                          <p className="font-semibold text-cyan-400 mb-2">Example Flow:</p>
                          <ol className="list-decimal ml-4 sm:ml-6 space-y-1 text-sm sm:text-base">
                            <li>Player A moves their VR controller while in the virtual garden</li>
                            <li>Motion data transmitted via Photon Bolt networking</li>
                            <li>Data received and converted to serial signal via Uduino</li>
                            <li>Arduino interprets signal and triggers LED matrix</li>
                            <li>Lights flash in projection mapping installation, visible to Player B in physical space</li>
                          </ol>
                        </div>
                        
                        <div className="mt-6">
                          <pre className="bg-gray-900 p-2 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm text-cyan-300 font-mono whitespace-pre">
{`┌─────────────────────────────────────────────────────────────┐
│                        ENCOUNTER SYSTEM                      │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  VIRTUAL LAYER (Online)                                      │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Player A (VR Headset)          Player B (VR Headset) │   │
│  │      ↓                                    ↓            │   │
│  │   Unity Engine                      Unity Engine       │   │
│  │      ↓                                    ↓            │   │
│  │   Oculus VR Input                  Oculus VR Input    │   │
│  │      └─────→ Photon Bolt ←─────────────┘             │   │
│  │                  ↓                                     │   │
│  │          Networking Layer                             │   │
│  │          (Real-time sync)                             │   │
│  └──────────────────────────────────────────────────────┘   │
│                        ↓                                      │
│  BRIDGE LAYER (Serial Communication)                         │
│  ┌──────────────────────────────────────────────────────┐   │
│  │         Uduino Plugin (WiFi/Serial)                  │   │
│  │         Data Conversion & Routing                    │   │
│  └──────────────────────────────────────────────────────┘   │
│                        ↓                                      │
│  PHYSICAL LAYER (Offline)                                    │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Arduino Microcontroller                             │   │
│  │      ↓                                                │   │
│  │  LED Control Circuit                                 │   │
│  │      ↓                                                │   │
│  │  Projection Mapping Display                          │   │
│  │      ↓                                                │   │
│  │  Player B (Physical Space) - Sees Light Installation │   │
│  └────────────────���─────────────────────────────────────┘   │
│                                                               │
└────────────────��────────────────────────────────────────────┘`}
                          </pre>
                        </div>
                      </div>
                      
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-3 mt-8">User Experience Design</h3>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-base sm:text-lg font-semibold text-cyan-400 mb-2">Gameplay Mechanics</h4>
                          
                          <div className="space-y-3">
                            <div>
                              <p className="font-semibold text-white">Setting:</p>
                              <p>A deserted river valley rendered in VR</p>
                            </div>
                            
                            <div>
                              <p className="font-semibold text-white mb-1">Core Activity:</p>
                              <ul className="list-disc ml-6 space-y-1">
                                <li>Players collaboratively "paint" flowers using interactive gestures</li>
                                <li>Non-competitive, cooperative experience</li>
                                <li>Emphasis on presence and connection rather than achievement</li>
                              </ul>
                            </div>
                            
                            <div>
                              <p className="font-semibold text-white mb-1">Interaction Types:</p>
                              <ul className="list-disc ml-6 space-y-1">
                                <li>Movement through shared virtual space</li>
                                <li>Gesture-based flower creation</li>
                                <li>Spell casting for player-to-player interaction</li>
                                <li>Response-based gameplay when partner is offline</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6 flex flex-col items-center">
                          <img 
                            src={gifEchoing} 
                            alt="Echoing interaction demonstration" 
                            className="w-full sm:w-[80%] lg:w-[60%] rounded-lg"
                          />
                          <p className="text-center text-gray-400 mt-2 text-sm">Echoing</p>
                        </div>
                        
                        <div className="mt-6 flex flex-col items-center">
                          <img 
                            src={gifPainting} 
                            alt="Painting interaction demonstration" 
                            className="w-full sm:w-[80%] lg:w-[60%] rounded-lg"
                          />
                          <p className="text-center text-gray-400 mt-2 text-sm">Painting</p>
                        </div>
                        
                        <div className="mt-6 flex flex-col items-center">
                          <img 
                            src={gifRecharging} 
                            alt="Recharging interaction demonstration" 
                            className="w-full sm:w-[80%] lg:w-[60%] rounded-lg"
                          />
                          <p className="text-center text-gray-400 mt-2 text-sm">Recharging</p>
                        </div>
                        
                        <div>
                          <h4 className="text-base sm:text-lg font-semibold text-cyan-400 mb-2">The Offline Experience</h4>
                          
                          <p className="mb-2">When one player is not actively engaged:</p>
                          <ul className="list-disc ml-4 sm:ml-6 space-y-2 text-sm sm:text-base">
                            <li>Their previous actions remain visible in the virtual space (persistent flowers, gestures)</li>
                            <li>Physical light installation activates to signal their "presence"</li>
                            <li>Offline player discovers evidence of their partner's contribution to their shared garden</li>
                            <li>Creates asynchronous intimacy and sense of ongoing connection</li>
                          </ul>
                        </div>
                        
                        <div className="mt-6 flex flex-col items-center">
                          <div className="w-full sm:w-[90%] lg:w-[80%] aspect-video rounded-lg overflow-hidden bg-black">
                            <iframe
                              className="w-full h-full"
                              src="https://www.youtube.com/embed/2nWzHSm-fB4"
                              title="Singaling both player's presence"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                          <p className="text-center text-gray-400 mt-2 text-sm">Singaling both player's presence</p>
                        </div>
                        
                        <div className="mt-6 flex flex-col items-center">
                          <div className="w-full sm:w-[90%] lg:w-[80%] aspect-video rounded-lg overflow-hidden bg-black">
                            <iframe
                              className="w-full h-full"
                              src="https://www.youtube.com/embed/lHIduosGGco"
                              title="Garden Grid"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                          <p className="text-center text-gray-400 mt-2 text-sm">Garden Grid</p>
                        </div>
                        
                        <div className="mt-8">
                          <h4 className="text-base sm:text-lg font-semibold text-cyan-400 mb-2">The Gameplay</h4>
                        </div>
                        
                        <div className="mt-6 flex flex-col items-center">
                          <div className="w-full sm:w-[90%] lg:w-[80%] aspect-video rounded-lg overflow-hidden bg-black">
                            <iframe
                              className="w-full h-full"
                              src="https://www.youtube.com/embed/Rshsqa5vcoM"
                              title="The Gameplay"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                        </div>
                        
                        <div className="mt-8">
                          <h4 className="text-base sm:text-lg font-semibold text-cyan-400 mb-4">Technical Development Journey</h4>
                          
                          <h5 className="text-sm sm:text-md font-semibold text-gray-300 mb-2">Previous Foundational Work</h5>
                          <p className="text-gray-300 mb-3">
                            <strong>Path of Light (Prior Semester):</strong>
                          </p>
                          <ul className="list-disc list-inside text-sm sm:text-base text-gray-400 mb-4 space-y-1 ml-2 sm:ml-4">
                            <li>Established serial communication protocol between Unity and Arduino</li>
                            <li>Demonstrated real-time game engine response to physical input</li>
                            <li>Solved critical challenges in serial data encoding/transmission</li>
                          </ul>
                          
                          <p className="text-sm sm:text-base text-gray-300 mb-3">
                            <strong>Networking Experiments (Current Semester):</strong>
                          </p>
                          <ul className="list-disc list-inside text-sm sm:text-base text-gray-400 mb-4 space-y-1 ml-2 sm:ml-4">
                            <li>Integrated Photon Bolt for one-to-one VR multiplayer capability</li>
                            <li>Tested remote player detection and state synchronization</li>
                            <li>Validated networking architecture for real-time interaction</li>
                          </ul>
                          
                          <h5 className="text-sm sm:text-md font-semibold text-gray-300 mb-2 mt-6">Integration & Synthesis</h5>
                          <p className="text-gray-400 mb-6">
                            The thesis project synthesizes these prior experiments into a unified system, overcoming the technical challenge of maintaining simultaneous serial and network communication.
                          </p>
                          
                          <h4 className="text-base sm:text-lg font-semibold text-cyan-400 mb-4 mt-8">Technical Challenges & Solutions</h4>
                          
                          <p className="text-gray-300 mb-3">
                            <strong>Arduino-PC Communication:</strong>
                          </p>
                          <ul className="list-disc list-inside text-sm sm:text-base text-gray-400 mb-4 space-y-1 ml-2 sm:ml-4">
                            <li>Challenge: Serial read/write character encoding complications</li>
                            <li>Previous Solution from Path of Light: Custom serial protocol with newline delimiters</li>
                            <li>Applied to current thesis architecture</li>
                          </ul>
                        </div>
                        
                        <div className="mt-8">
                          <h4 className="text-base sm:text-lg font-semibold text-cyan-400 mb-4">Innovation & Research Contributions</h4>
                          
                          <h5 className="text-sm sm:text-md font-semibold text-gray-300 mb-2">Novelty</h5>
                          <ul className="list-disc list-inside text-sm sm:text-base text-gray-400 mb-6 space-y-1 ml-2 sm:ml-4">
                            <li><strong>First Technical Implementation:</strong> Demonstrating simultaneous networking and serial communication in a social VR application</li>
                            <li><strong>Hybrid Reality Interaction:</strong> Creating physical consequences for virtual actions in a social context</li>
                            <li><strong>Asynchronous Social Experience:</strong> Designing meaningful interaction between synchronously and asynchronously present participants</li>
                          </ul>
                          
                          <h5 className="text-sm sm:text-md font-semibold text-gray-300 mb-2">Broader Context</h5>
                          <p className="text-gray-400 mb-3">
                            While VR dating and social applications are emerging (Flirtual, Nevermet, Planet Theta, vTime XR), ENCOUNTER uniquely addresses:
                          </p>
                          <ul className="list-disc list-inside text-sm sm:text-base text-gray-400 mb-6 space-y-1 ml-2 sm:ml-4">
                            <li>The post-pandemic need for hybrid physical-digital presence</li>
                            <li>Technical validation of virtual connection through real-world manifestations</li>
                            <li>Long-term asynchronous engagement between remote strangers</li>
                          </ul>
                        </div>
                        
                        <div className="mt-8">
                          <h4 className="text-base sm:text-lg font-semibold text-cyan-400 mb-4">Project Outcomes</h4>
                          
                          <h5 className="text-sm sm:text-md font-semibold text-gray-300 mb-2">Deliverables</h5>
                          <ul className="list-disc list-inside text-sm sm:text-base text-gray-400 mb-6 space-y-1 ml-2 sm:ml-4">
                            <li>Functional VR application with one-to-one networking capability</li>
                            <li>Real-time light projection installation responsive to VR input</li>
                            <li>Complete technical pipeline documentation</li>
                            <li>Working prototype demonstrating all core concepts</li>
                          </ul>
                          
                          <h5 className="text-sm sm:text-md font-semibold text-gray-300 mb-2">Metrics of Success</h5>
                          <ul className="list-disc list-inside text-sm sm:text-base text-gray-400 mb-6 space-y-1 ml-2 sm:ml-4">
                            <li>Successful simultaneous serial and network communication</li>
                            <li>Real-time response (no perceptible latency between VR action and physical output)</li>
                            <li>Intuitive user experience enabling strangers to feel connected presence</li>
                            <li>Reliable system performance across multiple test cycles</li>
                          </ul>
                        </div>
                        
                        <div className="mt-8">
                          <h4 className="text-base sm:text-lg font-semibold text-cyan-400 mb-4">Reflections & Future Directions</h4>
                          
                          <h5 className="text-sm sm:text-md font-semibold text-gray-300 mb-2">Design Implications</h5>
                          <p className="text-gray-400 mb-3">
                            The project suggests several future applications:
                          </p>
                          <ul className="list-disc list-inside text-gray-400 mb-6 space-y-1 ml-4">
                            <li>Long-distance relationship maintenance with hybrid physical presence</li>
                            <li>Mental health and isolation interventions through VR social connection</li>
                            <li>Asynchronous collaboration in creative and professional contexts</li>
                            <li>New paradigms for understanding "presence" in digital age</li>
                          </ul>
                          
                          <h5 className="text-sm sm:text-md font-semibold text-gray-300 mb-2">Technical Extensions</h5>
                          <ul className="list-disc list-inside text-gray-400 mb-6 space-y-1 ml-4">
                            <li>Scalability to group experiences (more than two players)</li>
                            <li>Mobile VR implementation for broader accessibility</li>
                            <li>Machine learning for personalized experience adaptation</li>
                            <li>Expanded physical computing (haptic feedback, spatial audio)</li>
                            <li>Integration with emerging metaverse platforms</li>
                          </ul>
                          
                          <h5 className="text-sm sm:text-md font-semibold text-gray-300 mb-2">Broader Implications</h5>
                          <p className="text-gray-400 mb-6">
                            ENCOUNTER challenges the assumption that technology must choose between social connection and physical presence. Instead, it proposes a third way: technologies that create meaningful digital presence while generating tangible real-world effects, ultimately making digital connection feel more authentic and valuable.
                          </p>
                        </div>
                        
                        <div className="mt-8">
                          <h4 className="text-base sm:text-lg font-semibold text-cyan-400 mb-4">Technical Specifications</h4>
                          <ul className="list-none text-gray-400 space-y-2">
                            <li><strong>VR Platform:</strong> Oculus Quest/Rift compatible</li>
                            <li><strong>Networking Protocol:</strong> Photon Bolt (real-time, low-latency)</li>
                            <li><strong>Arduino Board:</strong> Arduino Uno/Mega</li>
                            <li><strong>LED System:</strong> Programmable LED strips with projection mapping</li>
                            <li><strong>Communication Range:</strong> Local network (WiFi for Uduino wireless mode)</li>
                            <li><strong>Supported Player Count:</strong> 1:1 (can be scaled with architectural modifications)</li>
                            <li><strong>Development Language:</strong> C# (Unity), Arduino C++</li>
                            <li><strong>Estimated Development Time:</strong> One semester (full-time)</li>
                          </ul>
                        </div>
                        
                        <div className="mt-8">
                          <h4 className="text-base sm:text-lg font-semibold text-cyan-400 mb-4">Credits & Acknowledgments</h4>
                          <ul className="list-none text-gray-400 space-y-2">
                            <li><strong>Creator:</strong> Jiaxin Xu</li>
                            <li><strong>Program:</strong> Interactive Telecommunications Program, Tisch School of the Arts, NYU</li>
                            <li><strong>Class Year:</strong> 2021</li>
                            <li><strong>Advisor:</strong> Sarah Rothberg</li>
                          </ul>
                        </div>
                        
                        <div className="mt-8">
                          <h4 className="text-base sm:text-lg font-semibold text-cyan-400 mb-4">References & Further Reading</h4>
                          <ul className="list-none text-sm sm:text-base text-gray-400 space-y-2">
                            <li className="break-words"><strong>Photon Bolt Documentation:</strong> <a href="https://doc.photonengine.com/bolt" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline break-all">https://doc.photonengine.com/bolt</a></li>
                            <li className="break-words"><strong>Uduino GitHub:</strong> <a href="https://github.com/marcomartinezl/Uduino" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline break-all">https://github.com/marcomartinezl/Uduino</a></li>
                            <li className="break-words"><strong>Arduino Serial Communication:</strong> <a href="https://www.arduino.cc/en/Reference/Serial" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline break-all">https://www.arduino.cc/en/Reference/Serial</a></li>
                            <li className="break-words"><strong>FastLED Library:</strong> <a href="https://fastled.io/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline break-all">https://fastled.io/</a></li>
                            <li className="break-words"><strong>Unity VR Best Practices:</strong> <a href="https://docs.unity3d.com/Manual/VROverview.html" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline break-all">https://docs.unity3d.com/Manual/VROverview.html</a></li>
                            <li className="break-words"><strong>OSC Protocol Specification:</strong> <a href="http://opensoundcontrol.org/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline break-all">http://opensoundcontrol.org/</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </>
                ) : id === '3' ? (
                  <div className="text-gray-400 text-center py-8">
                    {/* No additional content for Courtyard */}
                  </div>
                ) : (
                  <>
                    <div className="aspect-video rounded-lg overflow-hidden bg-black">
                      <iframe
                        className="w-full h-full"
                        src={id === '2' ? "https://www.youtube.com/embed/292IxWblVf0" : "https://www.youtube.com/embed/wk9xJwb-irg"}
                        title={`${project.title} experience video`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>

                    {/* Path of Light detailed explanation */}
                    {id === '2' && (
                      <div className="space-y-6 text-gray-300 mt-6">
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Path of Light is designed around an asymmetric relationship between presence and perception:</h3>
                          
                          <div className="space-y-3 ml-0 sm:ml-4">
                            <p>
                              <span className="font-semibold text-cyan-400">In VR:</span> the player is placed into a dreamy environment (sand beach, stars, distant exit landmark). The maze walls are effectively invisible—the VR player only discovers a wall when they bump into it, at which point the wall gradually reveals itself.
                            </p>
                            
                            <p>
                              <span className="font-semibold text-cyan-400">In the physical world:</span> a second player stands over a real acrylic maze. When the physical player shines a flashlight onto specific locations, corresponding signals appear in VR to indicate where to turn and where the safe path is.
                            </p>
                            
                            <p>
                              <span className="font-semibold text-cyan-400">Two-way feedback loop:</span> when the VR player collides with a wall, the corresponding wall/location on the physical maze lights up via LEDs—helping the physical player infer where the VR player is "stuck" in the virtual maze.
                            </p>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Why it works as an installation</h3>
                          <p className="mb-3">This piece is less about "winning a maze" and more about coordinating two imperfect viewpoints:</p>
                          
                          <ul className="space-y-2 ml-2 sm:ml-4 text-sm sm:text-base">
                            <li className="flex gap-2">
                              <span className="text-cyan-400 flex-shrink-0">•</span>
                              <span>The VR player has immersion and agency, but lacks information.</span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-cyan-400 flex-shrink-0">•</span>
                              <span>The physical player has the map (and light), but relies on interpreting VR feedback.</span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-cyan-400">•</span>
                              <span>The most efficient play emerges through communication, trust, and shared problem-solving.</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Exhibition / playtesting notes</h3>
                          <p>
                            During the show, the piece drew sustained engagement—people lined up, times were recorded, and the team observed meaningful social dynamics (for example: couples often coordinated more smoothly than strangers, and many participants preferred the physical role rather than VR).
                          </p>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>

            {/* Details Section - Only for Path of Light */}
            {id === '2' && (
              <div className="bg-slate-900/50 rounded-xl p-8 border border-cyan-500/20">
                <h2 className="text-2xl font-bold text-white mb-6">Details</h2>
                
                {/* Setup Image */}
                <div className="mb-8 rounded-lg overflow-hidden">
                  <img 
                    src={imgPathOfLightSetup} 
                    alt="Path of Light physical installation setup showing VR headset, controllers, acrylic maze, and flashlight"
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="space-y-6 text-sm sm:text-base text-gray-300">
                  <div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-3">Technical Documentation — How We Built It (Step by Step)</h3>
                    <h4 className="text-base sm:text-lg font-semibold text-cyan-400 mb-2">System architecture (high level)</h4>
                    
                    <p className="mb-4">Path of Light is essentially a real-time bridge between:</p>
                    
                    <ul className="space-y-2 ml-4 mb-4">
                      <li className="flex gap-2">
                        <span className="text-cyan-400">•</span>
                        <span><span className="font-semibold">Unity</span> (VR world, collisions, visuals)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-cyan-400">•</span>
                        <span><span className="font-semibold">Arduino</span> (sensors + LEDs on the physical maze)</span>
                      </li>
                    </ul>
                    
                    <p className="mb-4">connected via bi-directional serial communication.</p>
                    
                    <h4 className="text-base sm:text-lg font-semibold text-cyan-400 mb-2">Data flow:</h4>
                    
                    <ul className="space-y-2 ml-2 sm:ml-4 text-sm sm:text-base">
                      <li className="flex gap-2">
                        <span className="text-cyan-400 flex-shrink-0">→</span>
                        <span><span className="font-semibold">Arduino  Unity:</span> which phototransistor(s) are currently "lit" by the flashlight</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-cyan-400">→</span>
                        <span><span className="font-semibold">Unity → Arduino:</span> which wall LED(s) should light up when the VR player collides with a wall</span>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Demo GIF */}
                  <div className="mt-8 flex justify-center">
                    <div className="w-full sm:w-[85%] lg:w-[70%] rounded-lg overflow-hidden">
                      <img 
                        src={gifPathOfLightDemo} 
                        alt="Demonstration of physical player using flashlight on the maze to guide VR player"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  
                  {/* Step 1 - Build the Physical Maze */}
                  <div className="mt-8">
                    <h4 className="text-base sm:text-lg font-semibold text-cyan-400 mb-4">Step 1 — Build the Physical Maze</h4>
                    
                    <div className="space-y-4">
                      <p>
                        The physical maze is the tangible counterpart to the virtual maze inside VR. It sits on a table and acts as both a control surface and a communication tool between the two players.
                      </p>
                      
                      <p>
                        First, the maze itself was fabricated from clear acrylic, forming a miniature maze that mirrors the layout of the virtual environment. Its transparency allows light to pass through and makes it possible to embed sensors and lighting directly into the structure without distracting from the overall form.
                      </p>
                      
                      {/* Acrylic Maze Image */}
                      <div className="flex justify-center mt-6">
                        <div className="w-full sm:w-[85%] lg:w-[70%] rounded-lg overflow-hidden">
                          <img 
                            src={imgAcrylicMaze} 
                            alt="Clear acrylic maze fabrication showing the transparent maze structure"
                            className="w-full h-auto"
                          />
                        </div>
                      </div>
                      
                      <p>
                        Next, LED strips were installed along the maze walls. These lights serve as feedback for the physical player. When the VR player runs into a wall inside the virtual maze, that same wall lights up on the physical maze. This instantly shows the physical player where the VR player is stuck, helping them adjust their guidance in real time. Using LED strips made it possible to control many wall segments efficiently while keeping wiring organized and reliable.
                      </p>
                      
                      {/* LED Feedback GIF */}
                      <div className="flex justify-center mt-6">
                        <div className="w-full sm:w-[85%] lg:w-[70%] rounded-lg overflow-hidden">
                          <img 
                            src={gifLEDFeedback} 
                            alt="LED feedback demonstration showing walls lighting up when VR player collides"
                            className="w-full h-auto"
                          />
                        </div>
                      </div>
                      
                      <p>
                        Finally, light sensors (phototransistors) were placed beneath key intersections and turning points in the maze. These sensors act like "light buttons." When the physical player shines a flashlight onto a specific spot on the maze, the sensor detects the increase in light and sends a signal to the computer. That signal tells the VR system to display a visual cue at the corresponding location in the virtual maze, guiding the VR player forward. In simple terms, where the physical player shines light becomes the path the VR player can follow.
                      </p>
                      
                      <p>
                        To support this setup, the lighting and sensors were wired using two different strategies: the LED strips were connected in series for efficient control across many segments, while the light sensors were connected in parallel so each location could be detected individually and accurately. Together, these elements transform the physical maze into an active interface rather than a passive model.
                      </p>
                      
                      {/* Wiring Image */}
                      <div className="flex justify-center mt-6">
                        <div className="w-full sm:w-[85%] lg:w-[70%] rounded-lg overflow-hidden">
                          <img 
                            src={imgWiring} 
                            alt="Wiring diagram showing LED strips and phototransistors connected to Arduino"
                            className="w-full h-auto"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step 2 - Establish Serial Communication */}
                  <div className="mt-8">
                    <h4 className="text-base sm:text-lg font-semibold text-cyan-400 mb-4">Step 2 — Establish Serial Communication (Unity ↔ Arduino)</h4>
                    
                    <div className="space-y-4">
                      <p>
                        To make the physical maze and the virtual world respond to each other, the project relies on a constant two-way conversation between the computer running the VR experience and the Arduino controlling the hardware. You can think of this connection as a live translator between the digital and physical parts of the installation.
                      </p>
                      
                      <p>
                        On one side, the Arduino is always paying attention to the physical maze. It continuously checks which light sensors are being hit by the flashlight and sends that information to the computer as simple messages, such as "this location is lit right now." On the other side, the Unity game engine listens for these messages and uses them to decide where to display guiding lights inside the virtual maze.
                      </p>
                      
                      <p>
                        At the same time, the communication works in reverse. When the VR player bumps into a wall, Unity sends a message back to the Arduino telling it exactly which wall should light up on the physical maze. The Arduino then turns on the matching LED strip so the physical player can immediately see what happened in VR.
                      </p>
                      
                      <p>
                        Because this exchange happens many times per second, both players experience the system as seamless and responsive. The physical maze and the virtual maze feel like two sides of the same space, continuously informing and reacting to one another in real time.
                      </p>
                      
                      {/* Code Snippet Section */}
                      <div className="mt-6 space-y-4">
                        <h5 className="font-semibold text-white">Arduino Code (Sensor Reading & LED Control)</h5>
                        <div className="bg-slate-950 rounded-lg p-4 border border-cyan-500/30 overflow-y-auto max-h-80">
                          <pre className="text-sm text-gray-300 font-mono">
                            <code>{`#include <Adafruit_NeoPixel.h>
#include <Velleman_KA12.h>
#include <Adafruit_NeoPixel.h>
#define PIN 12

//enable pin for MUX01
#define enable0 8 
#define enable1 9 
#define enable2 6

//DEBUG button pin
const int digi01 = 13 ;

//MUX output pin
const int pin_Out_S0 = 2;
const int pin_Out_S1 = 3;
const int pin_Out_S2 = 4;
const int pin_Out_S3 = 5;

//MUX data pin
const int MUXdataPin1 = A0;
const int MUXdataPin2 = A1;
const int MUXdataPin3 = A2;

//photo transistor var
const int capacity = 16;
int photoTransArr01[capacity];
int photoTransArr02[capacity];
int photoTransArr03[capacity];

//data from unity var
int unityReadOut = 0;

//LED strip var
int TOTAL_LEDS = 282;
Adafruit_NeoPixel strip = Adafruit_NeoPixel(TOTAL_LEDS, PIN, NEO_GRB + NEO_KHZ800);
int colorNow = 1; // 1:R, 2:G, 3:B

void setup() {
  // Begin serial communication
  Serial.begin(9600);
  Serial.setTimeout(10);

  // Set up debug pin
  pinMode(digi01, INPUT);
  pinMode(MUXdataPin1, INPUT);
  pinMode(MUXdataPin2, INPUT);
  pinMode(MUXdataPin3, INPUT);
  pinMode(LED_BUILTIN, OUTPUT);
  pinMode(pin_Out_S0, OUTPUT);
  pinMode(pin_Out_S1, OUTPUT);
  pinMode(pin_Out_S2, OUTPUT);
  pinMode(pin_Out_S3, OUTPUT);
  pinMode(enable0, OUTPUT);
  pinMode(enable1, OUTPUT);
  pinMode(enable2, OUTPUT);
  
  // Set address
  setAddress(0, 0);
  
  // Initialize LED strip 
  strip.begin();
  strip.setBrightness(10);
  strip.show();
}

void loop() {
  // Read debug button state
  int buttonState = digitalRead(digi01);
  int digitalState = (buttonState == HIGH) ? 1 : 0;
  String buttonStr = String(digitalState);
  
  delay(30);
  
  // Read phototransistor arrays through MUX
  String MUX01str = "";
  String MUX02str = "";
  String MUX03str = "";
  
  for(int i = 0; i < capacity; i++) {
    setAddress(0, i);
    photoTransArr01[i] = analogRead(MUXdataPin1)/4;
    
    setAddress(1, i);
    photoTransArr02[i] = analogRead(MUXdataPin2)/4;

    setAddress(2, i);
    photoTransArr03[i] = analogRead(MUXdataPin3)/4;
    
    if(i == capacity - 1) {
      MUX01str = MUX01str + String(photoTransArr01[i]);
      MUX02str = MUX02str + String(photoTransArr02[i]);
      MUX03str = MUX03str + String(photoTransArr03[i]);
    } else {
      MUX01str = MUX01str + String(photoTransArr01[i]) + ",";
      MUX02str = MUX02str + String(photoTransArr02[i]) + ",";
      MUX03str = MUX03str + String(photoTransArr03[i]) + ",";
    }
  }

  // Send sensor data to Unity
  Serial.println(buttonStr + "," + MUX01str + "," + MUX02str + "," + MUX03str);

  // Receive collision data from Unity
  int colliOutput = Serial.parseInt();

  // Light up LED for debugging and wall feedback
  if(colliOutput != 0) {
    digitalWrite(LED_BUILTIN, HIGH);
    lightOne(colliOutput, 1);
  } else {
    digitalWrite(LED_BUILTIN, LOW);
    lightOne(colliOutput, 0);
  }
}

void setRdColor(int R, int G, int B) {
  for (int ledNumber = 0; ledNumber < TOTAL_LEDS; ledNumber++) {
    strip.setPixelColor(ledNumber, strip.Color(R, G, B));
  }
  strip.show();
}

void lightOne(int thisNum, int state) {
  strip.setPixelColor(thisNum, strip.Color(0, 255, 255));
  if (state == 1) {
    strip.setBrightness(100);
    strip.show();
  }
  if (state == 0) {
    strip.setBrightness(0);
    strip.show();
  }
}

void setAddress(byte chip, byte add) {
  if(chip == 0) {
    digitalWrite(enable0, LOW);
  } else if(chip == 1) {
    digitalWrite(enable1, LOW);
  } else if(chip == 2) {
    digitalWrite(enable2, LOW);
  }

  // s0 s1 s2 s3 daisy chain bit read
  digitalWrite(pin_Out_S0, bitRead(add, 0));
  digitalWrite(pin_Out_S1, bitRead(add, 1));
  digitalWrite(pin_Out_S2, bitRead(add, 2));
  digitalWrite(pin_Out_S3, bitRead(add, 3));
}`}</code>
                          </pre>
                        </div>
                        
                        <h5 className="font-semibold text-white">Unity Code (C# Serial Communication)</h5>
                        <div className="bg-slate-950 rounded-lg p-4 border border-cyan-500/30 overflow-y-auto max-h-80">
                          <pre className="text-sm text-gray-300 font-mono">
                            <code>{`using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.IO.Ports;
using System.Threading;

public class SerialCommunication : MonoBehaviour
{
    // Variables to read out from serial
    // Binary to state
    public bool inputState01 = false;
    // Analog to state
    public int inputAnaState01 = 0;
    // Brightness data remapped
    public float brightness = 0;

    // Input state array read from photo transistor
    public int[] inputAnaStateArr;
    // Brightness array
    public float[] brightnessArr;

    // Serial port configuration
    SerialPort stream = new SerialPort("COM11", 9600);
    int previousBiValue01 = 0;
    float previousAnaValue01 = 0;
    float analogOffset = 0;

    // Brightness threshold
    public float brightnessTreshold = 100;

    void Start()
    {
        // Open serial port
        stream.Open();
    }

    void Update()
    {
        // SERIAL READING
        // Convert data from Arduino
        string readOut = stream.ReadLine();
        string readOutTrimmed = readOut.Trim();
        string[] readOutInfo = readOutTrimmed.Split(',');
        int valueBinary01 = int.Parse(readOutInfo[0]);

        // Retrieved photo transistor data from serial array
        float[] phototransArr = new float[readOutInfo.Length - 1];

        // Convert string into floats
        for(int i = 0; i < phototransArr.Length; i++)
        {
            phototransArr[i] = float.Parse(readOutInfo[i + 1]);
        }

        // Binary input into states
        inputState01 = binaryToState(valueBinary01, previousBiValue01);
        previousBiValue01 = valueBinary01;

        // Analog input from photo trans array
        for(int i = 0; i < inputAnaStateArr.Length; i++)
        {
            inputAnaStateArr[i] = analogToThreshold(phototransArr[i], brightnessTreshold);
            brightnessArr[i] = analogBrightness(inputAnaStateArr[i], phototransArr[i]);
        }

        // SERIAL WRITING
        // Serial writing by keyboard (DEBUG)
        serialWriteByKey();
    } 

    // Map function for value remapping
    public float map(float s, float a1, float a2, float b1, float b2)
    {
        return b1 + (s - a1) * (b2 - b1) / (a2 - a1);
    }

    public float analogToNumber(float serialValue, float previousValue)
    {
        float input = 0;
        float offset = 0;
        if (serialValue != previousValue)
        {
            offset = serialValue - previousValue;
        }

        input = map(offset, 0, 255, 0, 1000);

        return input;
    }

    public bool binaryToState(int serialValue, int previousValue)
    {
        bool inputState;
        
        if (serialValue - previousValue == 1)
        {
            inputState = true;
        }
        else
        {
            inputState = false;
        }

        return inputState;
    }

    public int analogToThreshold(float serialValue, float threshold)
    {
        int inputState;

        if (serialValue > threshold)
        {
            inputState = 1;
        }
        else
        {
            inputState = 0;
        }

        return inputState;
    }

    public float analogBrightness(int inputState, float serialValue)
    {
        float mybrightness = 0;

        if (inputState == 1)
        {
            mybrightness = serialValue;
        }
        return mybrightness;
    }

    public void serialWriteByKey()
    {
        bool outputState = false;

        if (Input.GetKey(KeyCode.Q))
        {
            outputState = true;
        }
        else
        {
            outputState = false;
        }

        if (outputState == true)
        {
            stream.Write("10");
        }
        else
        {
            stream.Write("0");
        }
    }

    public void serialWriteByCollision(int thisNum)
    {
        string numToString = "";

        if(thisNum != 0)
        {
            numToString = thisNum.ToString();
            stream.Write(numToString);
        }
        else
        {
            stream.Write("0");
        } 
    }
}`}</code>
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step 3 - Scaling the System */}
                  <div className="mt-8">
                    <h4 className="text-base sm:text-lg font-semibold text-cyan-400 mb-4">Step 3 — Scaling the System to Support Many Sensors</h4>
                    
                    <div className="space-y-4">
                      <p>
                        As the maze became more complex, the project needed far more light-sensing points than a single Arduino could normally handle. An Arduino can only "listen" to a small number of sensors at once, but this installation required dozens of sensing locations spread across the maze.
                      </p>
                      
                      <p>
                        To solve this, a component called a multiplexer was introduced. A multiplexer allows many sensors to share a single input channel by letting the Arduino read them one at a time, extremely quickly. From the system's perspective, it feels as if all sensors are being monitored simultaneously, even though they are being checked in rapid sequence.
                      </p>
                      
                      <p>
                        In practice, the Arduino uses a small set of control signals to select which sensor to read at any given moment, retrieves that sensor's light value, then immediately moves on to the next one. This approach made it possible to scale the maze to a much larger size without changing the core hardware or interaction design.
                      </p>
                      
                      <p>
                        While multiplexing significantly expanded what the system could support, it also added technical complexity. Ensuring accurate readings required careful wiring, clear sensor indexing, and precise timing logic. This step marked the transition from a small prototype to a robust, exhibition-ready installation capable of supporting many interactive touchpoints across the maze.
                      </p>
                      
                      {/* Multiplexer Setup Images - Side by Side */}
                      <div className="flex justify-center mt-6">
                        <div className="w-full sm:w-[85%] lg:w-[70%] grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="rounded-lg overflow-hidden">
                            <img 
                              src={imgMultiplexerSetup} 
                              alt="Breadboard prototype showing multiplexer chips, Arduino boards, LED ring, and wiring for sensor scaling"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="rounded-lg overflow-hidden">
                            <img 
                              src={imgArduinoMUXWiring} 
                              alt="Arduino MUX wiring diagram showing connections between multiplexer, Arduino, and sensors"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step 4 - Build the Virtual Maze */}
                  <div className="mt-8">
                    <h4 className="text-base sm:text-lg font-semibold text-cyan-400 mb-4">Step 4 — Build the Virtual Maze and Connect It to the Physical World</h4>
                    
                    <div className="space-y-4">
                      <p>
                        The virtual maze was designed to feel mysterious, disorienting, and discoverable. Inside VR, the maze walls are invisible at first, so the player cannot see the structure of the maze ahead of time. When the player walks into a wall, it gradually appears, helping them learn the space through movement rather than sight.
                      </p>
                      
                      <p>
                        To give the player a sense of direction, a bright, glowing stone arch marks the exit and is visible from far away. Even in darkness, this landmark helps the player understand where they are headed. Additional environmental elements—such as trees and bushes—act as subtle reference points so the space doesn't feel visually uniform or confusing.
                      </p>
                      
                      <p>
                        At the same time, the virtual maze is carefully mapped to the physical maze. Each light sensor and wall in the physical installation is assigned a specific position inside the virtual world. When the physical player shines a flashlight on a point in the real maze, a corresponding guiding light appears at the exact same location in VR, showing the VR player where to move next. Likewise, when the VR player hits a wall, that same wall lights up on the physical maze.
                      </p>
                      
                      <p>
                        This precise one-to-one mapping is what makes the installation feel intuitive and "magical." Every action in the physical world has a consistent and meaningful effect in the virtual space, allowing both players to share a single maze despite being in two very different environments.
                      </p>
                      
                      {/* Unity Maze Editor Image */}
                      <div className="flex justify-center mt-6">
                        <div className="w-full sm:w-[85%] lg:w-[70%] rounded-lg overflow-hidden">
                          <img 
                            src={imgUnityMazeEditor} 
                            alt="Unity editor showing the virtual maze layout and sensor placement"
                            className="w-full h-auto"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Conclusion */}
                  <div className="mt-8">
                    <h4 className="text-base sm:text-lg font-semibold text-cyan-400 mb-4">Conclusion</h4>
                    
                    <div className="space-y-4">
                      <p>
                        Path of Light represents a meaningful milestone for us as an exploration of collaboration, perception, and the relationship between physical and virtual spaces. What began as an experimental idea grew into a fully realized installation that required close coordination between game design, hardware engineering, spatial design, and human interaction. Throughout the process, we learned how small design decisions—such as where light appears, how feedback is shared, and how players communicate—can dramatically shape the emotional and social experience of an interactive system. Seeing participants work together, struggle, adapt, and ultimately succeed made the challenges of building the installation worthwhile. We are proud of Path of Light not only as a technical achievement, but as an experience that invites trust, cooperation, and shared discovery between people.
                      </p>
                      
                      {/* Team Photo */}
                      <div className="flex justify-center mt-6">
                        <div className="w-full sm:w-[85%] lg:w-[70%] rounded-lg overflow-hidden">
                          <img 
                            src={imgTeamPhoto} 
                            alt="Jason Xu and Rae Huang presenting Path of Light installation with VR headset and physical maze"
                            className="w-full h-auto"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Technical Implementation Guide - Only for ENCOUNTER */}
            {id === '6' && (
              <div className="bg-slate-900/50 rounded-xl p-8 border border-cyan-500/20">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Technical Implementation Guide</h2>
                
                <div className="space-y-6 text-sm sm:text-base text-gray-300">
                  <h3 className="text-lg sm:text-xl font-bold text-white">Implementation Details</h3>
                  
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-cyan-400 mb-3">Uduino Configuration</h4>
                    
                    <p className="mb-3"><strong className="text-white">Installation:</strong></p>
                    <ol className="list-decimal ml-6 space-y-1 mb-4">
                      <li>Import Uduino plugin into Unity Asset Store</li>
                      <li>Add Uduino script to scene manager</li>
                      <li>Configure serial port settings</li>
                    </ol>
                    
                    <p className="mb-2"><strong className="text-white">WiFi Mode Setup:</strong></p>
                    <div className="bg-slate-950 rounded-lg p-4 border border-cyan-500/30 mb-4">
                      <pre className="text-sm text-gray-300 font-mono overflow-x-auto">
                        <code>{`// Uduino C# Code Example
void Setup() {
    Uduino uduino = GetComponent<Uduino>();
    uduino.InitializeWiFi("192.168.1.100", 9600);
}

void SendToArduino(string command) {
    UduinoManager.Instance.Write("customFunction", command);
}`}</code>
                      </pre>
                    </div>
                    
                    <p className="mb-2"><strong className="text-white">Serial Transmission:</strong></p>
                    <div className="bg-slate-950 rounded-lg p-4 border border-cyan-500/30">
                      <pre className="text-sm text-gray-300 font-mono overflow-x-auto">
                        <code>{`// Example: Send position data
float[] positionData = {playerX, playerY, intensity};
UduinoManager.Instance.SendData("ledPosition", positionData);`}</code>
                      </pre>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-cyan-400 mb-3">Photon Bolt Networking</h4>
                    
                    <p className="mb-2"><strong className="text-white">Initialization:</strong></p>
                    <div className="bg-slate-950 rounded-lg p-4 border border-cyan-500/30">
                      <pre className="text-sm text-gray-300 font-mono overflow-x-auto">
                        <code>{`void OnPhotonSerializeView(PhotonStream stream, PhotonMessageInfo info) {
    if (stream.IsWriting) {
        // Send local player data
        stream.SendNext(transform.position);
        stream.SendNext(transform.rotation);
        stream.SendNext(currentActionType);
    }
    else {
        // Receive remote player data
        Vector3 remotePosition = (Vector3)stream.ReceiveNext();
        Quaternion remoteRotation = (Quaternion)stream.ReceiveNext();
        int remoteAction = (int)stream.ReceiveNext();
    }
}`}</code>
                      </pre>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-cyan-400 mb-3">Arduino Implementation</h4>
                    
                    <p className="mb-3">
                      <strong className="text-white">Microcontroller:</strong> Arduino Uno or Mega<br />
                      <strong className="text-white">Language:</strong> C/C++<br />
                      <strong className="text-white">Baud Rate:</strong> 9600 (or 115200 for Mega)
                    </p>
                    
                    <p className="mb-2"><strong className="text-white">Core Firmware Components:</strong></p>
                    <div className="bg-slate-950 rounded-lg p-4 border border-cyan-500/30">
                      <pre className="text-sm text-gray-300 font-mono overflow-x-auto">
                        <code>{`#include <FastLED.h>  // LED library
#define NUM_LEDS 256  // Total LEDs in matrix
#define LED_PIN 5     // PWM pin for LED control

CRGB leds[NUM_LEDS];

void setup() {
  Serial.begin(9600);
  FastLED.addLeds<WS2812B, LED_PIN, GRB>(leds, NUM_LEDS);
  FastLED.setBrightness(255);
}

void loop() {
  if (Serial.available()) {
    String message = Serial.readStringUntil('\\n');
    processMessage(message);
  }
  FastLED.show();
}

void processMessage(String msg) {
  // Parse format: "TYPE,X,Y,INTENSITY,DURATION"
  int commaIndex1 = msg.indexOf(',');
  String type = msg.substring(0, commaIndex1);
  
  if (type == "MOVE") {
    int x = msg.substring(commaIndex1+1).toInt();
    // ... parse remaining values
    // Set LED at matrix position (x,y)
  }
}`}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info */}
            <div className="bg-slate-900/50 rounded-xl p-4 sm:p-6 border border-cyan-500/20">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Project Info</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                    <Calendar className="w-4 h-4" />
                    Date
                  </div>
                  <p className="text-white">{project.date}</p>
                </div>
                {project.duration && (
                  <div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                      <Clock className="w-4 h-4" />
                      Duration
                    </div>
                    <p className="text-white">{project.duration}</p>
                  </div>
                )}
                <div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                    <Users className="w-4 h-4" />
                    Team
                  </div>
                  <p className="text-white">{project.team}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                    <Badge className="w-4 h-4" />
                    Role
                  </div>
                  <p className="text-white">{project.role}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                    <Gamepad2 className="w-4 h-4" />
                    Platform
                  </div>
                  <p className="text-white">{project.platform}</p>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-slate-900/50 rounded-xl p-4 sm:p-6 border border-cyan-500/20">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-cyan-600/20 text-cyan-300 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Responsibilities */}
            <div className="bg-slate-900/50 rounded-xl p-4 sm:p-6 border border-cyan-500/20">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Key Responsibilities</h3>
              
              {id === '6' ? (
                <div className="space-y-6 text-sm">
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-cyan-400 mb-3">Technical Innovation</h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3 text-gray-300">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>Designed and implemented the first successful simultaneous serial and network communication pipeline in a social VR application, enabling seamless data flow from remote VR players to physical Arduino-controlled LED installations</span>
                      </li>
                      <li className="flex gap-3 text-gray-300">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>Architected unified system integrating Photon Bolt networking, Uduino serial bridge, and Arduino microcontroller to achieve real-time response (&lt;200ms latency) between virtual and physical layers</span>
                      </li>
                      <li className="flex gap-3 text-gray-300">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>Solved critical Windows MIDI blocking issue by pivoting to OSC (Open Sound Control) protocol, achieving reliable cross-platform device communication</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-cyan-400 mb-3">Full-Stack Development</h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3 text-gray-300">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>Developed VR application in Unity C# supporting Oculus VR headsets with gesture-based flower painting mechanics and collaborative multiplayer features using Photon Bolt</span>
                      </li>
                      <li className="flex gap-3 text-gray-300">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>Implemented Arduino firmware in C++ for addressable LED strip control and real-time physical installation response to networked VR input</span>
                      </li>
                      <li className="flex gap-3 text-gray-300">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>Created custom serial communication protocol enabling dynamic control beyond numeric data transmission between game engine and microcontroller</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-cyan-400 mb-3">Hardware Integration & Physical Computing</h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3 text-gray-300">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>Designed and built LED matrix light installation with projection mapping visualization of real-time VR player presence</span>
                      </li>
                      <li className="flex gap-3 text-gray-300">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>Engineered circuit design for Arduino microcontroller managing 256+ addressable RGB LED strips with proper power management and signal integrity</span>
                      </li>
                      <li className="flex gap-3 text-gray-300">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>Prototyped and iterated on multiple hardware configurations to optimize latency and physical response fidelity</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-cyan-400 mb-3">Research & Conceptual Framework</h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3 text-gray-300">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>Conducted research on virtual presence, digital intimacy, and post-pandemic social interaction paradigms to inform project direction</span>
                      </li>
                      <li className="flex gap-3 text-gray-300">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>Developed conceptual framework exploring how virtual actions can generate tangible real-world consequences, validating digital connection with physical manifestations</span>
                      </li>
                      <li className="flex gap-3 text-gray-300">
                        <span className="text-cyan-400 mt-1">���</span>
                        <span>Identified and articulated four core research dimensions: virtual presence significance, communication modes, VR as diversity catalyst, and technical implementation synthesis</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-cyan-400 mb-3">User Experience & Design</h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3 text-gray-300">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>Designed intuitive gesture-based interaction mechanics enabling meaningful collaboration between strangers without verbal communication</span>
                      </li>
                      <li className="flex gap-3 text-gray-300">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>Created asynchronous presence system allowing offline players to discover evidence of their partner's virtual actions through physical light patterns</span>
                      </li>
                      <li className="flex gap-3 text-gray-300">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>Conducted user testing and playtesting sessions to validate gameplay mechanics and presence awareness</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-cyan-400 mb-3">Project Management</h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3 text-gray-300">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>Single-handedly planned, designed, prototyped, and executed complete thesis project from conception through final presentation</span>
                      </li>
                      <li className="flex gap-3 text-gray-300">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>Managed iterative development process with weekly milestones, technical problem-solving, and rapid prototyping</span>
                      </li>
                      <li className="flex gap-3 text-gray-300">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>Delivered functional installation and comprehensive documentation for final ITP Thesis Week presentation (May 2021)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <ul className="space-y-3">
                  {project.responsibilities.map((item: string, index: number) => (
                    <li key={index} className="flex gap-3 text-gray-300 text-sm">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Playtest Footages - Only for Path of Light */}
            {id === '2' && (
              <div className="bg-slate-900/50 rounded-xl p-6 border border-cyan-500/20">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Playtest Footages</h3>
                <div className="space-y-4">
                  <div className="aspect-[9/16] rounded-lg overflow-hidden bg-black">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/UtdDihuafnU"
                      title="Path of Light Playtest Footage 1"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="aspect-[9/16] rounded-lg overflow-hidden bg-black">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/Bzbc_xBrBeg"
                      title="Path of Light Playtest Footage 2"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="aspect-[9/16] rounded-lg overflow-hidden bg-black">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/rV3vkOSrNwI"
                      title="Path of Light Playtest Footage 3"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            )}

            {/* Fan Reactions - Only for Asgard's Wrath 2 */}
            {id === '1' && (
              <div className="bg-slate-900/50 rounded-xl p-6 border border-cyan-500/20">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Fan Reactions</h3>
                <div className="aspect-[9/16] rounded-lg overflow-hidden bg-black">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/yRx9ddjHHSM"
                    title="Fan Reactions"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 w-12 h-12 bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/30 rounded-full flex items-center justify-center transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6 text-cyan-400" />
          </button>

          {/* Navigation Buttons */}
          {project?.galleryImages && project.galleryImages.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateLightbox('prev');
                }}
                className="absolute left-4 z-50 w-12 h-12 bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/30 rounded-full flex items-center justify-center transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 text-cyan-400" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateLightbox('next');
                }}
                className="absolute right-4 z-50 w-12 h-12 bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/30 rounded-full flex items-center justify-center transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 text-cyan-400" />
              </button>
            </>
          )}

          {/* Image Container */}
          <div 
            className="relative w-[80%] h-[80%] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <ImageWithFallback
              src={lightboxImage}
              alt={`${project?.title} full size`}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>

          {/* Image Counter */}
          {project?.galleryImages && project.galleryImages.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-900/90 px-4 py-2 rounded-full border border-cyan-500/30">
              <span className="text-cyan-400 text-sm font-medium">
                {lightboxIndex + 1} / {project.galleryImages.length}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}