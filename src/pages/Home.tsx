import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Code, Cpu, Globe, Shield, Zap, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-tech.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-hero opacity-90"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
        </div>
        <div className="relative z-10 text-center text-primary-foreground max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-float">
            Innovating the Future
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Transforming businesses through cutting-edge technology solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="shadow-glow">
              <Link to="/services">
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/contact">
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-tech hover:shadow-glow transition-all duration-300 bg-gradient-card">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-tech rounded-lg flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle>Software Development</CardTitle>
                <CardDescription>
                  Custom software solutions built with modern technologies
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-tech hover:shadow-glow transition-all duration-300 bg-gradient-card">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-tech rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle>Web Solutions</CardTitle>
                <CardDescription>
                  Responsive web applications and enterprise platforms
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-tech hover:shadow-glow transition-all duration-300 bg-gradient-card">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-tech rounded-lg flex items-center justify-center mb-4">
                  <Cpu className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle>Hardware Integration</CardTitle>
                <CardDescription>
                  IoT devices and embedded systems development
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-tech hover:shadow-glow transition-all duration-300 bg-gradient-card">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-tech rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle>Cybersecurity</CardTitle>
                <CardDescription>
                  Comprehensive security solutions and consulting
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-tech hover:shadow-glow transition-all duration-300 bg-gradient-card">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-tech rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle>Cloud Services</CardTitle>
                <CardDescription>
                  Scalable cloud infrastructure and migration services
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-tech hover:shadow-glow transition-all duration-300 bg-gradient-card">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-tech rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle>IT Consulting</CardTitle>
                <CardDescription>
                  Strategic technology consulting and digital transformation
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-tech">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Let's discuss how our technology solutions can drive your success
          </p>
          <Button size="lg" variant="secondary" asChild className="shadow-glow">
            <Link to="/contact">
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;