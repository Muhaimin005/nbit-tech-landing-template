import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "contact@nbit-tech.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Tech Street, Silicon Valley, CA 94000",
      description: "Our headquarters"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Friday: 8:00 AM - 6:00 PM",
      description: "Pacific Standard Time"
    }
  ];

  const offices = [
    {
      city: "San Francisco",
      address: "123 Tech Street, Silicon Valley, CA 94000",
      phone: "+1 (555) 123-4567",
      email: "sf@nbit-tech.com"
    },
    {
      city: "New York",
      address: "456 Innovation Ave, New York, NY 10001",
      phone: "+1 (555) 234-5678",
      email: "ny@nbit-tech.com"
    },
    {
      city: "Austin",
      address: "789 Startup Blvd, Austin, TX 73301",
      phone: "+1 (555) 345-6789",
      email: "austin@nbit-tech.com"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your next project? We'd love to hear from you. 
            Get in touch and let's discuss how we can help transform your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <Card className="shadow-tech bg-gradient-card">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-tech rounded-lg flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you within 24 hours</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Your Company Name" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="service">Service Interest</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="software">Software Development</SelectItem>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="mobile">Mobile App Development</SelectItem>
                    <SelectItem value="cloud">Cloud Services</SelectItem>
                    <SelectItem value="consulting">IT Consulting</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your project requirements..." 
                  rows={5}
                />
              </div>
              
              <Button className="w-full" size="lg">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Get in Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <Card key={index} className="shadow-tech bg-gradient-card">
                      <CardContent className="pt-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-tech rounded-lg flex items-center justify-center flex-shrink-0">
                            <IconComponent className="h-6 w-6 text-primary-foreground" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg text-foreground">{info.title}</h3>
                            <p className="text-primary font-medium">{info.details}</p>
                            <p className="text-muted-foreground text-sm">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Quick Response Promise */}
            <Card className="bg-gradient-tech shadow-tech">
              <CardContent className="pt-6 text-center">
                <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                  Quick Response Guarantee
                </h3>
                <p className="text-primary-foreground/90">
                  We respond to all inquiries within 24 hours during business days. 
                  For urgent matters, please call us directly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Office Locations */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Our Offices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="shadow-tech bg-gradient-card">
                <CardHeader>
                  <CardTitle className="text-2xl">{office.city}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{office.address}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{office.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{office.email}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="text-center bg-secondary/10 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Need Immediate Support?
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            For existing clients with urgent technical issues
          </p>
          <Button size="lg" variant="secondary">
            Emergency Support: +1 (555) 999-0000
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;