import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star } from "lucide-react";

const Products = () => {
  const products = [
    {
      name: "nbit CRM Pro",
      category: "Customer Management",
      description: "Advanced customer relationship management system designed for modern businesses.",
      features: ["Lead Management", "Sales Pipeline", "Customer Analytics", "Mobile Access"],
      status: "Available",
      price: "Starting at $99/month"
    },
    {
      name: "nbit Analytics Suite",
      category: "Business Intelligence",
      description: "Comprehensive analytics platform for data-driven decision making.",
      features: ["Real-time Dashboards", "Custom Reports", "Predictive Analytics", "Data Integration"],
      status: "Available",
      price: "Starting at $199/month"
    },
    {
      name: "nbit Security Shield",
      category: "Cybersecurity",
      description: "Enterprise-grade security solution to protect your digital assets.",
      features: ["Threat Detection", "Compliance Monitoring", "Security Audits", "24/7 Support"],
      status: "Available",
      price: "Custom Pricing"
    },
    {
      name: "nbit Cloud Platform",
      category: "Infrastructure",
      description: "Scalable cloud infrastructure platform for modern applications.",
      features: ["Auto-scaling", "Load Balancing", "Database Services", "API Gateway"],
      status: "Beta",
      price: "Coming Soon"
    },
    {
      name: "nbit IoT Manager",
      category: "Internet of Things",
      description: "Complete IoT device management and monitoring solution.",
      features: ["Device Management", "Real-time Monitoring", "Data Collection", "Remote Control"],
      status: "Development",
      price: "Q2 2024"
    },
    {
      name: "nbit AI Assistant",
      category: "Artificial Intelligence",
      description: "AI-powered virtual assistant for business process automation.",
      features: ["Natural Language Processing", "Task Automation", "Smart Recommendations", "Learning Capabilities"],
      status: "Development",
      price: "Q3 2024"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-800";
      case "Beta":
        return "bg-blue-100 text-blue-800";
      case "Development":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">Our Products</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative technology products designed to streamline operations, 
            enhance productivity, and drive business growth.
          </p>
        </div>

        {/* Featured Product */}
        <div className="mb-16">
          <Card className="shadow-tech bg-gradient-tech text-primary-foreground">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge className="bg-secondary text-secondary-foreground">Featured Product</Badge>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-current text-yellow-400" />
                  ))}
                </div>
              </div>
              <CardTitle className="text-3xl">nbit CRM Pro</CardTitle>
              <CardDescription className="text-primary-foreground/90 text-lg">
                Our flagship customer relationship management solution trusted by over 1,000 businesses worldwide.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4">Key Features</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span>Advanced Lead Management</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span>Visual Sales Pipeline</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span>Customer Analytics & Insights</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span>Mobile CRM Access</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-2xl font-bold mb-4">Starting at $99/month</p>
                  <Button variant="secondary" size="lg" className="shadow-glow">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="shadow-tech hover:shadow-glow transition-all duration-300 bg-gradient-card">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">{product.category}</Badge>
                  <Badge className={getStatusColor(product.status)}>{product.status}</Badge>
                </div>
                <CardTitle className="text-xl">{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t">
                    <p className="font-semibold text-lg mb-3">{product.price}</p>
                    <Button 
                      className="w-full" 
                      variant={product.status === "Available" ? "default" : "outline"}
                      disabled={product.status === "Development"}
                    >
                      {product.status === "Available" ? "Learn More" : 
                       product.status === "Beta" ? "Join Beta" : "Coming Soon"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Custom Product Development
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Need a product tailored specifically for your business? Our team can develop 
            custom solutions that meet your unique requirements.
          </p>
          <Button size="lg" variant="default">
            Discuss Custom Development
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Products;