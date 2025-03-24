
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Users, Trophy, Settings, LogOut, Users2, Shield } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Admin Header */}
      <header className="bg-gradient-to-r from-fc-darkGreen to-emerald-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Shield className="w-8 h-8 text-white mr-2" />
              <span className="text-white font-bold text-xl">ФК Гудаута Админ</span>
            </div>
            <div>
              <Link 
                to="/" 
                className="text-white hover:text-gray-200 text-sm flex items-center bg-white/10 px-4 py-2 rounded-full transition-all hover:bg-white/20"
              >
                <span>Вернуться на сайт</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-72 bg-white shadow-lg rounded-tr-xl rounded-br-xl overflow-hidden m-4 mr-0">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-lg font-bold text-gray-800">Панель управления</h2>
          </div>
          <nav className="p-4">
            <div className="mb-6">
              <h3 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-3 pl-4">Основное</h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    to="/admin"
                    className="block px-4 py-2.5 rounded-lg hover:bg-gradient-to-r hover:from-fc-green/10 hover:to-emerald-400/10 text-gray-700 font-medium flex items-center transition-all"
                  >
                    <Settings className="mr-3 h-5 w-5 text-fc-green" />
                    Обзор
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/teams"
                    className="block px-4 py-2.5 rounded-lg hover:bg-gradient-to-r hover:from-fc-green/10 hover:to-emerald-400/10 text-gray-700 font-medium flex items-center transition-all"
                  >
                    <Shield className="mr-3 h-5 w-5 text-fc-green" />
                    Команды
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-3 pl-4">ФК Гудаута</h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    to="/admin/players?team=gudauta"
                    className="block px-4 py-2.5 rounded-lg hover:bg-gradient-to-r hover:from-fc-green/10 hover:to-emerald-400/10 text-gray-700 font-medium flex items-center transition-all"
                  >
                    <Users className="mr-3 h-5 w-5 text-fc-green" />
                    Игроки
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/coaches?team=gudauta"
                    className="block px-4 py-2.5 rounded-lg hover:bg-gradient-to-r hover:from-fc-green/10 hover:to-emerald-400/10 text-gray-700 font-medium flex items-center transition-all"
                  >
                    <Users2 className="mr-3 h-5 w-5 text-fc-green" />
                    Тренеры
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-3 pl-4">СШ Гудаута</h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    to="/admin/players?team=gudauta-school"
                    className="block px-4 py-2.5 rounded-lg hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-blue-400/10 text-gray-700 font-medium flex items-center transition-all"
                  >
                    <Users className="mr-3 h-5 w-5 text-blue-500" />
                    Игроки школы
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/coaches?team=gudauta-school"
                    className="block px-4 py-2.5 rounded-lg hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-blue-400/10 text-gray-700 font-medium flex items-center transition-all"
                  >
                    <Users2 className="mr-3 h-5 w-5 text-blue-500" />
                    Тренеры школы
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-3 pl-4">Соревнования</h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    to="/admin/tournaments"
                    className="block px-4 py-2.5 rounded-lg hover:bg-gradient-to-r hover:from-amber-500/10 hover:to-amber-400/10 text-gray-700 font-medium flex items-center transition-all"
                  >
                    <Trophy className="mr-3 h-5 w-5 text-amber-500" />
                    Турниры
                  </Link>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-gray-200 mt-4">
              <button 
                className="w-full px-4 py-2.5 rounded-lg bg-gradient-to-r from-red-500/10 to-red-600/10 text-red-600 font-medium flex items-center hover:from-red-500/20 hover:to-red-600/20 transition-all"
                onClick={() => { alert('Выход из системы'); window.location.href = '/'; }}
              >
                <LogOut className="mr-3 h-5 w-5" />
                Выйти
              </button>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
