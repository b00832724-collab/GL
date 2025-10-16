import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Grape, Check, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const Pricing = () => {
  const navigate = useNavigate();

  const handleSubscribe = (plan: string) => {
    // Stripe integration will be added here
    toast.info("L'intégration Stripe sera bientôt disponible");
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Grape className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">GreenLink</h1>
          </div>
          <Button variant="outline" onClick={() => navigate("/dashboard")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au dashboard
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Choisissez votre formule
            </h2>
            <p className="text-xl text-muted-foreground">
              Protégez vos vignes avec GreenLink
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Free Trial */}
            <Card className="border-2 shadow-soft hover:shadow-medium transition-all">
              <CardHeader>
                <CardTitle>Essai gratuit</CardTitle>
                <CardDescription>Découvrez GreenLink pendant 7 jours</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">0€</span>
                  <span className="text-muted-foreground ml-2">/ 7 jours</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-success" />
                    <span className="text-sm">1 parcelle</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-success" />
                    <span className="text-sm">Alertes gel, grêle, maladies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-success" />
                    <span className="text-sm">Prévisions 7 jours</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-success" />
                    <span className="text-sm">Données en temps réel</span>
                  </li>
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => navigate("/auth")}
                >
                  Déjà inclus
                </Button>
              </CardContent>
            </Card>

            {/* Monthly Plan */}
            <Card className="border-2 border-primary shadow-medium hover:shadow-lg transition-all relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                Populaire
              </div>
              <CardHeader>
                <CardTitle>Mensuel</CardTitle>
                <CardDescription>Pour une parcelle viticole</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">19€</span>
                  <span className="text-muted-foreground ml-2">/ mois</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-success" />
                    <span className="text-sm">1 parcelle</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-success" />
                    <span className="text-sm">Toutes les alertes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-success" />
                    <span className="text-sm">Prévisions étendues</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-success" />
                    <span className="text-sm">Historique complet</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-success" />
                    <span className="text-sm">Support email</span>
                  </li>
                </ul>
                <Button 
                  className="w-full"
                  onClick={() => handleSubscribe("monthly")}
                >
                  S'abonner
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="border-2 border-secondary shadow-soft hover:shadow-medium transition-all">
              <CardHeader>
                <CardTitle>Pro</CardTitle>
                <CardDescription>Pour les professionnels exigeants</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">29€</span>
                  <span className="text-muted-foreground ml-2">/ mois</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-success" />
                    <span className="text-sm">Parcelles illimitées</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-success" />
                    <span className="text-sm">Alertes SMS en temps réel</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-success" />
                    <span className="text-sm">Modèles maladies avancés</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-success" />
                    <span className="text-sm">Recommandations IA</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-success" />
                    <span className="text-sm">Support prioritaire</span>
                  </li>
                </ul>
                <Button 
                  variant="secondary"
                  className="w-full"
                  onClick={() => handleSubscribe("pro")}
                >
                  S'abonner Pro
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="p-6 bg-gradient-card border shadow-soft">
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                Paiement sécurisé avec Stripe
              </h3>
              <p className="text-muted-foreground">
                Vos informations de paiement sont protégées et sécurisées. 
                Annulez à tout moment depuis votre tableau de bord.
              </p>
            </Card>
          </div>
        </div>
      </main>

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

export default Pricing;
