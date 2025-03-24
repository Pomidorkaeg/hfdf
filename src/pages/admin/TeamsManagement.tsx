
import React, { useState } from 'react';
import { Edit2, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { getTeamsData, updateTeam } from '@/utils/teamsData';
import { Team } from '@/types/team';
import { toast } from '@/components/ui/use-toast';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TeamsManagement = () => {
  const [teams, setTeams] = useState<Team[]>(getTeamsData());
  const [editingTeamId, setEditingTeamId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Team | null>(null);
  
  const handleEditClick = (team: Team) => {
    setEditingTeamId(team.id);
    setFormData({ ...team });
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (formData) {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  
  const handleCancel = () => {
    setEditingTeamId(null);
    setFormData(null);
  };
  
  const handleSave = () => {
    if (formData) {
      try {
        updateTeam(formData);
        setTeams(teams.map(team => team.id === formData.id ? formData : team));
        toast({
          title: "Команда обновлена",
          description: "Информация о команде успешно обновлена",
        });
        setEditingTeamId(null);
        setFormData(null);
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Ошибка",
          description: "Не удалось сохранить изменения",
        });
      }
    }
  };
  
  return (
    <div>
      <Card className="mb-8 bg-gradient-to-br from-white to-gray-50">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Shield className="h-5 w-5 mr-2 text-fc-green" />
            Управление командами
          </CardTitle>
          <CardDescription>
            Настройка информации о командах клуба
          </CardDescription>
        </CardHeader>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {teams.map((team) => (
          <Card key={team.id} className="overflow-hidden">
            {editingTeamId === team.id && formData ? (
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold">Редактирование команды</h3>
                  <div className="space-x-2">
                    <Button variant="outline" size="sm" onClick={handleCancel}>
                      Отмена
                    </Button>
                    <Button size="sm" onClick={handleSave}>
                      Сохранить
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Название команды</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="shortName">Краткое название</Label>
                    <Input 
                      id="shortName" 
                      name="shortName" 
                      value={formData.shortName} 
                      onChange={handleChange} 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="logo">URL логотипа</Label>
                    <Input 
                      id="logo" 
                      name="logo" 
                      value={formData.logo} 
                      onChange={handleChange} 
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="primaryColor">Основной цвет</Label>
                      <div className="flex items-center space-x-2">
                        <div 
                          className="w-6 h-6 rounded-full border"
                          style={{ backgroundColor: formData.primaryColor }}
                        ></div>
                        <Input 
                          id="primaryColor" 
                          name="primaryColor" 
                          value={formData.primaryColor} 
                          onChange={handleChange} 
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="secondaryColor">Дополнительный цвет</Label>
                      <div className="flex items-center space-x-2">
                        <div 
                          className="w-6 h-6 rounded-full border"
                          style={{ backgroundColor: formData.secondaryColor }}
                        ></div>
                        <Input 
                          id="secondaryColor" 
                          name="secondaryColor" 
                          value={formData.secondaryColor} 
                          onChange={handleChange} 
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="description">Описание</Label>
                    <Textarea 
                      id="description" 
                      name="description" 
                      value={formData.description} 
                      onChange={handleChange} 
                      rows={4}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="h-40 relative">
                  <div 
                    className="absolute inset-0 bg-gradient-to-r"
                    style={{ 
                      backgroundImage: `linear-gradient(to right, ${team.primaryColor}80, ${team.secondaryColor}80)`,
                      backgroundBlendMode: 'overlay'
                    }}
                  ></div>
                  <img 
                    src={team.logo} 
                    alt={team.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <h3 className="text-2xl font-bold text-white drop-shadow-md">
                      {team.name}
                    </h3>
                    <Button 
                      variant="secondary" 
                      size="sm" 
                      onClick={() => handleEditClick(team)}
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                    >
                      <Edit2 className="h-4 w-4 mr-1" /> Изменить
                    </Button>
                  </div>
                </div>
                
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div 
                      className="w-6 h-6 rounded-full"
                      style={{ backgroundColor: team.primaryColor }}
                    ></div>
                    <div 
                      className="w-6 h-6 rounded-full"
                      style={{ backgroundColor: team.secondaryColor }}
                    ></div>
                    <div className="text-sm text-gray-500">
                      Клубные цвета
                    </div>
                  </div>
                  
                  <p className="text-gray-600">
                    {team.description}
                  </p>
                </CardContent>
              </>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TeamsManagement;
