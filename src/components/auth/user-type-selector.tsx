import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Stethoscope, Pill } from "lucide-react";

interface UserTypeSelectorProps {
  onSelectType: (type: 'patient' | 'doctor' | 'pharmacist') => void;
}

const UserTypeSelector = ({ onSelectType }: UserTypeSelectorProps) => {
  const userTypes = [
    {
      type: 'patient' as const,
      title: 'Patient',
      description: 'Access your medical records, prescriptions, and schedule appointments',
      icon: User,
      color: 'from-primary to-primary-glow',
      verification: 'Aadhaar Verified'
    },
    {
      type: 'doctor' as const,
      title: 'Doctor',
      description: 'Manage patient records, prescriptions, and medical consultations',
      icon: Stethoscope,
      color: 'from-blue-500 to-blue-600',
      verification: 'IMR Licensed'
    },
    {
      type: 'pharmacist' as const,
      title: 'Pharmacist',
      description: 'Manage inventory, process prescriptions, and track medications',
      icon: Pill,
      color: 'from-secondary to-green-500',
      verification: 'PMC Licensed'
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Choose Your Role</h2>
        <p className="text-muted-foreground">Select how you'll be using our healthcare platform</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {userTypes.map((userType) => (
          <Card 
            key={userType.type}
            className="relative p-6 hover:shadow-medical transition-all duration-300 cursor-pointer border-2 hover:border-primary/20 group"
            onClick={() => onSelectType(userType.type)}
          >
            <div className="text-center space-y-4">
              <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${userType.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <userType.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">{userType.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {userType.description}
                </p>
                <div className="inline-block bg-accent px-3 py-1 rounded-full">
                  <span className="text-xs font-medium text-accent-foreground">
                    {userType.verification}
                  </span>
                </div>
              </div>
              
              <Button 
                className="w-full mt-4"
                variant={userType.type === 'patient' ? 'default' : 'outline'}
              >
                Continue as {userType.title}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UserTypeSelector;