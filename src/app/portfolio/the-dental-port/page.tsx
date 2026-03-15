import Link from "next/link";
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Search, 
  Globe, 
  Lightbulb, 
  CheckCircle2,
  MonitorSmartphone,
  Gauge,
  Code,
  Layout,
  Stethoscope,
  CalendarCheck
} from "lucide-react";
import { CTASection } from "@/components/sections/cta-section";
import { ContactSection } from "@/components/sections/contact-section";

export const metadata = {
  title: "WordPress Website Development for The Dental Port | Case Study",
  description: "Discover how we built a high-performing, mobile-optimized WordPress website for a premier dental clinic, resulting in better online presence and lead generation.",
};

export default function TheDentalPortCaseStudy() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* 1. Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-muted/30">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-base font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground">
              Healthcare Web Development Case Study
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              WordPress Website Development for The Dental Port
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              How a modern, patient-first web design and SEO-optimized architecture transformed the online presence of a leading dental clinic in Noida.
            </p>
            
            {/* Key Results Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              <div className="flex flex-col items-center justify-center p-6 bg-background rounded-2xl shadow-sm border">
                <TrendingUp className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-3xl font-bold">150%</h3>
                <p className="text-base text-muted-foreground mt-1 text-center">Increase in Patient Leads</p>
              </div>
              <div className="flex flex-col items-center justify-center p-6 bg-background rounded-2xl shadow-sm border">
                <MonitorSmartphone className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-3xl font-bold">100%</h3>
                <p className="text-base text-muted-foreground mt-1 text-center">Mobile Responsive</p>
              </div>
              <div className="flex flex-col items-center justify-center p-6 bg-background rounded-2xl shadow-sm border">
                <Gauge className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-3xl font-bold">&lt; 2s</h3>
                <p className="text-base text-muted-foreground mt-1 text-center">Page Load Speed</p>
              </div>
              <div className="flex flex-col items-center justify-center p-6 bg-background rounded-2xl shadow-sm border">
                <Search className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-3xl font-bold">Top 3</h3>
                <p className="text-base text-muted-foreground mt-1 text-center">Local Search Ranking</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      </section>

      {/* 2. Client Overview & 3. Challenges */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-base font-semibold border-transparent bg-secondary text-secondary-foreground mb-4">
                Client Overview
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                The Dental Port
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Located in Sector 168, Noida, The Dental Port is a state-of-the-art dental clinic providing comprehensive oral care. Their specialized services include dental implants, root canal treatments, veneers, laser dentistry, and advanced cosmetic procedures, all delivered by highly experienced specialists.
              </p>
              <div className="flex items-center gap-2 pt-4 text-primary font-medium">
                <Globe className="h-5 w-5" />
                <Link href="https://thedentalport.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  thedentalport.com
                </Link>
              </div>
            </div>
            
            <div className="bg-muted/30 p-8 md:p-10 rounded-3xl border">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-base font-semibold border-destructive/20 bg-destructive/10 text-destructive mb-6">
                The Challenge
              </div>
              <h3 className="text-2xl font-bold mb-4">A Disconnected Digital Presence</h3>
              <ul className="space-y-4">
                {[
                  "An outdated website that failed to reflect the clinic's modern, state-of-the-art facilities.",
                  "Poor mobile experience, leading to high bounce rates from patients searching on their phones.",
                  "Lack of dedicated, SEO-optimized service pages for high-ticket treatments (e.g., Implants, Veneers).",
                  "No integrated appointment booking system, causing friction in lead capture.",
                  "Slow loading times impacting both user experience and local search rankings."
                ].map((challenge, index) => (
                  <li key={index} className="flex gap-3 text-muted-foreground items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-background border flex items-center justify-center text-base font-medium mt-0.5">
                      {index + 1}
                    </span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Strategy & Solutions & 5. Website Features */}
      <section className="py-20 bg-muted/30 border-y">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Strategy & Implementation</h2>
            <p className="text-lg text-muted-foreground">
              We engineered a scalable WordPress solution focused on instilling trust, educating patients, and converting local traffic into booked appointments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background rounded-2xl p-8 shadow-sm border group hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Code className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Custom WordPress Build</h3>
              <p className="text-muted-foreground">
                Developed a robust, custom WordPress theme tailored specifically for healthcare, ensuring easy content management and long-term scalability.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 shadow-sm border group hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Layout className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Patient-First UX Design</h3>
              <p className="text-muted-foreground">
                Crafted a calming, professional aesthetic with intuitive navigation, prominent call-to-actions, and clear presentation of clinic credentials.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 shadow-sm border group hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <MonitorSmartphone className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Mobile Optimization</h3>
              <p className="text-muted-foreground">
                Implemented a heavily optimized mobile-responsive design, acknowledging that over 70% of local health searches occur on mobile devices.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 shadow-sm border group hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Stethoscope className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Service Page Architecture</h3>
              <p className="text-muted-foreground">
                Created deep, informative, and structurally separate pages for key treatments (Implants, Root Canals, Laser Dentistry) to capture long-tail search intent.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 shadow-sm border group hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <CalendarCheck className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Appointment Integration</h3>
              <p className="text-muted-foreground">
                Integrated a seamless, multi-step appointment booking system allowing patients to instantly request consultations directly from the site.
              </p>
            </div>
            
            <div className="bg-background rounded-2xl p-8 shadow-sm border group hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Search className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">SEO-Friendly Structure</h3>
              <p className="text-muted-foreground">
                Engineered the site architecture strictly following technical SEO best practices (schema markup for local business/medical clinic, meta tags, and fast loading).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Tools & 7. Results / 8. Visuals Combined */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-10">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">The Outcome</h2>
                <p className="text-lg text-muted-foreground">
                  The new website established The Dental Port as a premium healthcare provider in Sector 168, drastically improving user engagement and inbound patient inquiries.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 bg-muted/50 p-4 rounded-xl border">
                  <div className="p-3 bg-secondary rounded-lg shadow-sm">
                    <TrendingUp className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">150% Increase</div>
                    <div className="text-base text-muted-foreground">In monthly patient leads via organic search</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-muted/50 p-4 rounded-xl border">
                  <div className="p-3 bg-secondary rounded-lg shadow-sm">
                    <Users className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">Enhanced Trust</div>
                    <div className="text-base text-muted-foreground">Better presentation of clinic facilities & doctors</div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  Tools & Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["WordPress", "PHP/MySQL", "Tailwind CSS", "Yoast SEO", "Google Analytics", "Local Business Schema"].map((tool) => (
                    <span key={tool} className="px-3 py-1.5 bg-muted text-foreground text-base font-medium rounded-full border">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 8. Website Screenshots / Portfolio images */}
            <div className="lg:col-span-7 relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border bg-muted relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 z-10" />
                
                {/* Visual placeholder - Clean, light blue medical aesthetic theme */}
                <div className="w-full h-full bg-gradient-to-br from-blue-50 to-slate-100 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
                  
                  {/* Decorative modern shape */}
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
                  <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />

                  {/* Mock Browser UI */}
                  <div className="w-full max-w-2xl bg-white rounded-xl border shadow-2xl overflow-hidden z-20 transition-transform duration-700 group-hover:scale-105">
                    <div className="h-8 bg-slate-100 flex items-center px-4 gap-2 border-b">
                      <div className="w-3 h-3 rounded-full bg-slate-300" />
                      <div className="w-3 h-3 rounded-full bg-slate-300" />
                      <div className="w-3 h-3 rounded-full bg-slate-300" />
                      <div className="mx-auto bg-white rounded px-24 py-1 flex items-center text-sm text-slate-400 shadow-sm border border-slate-200">
                        thedentalport.com
                      </div>
                    </div>
                    
                    <div className="aspect-[16/9] bg-white relative flex flex-col">
                      {/* Fake header with logo and appointment button */}
                      <div className="h-14 border-b flex items-center justify-between px-6 bg-white z-10 relative shadow-sm">
                        <div className="flex items-center gap-2">
                           <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center">
                             <div className="w-3 h-3 bg-white rounded-sm" />
                           </div>
                           <div className="font-bold text-slate-800 text-base">The Dental Port</div>
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="hidden sm:flex gap-4 text-sm font-semibold text-slate-600">
                            <span>Treatments</span>
                            <span>Our Team</span>
                            <span>Contact</span>
                          </div>
                          <div className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-full">
                            Book Appointment
                          </div>
                        </div>
                      </div>

                      {/* Fake hero section - Medical UI */}
                      <div className="flex-1 flex bg-slate-50 relative overflow-hidden">
                        {/* Background abstract element */}
                        <div className="absolute right-0 top-0 w-1/2 h-full bg-blue-50 rounded-l-[100px]" />
                        
                        <div className="w-1/2 p-8 flex flex-col justify-center relative z-10">
                          <div className="inline-flex w-fit items-center rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-[10px] font-semibold text-blue-700 mb-4">
                            Noida Sector 168
                          </div>
                          <div className="h-6 w-full max-w-[200px] bg-slate-800 rounded-sm mb-2" />
                          <div className="h-6 w-3/4 bg-slate-800 rounded-sm mb-4" />
                          <div className="h-3 w-full bg-slate-400 rounded-sm mb-2" />
                          <div className="h-3 w-5/6 bg-slate-400 rounded-sm mb-6" />
                          <div className="flex gap-3">
                            <div className="h-8 w-28 bg-blue-600 rounded-md" />
                            <div className="h-8 w-28 border border-slate-300 bg-white rounded-md" />
                          </div>
                        </div>
                        
                        <div className="w-1/2 relative p-6 flex items-center justify-center z-10">
                           {/* Mock image container */}
                           <div className="w-full h-full max-h-[160px] bg-slate-200 rounded-2xl overflow-hidden relative shadow-lg">
                             <div className="absolute inset-0 bg-blue-900/10" />
                             {/* Mock floating stats card */}
                             <div className="absolute bottom-4 left-4 right-4 h-12 bg-white/90 backdrop-blur rounded-lg shadow flex items-center px-3 gap-3">
                               <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                 <div className="w-4 h-4 text-blue-600" />
                               </div>
                               <div>
                                 <div className="h-2 w-16 bg-slate-800 rounded mb-1" />
                                 <div className="h-1.5 w-12 bg-slate-400 rounded" />
                               </div>
                             </div>
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 z-20">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-sm border shadow-sm text-base font-medium">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    Medical UI Architecture
                  </div>
                </div>
              </div>
              
              <div className="absolute -z-10 -right-8 -bottom-8 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl mix-blend-multiply" />
            </div>

          </div>
        </div>
      </section>

      {/* 9. Client Testimonial */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <svg className="w-12 h-12 mx-auto text-primary-foreground/30 mb-8" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8">
              "The new website perfectly encapsulates the modern, professional environment of our clinic. It's incredibly fast, looks amazing on mobile, and the new SEO structure has dramatically increased the number of patients finding us when searching for specialized treatments in Noida."
            </blockquote>
            <div className="flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center text-xl font-bold mb-4 border border-primary-foreground/20">
                TDP
              </div>
              <div className="font-bold text-lg">Dr. Management Team</div>
              <div className="text-primary-foreground/70">The Dental Port Clinic</div>
            </div>
          </div>
        </div>
        
        <div className="absolute top-0 right-0 -m-32 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -m-32 w-96 h-96 bg-black/10 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* 10. Strong CTA & Contact Sections */}
      <CTASection />
      <ContactSection />
    </div>
  );
}
