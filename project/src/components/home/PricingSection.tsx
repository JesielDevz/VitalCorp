import React, { useState } from 'react';
import { Check, HelpCircle } from 'lucide-react';

const plans = [
  {
    name: "Essencial",
    price: "R$29",
    unit: "por colaborador/mês",
    description: "Para empresas iniciando sua jornada de bem-estar",
    features: [
      "Avaliação de saúde básica",
      "Planos personalizados",
      "Conteúdo educativo",
      "Desafios básicos",
      "Dashboards simples",
      "Suporte por email"
    ],
    mostPopular: false,
    cta: "Começar Agora",
    bgClass: "bg-white"
  },
  {
    name: "Completo",
    price: "R$49",
    unit: "por colaborador/mês",
    description: "Solução abrangente para bem-estar corporativo",
    features: [
      "Avaliação avançada de saúde",
      "Planos personalizados com IA",
      "Biblioteca completa de conteúdo",
      "Gamificação e desafios avançados",
      "Integração com wearables",
      "Suporte prioritário",
      "Relatórios personalizados",
      "Integração com RH",
    ],
    mostPopular: true,
    cta: "Experimente Grátis",
    bgClass: "bg-gradient-to-br from-blue-500 to-teal-400 text-white"
  },
  {
    name: "Empresarial",
    price: "Personalizado",
    unit: "contate para preços",
    description: "Para grandes corporações com necessidades específicas",
    features: [
      "Tudo do plano Completo",
      "API personalizada",
      "Integração com sistemas próprios",
      "Marca branca",
      "Gerente de sucesso dedicado",
      "Consultorias presenciais",
      "Métricas avançadas e ROI",
      "SLA garantido"
    ],
    mostPopular: false,
    cta: "Fale Conosco",
    bgClass: "bg-white"
  }
];

const PricingSection = () => {
  const [billingInterval, setBillingInterval] = useState<'annual' | 'monthly'>('annual');
  
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Planos Flexíveis</h2>
          <p className="text-xl text-gray-600 mb-8">
            Escolha o plano que melhor atende às necessidades da sua empresa
          </p>
          
          {/* Billing Interval Toggle */}
          <div className="flex justify-center items-center space-x-4 mb-12">
            <span className={`text-lg ${billingInterval === 'monthly' ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
              Mensal
            </span>
            <button
              onClick={() => setBillingInterval(billingInterval === 'monthly' ? 'annual' : 'monthly')}
              className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors focus:outline-none ${
                billingInterval === 'annual' ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                  billingInterval === 'annual' ? 'translate-x-9' : 'translate-x-1'
                }`}
              />
            </button>
            <div className="flex items-center">
              <span className={`text-lg ${billingInterval === 'annual' ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
                Anual
              </span>
              <span className="ml-2 inline-flex items-center rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-800">
                Salve 20%
              </span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 ${
                plan.mostPopular ? 'md:-mt-4 md:mb-4' : ''
              } relative`}
            >
              {plan.mostPopular && (
                <div className="absolute top-0 inset-x-0 flex justify-center">
                  <div className="bg-amber-500 text-white px-4 py-1 rounded-b-lg font-medium shadow-sm">
                    Mais Popular
                  </div>
                </div>
              )}
              
              <div className={`p-8 ${plan.bgClass} h-full flex flex-col`}>
                <h3 className={`text-2xl font-bold mb-2 ${plan.mostPopular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className={`text-4xl font-bold ${plan.mostPopular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  <span className={`ml-2 text-sm ${plan.mostPopular ? 'text-blue-100' : 'text-gray-500'}`}>
                    {plan.unit}
                  </span>
                </div>
                <p className={`mb-6 ${plan.mostPopular ? 'text-blue-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className={`h-5 w-5 mr-2 flex-shrink-0 ${
                        plan.mostPopular ? 'text-blue-100' : 'text-blue-500'
                      }`} />
                      <span className={plan.mostPopular ? 'text-white' : 'text-gray-700'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                    plan.mostPopular
                      ? 'bg-white text-blue-600 hover:bg-blue-50'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* FAQ */}
        <div className="mt-16 max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-8">
          <div className="flex items-center space-x-3 mb-6">
            <HelpCircle className="h-6 w-6 text-blue-500" />
            <h3 className="text-xl font-bold">Perguntas Frequentes</h3>
          </div>
          
          <div className="space-y-4">
            <FaqItem 
              question="Existe um número mínimo de colaboradores?" 
              answer="Não há mínimo para o plano Essencial. Para os planos Completo e Empresarial, recomendamos pelo menos 20 colaboradores para aproveitar todos os benefícios." 
            />
            <FaqItem 
              question="Posso mudar de plano depois?" 
              answer="Sim, você pode atualizar ou fazer downgrade do seu plano a qualquer momento. As mudanças entram em vigor no próximo ciclo de faturamento." 
            />
            <FaqItem 
              question="Como funciona o período de teste?" 
              answer="Oferecemos 30 dias de teste gratuito para até 50 colaboradores nos planos Essencial e Completo, com todas as funcionalidades incluídas." 
            />
            <FaqItem 
              question="Vocês oferecem desconto para ONGs?" 
              answer="Sim, oferecemos descontos especiais para organizações sem fins lucrativos e instituições educacionais. Entre em contato com nossa equipe de vendas." 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 pb-4">
      <button
        className="flex justify-between items-center w-full text-left font-medium text-gray-900 py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <svg
          className={`w-5 h-5 text-gray-500 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="mt-2 text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
};

export default PricingSection;