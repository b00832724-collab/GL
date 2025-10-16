import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Grape, Shield, CloudRain, ThermometerSnowflake, Flame } from "lucide-react";
import vineyardHero from "@/assets/vineyard-hero.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Grape className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">GreenLink</h1>
          </div>
          <Link to="/auth">
            <Button variant="outline">Se connecter</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={vineyardHero} 
            alt="Vignoble au lever du soleil" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background/90" />
        </div>
        
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Protégez vos vignes du gel, des maladies et des incendies
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Le tableau de bord climatique intelligent des vignerons
            </p>
            <Link to="/auth">
              <Button size="lg" className="text-lg px-8 py-6 shadow-medium hover:shadow-lg transition-all">
                Commencer gratuitement
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Surveillez tous les risques en temps réel
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-all border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <ThermometerSnowflake className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-card-foreground">Gel</h4>
              <p className="text-muted-foreground">
                Alertes précoces pour protéger vos vignes des gelées printanières
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-all border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <CloudRain className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-card-foreground">Grêle</h4>
              <p className="text-muted-foreground">
                Prévisions précises des risques de grêle pour vos parcelles
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-all border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-card-foreground">Maladies</h4>
              <p className="text-muted-foreground">
                Détection précoce des conditions favorables aux maladies de la vigne
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-all border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Flame className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-card-foreground">Incendies</h4>
              <p className="text-muted-foreground">
                Surveillance des risques d'incendie et alertes régionales
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à protéger vos vignes ?
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Rejoignez les vignerons qui utilisent GreenLink pour anticiper et prévenir les risques climatiques
          </p>
          <Link to="/auth">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Démarrer maintenant
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            GreenLink – Connecter les vignerons à la nature, pour protéger chaque récolte.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
