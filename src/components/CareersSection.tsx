import CareerCard from "./CareerCard";
import { 
  Wrench, 
  Computer, 
  Briefcase, 
  Calculator, 
  Megaphone, 
  Globe 
} from "lucide-react";

const CareersSection = () => {
  const careers = [
    {
      title: "Ingeniería en Mantenimiento de Obras",
      description: "Formamos profesionales especializados en la planificación, gestión y ejecución de estrategias para la conservación y rehabilitación de infraestructuras y mantenimiento de equipos electromecánicos.",
      duration: "4 años",
      icon: <Wrench className="w-6 h-6" />,
      slug: "mantenimiento-obras",
      fieldOfWork: "Industria de la construcción, mantenimiento de edificios, infraestructura, hospitales, escuelas, puentes, carreteras, redes de servicios."
    },
    {
      title: "Ingeniería en Informática",
      description: "Formamos profesionales con conocimientos de computación, tecnología y gestión para el desarrollo de soluciones innovadoras en software, hardware, redes, robótica y seguridad digital.",
      duration: "4 años",
      icon: <Computer className="w-6 h-6" />,
      slug: "informatica",
      fieldOfWork: "Desarrollo de software, administración de base de datos, ciber seguridad, redes, telecomunicaciones, inteligencia artificial, computación en la nube."
    },
    {
      title: "Licenciatura en Administración de Empresas",
      description: "Formamos profesionales con conocimientos en gestión organizacional, finanzas, mercadeo y recursos humanos, con habilidades en liderazgo, emprendimiento e innovación.",
      duration: "4 años",
      icon: <Briefcase className="w-6 h-6" />,
      slug: "administracion-empresas",
      fieldOfWork: "Gestión empresarial, finanzas, contabilidad, recursos humanos, mercadeo, ventas, emprendimiento y consultoría en empresas privadas y públicas."
    },
    {
      title: "Licenciatura en Contaduría Pública",
      description: "Formamos profesionales especializados en la gestión financiera, contable y tributaria de organizaciones, con enfoque en la normativa legal y fiscal del país.",
      duration: "4 años",
      icon: <Calculator className="w-6 h-6" />,
      slug: "contaduria-publica",
      fieldOfWork: "Auditorías, asesorías, consultorías contables y fiscales, docencia, diseño de sistemas administrativos, elaboración y revisión de presupuestos."
    },
    {
      title: "Licenciatura en Publicidad",
      description: "Formamos profesionales creativos y estratégicos con conocimientos en comunicación, marketing, diseño y medios digitales para desarrollar campañas publicitarias innovadoras.",
      duration: "4 años",
      icon: <Megaphone className="w-6 h-6" />,
      slug: "publicidad",
      fieldOfWork: "Agencias de publicidad, medios de comunicación, departamentos de marketing, empresas digitales, consultoría en comunicación y mercadotecnia."
    },
    {
      title: "Licenciatura en Comercio Internacional",
      description: "Formamos profesionales con conocimientos en economía, negocios, logística y normativas comerciales globales para coordinar negociaciones y procesos internacionales.",
      duration: "4 años",
      icon: <Globe className="w-6 h-6" />,
      slug: "comercio-internacional",
      fieldOfWork: "Empresas exportadoras e importadoras, departamentos de comercio exterior, empresas de logística, organismos gubernamentales, agencias de aduanas."
    }
  ];

  return (
    <section id="carreras" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Nuestras <span className="hero-text">Carreras</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre las carreras universitarias que te formarán como profesional integral, 
            con programas académicos de excelencia y enfoque práctico.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {careers.map((career) => (
            <CareerCard key={career.slug} {...career} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareersSection;