import { Computer, Smartphone, Building } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications built for performance and user experience.",
    icon: Smartphone,
  },
  {
    title: "Web Apps",
    description: "Modern web applications using cutting-edge technologies and frameworks.",
    icon: Computer,
  },
  {
    title: "Enterprise Software",
    description: "Custom enterprise solutions to streamline your business operations.",
    icon: Building,
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-secondary/50" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our <span className="text-gradient">Services</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="bg-background border-border card-hover">
              <CardHeader>
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;