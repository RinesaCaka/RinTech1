import React, { useEffect, useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [{
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1800&auto=format&fit=crop',
    title: 'Dizajn modern për hapësira unike'
  }, {
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1800&auto=format&fit=crop',
    title: 'Transformojmë shtëpinë tuaj në një vepër arti'
  }, {
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1800&auto=format&fit=crop',
    title: 'Elegancë dhe funksionalitet në çdo projekt'
  }];
  const nextSlide = () => {
    setCurrentSlide(prev => prev === slides.length - 1 ? 0 : prev + 1);
  };
  const prevSlide = () => {
    setCurrentSlide(prev => prev === 0 ? slides.length - 1 : prev - 1);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return <section id="home" className="relative w-full h-screen bg-gray-100">
      {/* Slider */}
      <div className="relative w-full h-full overflow-hidden">
        {slides.map((slide, index) => <div key={index} className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}>
            <div className="w-full h-full bg-cover bg-center" style={{
          backgroundImage: `url(${slide.image})`
        }}>
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl max-w-2xl mb-8">
                  Krijojmë hapësira që frymëzojnë dhe transformojnë jetën tuaj
                </p>
                <a href="#contact"  className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-md transition-colors"
>
  Rezervo një Takim
</a>

              </div>
            </div>
          </div>)}
        {/* Navigation buttons */}
        <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 p-2 rounded-full text-white transition-all" onClick={prevSlide}>
          <ArrowLeftIcon size={24} />
        </button>
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 p-2 rounded-full text-white transition-all" onClick={nextSlide}>
          <ArrowRightIcon size={24} />
        </button>
        {/* Indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
          {slides.map((_, index) => <button key={index} className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? 'bg-orange-500' : 'bg-white bg-opacity-50'}`} onClick={() => setCurrentSlide(index)}></button>)}
        </div>
      </div>
    </section>;
};
export default Hero;