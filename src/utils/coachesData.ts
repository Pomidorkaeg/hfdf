
import { Coach } from '@/types/coach';

// In a production environment, this would be fetched from a database
let coaches: Coach[] = [
  {
    id: '1',
    name: 'Сергей Павлович Иванов',
    role: 'Главный тренер',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    since: '2021',
    experience: 15,
    biography: 'Опытный специалист с многолетним стажем работы в профессиональных командах.',
    teamId: 'gudauta'
  },
  {
    id: '2',
    name: 'Алексей Николаевич Петров',
    role: 'Ассистент тренера',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    since: '2022',
    experience: 8,
    biography: 'Специализируется на тактической подготовке и анализе игр соперников.',
    teamId: 'gudauta'
  },
  {
    id: '3',
    name: 'Дмитрий Александрович Сидоров',
    role: 'Тренер вратарей',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    since: '2022',
    experience: 10,
    biography: 'Бывший профессиональный вратарь, посвятивший себя тренерской работе.',
    teamId: 'gudauta'
  },
  {
    id: '4',
    name: 'Игорь Владимирович Кузнецов',
    role: 'Физиотерапевт',
    image: 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
    since: '2023',
    experience: 7,
    biography: 'Специалист по физической подготовке и реабилитации после травм.',
    teamId: 'gudauta'
  },
  {
    id: '5',
    name: 'Михаил Семенович Федоров',
    role: 'Главный тренер',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    since: '2022',
    experience: 12,
    biography: 'Специализируется на работе с молодыми футболистами и их развитии.',
    teamId: 'gudauta-school'
  },
  {
    id: '6',
    name: 'Андрей Петрович Смирнов',
    role: 'Тренер юношеской команды',
    image: 'https://images.unsplash.com/photo-1534126416832-a88fdf2911c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    since: '2022',
    experience: 5,
    biography: 'Молодой и перспективный тренер с современным подходом к тренировкам.',
    teamId: 'gudauta-school'
  }
];

// Get all coaches
export const getCoachesData = (): Coach[] => {
  return [...coaches];
};

// Get coaches by team ID
export const getCoachesByTeam = (teamId: string): Coach[] => {
  return coaches.filter(coach => coach.teamId === teamId);
};

// Get a specific coach by ID
export const getCoachById = (id: string): Coach | undefined => {
  return coaches.find(coach => coach.id === id);
};

// Update a coach
export const updateCoach = (updatedCoach: Coach): void => {
  coaches = coaches.map(coach => 
    coach.id === updatedCoach.id ? updatedCoach : coach
  );
};

// Delete a coach
export const deleteCoach = (id: string): void => {
  coaches = coaches.filter(coach => coach.id !== id);
};

// Create a new coach
export const createCoach = (newCoach: Coach): void => {
  // Ensure we don't duplicate IDs
  if (coaches.some(coach => coach.id === newCoach.id)) {
    throw new Error('Coach with this ID already exists');
  }
  coaches.push(newCoach);
};
