
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, User, Trophy, ChevronDown, Shield, Award, Calendar, Flag } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Player {
  id: string;
  name: string;
  position: string;
  number: number;
  birthDate: string;
  height: number;
  weight: number;
  nationality: string;
  image: string;
  matches: number;
  goals: number;
  assists: number;
  yellowCards: number;
  redCards: number;
}

interface StaffMember {
  id: string;
  name: string;
  role: string;
  image: string;
  since: string;
}

const Team = () => {
  const [activeTab, setActiveTab] = useState('players');
  const [activePosition, setActivePosition] = useState('all');
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  
  // Sample player data
  const players: Player[] = [
    {
      id: '1',
      name: 'Александр Иванов',
      position: 'Вратарь',
      number: 1,
      birthDate: '15.05.1992',
      height: 192,
      weight: 87,
      nationality: 'Россия',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      matches: 24,
      goals: 0,
      assists: 1,
      yellowCards: 1,
      redCards: 0
    },
    {
      id: '2',
      name: 'Дмитрий Петров',
      position: 'Защитник',
      number: 4,
      birthDate: '23.09.1994',
      height: 186,
      weight: 82,
      nationality: 'Россия',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      matches: 22,
      goals: 2,
      assists: 3,
      yellowCards: 4,
      redCards: 0
    },
    {
      id: '3',
      name: 'Артем Смирнов',
      position: 'Защитник',
      number: 6,
      birthDate: '07.12.1995',
      height: 184,
      weight: 78,
      nationality: 'Россия',
      image: 'https://images.unsplash.com/photo-1539614474467-f8a89c5aa8f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      matches: 26,
      goals: 0,
      assists: 1,
      yellowCards: 5,
      redCards: 1
    },
    {
      id: '4',
      name: 'Игорь Соколов',
      position: 'Полузащитник',
      number: 8,
      birthDate: '18.03.1993',
      height: 177,
      weight: 72,
      nationality: 'Россия',
      image: 'https://images.unsplash.com/photo-1534126416832-a88fdf2911c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      matches: 28,
      goals: 5,
      assists: 7,
      yellowCards: 3,
      redCards: 0
    },
    {
      id: '5',
      name: 'Сергей Козлов',
      position: 'Полузащитник',
      number: 10,
      birthDate: '05.07.1996',
      height: 179,
      weight: 74,
      nationality: 'Россия',
      image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      matches: 25,
      goals: 8,
      assists: 10,
      yellowCards: 2,
      redCards: 0
    },
    {
      id: '6',
      name: 'Андрей Попов',
      position: 'Нападающий',
      number: 9,
      birthDate: '12.02.1994',
      height: 183,
      weight: 78,
      nationality: 'Россия',
      image: 'https://images.unsplash.com/photo-1584634731339-252e5223ee7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80',
      matches: 27,
      goals: 15,
      assists: 5,
      yellowCards: 2,
      redCards: 0
    },
  ];
  
  // Sample staff data
  const staff: StaffMember[] = [
    {
      id: '1',
      name: 'Сергей Павлович Иванов',
      role: 'Главный тренер',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      since: '2021'
    },
    {
      id: '2',
      name: 'Алексей Николаевич Петров',
      role: 'Ассистент тренера',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      since: '2022'
    },
    {
      id: '3',
      name: 'Дмитрий Александрович Сидоров',
      role: 'Тренер вратарей',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      since: '2022'
    },
    {
      id: '4',
      name: 'Игорь Владимирович Кузнецов',
      role: 'Физиотерапевт',
      image: 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
      since: '2023'
    },
  ];
  
  const filteredPlayers = players.filter(player => {
    if (activePosition === 'all') return true;
    return player.position === activePosition;
  });
  
  const handlePlayerClick = (player: Player) => {
    setSelectedPlayer(player);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16 page-transition">
        {/* Header */}
        <div className="relative bg-fc-green text-white py-16">
          <div 
            className="absolute inset-0 bg-gradient-to-r from-fc-green/90 to-fc-darkGreen/80"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay'
            }}
          ></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                {activeTab === 'players' ? <Users className="w-8 h-8" /> : <User className="w-8 h-8" />}
              </div>
              
              <h1 className="text-4xl font-bold mb-4">Наша команда</h1>
              <p className="max-w-2xl text-white/80 text-lg">
                Познакомьтесь с игроками и тренерским составом ФК Сибирь
              </p>
              
              <div className="mt-8 flex space-x-2 p-1 bg-white/10 backdrop-blur-sm rounded-full">
                <button
                  onClick={() => setActiveTab('players')}
                  className={cn(
                    "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                    activeTab === 'players' 
                      ? "bg-white text-fc-green" 
                      : "text-white hover:bg-white/10"
                  )}
                >
                  Игроки
                </button>
                
                <button
                  onClick={() => setActiveTab('staff')}
                  className={cn(
                    "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                    activeTab === 'staff' 
                      ? "bg-white text-fc-green" 
                      : "text-white hover:bg-white/10"
                  )}
                >
                  Тренерский штаб
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {activeTab === 'players' && (
            <>
              {/* Position filter */}
              <div className="mb-8 flex justify-center">
                <div className="inline-flex p-1 bg-gray-100 rounded-full">
                  <button
                    onClick={() => setActivePosition('all')}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                      activePosition === 'all' 
                        ? "bg-fc-green text-white" 
                        : "text-gray-700 hover:bg-gray-200"
                    )}
                  >
                    Все
                  </button>
                  
                  <button
                    onClick={() => setActivePosition('Вратарь')}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                      activePosition === 'Вратарь' 
                        ? "bg-fc-green text-white" 
                        : "text-gray-700 hover:bg-gray-200"
                    )}
                  >
                    Вратари
                  </button>
                  
                  <button
                    onClick={() => setActivePosition('Защитник')}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                      activePosition === 'Защитник' 
                        ? "bg-fc-green text-white" 
                        : "text-gray-700 hover:bg-gray-200"
                    )}
                  >
                    Защитники
                  </button>
                  
                  <button
                    onClick={() => setActivePosition('Полузащитник')}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                      activePosition === 'Полузащитник' 
                        ? "bg-fc-green text-white" 
                        : "text-gray-700 hover:bg-gray-200"
                    )}
                  >
                    Полузащитники
                  </button>
                  
                  <button
                    onClick={() => setActivePosition('Нападающий')}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                      activePosition === 'Нападающий' 
                        ? "bg-fc-green text-white" 
                        : "text-gray-700 hover:bg-gray-200"
                    )}
                  >
                    Нападающие
                  </button>
                </div>
              </div>
              
              {/* Players grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPlayers.map((player) => (
                  <div
                    key={player.id}
                    onClick={() => handlePlayerClick(player)}
                    className={cn(
                      "relative bg-white rounded-xl overflow-hidden shadow-sm border transition-all duration-300 cursor-pointer",
                      selectedPlayer?.id === player.id 
                        ? "border-fc-green ring-2 ring-fc-green/20" 
                        : "border-gray-200 hover:border-fc-green/50 card-hover"
                    )}
                  >
                    <div className="flex">
                      <div className="w-1/3 relative">
                        <img 
                          src={player.image} 
                          alt={player.name} 
                          className="w-full h-full object-cover aspect-[3/4]"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/30 to-transparent"></div>
                        <div className="absolute top-3 left-3 bg-fc-green text-white w-8 h-8 flex items-center justify-center rounded-full font-bold text-lg">
                          {player.number}
                        </div>
                      </div>
                      
                      <div className="w-2/3 p-4">
                        <div className="flex flex-col h-full">
                          <div>
                            <div className="text-xs font-medium text-fc-green mb-1">
                              {player.position}
                            </div>
                            <h3 className="text-lg font-bold mb-3">{player.name}</h3>
                          </div>
                          
                          <div className="mt-auto grid grid-cols-3 gap-2 text-center">
                            <div className="bg-gray-50 p-2 rounded">
                              <div className="text-xs text-gray-500">Матчи</div>
                              <div className="font-bold">{player.matches}</div>
                            </div>
                            <div className="bg-gray-50 p-2 rounded">
                              <div className="text-xs text-gray-500">Голы</div>
                              <div className="font-bold">{player.goals}</div>
                            </div>
                            <div className="bg-gray-50 p-2 rounded">
                              <div className="text-xs text-gray-500">Передачи</div>
                              <div className="font-bold">{player.assists}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Selected player details */}
              {selectedPlayer && (
                <div className="mt-12 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="p-6 border-b border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900">Информация об игроке</h2>
                  </div>
                  
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 relative">
                      <img 
                        src={selectedPlayer.image} 
                        alt={selectedPlayer.name} 
                        className="w-full h-full object-cover aspect-square md:aspect-auto"
                      />
                      <div className="absolute top-4 left-4 bg-fc-green text-white w-12 h-12 flex items-center justify-center rounded-full font-bold text-2xl">
                        {selectedPlayer.number}
                      </div>
                    </div>
                    
                    <div className="md:w-2/3 p-6">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                        <div>
                          <div className="inline-block px-3 py-1 bg-fc-green/10 text-fc-green rounded-full text-sm font-medium mb-2">
                            {selectedPlayer.position}
                          </div>
                          <h3 className="text-2xl font-bold mb-1">{selectedPlayer.name}</h3>
                          <div className="flex items-center text-gray-500">
                            <Flag size={16} className="mr-1" />
                            <span>{selectedPlayer.nationality}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="text-xs text-gray-500 mb-1">Дата рождения</div>
                          <div className="font-medium flex items-center">
                            <Calendar size={16} className="mr-1 text-fc-green" />
                            {selectedPlayer.birthDate}
                          </div>
                        </div>
                        
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="text-xs text-gray-500 mb-1">Рост</div>
                          <div className="font-medium">{selectedPlayer.height} см</div>
                        </div>
                        
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="text-xs text-gray-500 mb-1">Вес</div>
                          <div className="font-medium">{selectedPlayer.weight} кг</div>
                        </div>
                        
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="text-xs text-gray-500 mb-1">Матчи</div>
                          <div className="font-medium">{selectedPlayer.matches}</div>
                        </div>
                      </div>
                      
                      <h4 className="text-lg font-bold mb-4">Статистика</h4>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="border border-gray-100 p-4 rounded-lg text-center">
                          <div className="text-3xl font-bold text-fc-green mb-1">{selectedPlayer.goals}</div>
                          <div className="text-xs text-gray-500">Голы</div>
                        </div>
                        
                        <div className="border border-gray-100 p-4 rounded-lg text-center">
                          <div className="text-3xl font-bold text-fc-green mb-1">{selectedPlayer.assists}</div>
                          <div className="text-xs text-gray-500">Передачи</div>
                        </div>
                        
                        <div className="border border-gray-100 p-4 rounded-lg text-center">
                          <div className="text-3xl font-bold text-fc-yellow mb-1">{selectedPlayer.yellowCards}</div>
                          <div className="text-xs text-gray-500">Жёлтые карточки</div>
                        </div>
                        
                        <div className="border border-gray-100 p-4 rounded-lg text-center">
                          <div className="text-3xl font-bold text-fc-red mb-1">{selectedPlayer.redCards}</div>
                          <div className="text-xs text-gray-500">Красные карточки</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
          
          {activeTab === 'staff' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {staff.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 flex card-hover"
                >
                  <div className="w-1/3 relative">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover aspect-square"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/20 to-transparent"></div>
                  </div>
                  
                  <div className="w-2/3 p-6">
                    <div className="inline-block px-3 py-1 bg-fc-green/10 text-fc-green rounded-full text-sm font-medium mb-2">
                      {member.role}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{member.name}</h3>
                    
                    <div className="flex items-center text-gray-500">
                      <Calendar size={16} className="mr-1" />
                      <span>В клубе с {member.since} года</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Team;
