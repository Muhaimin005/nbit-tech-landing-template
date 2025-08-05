import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Globe, Cpu, Shield, Zap, Users, Database, Smartphone } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored software solutions built to meet your specific business requirements using cutting-edge technologies.",
      features: ["Web Applications", "Desktop Software", "API Development", "System Integration"]
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites and web applications that deliver exceptional user experiences.",
      features: ["Responsive Design", "E-commerce Solutions", "CMS Development", "Progressive Web Apps"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android platforms.",
      features: ["iOS Development", "Android Development", "React Native", "Flutter"]
    },
    {
      icon: Cpu,
      title: "Hardware Integration",
      description: "IoT solutions and embedded systems that connect the physical and digital worlds.",
      features: ["IoT Development", "Embedded Systems", "Sensor Integration", "Industrial Automation"]
    },
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description: "Comprehensive security services to protect your digital assets and infrastructure.",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Security Training"]
    },
    {
      icon: Zap,
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and migration services for modern businesses.",
      features: ["Cloud Migration", "DevOps", "Infrastructure as Code", "Monitoring"]
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics solutions.",
      features: ["Business Intelligence", "Data Warehousing", "Machine Learning", "Reporting"]
    },
    {
      icon: Users,
      title: "IT Consulting",
      description: "Strategic technology consulting to guide your digital transformation journey.",
      features: ["Technology Strategy", "Digital Transformation", "Process Optimization", "Training"]
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth 
            and digital transformation initiatives.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="shadow-tech hover:shadow-glow transition-all duration-300 bg-gradient-card">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-tech rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-lg">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-tech rounded-2xl p-12 shadow-tech">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Our team of experts is ready to discuss your specific requirements and 
            design a tailored solution for your business.
          </p>
          <Button size="lg" variant="secondary" className="shadow-glow">
            Get a Free Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;