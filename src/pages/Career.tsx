import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Briefcase, Heart, Zap } from "lucide-react";

const Career = () => {
  const openPositions = [
    {
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "Remote / New York",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead development of scalable web applications using modern technologies."
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "San Francisco",
      type: "Full-time",
      experience: "3+ years",
      description: "Create intuitive user experiences for our technology products."
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      description: "Build and maintain CI/CD pipelines and cloud infrastructure."
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Austin",
      type: "Full-time",
      experience: "6+ years",
      description: "Drive product strategy and roadmap for our enterprise solutions."
    },
    {
      title: "Cybersecurity Analyst",
      department: "Security",
      location: "Washington DC",
      type: "Full-time",
      experience: "3+ years",
      description: "Monitor and analyze security threats, implement security measures."
    },
    {
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      experience: "2+ years",
      description: "Develop and execute marketing campaigns for technology products."
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, dental, vision, and wellness programs."
    },
    {
      icon: Zap,
      title: "Professional Growth",
      description: "Learning budget, conference attendance, and skill development opportunities."
    },
    {
      icon: Users,
      title: "Work-Life Balance",
      description: "Flexible hours, remote work options, and unlimited PTO policy."
    },
    {
      icon: Briefcase,
      title: "Competitive Package",
      description: "Competitive salary, equity options, and performance bonuses."
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We embrace new ideas and cutting-edge technologies to solve complex problems."
    },
    {
      title: "Collaboration",
      description: "We work together as a team, leveraging diverse perspectives and expertise."
    },
    {
      title: "Excellence",
      description: "We strive for the highest quality in everything we do and deliver."
    },
    {
      title: "Growth",
      description: "We invest in our people and provide opportunities for continuous learning."
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">Join Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Build the future of technology with us. We're looking for passionate individuals 
            who want to make a meaningful impact through innovative solutions.
          </p>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center shadow-tech bg-gradient-card">
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Team Members</div>
            </CardContent>
          </Card>
          <Card className="text-center shadow-tech bg-gradient-card">
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-primary mb-2">15</div>
              <div className="text-muted-foreground">Countries</div>
            </CardContent>
          </Card>
          <Card className="text-center shadow-tech bg-gradient-card">
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Employee Satisfaction</div>
            </CardContent>
          </Card>
          <Card className="text-center shadow-tech bg-gradient-card">
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-primary mb-2">4.8</div>
              <div className="text-muted-foreground">Glassdoor Rating</div>
            </CardContent>
          </Card>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Open Positions</h2>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="shadow-tech hover:shadow-glow transition-all duration-300 bg-gradient-card">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                    <div>
                      <CardTitle className="text-2xl">{position.title}</CardTitle>
                      <CardDescription className="text-lg mt-2">{position.description}</CardDescription>
                    </div>
                    <Button>Apply Now</Button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="outline">{position.department}</Badge>
                    <Badge variant="outline" className="flex items-center space-x-1">
                      <MapPin className="h-3 w-3" />
                      <span>{position.location}</span>
                    </Badge>
                    <Badge variant="outline" className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{position.type}</span>
                    </Badge>
                    <Badge variant="outline">{position.experience}</Badge>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="text-center shadow-tech bg-gradient-card">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-tech rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    <CardDescription className="text-center">{benefit.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Company Values */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="shadow-tech bg-gradient-card">
                <CardHeader>
                  <CardTitle className="text-2xl">{value.title}</CardTitle>
                  <CardDescription className="text-lg">{value.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-tech rounded-2xl p-12 shadow-tech">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Don't See Your Role?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume and 
            let us know how you'd like to contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="shadow-glow">
              Send Resume
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Learn About Culture
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;