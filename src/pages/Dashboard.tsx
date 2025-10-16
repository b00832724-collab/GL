import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Grape, Settings, Clock, ThermometerSnowflake, CloudRain, Shield, Flame, Thermometer, Droplets, Wind, CloudDrizzle } from "lucide-react";
import { RiskCard } from "@/components/Dashboard/RiskCard";
import { WeatherCard } from "@/components/Dashboard/WeatherCard";
import { VineyardMap } from "@/components/Dashboard/VineyardMap";
import { ForecastChart } from "@/components/Dashboard/ForecastChart";
import { toast } from "sonner";

const Dashboard = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/auth");
        return;
      }

      // Fetch profile
      const { data: profileData, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", session.user.id)
        .single();

      if (error) {
        console.error("Error fetching profile:", error);
        toast.error("Erreur lors du chargement du profil");
      } else {
        setProfile(profileData);
      }
      
      setLoading(false);
    };

    checkAuth();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/auth");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Grape className="w-12 h-12 text-primary mx-auto mb-4 animate-pulse" />
          <p className="text-muted-foreground">Chargement...</p>
        </div>
      </div>
    );
  }

  const currentDate = new Date().toLocaleDateString("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Grape className="w-8 h-8 text-primary" />
              <div>
                <h1 className="text-xl font-bold text-foreground">{profile?.estate_name}</h1>
                <p className="text-sm text-muted-foreground">{profile?.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span className="hidden md:inline">{currentDate}</span>
              </div>
              <Button variant="outline" size="sm" onClick={() => navigate("/pricing")}>
                <Settings className="w-4 h-4 mr-2" />
                Mon abonnement
              </Button>
              <Button variant="outline" size="sm" onClick={handleSignOut}>
                Déconnexion
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8 animate-fade-in">
        {/* Welcome Banner */}
        <Card className="p-6 bg-gradient-card border shadow-medium">
          <h2 className="text-2xl font-bold text-card-foreground mb-2">
            Bienvenue, {profile?.first_name} ! 🍇
          </h2>
          <p className="text-muted-foreground">
            Votre tableau de bord climatique intelligent est prêt. Surveillez vos vignes en temps réel.
          </p>
        </Card>

        {/* Map Section */}
        <VineyardMap location={profile?.location || "Localisation non définie"} />

        {/* Risk Cards Grid */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-foreground">Alertes et risques</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <RiskCard
              title="Gel"
              icon={ThermometerSnowflake}
              level="low"
              lastDetection="Il y a 2j"
              trend="down"
            />
            <RiskCard
              title="Grêle"
              icon={CloudRain}
              level="moderate"
              lastDetection="Aujourd'hui"
              trend="up"
            />
            <RiskCard
              title="Maladies"
              icon={Shield}
              level="low"
              lastDetection="Il y a 3j"
              trend="stable"
            />
            <RiskCard
              title="Incendies"
              icon={Flame}
              level="moderate"
              lastDetection="Il y a 1j"
              trend="stable"
            />
          </div>
        </div>

        {/* Current Conditions */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-foreground">Conditions actuelles</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <WeatherCard
              title="Température"
              value={22}
              unit="°C"
              icon={Thermometer}
              description="Conditions optimales"
            />
            <WeatherCard
              title="Humidité"
              value={68}
              unit="%"
              icon={Droplets}
              description="Niveau normal"
            />
            <WeatherCard
              title="Vent"
              value={12}
              unit="km/h"
              icon={Wind}
              description="Brise légère"
            />
            <WeatherCard
              title="Pluie"
              value={0}
              unit="mm"
              icon={CloudDrizzle}
              description="Aucune précipitation"
            />
          </div>
        </div>

        {/* Forecast Chart */}
        <ForecastChart />

        {/* Regional Info */}
        <Card className="p-6 border shadow-soft">
          <h3 className="text-lg font-semibold mb-4 text-card-foreground">
            Informations régionales
          </h3>
          <div className="space-y-3">
            <div className="p-3 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-card-foreground">Alerte préfectorale :</span> Aucune alerte en cours
              </p>
            </div>
            <div className="p-3 bg-primary/5 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-card-foreground">Prochainement :</span> Alertes SMS en temps réel, 
                vue multi-parcelles, recommandations agronomiques
              </p>
            </div>
          </div>
        </Card>
      </main>

      {/* Footer */}
      <footer className="py-6 bg-card border-t border-border mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            GreenLink – Connecter les vignerons à la nature, pour protéger chaque récolte.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
