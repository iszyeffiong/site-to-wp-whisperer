import iso9001Badge from "@/assets/iso-9001-badge.png";
import iso14001Badge from "@/assets/iso-14001-badge.png";

const CertificationsSection = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our certifications</h2>
          <div className="w-24 h-1 bg-primary-foreground mx-auto"></div>
        </div>

        <div className="flex justify-center items-center gap-8 lg:gap-16">
          <div className="bg-background p-6 rounded-lg shadow-lg">
            <img 
              src={iso9001Badge} 
              alt="ISO 9001:2015 Certified" 
              className="h-24 w-auto mx-auto"
            />
          </div>
          <div className="bg-background p-6 rounded-lg shadow-lg">
            <img 
              src={iso14001Badge} 
              alt="ISO 14001:2015 Certified" 
              className="h-24 w-auto mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;