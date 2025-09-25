import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import uahLogo from "@/assets/uah-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* University Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={uahLogo} 
                alt="Universidad Alejandro de Humboldt" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold">Universidad Alejandro de Humboldt</h3>
                <p className="text-sm text-background/70">Excelencia Académica desde 1983</p>
              </div>
            </div>
            <p className="text-background/80 mb-6 max-w-md">
              Formamos profesionales integrales con valores, conocimientos y competencias 
              para transformar la sociedad venezolana.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/unihumboldt/?locale=es_LA" className="text-background/70 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/unihumboldt/?g=5" className="text-background/70 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://x.com/uah_oficial?lang=es" className="text-background/70 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-background/70 hover:text-background transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/#carreras" className="text-background/70 hover:text-background transition-colors">
                  Carreras
                </Link>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Estudiantes
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Sobre Nosotros
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-background/80">+58 (424) 157-8708</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-background/80">informacion@unihumboldt.edu.ve</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-background/80">Valencia y Caracas</p>
                  <p className="text-background/60 text-sm">Venezuela</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm">
              © 2024 Universidad Alejandro de Humboldt. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
                Términos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;