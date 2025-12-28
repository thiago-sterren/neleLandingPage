import { History, ShieldCheck, Sparkles, Users, ArrowRight } from "lucide-react";
import GoToWaitlistButton from "./GoToWailistButton";

export default function ProjectPromise() {
    return (
        <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
            {/* 1. ENCABEZADO CENTRADO */}
            <div className="text-center max-w-4xl mx-auto mb-16">
                <h1 className="text-6xl md:text-7xl font-bold text-[#8B7FDB] tracking-tight mb-6 leading-tight mb-10">
                    nele
                </h1>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B7FDB]/10 text-[#8B7FDB] text-sm font-semibold mb-6 text-xl">
                    <span>{"Problemática"}</span>
                    <ArrowRight className="w-7 h-7" />
                    <span>{"Solución"}</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-[#3D3851] tracking-tight mb-6 leading-tight">
                    Tu newsletter es genial. <br className="hidden md:block" /> 
                    Pero es imposible de buscar. <span className="text-[#8B7FDB]">Crea uno que no caduca.</span>
                </h2>
                
                <p className="text-xl text-[#76718A] leading-relaxed">
                    No dejes que tu mejor contenido muera en las bandejas de entrada. 
                    Permite a tus suscriptores <strong className="text-[#3D3851] font-semibold">chatear</strong> —sí, chatear— con todo tu historial de publicaciones para encontrar valor al instante.
                </p>
            </div>

            {/* 2. LA "PROMESA" VISUAL (El cerebro digital) */}
            <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 p-8 md:p-12 mb-12 relative overflow-hidden">
                {/* Decoración de fondo sutil */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#8B7FDB]/10 to-transparent rounded-bl-full -mr-16 -mt-16 pointer-events-none" />
                
                <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                    <div className="bg-[#F5F7FB] p-6 rounded-2xl flex-shrink-0">
                        <Sparkles className="w-16 h-16 text-[#8B7FDB]" />
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-[#3D3851] mb-3">
                            Dale a tus suscriptores un cerebro digital
                        </h3>
                        <p className="text-[#76718A] text-xl">
                            Una IA entrenada exclusivamente con <strong>tus posts anteriores</strong>. Olvida los cientos de preguntas frustrantes; ella entrega respuestas precisas en el instante, basadas en tu propia sabiduría acumulada.
                        </p>
                    </div>
                </div>
            </div>

            {/* 3. GRID DE BENEFICIOS (La lista transformada) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4">
                        <ShieldCheck className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="text-2xl font-bold text-[#3D3851] mb-2">Cero alucinaciones</h4>
                    <p className="text-[#76718A] text-xl sm:text-lg leading-relaxed">
                        La IA solo responde usando estrictamente lo que escribiste. Tu conocimiento, tus datos, sin inventos.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                        <History className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="text-2xl font-bold text-[#3D3851] mb-2">Archivo vivo</h4>
                    <p className="text-[#76718A] text-xl sm:text-lg leading-relaxed">
                        Recupera publicaciones de hace meses en segundos. El contenido antiguo vuelve a ser útil hoy.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-4">
                        <Users className="w-6 h-6 text-[#8B7FDB]" />
                    </div>
                    <h4 className="text-2xl font-bold text-[#3D3851] mb-2">Mayor retención</h4>
                    <p className="text-[#76718A] text-xl sm:text-lg leading-relaxed">
                        Tus suscriptores tienen una razón para quedarse y consultar tu plataforma, no solo leer el mail.
                    </p>
                </div>
            </div>

            {/* 4. Call to Action Button */}
            <GoToWaitlistButton />
        </section>
        
    )
}