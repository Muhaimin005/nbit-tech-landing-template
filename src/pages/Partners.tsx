import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building, Handshake, Trophy, Users } from "lucide-react";

const Partners = () => {
  const partnerCategories = [
    {
      title: "Technology Partners",
      icon: Building,
      description: "Leading technology vendors and platforms we integrate with",
      partners: [
        { name: "Microsoft Azure", type: "Cloud Platform", tier: "Gold" },
        { name: "Amazon AWS", type: "Cloud Services", tier: "Advanced" },
        { name: "Google Cloud", type: "AI & Analytics", tier: "Premier" },
        { name: "Salesforce", type: "CRM Solutions", tier: "Platinum" }
      ]
    },
    {
      title: "Integration Partners",
      icon: Handshake,
      description: "Strategic partnerships for seamless service delivery",
      partners: [
        { name: "Oracle", type: "Database Solutions", tier: "Gold" },
        { name: "IBM", type: "Enterprise Software", tier: "Business" },
        { name: "SAP", type: "ERP Systems", tier: "Silver" },
        { name: "Adobe", type: "Creative Solutions", tier: "Solution" }
      ]
    },
    {
      title: "Certified Partners",
      icon: Trophy,
      description: "Industry certifications and compliance partnerships",
      partners: [
        { name: "ISO 27001", type: "Security Standard", tier: "Certified" },
        { name: "SOC 2", type: "Compliance", tier: "Type II" },
        { name: "GDPR", type: "Data Protection", tier: "Compliant" },
        { name: "PCI DSS", type: "Payment Security", tier: "Level 1" }
      ]
    }
  ];

  const benefits = [
    {
      title: "Enhanced Capabilities",
      description: "Access to cutting-edge technologies and platforms through our partner ecosystem."
    },
    {
      title: "Faster Implementation",
      description: "Pre-validated integrations and proven methodologies reduce project timelines."
    },
    {
      title: "Cost Efficiency",
      description: "Leverage partner discounts and bundled solutions for better value."
    },
    {
      title: "Ongoing Support",
      description: "Combined expertise from our team and partners ensures comprehensive support."
    }
  ];

  const getTierColor = (tier: string) => {
    switch (tier.toLowerCase()) {
      case "platinum":
      case "premier":
        return "bg-purple-100 text-purple-800";
      case "gold":
      case "advanced":
        return "bg-yellow-100 text-yellow-800";
      case "silver":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">Our Partners</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strategic partnerships with industry leaders enable us to deliver 
            comprehensive solutions and exceptional value to our clients.
          </p>
        </div>

        {/* Partnership Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center shadow-tech bg-gradient-card">
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Technology Partners</div>
            </CardContent>
          </Card>
          <Card className="text-center shadow-tech bg-gradient-card">
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-primary mb-2">15</div>
              <div className="text-muted-foreground">Certifications</div>
            </CardContent>
          </Card>
          <Card className="text-center shadow-tech bg-gradient-card">
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-primary mb-2">5</div>
              <div className="text-muted-foreground">Years Average Partnership</div>
            </CardContent>
          </Card>
          <Card className="text-center shadow-tech bg-gradient-card">
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Partner Satisfaction</div>
            </CardContent>
          </Card>
        </div>

        {/* Partner Categories */}
        <div className="space-y-12 mb-16">
          {partnerCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-tech rounded-lg flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-foreground">{category.title}</h2>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.partners.map((partner, partnerIndex) => (
                    <Card key={partnerIndex} className="shadow-tech hover:shadow-glow transition-all duration-300 bg-gradient-card">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{partner.name}</CardTitle>
                          <Badge className={getTierColor(partner.tier)}>{partner.tier}</Badge>
                        </div>
                        <CardDescription>{partner.type}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Partnership Benefits */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Partnership Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="shadow-tech bg-gradient-card">
                <CardHeader>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  <CardDescription className="text-lg">{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Become a Partner CTA */}
        <div className="text-center bg-gradient-tech rounded-2xl p-12 shadow-tech">
          <Users className="h-16 w-16 text-primary-foreground mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Become Our Partner
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join our growing partner ecosystem and expand your business opportunities 
            through strategic collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="shadow-glow">
              Partnership Inquiry
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Download Partner Kit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;