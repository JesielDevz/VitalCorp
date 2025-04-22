import React from 'react';
import { ArrowRight, Activity, Brain, Users, ShieldCheck } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Transforme a saúde e bem-estar na sua empresa
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Potencialize a produtividade e satisfação dos seus colaboradores com programas personalizados de bem-estar físico, mental e social.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-medium rounded-full hover:shadow-lg transform hover:-translate-y-1 transition duration-300 flex items-center justify-center">
                Agendar Demonstração
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="px-8 py-3 border border-blue-600 text-blue-600 font-medium rounded-full hover:bg-blue-50 transition duration-300 flex items-center justify-center">
                Saiba Mais
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <ShieldCheck className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-gray-700">LGPD Compliant</span>
              </div>
              <div className="flex items-center">
                <Brain className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-gray-700">IA Avançada</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-gray-700">+500 Empresas</span>
              </div>
              <div className="flex items-center">
                <Activity className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-gray-700">95% Satisfação</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image/Illustration */}
          <div className="md:w-1/2 relative">
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-blue-100 rounded-full opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-teal-100 rounded-full opacity-60"></div>
              <img 
                src="https://img.freepik.com/fotos-gratis/pessoas-de-tecnologia-tentando-alcancar-metas-ambiciosas-de-sustentabilidade_23-2150950168.jpg?t=st=1745312445~exp=1745316045~hmac=1c5bc0d001a3f98dd3d2174179119139a7b76801f1f06319c110d8918ebd8a46&w=1380" 
                alt="Equipe diversa trabalhando em ambiente saudável"
                className="rounded-xl shadow-xl relative z-10 w-full object-cover"
              />
              
              {/* Floating Elements */}
              <div className="absolute top-10 -left-10 z-20 bg-white p-3 rounded-lg shadow-lg flex items-center space-x-3 animate-float">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Activity className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Atividade Física</p>
                  <p className="text-sm font-semibold">+32% em 3 meses</p>
                </div>
              </div>
              
              <div className="absolute bottom-10 -right-8 z-20 bg-white p-3 rounded-lg shadow-lg flex items-center space-x-3 animate-float animation-delay-1000">
                <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                  <Brain className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Saúde Mental</p>
                  <p className="text-sm font-semibold">-27% estresse</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;