import React from 'react';
import { Check, TrendingUp, Clock, DollarSign, HeartPulse, Brain, Users } from 'lucide-react';

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefícios Comprovados</h2>
          <p className="text-xl text-gray-600">
            Transforme o bem-estar da sua equipe e alcance resultados mensuráveis para sua empresa.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image/Chart Side */}
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-blue-100 rounded-full opacity-30"></div>
            <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-teal-100 rounded-full opacity-40"></div>
            
            <div className="relative z-10 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6">Impacto nos Resultados</h3>
                
                <div className="space-y-6">
                  <MetricBar 
                    icon={<TrendingUp className="text-green-500" />} 
                    title="Produtividade" 
                    value={32} 
                    color="bg-green-500" 
                  />
                  <MetricBar 
                    icon={<HeartPulse className="text-red-500" />} 
                    title="Saúde Física" 
                    value={47} 
                    color="bg-red-500" 
                  />
                  <MetricBar 
                    icon={<Brain className="text-purple-500" />} 
                    title="Saúde Mental" 
                    value={58} 
                    color="bg-purple-500" 
                  />
                  <MetricBar 
                    icon={<Users className="text-blue-500" />} 
                    title="Engajamento" 
                    value={42} 
                    color="bg-blue-500" 
                  />
                  <MetricBar 
                    icon={<Clock className="text-amber-500" />} 
                    title="Absenteísmo" 
                    value={28} 
                    color="bg-amber-500" 
                    inverted 
                  />
                  <MetricBar 
                    icon={<DollarSign className="text-teal-500" />} 
                    title="Custos de Saúde" 
                    value={35} 
                    color="bg-teal-500" 
                    inverted 
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Text Content Side */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">Por que escolher a VitalCorp:</h3>
            
            <BenefitItem
              title="Redução de Custos com Saúde"
              description="Reduza em até 35% os custos com planos de saúde e afastamentos através de prevenção e hábitos saudáveis."
            />
            
            <BenefitItem
              title="Aumento de Produtividade"
              description="Colaboradores mais saudáveis são 32% mais produtivos, reduzindo prazos e melhorando a qualidade das entregas."
            />
            
            <BenefitItem
              title="Menor Turnover"
              description="Empresas com programas de bem-estar reduzem em 24% a rotatividade, economizando em recrutamento e treinamento."
            />
            
            <BenefitItem
              title="Cultura Organizacional Positiva"
              description="Crie um ambiente de trabalho que promove saúde e relacionamentos positivos, aumentando o engajamento."
            />
            
            <BenefitItem
              title="Dados e Insights Acionáveis"
              description="Relatórios detalhados e análises preditivas para tomar decisões baseadas em dados sobre o bem-estar da equipe."
            />
            
            <div className="pt-4">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-medium rounded-full hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
                Ver Estudo de Caso
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BenefitItem = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="flex space-x-4">
      <div className="flex-shrink-0 mt-1">
        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
          <Check className="h-4 w-4 text-blue-600" />
        </div>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-2">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const MetricBar = ({ 
  icon, 
  title, 
  value, 
  color, 
  inverted = false 
}: { 
  icon: React.ReactNode; 
  title: string; 
  value: number; 
  color: string; 
  inverted?: boolean;
}) => {
  const label = inverted ? `↓ ${value}%` : `↑ ${value}%`;
  
  return (
    <div>
      <div className="flex justify-between mb-2">
        <div className="flex items-center">
          <div className="w-5 h-5 mr-2">
            {icon}
          </div>
          <span className="font-medium">{title}</span>
        </div>
        <span className={`font-semibold ${inverted ? 'text-green-600' : 'text-blue-600'}`}>
          {label}
        </span>
      </div>
      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
        <div 
          className={`h-full ${color} rounded-full`} 
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
};

export default BenefitsSection;