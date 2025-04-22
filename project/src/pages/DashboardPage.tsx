import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { Activity, Brain, Users, Trophy, Calendar, ArrowRight, Bell } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Top Bar */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Olá, João! 👋
              </h1>
              <p className="text-gray-600">
                {format(new Date(), "EEEE, d 'de' MMMM", { locale: ptBR })}
              </p>
            </div>
            <button className="p-2 text-gray-400 hover:text-gray-600 relative">
              <Bell className="h-6 w-6" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Wellness Score */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Seu Score de Bem-estar</h2>
            <span className="text-3xl font-bold text-blue-600">78/100</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <MetricCard
              icon={<Activity className="h-5 w-5 text-green-500" />}
              title="Saúde Física"
              value={82}
              change={+5}
            />
            <MetricCard
              icon={<Brain className="h-5 w-5 text-purple-500" />}
              title="Saúde Mental"
              value={75}
              change={-2}
            />
            <MetricCard
              icon={<Users className="h-5 w-5 text-blue-500" />}
              title="Social"
              value={85}
              change={+8}
            />
            <MetricCard
              icon={<Trophy className="h-5 w-5 text-amber-500" />}
              title="Conquistas"
              value={70}
              change={+12}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Today's Plan */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Plano de Hoje</h2>
                <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                  Ver tudo
                  <ArrowRight className="h-4 w-4 ml-1" />
                </button>
              </div>
              <div className="space-y-4">
                <ActivityCard
                  time="09:00"
                  title="Meditação Guiada"
                  description="10 minutos de mindfulness para começar o dia"
                  status="completed"
                />
                <ActivityCard
                  time="12:30"
                  title="Pausa Ativa"
                  description="Exercícios de alongamento para o horário do almoço"
                  status="current"
                />
                <ActivityCard
                  time="16:00"
                  title="Desafio de Passos"
                  description="Complete 8.000 passos até o final do dia"
                  status="pending"
                />
              </div>
            </div>

            {/* Active Challenges */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6">Desafios Ativos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ChallengeCard
                  title="Maratona do Sono"
                  description="Durma 7+ horas por 5 dias seguidos"
                  progress={60}
                  daysLeft={3}
                  participants={124}
                />
                <ChallengeCard
                  title="Mindfulness em Equipe"
                  description="Complete 10 sessões de meditação"
                  progress={40}
                  daysLeft={5}
                  participants={89}
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Ações Rápidas</h2>
              <div className="grid grid-cols-2 gap-4">
                <QuickActionButton
                  icon={<Calendar className="h-5 w-5" />}
                  label="Agendar Terapia"
                />
                <QuickActionButton
                  icon={<Activity className="h-5 w-5" />}
                  label="Registrar Atividade"
                />
                <QuickActionButton
                  icon={<Brain className="h-5 w-5" />}
                  label="Meditação"
                />
                <QuickActionButton
                  icon={<Users className="h-5 w-5" />}
                  label="Chat em Grupo"
                />
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Próximos Eventos</h2>
              <div className="space-y-4">
                <EventCard
                  title="Yoga em Grupo"
                  date="Amanhã, 08:00"
                  participants={12}
                />
                <EventCard
                  title="Workshop: Gestão do Estresse"
                  date="Quinta, 15:00"
                  participants={45}
                />
                <EventCard
                  title="Desafio: Corrida Virtual"
                  date="Sábado, 07:00"
                  participants={89}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MetricCard = ({ 
  icon, 
  title, 
  value, 
  change 
}: { 
  icon: React.ReactNode;
  title: string;
  value: number;
  change: number;
}) => (
  <div className="bg-gray-50 rounded-xl p-4">
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center">
        {icon}
        <span className="ml-2 font-medium">{title}</span>
      </div>
      <span className={`text-sm ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
        {change >= 0 ? '+' : ''}{change}%
      </span>
    </div>
    <div className="mt-2">
      <div className="h-2 w-full bg-gray-200 rounded-full">
        <div
          className="h-full bg-blue-600 rounded-full"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
    <div className="mt-2 text-right">
      <span className="text-sm font-medium">{value}/100</span>
    </div>
  </div>
);

const ActivityCard = ({ 
  time, 
  title, 
  description, 
  status 
}: { 
  time: string;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'pending';
}) => (
  <div className={`flex items-center p-4 rounded-lg ${
    status === 'current' ? 'bg-blue-50 border border-blue-100' : 'hover:bg-gray-50'
  }`}>
    <div className="flex-shrink-0 w-16 text-sm text-gray-600">{time}</div>
    <div className="flex-grow">
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
    <div className="flex-shrink-0 ml-4">
      {status === 'completed' && (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
          Concluído
        </span>
      )}
      {status === 'current' && (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          Agora
        </span>
      )}
      {status === 'pending' && (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
          Pendente
        </span>
      )}
    </div>
  </div>
);

const ChallengeCard = ({ 
  title, 
  description, 
  progress, 
  daysLeft, 
  participants 
}: { 
  title: string;
  description: string;
  progress: number;
  daysLeft: number;
  participants: number;
}) => (
  <div className="bg-gray-50 rounded-xl p-4">
    <h3 className="font-medium mb-1">{title}</h3>
    <p className="text-sm text-gray-600 mb-4">{description}</p>
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-1">
        <span>Progresso</span>
        <span>{progress}%</span>
      </div>
      <div className="h-2 w-full bg-gray-200 rounded-full">
        <div
          className="h-full bg-blue-600 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
    <div className="flex justify-between text-sm text-gray-600">
      <span>{daysLeft} dias restantes</span>
      <span>{participants} participantes</span>
    </div>
  </div>
);

const QuickActionButton = ({ 
  icon, 
  label 
}: { 
  icon: React.ReactNode;
  label: string;
}) => (
  <button className="w-full p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors flex flex-col items-center justify-center">
    {icon}
    <span className="mt-2 text-sm font-medium">{label}</span>
  </button>
);

const EventCard = ({ 
  title, 
  date, 
  participants 
}: { 
  title: string;
  date: string;
  participants: number;
}) => (
  <div className="flex items-center p-4 hover:bg-gray-50 rounded-lg">
    <div className="flex-grow">
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-gray-600">{date}</p>
    </div>
    <div className="flex-shrink-0 ml-4">
      <span className="text-sm text-gray-600">{participants} participantes</span>
    </div>
  </div>
);

export default DashboardPage;