import { useState } from "react";

const AboutSection = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Who we are</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Geoterrain Nigeria Limited is among the leading consulting companies in Nigeria rendering consultancy services, which meets the Nigerian Upstream Petroleum Regulatory Commission (NUPRC) and NNPCL-NUIS-NipeX (formerly NNPC-NAPIMS-NIPEX).
            </p>
            <button className="text-primary hover:text-primary-dark font-semibold">
              Read More →
            </button>
          </div>

          {/* About Cards */}
          <div className="space-y-8">
            {/* Vision */}
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold text-primary mb-3">Our Vision</h3>
              <p className="text-muted-foreground">
                At Geoterrain, our vision is to build and become a classic expert in providing geosciences, environmental, and oceanographic solutions to our customers and creating a robust portfolio through added value in training and consultancy.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold text-primary mb-3">Our Mission</h3>
              <div className="text-muted-foreground space-y-2">
                <p>• To provide our customers with improved decision tools that will assist them in accessing and evaluating their known and latent resources including hydrocarbon, mineral exploration and exploitation, and geospatial information in their portfolio.</p>
                {showMore && (
                  <>
                    <p>• To pursue value creation, through the provision of applicable environmental, marine, and oceanographic solutions for our customers' needs.</p>
                    <p>• Our services are customer-focused through enhancing our customers' business strength, limiting their exposure risks to its minimum level, and working closer with them.</p>
                  </>
                )}
              </div>
              <button 
                onClick={() => setShowMore(!showMore)}
                className="text-primary hover:text-primary-dark font-semibold mt-3"
              >
                {showMore ? "Show Less" : "Show More"}
              </button>
            </div>

            {/* Core Values */}
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold text-primary mb-3">Our Core Values</h3>
              <p className="text-muted-foreground mb-3">Our core values are the acronym IDEC, meaning:</p>
              <ul className="text-muted-foreground space-y-1">
                <li>• Integrity</li>
                <li>• Diligence</li>
                <li>• Excellence Services and Fair Play</li>
                <li>• Customer Focused Solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;