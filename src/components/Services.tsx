import React from 'react';
import procesiImage from '../images/bathroom.jpg';

import { PencilRulerIcon, HomeIcon, ClipboardListIcon } from 'lucide-react';
const Services = () => {
  const services = [{
    title: 'Konsulencë Dizajni',
    description: 'Ofrojmë këshilla profesionale për të gjitha aspektet e dizajnit të brendshëm, nga ngjyrat dhe materialet deri te mobilimi dhe ndriçimi.',
    icon: <PencilRulerIcon size={48} className="text-orange-500" />
  }, {
    title: 'Rikonceptim Ambientesh',
    description: 'Transformojmë hapësirat ekzistuese duke maksimizuar potencialin e tyre me zgjidhje inovative dhe praktike.',
    icon: <HomeIcon size={48} className="text-orange-500" />
  }, {
    title: 'Projektim 3D',
    description: 'Krijojmë vizualizime realiste 3D që ju lejojnë të shihni projektin tuaj para se të fillojnë punimet.',
    icon: <HomeIcon size={48} className="text-orange-500" />
  }, {
    title: 'Menaxhim Projekti',
    description: 'Mbikëqyrje e plotë e projektit nga koncepti fillestar deri në realizimin përfundimtar, duke koordinuar të gjitha palët e përfshira.',
    icon: <ClipboardListIcon size={48} className="text-orange-500" />
  }];
  return <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-orange-500">Shërbimet</span> Tona
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-center mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700 text-center">{service.description}</p>
            </div>)}
        </div>
        <div className="mt-16 bg-orange-500 text-white rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold mb-4">Procesi Ynë i Punës</h3>
              <ol className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-white text-orange-500 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 font-bold">
                    1
                  </span>
                  <span>
                    Konsultë fillestare për të kuptuar nevojat dhe dëshirat
                    tuaja
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-white text-orange-500 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 font-bold">
                    2
                  </span>
                  <span>Zhvillimi i konceptit dhe prezantimi i ideve</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-white text-orange-500 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 font-bold">
                    3
                  </span>
                  <span>
                    Krijimi i vizualizimeve 3D dhe planeve të detajuara
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-white text-orange-500 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 font-bold">
                    4
                  </span>
                  <span>Zbatimi i projektit me mbikëqyrje të plotë</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-white text-orange-500 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 font-bold">
                    5
                  </span>
                  <span>Dorëzimi i projektit të përfunduar</span>
                </li>
              </ol>
            </div>
            <div className="h-80 lg:h-auto">
              <img  src={procesiImage} alt="Procesi i dizajnit" className="w-full h-full object-cover " />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Services;