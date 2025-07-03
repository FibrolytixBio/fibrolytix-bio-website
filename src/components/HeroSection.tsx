import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-subtle relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.05'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <div className="mb-6">
              <img
                src="/logo/rectangle.svg"
                alt="Fibrolytix Bio"
                className="h-20 w-auto"
              />
            </div>
            <h2 className="text-2xl lg:text-3xl text-primary font-semibold mb-8">
              AI-augmented phenotypic screening to reverse fibrosis
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              We merge high-content imaging with autonomous AI agents to discover 
              anti-fibrotic therapeutics faster than ever before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-soft"
              >
                Learn More
              </button>
              <button
                onClick={() => window.open('mailto:team@fibrolytix.bio')}
                className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all"
              >
                Get in Touch
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="animate-fade-in">
            <img
              src={heroImage}
              alt="Advanced biotech laboratory with microscopy equipment"
              className="w-full h-auto rounded-xl shadow-soft"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;