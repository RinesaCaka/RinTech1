import React, { useState } from 'react';
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  CalendarIcon,
  InstagramIcon,
  FacebookIcon,
  LinkedinIcon
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const response = await fetch('https://formspree.io/f/xjkypzgg', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: new FormData(e.target),
    });
  
    if (response.ok) {
      setSuccessMessage("Mesazhi juaj u dërgua me sukses! Do t'ju kontaktojmë së shpejti.");
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
      });
      // Fshi mesazhin pas 5 sekondash
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } else {
      setSuccessMessage("Diçka shkoi keq. Ju lutem provoni përsëri.");
      // Edhe për errorin, mund ta heqësh pas pak sekondash nëse do
      setTimeout(() => {
        setSuccessMessage('');
      }, 5000);
    }
  };
  

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-orange-500">Na</span> Kontaktoni
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            {successMessage && (
              <div className="mb-4 p-4 text-green-700 bg-green-100 border border-green-300 rounded">
                {successMessage}
              </div>
            )}
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Emri dhe Mbiemri
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Numri i Telefonit
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Mesazhi
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded"
              >
                Dërgo Mesazhin
              </button>
            </form>

            {/* pjesa e Takimit Online */}
            <div className="mt-8 flex flex-col space-y-4">
              <div className="flex items-center">
                <CalendarIcon className="text-orange-500 mr-3" />
                <div>
                  <h4 className="font-medium">Takim Online</h4>
                  <p className="text-gray-700">
                    Rezervoni një takim virtual me dizajnerët tanë
                  </p>
                  <a href="#" className="text-orange-500 hover:underline">
                    Rezervo Tani
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* pjesa me hartë dhe info kontaktit */}
          <div>
            <div className="h-64 bg-gray-300 rounded-lg mb-8">
              <iframe
                title="Lokacioni në hartë"
                src="https://www.google.com/maps?q=Gursel%20%26%20Bajram%20Sylejmani%20Ferizaj&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-6">Informacione Kontakti</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPinIcon className="text-orange-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Adresa</h4>
                    <p className="text-gray-700">
                      Rruga "Gursel & Bajram Sylejmani", Ferizaj
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <PhoneIcon className="text-orange-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Telefon</h4>
                    <p className="text-gray-700">+383 48 228 318</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MailIcon className="text-orange-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-700">rinorecaka1@hotmail.com</p>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <h4 className="font-medium mb-3">Na ndiqni</h4>
                  <div className="flex space-x-4">
                    <a href="https://www.facebook.com/profile.php?id=61572204634176" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-500">
                      <FacebookIcon />
                    </a>
                    <a href="https://www.instagram.com/rinarch_studio/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-500">
                      <InstagramIcon />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-orange-500">
                      <LinkedinIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> {/* fund i kontaktit */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
