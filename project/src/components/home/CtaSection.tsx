import React from 'react';
import { ArrowRight, Check, PlayCircle } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-500 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transforme o bem-estar da sua equipe hoje
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Junte-se a mais de 500 empresas que já melhoraram a saúde, produtividade e engajamento dos seus colaboradores
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <button className="px-8 py-3 bg-white text-blue-600 font-medium rounded-full hover:shadow-lg transform hover:-translate-y-1 transition duration-300 flex items-center justify-center">
              Agendar Demonstração
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="px-8 py-3 bg-blue-700 bg-opacity-30 text-white font-medium rounded-full hover:bg-opacity-40 transition duration-300 flex items-center justify-center">
              <PlayCircle className="mr-2 h-5 w-5" />
              Ver Vídeo
            </button>
          </div>
        </div>
        
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CtaStat
              title="500+"
              description="Empresas"
            />
            <CtaStat
              title="95%"
              description="Taxa de renovação"
            />
            <CtaStat
              title="32%"
              description="Média de ROI"
            />
          </div>
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-blue-100 mb-4">Empresas que confiam na VitalCorp</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center justify-center bg-white bg-opacity-20 p-4 rounded-lg">
              <div className="text-xl font-bold text-white">TechFirm</div>
            </div>
            <div className="flex items-center justify-center bg-white bg-opacity-20 p-4 rounded-lg">
              <div className="text-xl font-bold text-white">BancoPro</div>
            </div>
            <div className="flex items-center justify-center bg-white bg-opacity-20 p-4 rounded-lg">
              <div className="text-xl font-bold text-white">LogisTech</div>
            </div>
            <div className="flex items-center justify-center bg-white bg-opacity-20 p-4 rounded-lg">
              <div className="text-xl font-bold text-white">HealthSP</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CtaStat = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="text-center py-6">
      <h3 className="text-4xl font-bold mb-2">{title}</h3>
      <p className="text-blue-100">{description}</p>
    </div>
  );
};

export default CtaSection;