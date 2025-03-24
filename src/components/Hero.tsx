
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-r from-fc-green/90 to-fc-darkGreen/80 z-10"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1508098682722-e99c643e7f76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      ></div>
      
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="animate-slide-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            ФК <span className="text-fc-yellow">СИБИРЬ</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Футбольный клуб с богатой историей и традициями
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Link 
              to="/matches" 
              className="btn-primary bg-fc-yellow hover:bg-fc-yellow/90 text-fc-darkGreen"
            >
              Ближайшие матчи
              <ArrowRight size={18} />
            </Link>
            
            <Link 
              to="/tournaments" 
              className="btn-secondary bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-fc-green"
            >
              Турнирные таблицы
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
    </div>
  );
};

export default Hero;
