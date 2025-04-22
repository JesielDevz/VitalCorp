import React from 'react';
import { ClipboardCheck, Sparkles, ActivitySquare, Trophy, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardCheck className="h-6 w-6 text-white" />,
    title: "Avaliação Inicial",
    description: "Colaboradores completam um questionário abrangente de avaliação de saúde e bem-estar, com opção de integração com dispositivos wearables.",
    bgColor: "bg-blue-500",
    number: 1,
  },
  {
    icon: <Sparkles className="h-6 w-6 text-white" />,
    title: "Plano Personalizado",
    description: "Nossa IA gera planos personalizados considerando perfil, histórico e preferências de cada pessoa.",
    bgColor: "bg-purple-500",
    number: 2,
  },
  {
    icon: <ActivitySquare className="h-6 w-6 text-white" />,
    title: "Acompanhamento Contínuo",
    description: "Monitoramento de métricas, check-ins periódicos e ajustes dos planos baseados em progresso e feedback.",
    bgColor: "bg-teal-500",
    number: 3,
  },
  {
    icon: <Trophy className="h-6 w-6 text-white" />,
    title: "Engajamento e Resultados",
    description: "Desafios, gamificação e recompensas mantêm o engajamento, enquanto relatórios mostram resultados individuais e coletivos.",
    bgColor: "bg-amber-500",
    number: 4,
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Funciona</h2>
          <p className="text-xl text-gray-600">
            Um processo simples e eficaz para transformar o bem-estar da sua equipe
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-12 w-8 border-t-2 border-dashed border-gray-300 z-0"></div>
              )}
              
              {/* Step Card */}
              <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden h-full flex flex-col">
                <div className={`${step.bgColor} p-4 relative`}>
                  <div className="absolute top-0 right-0 w-10 h-10 bg-white bg-opacity-20 rounded-bl-xl flex items-center justify-center font-bold text-white">
                    {step.number}
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-white bg-opacity-20 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Demo CTA */}
        <div className="bg-white rounded-2xl shadow-md p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Veja a plataforma em ação</h3>
              <p className="text-gray-600 mb-4 md:mb-0">
                Agende uma demonstração personalizada com nossa equipe de especialistas
              </p>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-medium rounded-full hover:shadow-lg transform hover:-translate-y-1 transition duration-300 flex items-center">
              Agendar Demonstração
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;