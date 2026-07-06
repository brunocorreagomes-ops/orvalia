import { motion } from "framer-motion";
import { ArrowUpRight, Award, Compass, TrendingUp, Cpu } from "lucide-react";
import MagneticWrapper from "./MagneticWrapper";

export default function FounderSection() {
  const pillars = [
    {
      icon: Award,
      title: "Bagagem Comercial",
      desc: "Mais de 18 anos de inteligência comercial real e análise de dados para transformar seu tráfego em clientes pagantes."
    },
    {
      icon: Compass,
      title: "Narrativa de Marca",
      desc: "Modelagem de marcas e identidades de alto nível que justificam preços maiores e consolidam o seu valor no mercado."
    },
    {
      icon: TrendingUp,
      title: "SEO Local e Regional",
      desc: "Estruturação técnica para que sua empresa lidere as pesquisas do Google na região de Indaiatuba, Salto e Campinas."
    },
    {
      icon: Cpu,
      title: "Busca com IA e GEO",
      desc: "Otimização avançada para colocar seu negócio como indicação direta do ChatGPT, Gemini e buscas de IA."
    }
  ];

  return (
    <section id="fundador" className="py-24 md:py-36 bg-brand-bg relative overflow-hidden border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent-light/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-brand-accent-light" />
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-accent-light">Por Trás do Estúdio</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase leading-[1.1]">
              Estratégia comercial <br />
              <span className="text-gradient">antes do design.</span>
            </h2>
            
            <div className="space-y-6 text-brand-secondary/80 font-light text-base md:text-lg leading-relaxed">
              <p className="font-serif italic text-white/90 text-xl">
                "Design sem estratégia é apenas decoração barulhenta. Na Orvalia, criamos caminhos de decisão projetados para acelerar vendas."
              </p>
              
              <p>
                A Orvalia é liderada por <strong className="text-white font-medium">Bruno Gomes</strong>, especialista que soma mais de 18 anos de atuação direta em inteligência de mercado, liderança executiva e marketing de performance. 
              </p>
              
              <p>
                Essa experiência de negócios beneficia diretamente o seu faturamento: enquanto agências tradicionais entregam apenas telas decoradas, nosso foco está em <strong className="text-white font-medium">identificar os diferenciais competitivos da sua empresa e traduzi-los em uma estrutura digital de alta performance</strong>. Desde a velocidade de abertura até a hierarquia de argumentos, tudo é projetado para reduzir a hesitação do cliente e motivar o contato comercial.
              </p>
              
              <p>
                Ao conectar sofisticação visual refinada com leitura de consumo regional, asseguramos que profissionais liberais, clínicas de saúde e empresas em expansão em <strong className="text-white font-medium">Indaiatuba, Campinas, Salto, Itu e região</strong> construam autoridade duradoura e conquistem leads de maior qualidade.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <MagneticWrapper>
                <a 
                  href="https://wa.me/5511978959567?text=Olá,%20Bruno.%20Vi%20a%20seção%20por%20trás%20da%20Orvalia%20e%20gostaria%20de%20conversar%20sobre%20a%20estratégia%20do%20meu%20negócio."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-4 bg-brand-accent-light text-brand-bg px-8 py-4 rounded-full font-black uppercase tracking-[0.2em] text-xs shadow-xl hover:shadow-brand-accent-light/20 transition-all duration-300"
                >
                  <span>Avaliar minha presença digital</span>
                  <div className="w-7 h-7 rounded-full bg-brand-bg flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                    <ArrowUpRight className="text-brand-accent-light" size={14} />
                  </div>
                </a>
              </MagneticWrapper>
            </div>
          </div>

          {/* Right Visual Column (Pillars Grid) */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="p-8 rounded-[2.5rem] bg-white/[0.01] border border-white/5 hover:border-brand-accent-light/25 transition-all duration-500 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-brand-accent-light/10 flex items-center justify-center mb-6 border border-brand-accent-light/10 group-hover:bg-brand-accent-light/20 group-hover:border-brand-accent-light/30 transition-all duration-500 shrink-0">
                        <IconComponent className="text-brand-accent-light" size={20} />
                      </div>
                      <h3 className="text-white font-black text-base uppercase tracking-tight mb-3">
                        {pillar.title}
                      </h3>
                      <p className="text-brand-secondary/60 text-[11px] leading-relaxed font-mono uppercase tracking-wider">
                        {pillar.desc}
                      </p>
                    </div>
                    <div className="w-full h-[1px] bg-white/5 group-hover:bg-brand-accent-light/20 transition-all duration-500 mt-6" />
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
