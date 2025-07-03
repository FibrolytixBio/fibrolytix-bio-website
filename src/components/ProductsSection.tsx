import { Button } from '@/components/ui/button';

const ProductsSection = () => {
  const platformFeatures = [
    'Proprietary high-throughput screening assay',
    'Agentic literature, database, and experimental data mining',
    'Continuous lab-in-the-loop feedback for system optimization',
  ];

  const timelineItems = [
    { status: 'completed', title: 'Proprietary Assay Developed', description: 'Read the paper here', link: 'https://www.ahajournals.org/doi/full/10.1161/CIRCULATIONAHA.124.071956' },
    { status: 'current', title: 'Agentic Platform Development', description: 'Try the demo below' },
    { status: 'future', title: 'In Vitro Compound Validation', description: 'Q4 2025 target' },
  ];

  return (
    <section id="platform" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-foreground mb-10 animate-fade-in-up">
          Platform
        </h2>

        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          We’re developing an AI-driven, agentic “lab-in-the-loop” platform that integrates high-content microscopy, machine learning, and autonomous AI to rapidly nominate, test, and optimize anti-fibrotic compounds. Starting with our proprietary cardiac fibrosis assay, experimental results from our scientists are continuously fed back into the system to refine future predictions.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Platform Overview */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Platform Overview
            </h3>
            <div className="space-y-4">
              {platformFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-foreground leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Status Timeline */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Development Status
            </h3>
            
            {/* Desktop Timeline */}
            <div className="hidden md:block">
              <div className="flex items-center justify-between relative">
                {/* Progress Line */}
                <div className="absolute top-4 left-0 right-0 h-0.5 bg-border"></div>
                <div className="absolute top-4 left-0 w-1/2 h-0.5 bg-primary"></div>
                
                {timelineItems.map((item, index) => (
                  <div key={index} className="flex flex-col items-center relative z-10">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-3 ${
                      item.status === 'completed' ? 'bg-primary text-primary-foreground' :
                      item.status === 'current' ? 'bg-primary text-primary-foreground' :
                      'bg-border text-muted-foreground'
                    }`}>
                      {item.status === 'completed' ? (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <span className="text-sm font-bold">{index + 1}</span>
                      )}
                    </div>
                    <div className="text-center">
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {item.link ? (
                          <a 
                            href={item.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 underline"
                          >
                            {item.description}
                          </a>
                        ) : (
                          item.description
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="md:hidden space-y-6">
              {timelineItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    item.status === 'completed' ? 'bg-primary text-primary-foreground' :
                    item.status === 'current' ? 'bg-primary text-primary-foreground' :
                    'bg-border text-muted-foreground'
                  }`}>
                    {item.status === 'completed' ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <span className="text-sm font-bold">{index + 1}</span>
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {item.link ? (
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 underline"
                        >
                          {item.description}
                        </a>
                      ) : (
                        item.description
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in-up">
            <Button
            onClick={() => window.open('https://cf-compound-selection-demo.netlify.app/analyze', '_blank')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl"
            >
            Try Demo
            </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;