import React from 'react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-orange-500">RIN</span>
              <span className="text-white">ARCH</span>
              <span className="text-orange-500">STUDIO</span>
            </h3>
            <p className="text-gray-400">
              Transformojmë hapësirat tuaja në vepra arti funksionale dhe
              estetike. Dizajn i brendshëm për çdo ambient.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Shërbimet</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#services" className="hover:text-orange-500">
                  Konsulencë Dizajni
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-500">
                  Rikonceptim Ambientesh
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-500">
                  Projektim 3D
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-500">
                  Menaxhim Projekti
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Orari</h4>
            <ul className="space-y-2 text-gray-400">
              <li>E Hënë - E Premte: 9:00 - 17:00</li>
              <li>E Shtunë: 10:00 - 14:00</li>
              <li>E Diel: Mbyllur</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>
            &copy; {currentYear} RINARCHSTUDIO. Të gjitha të drejtat e
            rezervuara.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;