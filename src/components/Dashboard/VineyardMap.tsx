import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

interface VineyardMapProps {
  location: string;
}

export const VineyardMap = ({ location }: VineyardMapProps) => {
  return (
    <Card className="p-6 border shadow-soft">
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold text-card-foreground">Vos parcelles</h3>
      </div>
      
      <div className="aspect-video rounded-lg bg-muted flex items-center justify-center relative overflow-hidden">
        {/* Placeholder for interactive map - will be replaced with actual map library */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
        <div className="relative z-10 text-center p-6">
          <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
          <p className="text-card-foreground font-medium">{location}</p>
          <p className="text-sm text-muted-foreground mt-2">
            Carte interactive à venir
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-success" />
          <span className="text-muted-foreground">Risque normal</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-warning" />
          <span className="text-muted-foreground">Alerte modérée</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-destructive" />
          <span className="text-muted-foreground">Risque élevé</span>
        </div>
      </div>
    </Card>
  );
};
