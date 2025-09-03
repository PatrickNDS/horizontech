import React from 'react';
import { ChatBot } from 'react-chatbotify';

const ChatbotComponent = () => {
  const flow = {
    start: {
      message: "Olá! Eu sou o assistente virtual da Horizon. Como posso ajudar hoje?",
      options: [
        { value: "servicos", label: "Quais serviços vocês oferecem?" },
        { value: "contato", label: "Como posso entrar em contato?" },
        { value: "marketing", label: "Fale-me sobre marketing digital." },
        { value: "ia", label: "Explique sobre Inteligência Artificial." },
      ],
    },
    servicos: {
      message: "Oferecemos soluções em Inteligência Artificial, Chatbots Inteligentes, Automação de Processos, SharePoint Solutions e Marketing Digital. Qual área te interessa mais?",
      options: [
        { value: "ia", label: "Inteligência Artificial" },
        { value: "chatbots", label: "Chatbots Inteligentes" },
        { value: "automacao", label: "Automação de Processos" },
        { value: "sharepoint", label: "SharePoint Solutions" },
        { value: "marketing", label: "Marketing Digital" },
        { value: "start", label: "Voltar ao início" },
      ],
    },
    contato: {
      message: "Você pode nos contatar pelo email contato@horizontech.com.br ou pelo telefone (11) 9999-9999. Estamos localizados em São Paulo, SP.",
      options: [
        { value: "start", label: "Voltar ao início" },
      ],
    },
    marketing: {
      message: "Nossos serviços de Marketing Digital incluem SEO e Conteúdo, Mídia Paga e Gestão de Redes Sociais. Gostaria de saber mais sobre algum deles?",
      options: [
        { value: "seo", label: "SEO e Conteúdo" },
        { value: "midia_paga", label: "Mídia Paga" },
        { value: "redes_sociais", label: "Gestão de Redes Sociais" },
        { value: "start", label: "Voltar ao início" },
      ],
    },
    ia: {
      message: "Em Inteligência Artificial, desenvolvemos soluções personalizadas para otimizar processos e gerar insights valiosos, incluindo Machine Learning, Análise Preditiva e Processamento de Linguagem Natural.",
      options: [
        { value: "start", label: "Voltar ao início" },
      ],
    },
    chatbots: {
      message: "Nossos Chatbots Inteligentes oferecem atendimento 24/7, integração multiplataforma e analytics avançado para melhorar a experiência do cliente.",
      options: [
        { value: "start", label: "Voltar ao início" },
      ],
    },
    automacao: {
      message: "Em Automação de Processos, implementamos RPA, Workflow Automation e Integração de Sistemas para reduzir custos e aumentar a eficiência.",
      options: [
        { value: "start", label: "Voltar ao início" },
      ],
    },
    sharepoint: {
      message: "Com SharePoint Solutions, desenvolvemos e customizamos intranets corporativas modernas, gestão documental e colaboração em equipe.",
      options: [
        { value: "start", label: "Voltar ao início" },
      ],
    },
    seo: {
      message: "Com SEO e Conteúdo, otimizamos seu site para motores de busca e criamos conteúdo relevante que atrai seu público-alvo.",
      options: [
        { value: "marketing", label: "Voltar para Marketing" },
        { value: "start", label: "Voltar ao início" },
      ],
    },
    midia_paga: {
      message: "Em Mídia Paga, criamos campanhas de anúncios no Google Ads e Social Ads para resultados rápidos e eficazes.",
      options: [
        { value: "marketing", label: "Voltar para Marketing" },
        { value: "start", label: "Voltar ao início" },
      ],
    },
    redes_sociais: {
      message: "Nossa Gestão de Redes Sociais constrói sua marca, engaja seu público e gera leads através de estratégias eficazes.",
      options: [
        { value: "marketing", label: "Voltar para Marketing" },
        { value: "start", label: "Voltar ao início" },
      ],
    },
  };

  return (
    <ChatBot
      flow={flow}
      options={{
        chatHistory: { storageKey: 'chat_history' },
        theme: {
          primaryColor: '#6366F1',
          secondaryColor: '#4F46E5',
          fontFamily: 'Arial, sans-serif',
          chatWindowBg: '#1E293B',
          botBubbleBg: '#334155',
          botFontColor: '#F8FAFC',
          userBubbleBg: '#6366F1',
          userFontColor: '#F8FAFC',
        },
        chatWindow: {
          width: '350px',
          height: '500px',
          borderRadius: '10px',
          right: '20px',
          bottom: '20px',
          zIndex: 1000,
        },
        header: {
          title: 'Horizon Chatbot 🤖',
          avatar: 'https://cdn-icons-png.flaticon.com/512/4712/4712035.png',
        },
        footer: {
          text: 'Powered by Horizon AI',
        },
        tooltip: {
          text: 'Converse com nosso assistente!',
          backgroundColor: '#6366F1',
          textColor: '#F8FAFC',
        },
      }}
    />
  );
};

export default ChatbotComponent;


