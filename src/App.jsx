import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { motion } from 'framer-motion'
import './App.css'


function App() {
  // Variantes de animação para diferentes elementos
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const scaleOnHover = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <motion.header 
        className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div 
            className="flex items-center space-x-4"
            whileHover={{ scale: 1.05 }}
          >
            <img src={companyLogo} alt="Horizon Logo" className="h-16 w-auto " />
          </motion.div>
          
          <nav className="hidden md:flex space-x-8">
            {['Home', 'Serviços', 'Marketing', 'Contato'].map((item, index) => (
              <motion.a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-gray-300 hover:text-blue-400 transition-colors"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          <motion.div {...scaleOnHover}>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0">
              Solicitar Orçamento
            </Button>
          </motion.div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div 
              className="mb-6 inline-block bg-blue-900/50 text-blue-300 border border-blue-700 rounded-full px-4 py-2 text-sm"
              variants={fadeInUp}
            >
              🚀 Transformação Digital Inteligente
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
              variants={fadeInUp}
            >
              Transforme Seu Negócio com{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Soluções Inteligentes
              </span>{' '}
              de TI
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 mb-8 leading-relaxed"
              variants={fadeInUp}
            >
              Especialistas em IA, Chatbots, Automação de Processos e SharePoint para empresas que querem liderar o futuro
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={fadeInUp}
            >
              <motion.div {...scaleOnHover}>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3 border-0"
                >
                  Começar Agora
                </Button>
              </motion.div>
              <motion.div {...scaleOnHover}>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="text-lg px-8 py-3 border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400 hover:bg-blue-900/20"
                >
                  Conhecer Serviços
                </Button>
              </motion.div>
            </motion.div>

            <motion.div 
              className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
              variants={staggerContainer}
            >
              {[
                { number: "70%", text: "Aumento de Eficiência", color: "text-blue-400" },
                { number: "24/7", text: "Suporte Automatizado", color: "text-purple-400" },
                { number: "50+", text: "Projetos Entregues", color: "text-green-400" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className={`text-3xl font-bold ${stat.color}`}>{stat.number}</div>
                  <div className="text-gray-400">{stat.text}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 inline-block bg-blue-900/50 text-blue-300 border border-blue-700 rounded-full px-4 py-2 text-sm">
              Nossos Serviços
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Soluções Tecnológicas Avançadas
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Oferecemos serviços especializados que transformam desafios em oportunidades de crescimento
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: "AI",
                title: "Inteligência Artificial",
                description: "Desenvolvimento de soluções de IA personalizadas para otimizar processos e gerar insights valiosos para seu negócio.",
                features: ["Machine Learning", "Análise Preditiva", "Processamento de Linguagem Natural"],
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: "CB",
                title: "Chatbots Inteligentes",
                description: "Criação de assistentes virtuais que melhoram o atendimento ao cliente e automatizam interações 24/7.",
                features: ["Atendimento Automatizado", "Integração Multi-plataforma", "Analytics Avançado"],
                gradient: "from-green-500 to-emerald-500"
              },
              {
                icon: "AP",
                title: "Automação de Processos",
                description: "Implementação de RPA e workflows inteligentes que reduzem custos operacionais e aumentam a eficiência.",
                features: ["RPA (Robotic Process Automation)", "Workflow Automation", "Integração de Sistemas"],
                gradient: "from-orange-500 to-amber-500"
              },
              {
                icon: "SP",
                title: "SharePoint Solutions",
                description: "Desenvolvimento e customização de intranets corporativas modernas e colaborativas no SharePoint.",
                features: ["Intranet Corporativa", "Gestão Documental", "Colaboração em Equipe"],
                gradient: "from-teal-500 to-cyan-500"
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border border-gray-700 shadow-lg bg-gray-900/50 backdrop-blur-sm rounded-lg p-6"
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-white font-bold text-lg">{service.icon}</span>
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
                <p className="text-gray-300 text-base leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={featureIndex}
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Marketing Section */}
      <section id="marketing" className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 inline-block bg-purple-900/50 text-purple-300 border border-purple-700 rounded-full px-4 py-2 text-sm">
              Marketing Digital
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Impulsione Seu Negócio Online
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Soluções de marketing digital para aumentar sua visibilidade e atrair mais clientes
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { icon: "SEO", title: "SEO e Conteúdo", description: "Otimize seu site para motores de busca e crie conteúdo relevante que atraia seu público-alvo.", gradient: "from-purple-500 to-pink-500" },
              { icon: "ADS", title: "Mídia Paga", description: "Campanhas de anúncios no Google Ads, Social Ads e outras plataformas para resultados rápidos.", gradient: "from-pink-500 to-red-500" },
              { icon: "SM", title: "Social Media", description: "Gestão de redes sociais para construir sua marca, engajar seu público e gerar leads.", gradient: "from-blue-500 to-cyan-500" }
            ].map((service, index) => (
              <motion.div 
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border border-gray-700 shadow-lg bg-gray-900/50 backdrop-blur-sm rounded-lg p-6"
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center`}
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-white font-bold">{service.icon}</span>
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
                <p className="text-gray-300 text-base leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div {...scaleOnHover}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-3 border-0"
              >
                Solicitar Consultoria de Marketing
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 inline-block bg-blue-900/50 text-blue-300 border border-blue-700 rounded-full px-4 py-2 text-sm">
              Entre em Contato
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Pronto para Transformar Seu Negócio?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Solicite um orçamento gratuito e descubra como podemos ajudar sua empresa
            </p>
          </motion.div>

          <motion.div 
            className="max-w-2xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-lg p-8 border border-gray-700"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.div variants={fadeInLeft}>
                  <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">Nome</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Seu nome" 
                    className="shadow appearance-none border border-gray-700 rounded w-full py-3 px-4 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-700/50 transition-all duration-300 focus:border-blue-500"
                  />
                </motion.div>
                <motion.div variants={fadeInRight}>
                  <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="seu@email.com" 
                    className="shadow appearance-none border border-gray-700 rounded w-full py-3 px-4 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-700/50 transition-all duration-300 focus:border-blue-500"
                  />
                </motion.div>
              </motion.div>
              
              {[
                { id: "company", label: "Empresa", placeholder: "Nome da sua empresa", type: "input" },
                { id: "service", label: "Serviço de Interesse", type: "select" },
                { id: "message", label: "Mensagem", placeholder: "Conte-nos sobre seu projeto...", type: "textarea" }
              ].map((field, index) => (
                <motion.div 
                  key={field.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor={field.id} className="block text-gray-300 text-sm font-bold mb-2">{field.label}</label>
                  {field.type === "input" && (
                    <input 
                      type="text" 
                      id={field.id} 
                      name={field.id} 
                      placeholder={field.placeholder} 
                      className="shadow appearance-none border border-gray-700 rounded w-full py-3 px-4 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-700/50 transition-all duration-300 focus:border-blue-500"
                    />
                  )}
                  {field.type === "select" && (
                    <select 
                      id={field.id} 
                      name={field.id} 
                      className="shadow appearance-none border border-gray-700 rounded w-full py-3 px-4 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-700/50 transition-all duration-300 focus:border-blue-500"
                    >
                      <option>Selecione um serviço</option>
                      <option>Inteligência Artificial</option>
                      <option>Chatbots Inteligentes</option>
                      <option>Automação de Processos</option>
                      <option>SharePoint Solutions</option>
                      <option>Marketing Digital</option>
                      <option>Todos os Serviços</option>
                    </select>
                  )}
                  {field.type === "textarea" && (
                    <textarea 
                      id={field.id} 
                      name={field.id} 
                      rows="5" 
                      placeholder={field.placeholder} 
                      className="shadow appearance-none border border-gray-700 rounded w-full py-3 px-4 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-700/50 transition-all duration-300 focus:border-blue-500"
                    ></textarea>
                  )}
                </motion.div>
              ))}
              
              <motion.div 
                className="flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.div {...scaleOnHover}>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3 border-0"
                  >
                    Solicitar Orçamento Gratuito
                  </Button>
                </motion.div>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer 
        className="bg-gray-900 py-12 border-t border-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center md:text-left">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="space-y-4" variants={fadeInUp}>
              <motion.img 
                src={companyLogo} 
                alt="Horizon Logo" 
                className="h-12 w-auto mx-auto md:mx-0 filter invert"
                whileHover={{ scale: 1.05 }}
              />
              <p className="text-gray-400 text-sm leading-relaxed">
                Transformando negócios através de soluções inteligentes de TI e marketing digital.
              </p>
            </motion.div>

            {[
              {
                title: "Serviços",
                links: ["Inteligência Artificial", "Chatbots", "Automação", "SharePoint", "Marketing Digital"]
              },
              {
                title: "Empresa",
                links: ["Sobre Nós", "Nosso Time", "Casos de Sucesso", "Blog"]
              },
              {
                title: "Contato",
                links: ["contato@horizontech.com.br", "(11) 9999-9999", "São Paulo, SP"]
              }
            ].map((section, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <h4 className="text-white font-bold text-lg mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <motion.li 
                      key={linkIndex}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">{link}</a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-8 text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            © 2024 Horizon - Design & Tecnologia. Todos os direitos reservados.
          </motion.div>
        </div>
      </motion.footer>
    </div>
  )
}

export default App

