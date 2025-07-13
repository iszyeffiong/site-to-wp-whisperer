import heroImage from "@/assets/hero-landscape.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            We are committed to excellence in job execution and maintain a high international ethical standards
          </h1>
          <p className="text-xl lg:text-2xl mb-8 opacity-90">
            Leading consulting company in Nigeria rendering geosciences, environmental, and oceanographic solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors">
              Our Services
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;