"use client"

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ChatMessage } from "./ChatMessage";
import { RefreshCw, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { useRef } from "react";
import { useInView } from "motion/react";

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
  isTyping?: boolean;
}

export default function ChatDemo() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);

  // Configuración para detectar el Viewport
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { 
    once: true,   // Solo se activa la primera vez que entra (para no reiniciar al scrollear arriba/abajo)
    amount: 0.3   // Se activa cuando el 30% del componente es visible
  });

  const demoSequence = [
    {
      role: "user" as const,
      content: "¿Qué recomendaste para combinar botas texanas?",
      delay: 500,
    },
    {
      role: "assistant" as const,
      content: "",
      isTyping: true,
      delay: 1000,
    },
    {
      role: "assistant" as const,
      content:
        'En la edición #4 de mayo de 2025, recomendé usarlas con vestidos largos floreados o jeans rectos.\n\nAquí tienes el fragmento completo:\n\n"Las botas texanas están de vuelta y son perfectas para crear looks versátiles. Mi combinación favorita es con vestidos largos estilo boho o jeans rectos de corte alto. Para un toque más urbano, pruébalas con una falda y chaqueta de cuero."',
      delay: 2000,
    },
  ];

  const startDemo = () => {
    setMessages([]);
    setIsPlaying(true);

    let currentMessages: Message[] = [];
    let messageId = 0;

    demoSequence.forEach((step, index) => {
      setTimeout(
        () => {
          messageId++;
          const newMessage: Message = {
            id: messageId,
            role: step.role,
            content: step.content,
            isTyping: step.isTyping,
          };

          currentMessages = [...currentMessages, newMessage];
          setMessages([...currentMessages]);

          // Si es el último mensaje o el mensaje de typing, programar la eliminación del typing
          if (
            step.isTyping &&
            index < demoSequence.length - 1
          ) {
            setTimeout(
              () => {
                currentMessages = currentMessages.filter(
                  (m) => !m.isTyping,
                );
                setMessages([...currentMessages]);
              },
              demoSequence[index + 1].delay - 100,
            );
          }

          // Si es el último mensaje, marcar como no reproduciendo
          if (index === demoSequence.length - 1) {
            setTimeout(() => {
              setIsPlaying(false);
            }, 500);
          }
        },
        demoSequence
          .slice(0, index)
          .reduce((acc, curr) => acc + curr.delay, 0),
      );
    });
  };

  useEffect(() => {
    if (isInView) {
        startDemo();
    }
  }, [isInView]);

  return (
    <div ref={containerRef} className="pt-20 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-8"
        >
            <h1 className="max-w-3xl text-3xl md:text-4xl font-bold text-[#3D3851] tracking-tight mb-6 leading-tight">
                Chat con IA para tu newsletter
            </h1>
            <div className="inline-flex items-center gap-2 bg-[#C5BAED] text-[#5546A0] px-4 py-2 rounded-full mb-4">
                <Sparkles className="w-4 h-4" />
                <span>Demo Interactiva</span>
            </div>
            <p className="text-[#76718A] text-lg max-w-2xl">
                De esta manera los usuarios interactuarán con el
                asistente inteligente de una creadora de contenido de moda, por ejemplo
            </p>
        </motion.div>

        {/* Chat Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#D4CFEA]"
        >
          {/* Chat Header */}
          <div className="bg-[#8B7FDB] px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white">Asistente IA</h3>
                <p className="text-sm text-[#C5BAED]">
                  Siempre disponible
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-white">
                En línea
              </span>
            </div>
          </div>

          {/* Messages */}
          <div className="h-[500px] overflow-y-auto p-6 space-y-4 bg-[#F8F7FC]">
            {messages.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-[#9B96AD]">
                <Sparkles className="w-12 h-12 mb-3" />
                <p>Iniciando conversación...</p>
              </div>
            ) : (
              messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChatMessage
                    role={message.role}
                    content={message.content}
                    isTyping={message.isTyping}
                  />
                </motion.div>
              ))
            )}
          </div>

          {/* Input Area (disabled in demo) */}
          <div className="border-t border-[#E8E4F3] px-6 py-4 bg-white">
            <div className="flex gap-2 items-center">
              <div className="flex-1 bg-[#F8F7FC] border border-[#E8E4F3] rounded-full px-4 py-3 text-[#9B96AD]">
                Escribe tu mensaje...
              </div>
              <div className="w-12 h-12 rounded-full bg-[#8B7FDB] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Reset Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 text-center"
        >
          <Button
            onClick={startDemo}
            disabled={isPlaying}
            className="bg-[#8B7FDB] hover:bg-[#7366CC] text-white rounded-full px-6 py-6 shadow-lg hover:shadow-xl transition-all disabled:opacity-50 cursor-pointer"
          >
            <RefreshCw
              className={`w-4 h-4 mr-2 ${isPlaying ? "animate-spin" : ""}`}
            />
            {isPlaying
              ? "Reproduciendo..."
              : "Volver a reproducir demo"}
          </Button>
        </motion.div>
      </div>
    </div>
  );
}