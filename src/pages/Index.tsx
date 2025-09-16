import HeroSection from "@/components/ui/hero-section";
import FeaturesSection from "@/components/features/features-section";
import UserTypeSelector from "@/components/auth/user-type-selector";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Index = () => {
  const [showAuth, setShowAuth] = useState(false);
  const [selectedUserType, setSelectedUserType] = useState<'patient' | 'doctor' | 'pharmacist' | null>(null);

  const handleUserTypeSelect = (type: 'patient' | 'doctor' | 'pharmacist') => {
    setSelectedUserType(type);
    // In a real app, this would redirect to the specific authentication flow
    console.log(`Selected user type: ${type}`);
  };

  const handleGetStarted = () => {
    setShowAuth(true);
  };

  if (showAuth && !selectedUserType) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto py-8">
          <Button 
            variant="ghost" 
            onClick={() => setShowAuth(false)}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <UserTypeSelector onSelectType={handleUserTypeSelect} />
        </div>
      </div>
    );
  }

  if (selectedUserType) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-6 p-8">
          <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto">
            <span className="text-2xl font-bold text-white">
              {selectedUserType === 'patient' ? 'P' : selectedUserType === 'doctor' ? 'D' : 'Ph'}
            </span>
          </div>
          <h2 className="text-3xl font-bold">Welcome, {selectedUserType}!</h2>
          <p className="text-muted-foreground max-w-md">
            To complete registration and access all features, connect your project to Supabase for secure authentication, verification, and data management.
          </p>
          <div className="space-y-3">
            <Button onClick={() => setShowAuth(false)}>
              Return to Homepage
            </Button>
            <p className="text-sm text-muted-foreground">
              Backend integration required for full functionality
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <HeroSection onGetStarted={handleGetStarted} />
      <FeaturesSection />
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl font-bold">
              Ready to Transform Your Healthcare Experience?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of healthcare professionals and patients already using our secure platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow transition-all duration-300"
              >
                Get Started Now
              </Button>
              <Button variant="outline" size="lg">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
