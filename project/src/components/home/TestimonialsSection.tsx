import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Carla Mendes",
    position: "Diretora de RH",
    company: "Tech Solutions Brasil",
    avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote: "A VitalCorp transformou nossa cultura organizacional. Em apenas 6 meses, vimos redução de 28% no absenteísmo e um aumento significativo na satisfação dos colaboradores.",
    rating: 5,
  },
  {
    id: 2,
    name: "Ricardo Santos",
    position: "CEO",
    company: "Construtech Engenharia",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote: "Integramos o programa de bem-estar em nossa estratégia e vimos um ROI surpreendente. Menos afastamentos, maior produtividade e uma equipe mais engajada.",
    rating: 5,
  },
  {
    id: 3,
    name: "Fernanda Lima",
    position: "Gerente de Pessoas",
    company: "Banco Novum",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote: "O que mais me impressionou foi a personalização. Cada colaborador tem seu plano único, o que aumentou muito a adesão. Os relatórios nos dão insights valiosos para nossas políticas de RH.",
    rating: 5,
  },
  {
    id: 4,
    name: "Antônio Oliveira",
    position: "Diretor de Operações",
    company: "LogisFast",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote: "Nossos motoristas e operadores de logística agora têm suporte para saúde física e mental. Vimos redução expressiva em acidentes e aumento na satisfação da equipe.",
    rating: 4,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O Que Dizem Nossos Clientes</h2>
          <p className="text-xl text-gray-600">
            Empresas de diversos setores já transformaram a saúde e o bem-estar de suas equipes
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial */}
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 md:p-12 mb-6 relative">
              <div className="absolute top-6 left-6 text-blue-200">
                <Quote className="h-16 w-16 opacity-40" />
              </div>
              
              <div className="relative z-10">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`h-5 w-5 ${i < testimonials[currentIndex].rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-2xl font-medium text-gray-800 mb-8">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                
                <div className="flex items-center">
                  <img 
                    src={testimonials[currentIndex].avatar} 
                    alt={testimonials[currentIndex].name}
                    className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-white shadow"
                  />
                  <div>
                    <p className="font-semibold text-lg">{testimonials[currentIndex].name}</p>
                    <p className="text-gray-600">
                      {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex justify-between items-center">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-blue-50 transition duration-300"
              >
                <ChevronLeft className="h-5 w-5 text-blue-600" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-blue-50 transition duration-300"
              >
                <ChevronRight className="h-5 w-5 text-blue-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;