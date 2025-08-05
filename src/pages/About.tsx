import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Eye, Award, Users, Globe, Lightbulb } from "lucide-react";

const About = () => {
  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description: "nbit technology was established with a vision to transform businesses through technology."
    },
    {
      year: "2019",
      title: "First Major Client",
      description: "Secured our first enterprise client and delivered a successful digital transformation project."
    },
    {
      year: "2020",
      title: "Team Expansion",
      description: "Grew our team to 50+ professionals across multiple technology domains."
    },
    {
      year: "2021",
      title: "Product Launch",
      description: "Launched our flagship CRM product, serving hundreds of businesses."
    },
    {
      year: "2022",
      title: "Global Reach",
      description: "Expanded operations internationally, serving clients across 15 countries."
    },
    {
      year: "2023",
      title: "Innovation Awards",
      description: "Recognized as a leading technology innovator by industry associations."
    },
    {
      year: "2024",
      title: "AI Integration",
      description: "Integrated AI capabilities across our product suite and service offerings."
    }
  ];

  const leadership = [
    {
      name: "John Smith",
      position: "Chief Executive Officer",
      description: "20+ years of experience in technology leadership and business strategy.",
      background: "Former VP of Engineering at Microsoft, MBA from Stanford."
    },
    {
      name: "Sarah Johnson",
      position: "Chief Technology Officer",
      description: "Expert in software architecture and emerging technologies.",
      background: "Former Principal Engineer at Google, PhD in Computer Science from MIT."
    },
    {
      name: "Michael Chen",
      position: "Chief Operating Officer",
      description: "Experienced in scaling technology operations and business development.",
      background: "Former Director of Operations at Amazon, MBA from Wharton."
    },
    {
      name: "Emily Davis",
      position: "Chief Marketing Officer",
      description: "Digital marketing strategist with expertise in technology sector.",
      background: "Former Marketing Director at Salesforce, MS in Marketing from Northwestern."
    }
  ];

  const achievements = [
    {
      icon: Users,
      number: "1000+",
      label: "Satisfied Clients"
    },
    {
      icon: Globe,
      number: "15",
      label: "Countries Served"
    },
    {
      icon: Award,
      number: "25+",
      label: "Industry Awards"
    },
    {
      icon: Lightbulb,
      number: "100+",
      label: "Projects Delivered"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">About nbit technology</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a forward-thinking technology company dedicated to driving innovation 
            and digital transformation for businesses worldwide.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <Card className="shadow-tech bg-gradient-card">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-tech rounded-lg flex items-center justify-center mb-4">
                <Target className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
              <CardDescription className="text-lg">
                To empower businesses with innovative technology solutions that drive growth, 
                efficiency, and competitive advantage in the digital age.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="shadow-tech bg-gradient-card">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-tech rounded-lg flex items-center justify-center mb-4">
                <Eye className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl">Our Vision</CardTitle>
              <CardDescription className="text-lg">
                To be the global leader in technology innovation, creating solutions that 
                transform industries and improve lives around the world.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="shadow-tech bg-gradient-card">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-tech rounded-lg flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl">Our Values</CardTitle>
              <CardDescription className="text-lg">
                Innovation, integrity, excellence, and collaboration guide everything we do. 
                We believe in building lasting relationships and delivering exceptional value.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Achievements */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <Card key={index} className="text-center shadow-tech bg-gradient-card">
                  <CardContent className="pt-8">
                    <div className="w-16 h-16 bg-gradient-tech rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">{achievement.number}</div>
                    <div className="text-muted-foreground">{achievement.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Company Timeline */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Our Journey</h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="shadow-tech bg-gradient-card">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-20 h-20 bg-gradient-tech rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground font-bold text-lg">{milestone.year}</span>
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{milestone.title}</CardTitle>
                      <CardDescription className="text-lg mt-2">{milestone.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="shadow-tech bg-gradient-card">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-tech rounded-lg flex items-center justify-center mb-4">
                    <span className="text-primary-foreground font-bold text-xl">{leader.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <CardTitle className="text-2xl">{leader.name}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary">{leader.position}</CardDescription>
                  <CardDescription className="text-base mt-2">{leader.description}</CardDescription>
                  <CardDescription className="text-sm text-muted-foreground mt-2">{leader.background}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-tech rounded-2xl p-12 shadow-tech">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how nbit technology can help transform your business 
            with innovative solutions tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="shadow-glow">
              Start a Project
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;