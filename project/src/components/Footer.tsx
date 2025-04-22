import React from 'react';
import { Heart, Mail, PhoneCall, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-6 w-6 text-teal-400" />
              <span className="text-xl font-bold text-white">VitalCorp</span>
            </div>
            <p className="mb-4 text-gray-400">
              Transformando a saúde e o bem-estar corporativo com soluções personalizadas e baseadas em IA.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Links Rápidos</h3>
            <ul className="space-y-2">
              <FooterLink href="#features">Recursos</FooterLink>
              <FooterLink href="#benefits">Benefícios</FooterLink>
              <FooterLink href="#how-it-works">Como Funciona</FooterLink>
              <FooterLink href="#pricing">Preços</FooterLink>
              <FooterLink href="#faq">FAQ</FooterLink>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Legal</h3>
            <ul className="space-y-2">
              <FooterLink href="#terms">Termos de Uso</FooterLink>
              <FooterLink href="#privacy">Política de Privacidade</FooterLink>
              <FooterLink href="#cookies">Política de Cookies</FooterLink>
              <FooterLink href="#compliance">Compliance LGPD</FooterLink>
              <FooterLink href="#security">Segurança</FooterLink>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-teal-400 mr-3 mt-0.5" />
                <span>Av. Paulista, 1000<br />São Paulo, SP, Brasil</span>
              </li>
              <li className="flex items-center">
                <PhoneCall className="h-5 w-5 text-teal-400 mr-3" />
                <span>+55 11 4444-5555</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-teal-400 mr-3" />
                <span>contato@vitalcorp.com.br</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} VitalCorp. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#terms" className="text-sm text-gray-500 hover:text-teal-400 transition duration-300">
              Termos
            </a>
            <a href="#privacy" className="text-sm text-gray-500 hover:text-teal-400 transition duration-300">
              Privacidade
            </a>
            <a href="#cookies" className="text-sm text-gray-500 hover:text-teal-400 transition duration-300">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a 
      href={href} 
      className="hover:text-teal-400 transition duration-300"
    >
      {children}
    </a>
  </li>
);

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <a
    href="#"
    className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-500 transition duration-300"
  >
    {icon}
  </a>
);

export default Footer;