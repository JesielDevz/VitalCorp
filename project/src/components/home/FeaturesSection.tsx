import React from 'react';
import { 
  ActivitySquare, 
  Brain, 
  Trophy, 
  BookOpen, 
  Users, 
  GitMerge, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';

const features = [
  {
    icon: <ActivitySquare className="h-6 w-6 text-blue-500" />,
    title: "Avaliação de Saúde e Bem-Estar",
    description: "Questionários personalizados e integração opcional com wearables para mapear o perfil de saúde dos colaboradores."
  },
  {
    icon: <Sparkles className="h-6 w-6 text-purple-500" />,
    title: "Planos Personalizados e IA",
    description: "Geração automática de planos de bem-estar por IA, adaptados ao perfil e preferências de cada colaborador."
  },
  {
    icon: <Brain className="h-6 w-6 text-teal-500" />,
    title: "Recursos de Saúde Mental",
    description: "Acesso a conteúdos, sessões de mindfulness, meditação guiada e trilhas de autoconhecimento."
  },
  {
    icon: <Trophy className="h-6 w-6 text-amber-500" />,
    title: "Gamificação e Desafios",
    description: "Desafios individuais e em grupo com rankings e sistema de recompensas para incentivar hábitos saudáveis."
  },
  {
    icon: <BookOpen className="h-6 w-6 text-red-500" />,
    title: "Conteúdo Educativo",
    description: "Biblioteca abrangente de vídeos, artigos e webinars sobre saúde, nutrição, finanças e bem-estar."
  },
  {
    icon: <Users className="h-6 w-6 text-indigo-500" />,
    title: "Integração Familiar",
    description: "Inclusão de familiares em programas e desafios, ampliando o impacto do bem-estar para além do ambiente de trabalho."
  },
  {
    icon: <GitMerge className="h-6 w-6 text-green-500" />,
    title: "Integração com Sistemas de RH",
    description: "Sincronização com sistemas de RH e folha de pagamento para facilitar onboarding e automatizar incentivos."
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-gray-500" />,
    title: "Compliance e Segurança",
    description: "Total conformidade com LGPD e HIPAA, incluindo criptografia, controle de acesso e relatórios de auditoria."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Funcionalidades Completas</h2>
          <p className="text-xl text-gray-600">
            Nossa plataforma SaaS oferece um conjunto abrangente de recursos para transformar a saúde e o bem-estar da sua equipe.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string 
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeaturesSection;