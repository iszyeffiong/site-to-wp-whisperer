import { Layers, FlaskConical, Waves, TestTube, TrendingUp, GraduationCap } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Layers,
      title: "Geology & Geophysics",
      description: "Comprehensive geological and geophysical consulting services"
    },
    {
      icon: TestTube,
      title: "Geochemical Services", 
      description: "Advanced geochemical analysis and consulting"
    },
    {
      icon: FlaskConical,
      title: "Environmental Services",
      description: "Environmental impact assessment and management solutions"
    },
    {
      icon: Waves,
      title: "Oceanography & Marine",
      description: "Marine and oceanographic consulting services"
    },
    {
      icon: TrendingUp,
      title: "New Ventures & Asset Management",
      description: "Strategic consulting for new ventures and asset optimization"
    },
    {
      icon: GraduationCap,
      title: "Training",
      description: "Professional training and capacity building programs"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Our Service Categories</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-card p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow cursor-pointer group"
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent size={48} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;