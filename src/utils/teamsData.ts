
import { Team } from '@/types/team';

// In a production environment, this would be fetched from a database
let teams: Team[] = [
  {
    id: 'gudauta',
    name: 'ФК Гудаута',
    shortName: 'Гудаута',
    logo: 'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    primaryColor: '#2e7d32',
    secondaryColor: '#ffeb3b',
    description: 'Футбольный клуб Гудаута - профессиональная команда с богатой историей и традициями.'
  },
  {
    id: 'gudauta-school',
    name: 'СШ Гудаута',
    shortName: 'СШ Гудаута',
    logo: 'https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    primaryColor: '#0277bd',
    secondaryColor: '#ff9800',
    description: 'Спортивная школа Гудаута - кузница молодых футбольных талантов.'
  }
];

// Get all teams
export const getTeamsData = (): Team[] => {
  return [...teams];
};

// Get a specific team by ID
export const getTeamById = (id: string): Team | undefined => {
  return teams.find(team => team.id === id);
};

// Update a team
export const updateTeam = (updatedTeam: Team): void => {
  teams = teams.map(team => 
    team.id === updatedTeam.id ? updatedTeam : team
  );
};
