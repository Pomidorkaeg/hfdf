
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Save, X } from 'lucide-react';
import { Player } from '@/types/player';
import { getTeamsData } from '@/utils/teamsData';

interface PlayerEditorProps {
  player: Player;
  onSave: (player: Player) => void;
  onCancel: () => void;
}

const PlayerEditor: React.FC<PlayerEditorProps> = ({ player, onSave, onCancel }) => {
  const [formData, setFormData] = useState<Player>({ ...player });
  const teams = getTeamsData();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Handle numeric fields
    if (['number', 'height', 'weight', 'matches', 'goals', 'assists', 'yellowCards', 'redCards'].includes(name)) {
      setFormData({
        ...formData,
        [name]: parseInt(value, 10) || 0
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column - Basic Info */}
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">ФИО игрока</Label>
            <Input 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="position">Позиция</Label>
            <select 
              id="position" 
              name="position" 
              value={formData.position} 
              onChange={handleChange}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              required
            >
              <option value="Вратарь">Вратарь</option>
              <option value="Защитник">Защитник</option>
              <option value="Полузащитник">Полузащитник</option>
              <option value="Нападающий">Нападающий</option>
            </select>
          </div>
          
          <div>
            <Label htmlFor="number">Номер</Label>
            <Input 
              id="number" 
              name="number" 
              type="number" 
              value={formData.number} 
              onChange={handleChange}
              min="1"
              max="99"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="nationality">Национальность</Label>
            <Input 
              id="nationality" 
              name="nationality" 
              value={formData.nationality} 
              onChange={handleChange}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="birthDate">Дата рождения</Label>
            <Input 
              id="birthDate" 
              name="birthDate" 
              value={formData.birthDate} 
              onChange={handleChange}
              placeholder="ДД.ММ.ГГГГ"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="teamId">Команда</Label>
            <select 
              id="teamId" 
              name="teamId" 
              value={formData.teamId} 
              onChange={handleChange}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              required
            >
              {teams.map(team => (
                <option key={team.id} value={team.id}>{team.name}</option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Right Column - Physical & Statistics */}
        <div className="space-y-4">
          <div>
            <Label htmlFor="image">URL фото</Label>
            <Input 
              id="image" 
              name="image" 
              value={formData.image} 
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="height">Рост (см)</Label>
              <Input 
                id="height" 
                name="height" 
                type="number" 
                value={formData.height} 
                onChange={handleChange}
                min="150"
                max="220"
                required
              />
            </div>
            <div>
              <Label htmlFor="weight">Вес (кг)</Label>
              <Input 
                id="weight" 
                name="weight" 
                type="number" 
                value={formData.weight} 
                onChange={handleChange}
                min="50"
                max="120"
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="matches">Матчи</Label>
              <Input 
                id="matches" 
                name="matches" 
                type="number" 
                value={formData.matches} 
                onChange={handleChange}
                min="0"
                required
              />
            </div>
            <div>
              <Label htmlFor="goals">Голы</Label>
              <Input 
                id="goals" 
                name="goals" 
                type="number" 
                value={formData.goals} 
                onChange={handleChange}
                min="0"
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="assists">Передачи</Label>
              <Input 
                id="assists" 
                name="assists" 
                type="number" 
                value={formData.assists} 
                onChange={handleChange}
                min="0"
                required
              />
            </div>
            <div>
              <Label htmlFor="yellowCards">Жёлтые карточки</Label>
              <Input 
                id="yellowCards" 
                name="yellowCards" 
                type="number" 
                value={formData.yellowCards} 
                onChange={handleChange}
                min="0"
                required
              />
            </div>
            <div>
              <Label htmlFor="redCards">Красные карточки</Label>
              <Input 
                id="redCards" 
                name="redCards" 
                type="number" 
                value={formData.redCards} 
                onChange={handleChange}
                min="0"
                required
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end space-x-2 pt-4 border-t border-gray-200">
        <Button variant="outline" type="button" onClick={onCancel}>
          <X className="mr-2 h-4 w-4" /> Отмена
        </Button>
        <Button type="submit" className="bg-fc-green hover:bg-fc-darkGreen">
          <Save className="mr-2 h-4 w-4" /> Сохранить
        </Button>
      </div>
    </form>
  );
};

export default PlayerEditor;
