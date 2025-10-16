import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type RiskLevel = "low" | "moderate" | "high";

interface RiskCardProps {
  title: string;
  icon: LucideIcon;
  level: RiskLevel;
  lastDetection: string;
  trend: "up" | "down" | "stable";
}

const riskStyles: Record<RiskLevel, { bg: string; text: string; border: string }> = {
  low: {
    bg: "bg-success/10",
    text: "text-success",
    border: "border-success/30",
  },
  moderate: {
    bg: "bg-warning/10",
    text: "text-warning",
    border: "border-warning/30",
  },
  high: {
    bg: "bg-destructive/10",
    text: "text-destructive",
    border: "border-destructive/30",
  },
};

const riskLabels: Record<RiskLevel, string> = {
  low: "Faible",
  moderate: "Modéré",
  high: "Élevé",
};

const trendIcons = {
  up: "↑",
  down: "↓",
  stable: "→",
};

export const RiskCard = ({ title, icon: Icon, level, lastDetection, trend }: RiskCardProps) => {
  const styles = riskStyles[level];
  const isHighRisk = level === "high";

  return (
    <Card
      className={cn(
        "p-6 border-2 transition-all hover:shadow-medium",
        styles.border,
        isHighRisk && "animate-pulse-alert shadow-alert"
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center", styles.bg)}>
          <Icon className={cn("w-6 h-6", styles.text)} />
        </div>
        <div className={cn("px-3 py-1 rounded-full text-sm font-medium", styles.bg, styles.text)}>
          {riskLabels[level]}
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-2 text-card-foreground">{title}</h3>

      <div className="space-y-2 text-sm text-muted-foreground">
        <div className="flex items-center justify-between">
          <span>Dernière détection :</span>
          <span className="font-medium">{lastDetection}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Tendance :</span>
          <span className={cn("font-medium", styles.text)}>
            {trendIcons[trend]} {trend === "up" ? "Hausse" : trend === "down" ? "Baisse" : "Stable"}
          </span>
        </div>
      </div>
    </Card>
  );
};
