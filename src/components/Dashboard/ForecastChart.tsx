import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const mockData = [
  { day: "Lun", temperature: 18, humidity: 65, rainfall: 0 },
  { day: "Mar", temperature: 20, humidity: 70, rainfall: 2 },
  { day: "Mer", temperature: 22, humidity: 60, rainfall: 0 },
  { day: "Jeu", temperature: 19, humidity: 75, rainfall: 5 },
  { day: "Ven", temperature: 21, humidity: 68, rainfall: 1 },
  { day: "Sam", temperature: 23, humidity: 62, rainfall: 0 },
  { day: "Dim", temperature: 24, humidity: 58, rainfall: 0 },
];

export const ForecastChart = () => {
  return (
    <Card className="p-6 border shadow-soft">
      <h3 className="text-lg font-semibold mb-4 text-card-foreground">
        Historique et prévisions 7 jours
      </h3>
      
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={mockData}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="day" 
            stroke="hsl(var(--muted-foreground))"
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            style={{ fontSize: '12px' }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
            }}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="temperature" 
            stroke="hsl(var(--primary))" 
            name="Température (°C)"
            strokeWidth={2}
          />
          <Line 
            type="monotone" 
            dataKey="humidity" 
            stroke="hsl(var(--secondary))" 
            name="Humidité (%)"
            strokeWidth={2}
          />
          <Line 
            type="monotone" 
            dataKey="rainfall" 
            stroke="hsl(var(--warning))" 
            name="Pluie (mm)"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};
