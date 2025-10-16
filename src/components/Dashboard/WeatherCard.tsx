import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface WeatherCardProps {
  title: string;
  value: string | number;
  unit: string;
  icon: LucideIcon;
  description?: string;
}

export const WeatherCard = ({ title, value, unit, icon: Icon, description }: WeatherCardProps) => {
  return (
    <Card className="p-4 border shadow-soft hover:shadow-medium transition-all">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1">
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold text-card-foreground">
            {value}
            <span className="text-base font-normal text-muted-foreground ml-1">{unit}</span>
          </p>
        </div>
      </div>
      {description && (
        <p className="text-xs text-muted-foreground mt-2">{description}</p>
      )}
    </Card>
  );
};
