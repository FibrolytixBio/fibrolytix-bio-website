import joshTraversPfp from '@/assets/team/josh_travers_pfp.jpeg';
import roshanKernPfp from '@/assets/team/roshan_kern_pfp.jpeg';
import gregoryWayPfp from '@/assets/team/gregory_way_pfp.jpeg';
import timMckinseyPfp from '@/assets/team/tim_mckinsey_pfp.jpg';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 'josh',
      name: 'Joshua Travers, PhD',
      title: 'Co-founder, CEO',
      bio: 'As Co-Founder and CEO of Fibrolytix Bio, Josh leads therapeutic strategy and scientific direction, drawing on over a decade of experience in cardiac biology and fibrosis. A recognized leader in the field, he has received the Gill Heart & Vascular Institute and ISHR Early Career Investigator Awards, and served as PI on multiple NIH-funded projects. Josh pioneered machine learning–driven phenotypic screening for cardiac fibroblasts and has published in top journals including Circulation, JACC, and JCI. At Fibrolytix, he is focused on translating these innovations into first-in-class therapies for fibrotic disease.',
      image: joshTraversPfp,
      linkedIn: 'https://www.linkedin.com/in/joshua-travers-66705226/',
      scholar: 'https://scholar.google.com/citations?hl=en&user=uX_fFvQAAAAJ',
    },
    {
      id: 'roshan',
      name: 'Roshan Kern',
      title: 'Co-founder, AI Lead',
      bio: 'As Co-Founder and AI Lead of Fibrolytix Bio, Roshan leads the development of agentic AI systems that accelerate the discovery of therapies for fibrotic diseases. He has experience developing AI-driven systems for drug discovery at Recursion Pharmaceuticals, MIT, and Case Western Reserve University. At Fibrolytix, he develops and deploys large language model workflows that power the lab-in-the-loop infrastructure at the heart of Fibrolytix’s platform. Roshan has authored research in computational biology and AI, and is passionate about using intelligent systems to close the gap between data and treatment.',
      image: roshanKernPfp,
      linkedIn: 'https://www.linkedin.com/in/roshan-kern/',
      scholar: 'https://scholar.google.com/citations?hl=en&user=Odynd38AAAAJ',
    },
    {
      id: 'gregory',
      name: 'Gregory Way, PhD',
      title: 'Co-founder, Data Science Lead',
      bio: 'As Co-Founder and Data Science Lead of Fibrolytix Bio, Greg directs the computational method development, data, and open-source strategy to ensure reproducible research. He is an Assistant Professor of Biomedical Informatics at The University of Colorado. He has over a decade of experience with applied computational biology and machine learning to improve human health. He received his PhD from University of Pennsylvania in Genomics and Computational Biology, and performed a postdoc at The Broad Institute of MIT and Harvard in Microscopy Image Analysis and Drug Discovery. He has received awards from The American Heart Association, The Gilbert Family Foundation, Alex\'s Lemonade Stand Foundation, Japan Agency for Medical Research and Development (AMED), and the NIH.',
      image: gregoryWayPfp,
      linkedIn: 'https://www.linkedin.com/in/gregorypway/',
      scholar: 'https://scholar.google.com/citations?hl=en&user=iDKZaA4AAAAJ',
    },
    {
      id: 'tim',
      name: 'Timothy McKinsey, PhD',
      title: 'Co-founder, Scientific Lead',
      bio: 'As Co-Founder and Scientific Lead of Fibrolytix Bio, Tim leverages two decades of fibrosis biology to steer our therapeutic pipeline. He is the Joseph and Rose LaConte Cardiology Endowed Chair and Professor of Medicine at the University of Colorado Anschutz, and founding director of the Consortium for Fibrosis Research & Translation. Tim has authored more than 220 peer-reviewed papers that have garnered over 28,000 citations, defining epigenetic and fibroblast-targeted strategies for heart failure. He has secured multi-million-dollar NIH R-series, SBIR, and American Heart Association funding and advises several biotech companies. A Fellow of the International Society for Heart Research, Tim translates breakthrough science into investable drug programs.',
      image: timMckinseyPfp,
      linkedIn: 'https://www.linkedin.com/in/tim-mckinsey-93721b38/',
      scholar: 'https://scholar.google.com/citations?hl=en&user=VcxlCp8AAAAJ',
    },
  ];

  return (
    <section id="team" className="py-20 bg-cloud">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-foreground mb-16 animate-fade-in-up">
          Our Team
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="bg-background rounded-xl p-6 text-center shadow-soft hover:shadow-lg transition-all duration-300 animate-fade-in flex flex-col h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Profile Image */}
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {member.name}
              </h3>
              <p className="text-primary font-medium mb-4">
                {member.title}
              </p>
              
              {/* Bio - always visible */}
              <div className="flex-grow flex items-center">
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {member.bio}
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex justify-center space-x-4 mt-auto">
                <a
                  href={member.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href={member.scholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                  aria-label="Google Scholar"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;