import React from 'react'
import { UserIcon, BrainIcon, HeartIcon } from 'lucide-react'
const AboutUs = () => {
  const team = [
    {
      name: 'Rinore Caka',
      role: 'Dizajnere Kryesore',
      expertise: 'Specializuar në dizajn modern dhe klasik',
      experience: '4+ vite përvojë',
      icon: <UserIcon size={32} className="text-orange-500" />,
    },
    {
      name: 'Astrit Shahini',
      role: 'Arkitekt',
      expertise: 'Ekspert në planifikim hapësinor',
      experience: '6+ vite përvojë',
      icon: <UserIcon size={32} className="text-orange-500" />,
    },
    
  ]
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-orange-500">Rreth</span> Nesh
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Historia e Studios</h3>
            <p className="text-gray-700 mb-4">
              RINARCHSTUDIO u themelua në vitin 2021 me vizionin për të sjellë
              dizajne unike dhe moderne në shtëpitë dhe bizneset shqiptare. Që
              atëherë, kemi realizuar rreth  100 projekte të suksesshme në të
              gjithë vendin.
            </p>
            <p className="text-gray-700">
              Ekipi ynë prej profesionistësh të apasionuar kombinon njohuritë e
              thella të dizajnit me teknologjitë më të fundit për të krijuar
              hapësira që janë njëkohësisht funksionale dhe estetikisht të
              bukura.
            </p>
          </div>
          <div className="relative h-80 overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&auto=format&fit=crop"
              alt="Studio jonë"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <h3 className="text-2xl font-semibold text-center mb-8">Ekipi Ynë</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-10">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg border-t-4 border-orange-500 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                  {member.icon}
                </div>
                <h4 className="text-xl font-semibold mb-1">{member.name}</h4>
                <p className="text-orange-500 font-medium mb-3">
                  {member.role}
                </p>
                <div className="w-12 h-1 bg-orange-500 mb-4"></div>
                <p className="text-gray-600 mb-2">{member.expertise}</p>
                <p className="text-gray-500 text-sm">{member.experience}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Vlerat dhe Filozofia Jonë
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="text-lg font-medium mb-2 text-orange-500">
                Kreativitet
              </h4>
              <p className="text-gray-700">
                Çdo projekt është unik dhe meriton një qasje të personalizuar që
                reflekton personalitetin dhe nevojat tuaja.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-medium mb-2 text-orange-500">
                Cilësi
              </h4>
              <p className="text-gray-700">
                Përdorim vetëm materialet më të mira dhe teknikat më të
                avancuara për rezultate që zgjasin.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-medium mb-2 text-orange-500">
                Bashkëpunim
              </h4>
              <p className="text-gray-700">
                Besojmë në një proces transparent ku klientët janë pjesë
                integrale e çdo vendimi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default AboutUs
