const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-cloud">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8 animate-fade-in-up">
            Let's connect.
          </h2>
          
          <div className="bg-background rounded-2xl p-12 shadow-soft border-t-4 border-primary animate-fade-in">
            <a
              href="mailto:team@fibrolytix.bio"
              className="text-2xl lg:text-3xl text-primary hover:text-primary/80 transition-colors font-semibold"
            >
              team@fibrolytix.bio
            </a>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('mailto:team@fibrolytix.bio?subject=Partnership Inquiry')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-soft"
              >
                Partnership Inquiry
              </button>
              <button
                onClick={() => window.open('mailto:team@fibrolytix.bio?subject=Investment Opportunity')}
                className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all"
              >
                Investment Opportunity
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;