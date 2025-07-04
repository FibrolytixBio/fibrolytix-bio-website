const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-8 animate-fade-in-up">
            Why Fibrosis
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed animate-fade-in-up">
            <p className="text-muted-foreground">
              Cardiac fibrosis is a key driver of Cardiovascular Disease and heart failure, impacting nearly{' '}
              <span className="text-primary font-semibold">128 million Americans</span>{' '}
              and costing{' '}
              <span className="text-primary font-semibold">$422 billion annually</span>{' '}
              in the U.S. Despite its pivotal role, there are currently{' '}
              <span className="text-primary font-semibold">0 approved therapies</span>{' '}
              that target the root cause, leaving an urgent unmet need for millions of patients.
            </p>
            
            <p className="text-foreground">
              Fibrosis is not confined to the heart - it underlies progressive organ dysfunction in the lungs, liver, kidneys, and beyond. Cumulatively, fibrotic disorders are estimated to account for nearly half of all deaths globally. Yet, fibrosis remains largely unaddressed by modern therapeutics.
            </p>
            
            <p className="text-muted-foreground">
              At Fibrolytix Bio, we are building a novel anti-fibrotic discovery engine. By integrating autonomous AI-driven analytics with phenotypic screening in primary human cells, we aim to rapidly identify and validate new therapeutic candidates. Our multidisciplinary team is uniquely positioned to transform the treatment of fibrotic diseases across organ systems.
            </p>
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-cloud rounded-lg animate-fade-in">
              <div className="text-3xl font-bold text-primary mb-2">45%</div>
              <div className="text-sm text-muted-foreground">of deaths in industrialized nations involve fibrosis</div>
            </div>
            <div className="p-6 bg-cloud rounded-lg animate-fade-in">
              <div className="text-3xl font-bold text-primary mb-2">SOTA</div>
              <div className="text-sm text-muted-foreground">proprietary cardiac fibrosis phenotype assay</div>
            </div>
            <div className="p-6 bg-cloud rounded-lg animate-fade-in">
              <div className="text-3xl font-bold text-primary mb-2">AI-First</div>
              <div className="text-sm text-muted-foreground">autonomous agents optimize therapeutic discovery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;