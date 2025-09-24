import { useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Users, Award, BookOpen, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CareerDetail = () => {
  const { slug } = useParams();

  const careers = {
    "mantenimiento-obras": {
      title: "Ingeniería en Mantenimiento de Obras",
      degree: "Ingeniero en Mantenimiento de Obras",
      duration: "4 años",
      description: "La carrera de Ingeniería en Mantenimiento de Obras está enfocada en formar profesionales especializados en la planificación, gestión y ejecución de estrategias para la conservación y rehabilitación de infraestructuras y mantenimiento de equipos electromecánicos.",
      fieldOfWork: "El Ingeniero en Mantenimiento de Obras puede desempañarse en la industria de la construcción, supervisando el mantenimiento de proyectos ya finalizados y garantizando su vida útil, incluyendo el mantenimiento de edificios residenciales y comerciales, grandes proyectos de infraestructura tales como: hospitales, escuelas, puentes, carreteras, túneles, mantenimiento de redes de agua, electricidad, gas, telecomunicaciones, etc.",
      semesters: [
        {
          number: "PRIMER SEMESTRE",
          subjects: ["Lógica", "Matemática I", "Formación Cultural", "Computación I", "Ambiente y Desarrollo Sostenible", "Metodología de la Investigación I", "Inglés I"]
        },
        {
          number: "SEGUNDO SEMESTRE", 
          subjects: ["Algebra Lineal", "Matemática II", "Formación Cultural II", "Computación II", "Física I", "Metodología de la Investigación II", "Inglés II"]
        },
        {
          number: "TERCER SEMESTRE",
          subjects: ["Estadística", "Matemática III", "Química", "Dibujo Técnico", "Física II", "Resistencia de Materiales", "Inglés III"]
        },
        {
          number: "CUARTO SEMESTRE",
          subjects: ["Matemática IV", "Mecánica de Fluidos", "Materiales de Construcción", "Topografía", "Electricidad", "Electrónica"]
        },
        {
          number: "QUINTO SEMESTRE",
          subjects: ["Termodinámica", "Estructuras I", "Hidráulica", "Instalaciones Sanitarias", "Electrotecnia", "Administración I"]
        },
        {
          number: "SEXTO SEMESTRE",
          subjects: ["Estructuras II", "Concreto Armado", "Instalaciones Eléctricas", "Aire Acondicionado", "Administración II", "Costos y Presupuestos"]
        },
        {
          number: "SÉPTIMO SEMESTRE",
          subjects: ["Mantenimiento de Estructuras", "Patología de las Construcciones", "Sistemas de Bombeo", "Mantenimiento de Equipos", "Gerencia de Proyectos"]
        },
        {
          number: "OCTAVO SEMESTRE",
          subjects: ["Evaluación de Estructuras", "Rehabilitación de Obras", "Mantenimiento Preventivo", "Práctica Profesional", "Trabajo de Grado"]
        }
      ]
    },
    "informatica": {
      title: "Ingeniería en Informática",
      degree: "Ingeniero en Informática",
      duration: "4 años",
      description: "La carrera de Ingeniería en Informática está enfocada en formar profesionales con conocimientos de computación, tecnología y gestión para el desarrollo de soluciones innovadoras. El egresado se especializará en el diseño, implementación y mantenimiento de sistemas informáticos abarcando software, hardware, redes, robótica, seguridad digital y gestión de proyectos.",
      fieldOfWork: "El Ingeniero en Informática podrá desempeñarse en el desarrollo de software, administración de base de datos, ciber seguridad, redes, telecomunicaciones, inteligencia artificial, computación en la nube, automatización y consultoría tecnológica. Puede trabajar en empresas de tecnología, banca, telecomunicaciones, industria, salud o educación.",
      semesters: [
        {
          number: "PRIMER SEMESTRE",
          subjects: ["Lógica", "Matemática I", "Formación Cultural", "Computación I", "Ambiente y Desarrollo Sostenible", "Metodología de la Investigación I", "Inglés I", "Lenguaje y Comunicación"]
        },
        {
          number: "SEGUNDO SEMESTRE",
          subjects: ["Algebra Lineal", "Matemática II", "Formación Cultural II", "Computación II", "Física I", "Metodología de la Investigación II", "Inglés II", "Fundamentos de Economía"]
        },
        {
          number: "TERCER SEMESTRE",
          subjects: ["Estadística", "Matemática III", "Química", "Programación I", "Física II", "Estructuras Discretas", "Inglés III", "Contabilidad"]
        },
        {
          number: "CUARTO SEMESTRE",
          subjects: ["Matemática IV", "Programación II", "Electrónica Digital", "Arquitectura del Computador", "Base de Datos I", "Ingeniería de Software I"]
        },
        {
          number: "QUINTO SEMESTRE",
          subjects: ["Programación III", "Sistemas Operativos", "Base de Datos II", "Redes I", "Ingeniería de Software II", "Administración I"]
        },
        {
          number: "SEXTO SEMESTRE",
          subjects: ["Programación IV", "Redes II", "Seguridad Informática", "Inteligencia Artificial", "Administración II", "Desarrollo Web"]
        },
        {
          number: "SÉPTIMO SEMESTRE",
          subjects: ["Proyecto de Software", "Sistemas Distribuidos", "Robótica", "Computación en la Nube", "Gerencia de Proyectos", "Auditoría de Sistemas"]
        },
        {
          number: "OCTAVO SEMESTRE",
          subjects: ["Trabajo de Grado", "Práctica Profesional", "Emprendimiento Tecnológico", "Sistemas Expertos", "Taller de Tesis"]
        }
      ]
    },
    "administracion-empresas": {
      title: "Licenciatura en Administración de Empresas",
      degree: "Licenciado en Administración de Empresas",
      duration: "4 años",
      description: "La carrera de Administración de Empresas esta enfocada en formar profesionales con conocimientos en gestión organizacional, finanzas, mercadeo y recursos humanos. El egresado estará en la capacidad de optimizar procesos contables, elaboración de estados financieros, planificación estratégica y control de procesos.",
      fieldOfWork: "El campo de trabajo abarca la gestión, planificación y optimización de recursos en organizaciones de diversos sectores. Puede desempeñarse en áreas como: gestión empresarial, finanzas, contabilidad, recursos humanos, mercadeo, ventas, emprendimiento y consultoría.",
      semesters: [
        {
          number: "PRIMER SEMESTRE",
          subjects: ["Formación Cultural I", "Matemática I", "Educación para la Salud I", "Computación I", "Contabilidad I", "Metodología de la Investigación I", "Inglés I", "Lenguaje y Comunicación"]
        },
        {
          number: "SEGUNDO SEMESTRE",
          subjects: ["Formación Cultural II", "Matemática II", "Educación para la Salud II", "Computación II", "Contabilidad II", "Metodología de la Investigación II", "Inglés II", "Fundamentos de Economía"]
        },
        {
          number: "TERCER SEMESTRE",
          subjects: ["Estadística I", "Matemática III", "Psicología Industrial", "Contabilidad III", "Microeconomía", "Derecho Mercantil", "Inglés III", "Administración I"]
        },
        {
          number: "CUARTO SEMESTRE",
          subjects: ["Estadística II", "Matemática IV", "Contabilidad de Costos I", "Macroeconomía", "Derecho Laboral", "Administración II", "Mercadeo I"]
        },
        {
          number: "QUINTO SEMESTRE",
          subjects: ["Investigación de Operaciones", "Contabilidad de Costos II", "Matemática Financiera", "Organización y Métodos", "Mercadeo II", "Administración de Personal I"]
        },
        {
          number: "SEXTO SEMESTRE",
          subjects: ["Análisis Financiero", "Presupuesto", "Relaciones Industriales", "Mercadeo III", "Administración de Personal II", "Administración Financiera I"]
        },
        {
          number: "SÉPTIMO SEMESTRE",
          subjects: ["Gerencia Estratégica", "Administración Financiera II", "Auditoria", "Sistemas de Información Gerencial", "Seminario de Trabajo de Grado", "Práctica Profesional"]
        },
        {
          number: "OCTAVO SEMESTRE",
          subjects: ["Trabajo de Grado", "Consultoría Empresarial", "Emprendimiento", "Liderazgo Organizacional", "Taller de Tesis"]
        }
      ]
    },
    "contaduria-publica": {
      title: "Licenciatura en Contaduría Pública",
      degree: "Licenciado en Contaduría Pública",
      duration: "4 años",
      description: "La carrera de Contaduría Pública está enfocada en formar profesionales especializados en la gestión financiera, contable y tributaria de organizaciones, con un enfoque en la normativa legal y fiscal del país.",
      fieldOfWork: "El licenciado en Contaduría Pública puede dedicarse al ejercicio de su carrera en la empresa privada, pública o independiente, ejerciendo en las áreas de auditorías, asesorías, consultorías contables y fiscales, docencia e investigación.",
      semesters: [
        {
          number: "PRIMER SEMESTRE",
          subjects: ["Formación Cultural I", "Matemática I", "Educación para la Salud I", "Computación I", "Contabilidad I", "Metodología de la Investigación I", "Inglés I", "Lenguaje y Comunicación"]
        },
        {
          number: "SEGUNDO SEMESTRE",
          subjects: ["Formación Cultural II", "Matemática II", "Educación para la Salud II", "Computación II", "Contabilidad II", "Metodología de la Investigación II", "Inglés II", "Fundamentos de Economía"]
        },
        {
          number: "TERCER SEMESTRE",
          subjects: ["Estadística I", "Matemática III", "Psicología Industrial", "Contabilidad III", "Microeconomía", "Derecho Mercantil", "Inglés III", "Administración I"]
        },
        {
          number: "CUARTO SEMESTRE",
          subjects: ["Estadística II", "Matemática Financiera", "Contabilidad IV", "Macroeconomía", "Derecho Laboral", "Administración II", "Contabilidad de Costos I"]
        },
        {
          number: "QUINTO SEMESTRE",
          subjects: ["Análisis Financiero I", "Contabilidad de Costos II", "Derecho Tributario", "Contabilidad Gubernamental", "Organización y Métodos", "Administración de Personal"]
        },
        {
          number: "SEXTO SEMESTRE",
          subjects: ["Análisis Financiero II", "Auditoria I", "Legislación Tributaria", "Presupuesto", "Sistemas de Información", "Práctica Contable"]
        },
        {
          number: "SÉPTIMO SEMESTRE",
          subjects: ["Auditoria II", "Auditoria Fiscal", "Consolidación de Estados Financieros", "Seminario de Trabajo de Grado", "Práctica Profesional"]
        },
        {
          number: "OCTAVO SEMESTRE",
          subjects: ["Trabajo de Grado", "Auditoria Interna", "Consultoría Fiscal", "Ética Profesional", "Taller de Tesis"]
        }
      ]
    },
    "publicidad": {
      title: "Licenciatura en Publicidad",
      degree: "Licenciado en Publicidad",
      duration: "4 años",
      description: "La carrera de Publicidad esta enfocada en formar profesionales creativos y estratégicos con conocimientos en comunicación, marketing, diseño y medios digitales. Los egresados estarán capacitados para desarrollar campañas publicitarias, gestionar marcas, analizar el comportamiento del consumidor.",
      fieldOfWork: "El Licenciado en Publicidad estará en capacidad de analizar, diagnosticar, crear, diseñar e implementar todo lo relacionado con la publicidad y el mercadeo. Su campo de acción profesional comprende: trabajar y administrar empresas y/o medios publicitarios tradicionales y no tradicionales.",
      semesters: [
        {
          number: "PRIMER SEMESTRE",
          subjects: ["Formación Cultural I", "Matemática I", "Educación para la Salud I", "Computación I", "Contabilidad I", "Metodología de la Investigación I", "Inglés I", "Lenguaje y Comunicación"]
        },
        {
          number: "SEGUNDO SEMESTRE",
          subjects: ["Formación Cultural II", "Matemática II", "Educación para la Salud II", "Computación II", "Contabilidad II", "Metodología de la Investigación II", "Inglés II", "Fundamentos de Economía"]
        },
        {
          number: "TERCER SEMESTRE",
          subjects: ["Estadística I", "Matemática III", "Psicología", "Sociología", "Microeconomía", "Inglés III", "Redacción Publicitaria I", "Fundamentos de Publicidad"]
        },
        {
          number: "CUARTO SEMESTRE",
          subjects: ["Estadística II", "Fotografía", "Redacción Publicitaria II", "Diseño Gráfico I", "Macroeconomía", "Mercadeo I", "Medios Publicitarios"]
        },
        {
          number: "QUINTO SEMESTRE",
          subjects: ["Investigación de Mercados", "Diseño Gráfico II", "Producción Radial", "Mercadeo II", "Publicidad I", "Relaciones Públicas"]
        },
        {
          number: "SEXTO SEMESTRE",
          subjects: ["Planificación de Medios", "Producción Televisiva", "Publicidad II", "Mercadeo III", "Comunicación Corporativa", "Marketing Digital"]
        },
        {
          number: "SÉPTIMO SEMESTRE",
          subjects: ["Campaña Publicitaria", "Creatividad Publicitaria", "Comportamiento del Consumidor", "Seminario de Trabajo de Grado", "Práctica Profesional"]
        },
        {
          number: "OCTAVO SEMESTRE",
          subjects: ["Trabajo de Grado", "Gestión de Marcas", "Publicidad Digital", "Emprendimiento Creativo", "Taller de Tesis"]
        }
      ]
    },
    "comercio-internacional": {
      title: "Licenciatura en Comercio Internacional",
      degree: "Licenciado en Comercio Internacional",
      duration: "4 años",
      description: "La carrera de Comercio Internacional esta enfocada en formar profesionales con conocimientos en economía, negocios, logística y normativas comerciales globales. Al culminar la carrera el egresado podrá analizar, coordinar y ejecutar negociaciones internacionales, procesos de importación y exportación.",
      fieldOfWork: "El licenciado en Comercio Internacional puede trabajar en empresas exportadoras e importadoras; en departamentos de comercio exterior para gestionar operaciones de importación y exportación, empresas de logística, asesoramiento empresarial en temas de estrategia comercial internacional.",
      semesters: [
        {
          number: "PRIMER SEMESTRE",
          subjects: ["Formación Cultural I", "Matemática I", "Educación para la Salud I", "Computación I", "Contabilidad I", "Metodología de la Investigación I", "Inglés I", "Lenguaje y Comunicación"]
        },
        {
          number: "SEGUNDO SEMESTRE",
          subjects: ["Formación Cultural II", "Matemática II", "Educación para la Salud II", "Computación II", "Contabilidad II", "Metodología de la Investigación II", "Inglés II", "Fundamentos de Economía"]
        },
        {
          number: "TERCER SEMESTRE",
          subjects: ["Estadística I", "Matemática III", "Geografía Económica", "Microeconomía", "Derecho Mercantil", "Inglés III", "Administración I", "Comercio I"]
        },
        {
          number: "CUARTO SEMESTRE",
          subjects: ["Estadística II", "Matemática Financiera", "Macroeconomía", "Derecho Laboral", "Administración II", "Comercio II", "Mercadeo Internacional I"]
        },
        {
          number: "QUINTO SEMESTRE",
          subjects: ["Análisis Financiero", "Economía Internacional", "Derecho Internacional", "Logística", "Mercadeo Internacional II", "Administración de Personal"]
        },
        {
          number: "SEXTO SEMESTRE",
          subjects: ["Finanzas Internacionales", "Aduanas", "Transporte Internacional", "Negociación Internacional", "Tratados Comerciales", "Sistemas de Información"]
        },
        {
          number: "SÉPTIMO SEMESTRE",
          subjects: ["Proyectos de Inversión", "Comercio Exterior", "Práctica Aduanera", "Seminario de Trabajo de Grado", "Práctica Profesional"]
        },
        {
          number: "OCTAVO SEMESTRE",
          subjects: ["Trabajo de Grado", "Consultoría Internacional", "Emprendimiento Global", "Gestión de Riesgos Internacionales", "Taller de Tesis"]
        }
      ]
    }
  };

  const career = careers[slug as keyof typeof careers];

  if (!career) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-card">
          <div className="container mx-auto px-4">
            <Link to="/" className="inline-flex items-center text-primary hover:text-primary-glow mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a carreras
            </Link>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Badge variant="secondary" className="mb-4">
                  Título Universitario
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                  {career.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  {career.degree}
                </p>
                <p className="text-lg leading-relaxed">
                  {career.description}
                </p>
              </div>

              <Card className="h-fit">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="w-5 h-5 mr-2 text-primary" />
                    Información de la Carrera
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-3 text-primary" />
                    <span>Duración: {career.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-3 text-primary" />
                    <span>Modalidad: Presencial</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-3 text-primary" />
                    <span>Sedes: Valencia y Caracas</span>
                  </div>
                  <Button variant="uah" className="w-full mt-4">
                    Solicitar Información
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Field of Work */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Campo de Trabajo</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {career.fieldOfWork}
              </p>
            </div>
          </div>
        </section>

        {/* Study Plan */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Plan de <span className="hero-text">Estudios</span>
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {career.semesters.map((semester, index) => (
                  <Card key={index} className="h-full">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary">
                        {semester.number}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {semester.subjects.map((subject, subIndex) => (
                          <li key={subIndex} className="flex items-start text-sm">
                            <CheckCircle className="w-3 h-3 mr-2 mt-1 text-primary flex-shrink-0" />
                            <span>{subject}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                ¿Listo para comenzar tu futuro profesional?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Únete a la Universidad Alejandro de Humboldt y forma parte 
                de nuestra comunidad de profesionales exitosos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Iniciar Proceso de Admisión
                </Button>
                <Button variant="outline" size="lg">
                  Solicitar Más Información
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CareerDetail;