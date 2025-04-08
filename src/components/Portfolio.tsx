import React, { useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon, XIcon } from 'lucide-react';
import image1 from '../images/1.jfif';
import image2 from '../images/2.jfif';
import image3 from '../images/3.jfif';
import image4 from '../images/4.jfif';
import image5 from '../images/5.jfif';
import image6 from '../images/6.jfif';
import image7 from '../images/7.jfif';
import image8 from '../images/8.jfif';
import image9 from '../images/9.jfif';
import image10 from '../images/10.jfif';
import o1 from '../images/o1.jpg';
import o2 from '../images/o2.jpg';
import o3 from '../images/o3.jpg';
import o4 from '../images/o4.jpg';
import o5 from '../images/05.jpg';
import ap1 from '../images/ap1.jpg';
import ap2 from '../images/ap2.jpg';
import ap3 from '../images/ap3.jpg';
import ap4 from '../images/ap4.jpg';
import ap5 from '../images/ap5.jpg';
import z1 from '../images/z1.jfif';
import z2 from '../images/z2.jfif';
import z3 from '../images/z3.jfif';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeProject, setActiveProject] = useState(null);

  const categories = [
    { id: 'all', name: 'Të Gjitha' },
    { id: 'apartments', name: 'Banesa' },
    { id: 'offices', name: 'Zyra' },
    { id: 'home', name: 'Shtëpi' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Apartament Modern',
      category: 'apartments',
      description: 'Rinovim i plotë i një apartamenti 120m² në zemër të qytetit, me fokus në hapësira të hapura dhe ndriçim natyral.',
      techniques: 'Përdorimi i materialeve natyrore, mobilje të personalizuara, ndriçim ambiental',
      images: [image6, image2, image3, image4, image1],
      details: ['Riorganizim i plotë i hapësirës', 'Sistem ndriçimi inteligjent', 'Mobilje të personalizuara', 'Materiale premium']
    },
    {
      id: 2,
      title: 'Zyra Kreative për Startup',
      category: 'offices',
      description: 'Dizajn i një hapësire pune 200m² që promovon kreativitetin dhe bashkëpunimin për një kompani teknologjie.',
      techniques: 'Zona fleksibël pune, elemente akustikë, ndriçim dinamik',
      images: [z1, z2, z3],
      details: ['Hapësira të hapura për bashkëpunim', 'Zona private për fokus', 'Salla takimesh moderne', 'Ergonomi maksimale']
    },
    {
      id: 3,
      title: 'Apartament Minimalist',
      category: 'apartments',
      description: 'Rikonceptim i një apartamenti 90m² me fokus në minimalizëm dhe funksionalitet.',
      techniques: 'Mobilje multi-funksionale, paletë ngjyrash neutrale, hapësira të optimizuara',
      images: [image5, image7, image8, image9, image10],
      details: ['Stil minimalist', 'Organizim i thjeshtë dhe funksional', 'Mobilje me shumë përdorime', 'Ngjyra të qeta për qetësi vizuale']
    },
    {
      id: 4,
      title: 'Dizajn i Jashtëm',
      category: 'home',
      description: 'Transformimi i hapësirës së jashtme në një oborr funksional dhe estetik, i përshtatshëm për relaksim dhe aktivitete sociale. Dizajni kombinon natyrën me elemente moderne për të krijuar një ambient të ngrohtë dhe të ftuar.',
      techniques: 'Përdorimi i ndriçimit ambiental në natyrë, mobilje rezistente ndaj motit, elemente dekorative me dru natyral dhe gur, zona të gjelbra me bimë dekorative dhe sipërfaqe me gurë dekorativ.',
      images: [o1, o2, o3, o4, o5],
      details: ['Zonë relaksuese me ndriçim ambiental', 'Mobilje të jashtme rezistente', 'Elemente dekorative natyrale', 'Hapësira të gjelbra të kuruara']
    },
    {
      id: 5,
      title: 'Apartment Modern',
      category: 'apartments',
      description: 'Ky apartament modern ofron një hapësirë të ngrohtë dhe të sofistikuar, të dizajnuar për të siguruar komoditet dhe estetikë të lartë. ',
      techniques: 'Ndriçimi i ambientit, komoditet, funksionalitet, përshtatshmëri dhe fleksibilitet.',
      images: [ap1, ap2, ap3, ap4, ap5],
      details: ['Dizajn modern dhe elegant', 'Komoditet i lartë në çdo dhomë', 'Zgjedhje fleksibile e mobiljeve', 'Ndriçim i menduar mirë për çdo ambient']
    }
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const ProjectModal = ({ project, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const nextImage = () => {
      setCurrentImageIndex(prev => (prev === project.images.length - 1 ? 0 : prev + 1));
    };
    const prevImage = () => {
      setCurrentImageIndex(prev => (prev === 0 ? project.images.length - 1 : prev - 1));
    };
    const handleBackdropClick = e => {
      if (e.target === e.currentTarget) onClose();
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={handleBackdropClick}>
        <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
          <div className="p-4 border-b flex justify-between items-center bg-white sticky top-0 z-10">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full transition-colors">
              <XIcon size={24} className="text-gray-500" />
            </button>
          </div>
          <div className="flex-grow overflow-y-auto">
            <div className="relative">
              <div className="relative h-[50vh] md:h-[60vh]">
                <img src={project.images[currentImageIndex]} alt={`${project.title} - Imazhi ${currentImageIndex + 1}`} className="w-full h-full object-contain" />
                <button onClick={e => { e.stopPropagation(); prevImage(); }} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full text-white transition-all">
                  <ArrowLeftIcon size={20} />
                </button>
                <button onClick={e => { e.stopPropagation(); nextImage(); }} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full text-white transition-all">
                  <ArrowRightIcon size={20} />
                </button>
              </div>
              <div className="flex gap-2 p-4 overflow-x-auto">
                {project.images.map((image, index) => (
                  <button key={index} onClick={() => setCurrentImageIndex(index)} className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${currentImageIndex === index ? 'border-orange-500' : 'border-transparent'}`}>
                    <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-2">Përshkrimi</h4>
                <p className="text-gray-700">{project.description}</p>
              </div>
              {project.details && (
                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-2">Detajet</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    {project.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div>
                <h4 className="text-xl font-semibold mb-2">Teknikat e përdorura</h4>
                <p className="text-gray-700">{project.techniques}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-orange-500">Projektet e </span> Realizuara
        </h2>
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-5 py-2 rounded-full transition-colors ${activeCategory === category.id ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md cursor-pointer transition-transform hover:scale-105" onClick={() => setActiveProject(project)}>
              <div className="h-64 overflow-hidden">
                <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 line-clamp-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Nuk u gjetën projekte në këtë kategori.</p>
          </div>
        )}
        {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
      </div>
    </section>
  );
};

export default Portfolio;
