"use client";

import { useState } from "react";
import { Mail, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

export default function WaitlistForm() {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSduFBoOMsoXoIK0rr8SwQvRkOPgaU_P91twH3X-BAxARbRCAg/formResponse";
    const EMAIL_ENTRY_ID = "entry.1146137020";

    // Expresión regular simple para validar email
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isValidEmail) return;

        setIsSubmitting(true);

        try {
        const formData = new FormData();
        formData.append(EMAIL_ENTRY_ID, email);

        // Enviamos los datos a Google Forms
        await fetch(GOOGLE_FORM_ACTION_URL, {
            method: "POST",
            body: formData,
            mode: "no-cors", // IMPORTANTE: Esto evita errores de seguridad del navegador
        });

        // Asumimos éxito (Google Forms no devuelve respuesta legible en modo no-cors)
        setIsSubmitted(true);
        } catch (error) {
        console.error("Error al enviar:", error);
        alert("Hubo un error al guardar tu correo. Intenta de nuevo."); 
        } finally {
        setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <div id="waitlist-button" className="bg-green-50 border border-green-100 rounded-2xl p-6 text-center animate-in fade-in zoom-in duration-300 mt-10 max-w-md mx-10 sm:mx-auto">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-[#3D3851] font-bold text-lg">¡Estás dentro!</h3>
                <p className="text-[#76718A]">Revisa tu bandeja de entrada pronto.</p>
            </div>
        );
    }

    return (
        <div id="waitlist-button" className="max-w-md mx-10 sm:mx-auto flex flex-col gap-4 mt-20">
            <h1 className="max-w-3xl text-3xl md:text-4xl font-bold text-[#3D3851] tracking-tight mb-6 leading-tight text-center">
                ¿Te interesa la propuesta?<br/>Apuntate en la <span className="text-[#8B7FDB]">lista de espera</span>
            </h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                
                {/* INPUT DE EMAIL */}
                <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#8B7FDB] transition-colors">
                        <Mail className="w-5 h-5" />
                    </div>
                    <input
                        type="email"
                        placeholder="nombre@ejemplo.com"
                        disabled={isSubmitting}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white text-[#3D3851] placeholder:text-gray-400 border border-gray-200 rounded-xl py-3.5 pl-12 pr-4 outline-none focus:border-[#8B7FDB] focus:ring-4 focus:ring-[#8B7FDB]/10 transition-all duration-200 shadow-sm"
                    />
                </div>

                {/* BOTÓN CON LÓGICA DE ESTADO */}
                <button
                    type="submit"
                    disabled={!isValidEmail || isSubmitting}
                    className={`
                        relative w-full py-3.5 px-6 rounded-xl font-bold text-white shadow-lg shadow-[#8B7FDB]/20
                        flex items-center justify-center gap-2 overflow-hidden transition-all duration-300
                        ${
                            isValidEmail && !isSubmitting
                            ? "bg-[#8B7FDB] hover:bg-[#7366CC] hover:scale-[1.02] cursor-pointer" // Estado Activo
                            : "bg-gray-300 cursor-not-allowed opacity-70" // Estado Deshabilitado
                        }
                    `}
                >
                    {isSubmitting ? (
                        // Spinner de carga
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Guardando...</span>
                        </>
                    ) : (
                        // Estado normal
                        <>
                            <span>Unirme</span>
                            {isValidEmail && <ArrowRight className="w-4 h-4" />}
                        </>
                    )}
                    
                </button>
            </form>

            {/* TEXTO INFORMATIVO */}
            <p className="text-center text-sm text-[#76718A]/80">
                Recibirás acceso anticipado y novedades al mail ingresado.
            </p>
        </div>
    );
}