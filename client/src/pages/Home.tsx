import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink, Shield, Headphones, Code2, Zap, Lock, Users, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

/**
 * Design Philosophy: Glassmorphism + Cyberpunk Moderno
 * - Dark background (#0F1419) with gradient overlays
 * - Cyan (#00D9FF) and Purple (#7C3AED) accent colors
 * - Glassmorphism cards with blur effect
 * - Smooth animations and transitions
 * - Poppins for headings, Inter for body
 */

export default function Home() {
  const [activeService, setActiveService] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();

  const services = [
    {
      id: "performance",
      title: "Otimização de Desempenho",
      description: "Diagnóstico e eliminação de lentidão, limpeza de sistema e otimização de inicialização.",
      icon: Zap,
      color: "from-cyan-400 to-blue-500",
    },
    {
      id: "installation",
      title: "Instalação e Configuração",
      description: "Instalação de sistemas operacionais, softwares e periféricos com suporte completo.",
      icon: Code2,
      color: "from-purple-400 to-pink-500",
    },
    {
      id: "security",
      title: "Segurança e Limpeza",
      description: "Remoção de vírus e malware com implementação de medidas preventivas de segurança.",
      icon: Shield,
      color: "from-emerald-400 to-teal-500",
    },
    {
      id: "support",
      title: "Suporte Técnico Remoto",
      description: "Diagnóstico avançado de problemas e soluções definitivas com foco em SLA.",
      icon: Headphones,
      color: "from-orange-400 to-red-500",
    },
    {
      id: "network",
      title: "Redes e Conectividade",
      description: "Configuração de redes domésticas, VPNs e diagnóstico de problemas de conectividade.",
      icon: Lock,
      color: "from-indigo-400 to-purple-500",
    },
    {
      id: "management",
      title: "Gestão de Acessos",
      description: "Suporte a políticas de segurança, MFA e gestão de contas com foco em IAM.",
      icon: Users,
      color: "from-cyan-400 to-purple-500",
    },
  ];

  const projects = [
    {
      title: "Cyber-Projetos",
      description: "Laboratório pessoal de cibersegurança com projetos práticos de defesa e análise de vulnerabilidades.",
      tags: ["Cibersegurança", "Shell", "Python", "Segurança"],
      link: "https://github.com/AlanStacholski/Cyber-projetos",
      icon: Shield,
    },
    {
      title: "TCC - Automação Industrial",
      description: "Sistema de automação de orçamentação industrial para Modelcraft do Brasil com foco em qualidade de software.",
      tags: ["Engenharia de Software", "Testes", "Automação", "Qualidade"],
      link: "https://www.linkedin.com/posts/alanjr_tcc-engenhariadesoftware-automaaexaetoindustrial-activity-7400146023743942656-_iEC?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADKgmgQB-f39fjvR2ENSv9Lm_jE47uUF3Y8",
      icon: Code2,
    },
    {
      title: "Sistema de Pizzaria Delivery - Desenvolvimento Full Stack",
      description: "Sistema completo de gerenciamento de pizzaria com delivery, desenvolvido com Node.js, Express, MongoDB e frontend vanilla JavaScript. Projeto acadêmico com arquitetura robusta e documentação Swagger interativa.",
      tags: ["CRUD", "JavaScript", "API REST", "Full Stack", "MongoDB"],
      link: "https://github.com/AlanStacholski/Software-Gerenciamento-Pizza",
      icon: Zap,
    },
  ];

  const skills = {
    cybersecurity: ["IT Security Foundations", "Vulnerability Management", "IAM & MFA", "Certificação Digital", "Diagnóstico de Rede Avançado"],
    systems: ["Windows Server/Client", "macOS", "Ambientes Virtualizados", "Active Directory", "Cloud Support"],
    infrastructure: ["VPN & Roteamento", "Troubleshooting Avançado", "SLA Management", "Documentação Técnica"],
    development: ["Engenharia de Software", "JavaScript", "Python", "Shell", "Algoritmos"],
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glassmorphism border-b border-cyan-500/20 dark:border-cyan-500/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 dark:from-cyan-400 dark:to-purple-500 bg-clip-text text-transparent">
            Alan Stacholski
          </h1>
          <div className="flex gap-4 items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-blue-100 dark:hover:bg-slate-800 transition"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun size={24} className="text-yellow-400" />
              ) : (
                <Moon size={24} className="text-blue-600" />
              )}
            </button>
            <a href="https://github.com/AlanStacholski" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-cyan-400 transition">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/alanjr/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-cyan-400 transition">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background with gradient animation */}
        <div
          className="absolute inset-0 opacity-30 gradient-animated"
          style={{
            backgroundImage: "linear-gradient(135deg, #00D9FF 0%, #7C3AED 50%, #0F1419 100%)",
          }}
        />

        {/* Hero background image */}
        <div className="absolute inset-0 opacity-20">
          <img src="/images/hero-background.png" alt="Hero Background" className="w-full h-full object-cover" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold leading-tight">
              Engenheiro de Software &
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 dark:from-cyan-400 dark:to-purple-500 bg-clip-text text-transparent">
                Especialista em Cibersegurança
              </span>
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed">
              Transformando infraestruturas de TI com troubleshooting avançado e visão estratégica em segurança. Sua próxima solução em tecnologia começa aqui.
            </p>

            <div className="flex gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-500 dark:from-cyan-500 dark:to-cyan-600 hover:from-blue-700 hover:to-blue-600 dark:hover:from-cyan-600 dark:hover:to-cyan-700 text-white dark:text-black font-semibold"
              >
                Explorar Projetos
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600/50 dark:border-cyan-500/50 hover:bg-blue-600/10 dark:hover:bg-cyan-500/10 text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300"
              >
                Contratar Serviços
              </Button>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/20 dark:bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-400/20 dark:bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      </section>

      {/* Projetos Section */}
      <section className="relative py-20 border-t border-blue-200 dark:border-cyan-500/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Projetos em Destaque</h3>
            <p className="text-gray-400 text-lg">Explore meus principais projetos em cibersegurança e engenharia de software</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, idx) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={idx}
                  className="glassmorphism p-6 rounded-xl hover:border-blue-400/50 dark:hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 dark:hover:shadow-cyan-500/20 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <IconComponent className="w-12 h-12 text-blue-600 dark:text-cyan-400 group-hover:text-blue-700 dark:group-hover:text-purple-400 transition" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="text-xs bg-blue-500/20 dark:bg-cyan-500/20 text-blue-700 dark:text-cyan-300 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 transition"
                  >
                    Ver Projeto <ExternalLink size={16} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section className="relative py-20 border-t border-blue-200 dark:border-cyan-500/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Serviços de Suporte Técnico Remoto</h3>
            <p className="text-gray-400 text-lg">Expertise N2 ao seu alcance, sem sair de casa</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const IconComponent = service.icon;
              const isActive = activeService === service.id;
              return (
                <div
                  key={service.id}
                  onClick={() => setActiveService(isActive ? null : service.id)}
                  className={`glassmorphism p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    isActive
                      ? "border-blue-400/50 dark:border-cyan-400/50 shadow-lg shadow-blue-500/20 dark:shadow-cyan-500/20"
                      : "hover:border-blue-400/30 dark:hover:border-cyan-400/30 hover:shadow-md hover:shadow-blue-500/10 dark:hover:shadow-cyan-500/10"
                  }`}
                >
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} p-3 mb-4 flex items-center justify-center`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">{service.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-20 border-t border-blue-200 dark:border-cyan-500/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Habilidades Técnicas</h3>
            <p className="text-gray-400 text-lg">Expertise em cibersegurança, infraestrutura e desenvolvimento</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="space-y-4">
                <h4 className="text-xl font-bold text-blue-600 dark:text-cyan-400 capitalize">
                  {category === "cybersecurity"
                    ? "Cibersegurança"
                    : category === "systems"
                      ? "Sistemas Operacionais"
                      : category === "infrastructure"
                        ? "Infraestrutura"
                        : "Desenvolvimento"}
                </h4>
                <ul className="space-y-2">
                  {skillList.map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition">
                      <div className="w-2 h-2 bg-blue-500 dark:bg-purple-500 rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section className="relative py-20 border-t border-blue-200 dark:border-cyan-500/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-4xl font-bold mb-8">Sobre Mim</h3>

            <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Graduado em <strong>Engenharia de Software</strong>, minha trajetória é marcada pela busca incessante por estabilidade operacional e segurança. Possuo sólida experiência como <strong>Analista de Suporte</strong>, atuando na linha de frente da sustentação avançada e resolução de incidentes de alta complexidade.
              </p>

              <p>
                Minha base técnica é complementada por uma formação em <strong>disciplina e liderança</strong> adquirida durante Exército Brasileiro, recebendo a condecoração por Honra ao Mérito. Essa experiência me permite operar sob alta pressão, traduzindo resiliência e comprometimento em melhoria contínua de processos.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-cyan-500/20">
                <div className="glassmorphism p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-blue-600 dark:text-cyan-400">5+</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Anos de Experiência</p>
                </div>
                <div className="glassmorphism p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-blue-600 dark:text-purple-400">100+</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Incidentes Resolvidos</p>
                </div>
                <div className="glassmorphism p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-blue-600 dark:text-emerald-400">99%</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Taxa de Satisfação</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section className="relative py-20 border-t border-blue-200 dark:border-cyan-500/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-4">Vamos Conversar?</h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
              Interessado em contratar para um projeto ou precisa de suporte técnico? Entre em contato comigo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.linkedin.com/in/alanjr/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 glassmorphism rounded-lg hover:border-blue-400/50 dark:hover:border-cyan-400/50 transition"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a
                href="https://github.com/AlanStacholski"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 glassmorphism rounded-lg hover:border-blue-400/50 dark:hover:border-cyan-400/50 transition"
              >
                <Github size={20} />
                GitHub
              </a>
              <a
                href="mailto:alanstacholskijunior@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 dark:from-cyan-500 dark:to-purple-600 hover:from-blue-700 hover:to-blue-600 dark:hover:from-cyan-600 dark:hover:to-purple-700 text-white rounded-lg transition"
              >
                <Mail size={20} />
                Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-200 dark:border-cyan-500/20 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <p>© 2025 Alan Stacholski. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
