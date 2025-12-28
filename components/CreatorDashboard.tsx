"use client"

import { motion } from "motion/react";
import { PostCard } from "./PostCard";
import { StatCard } from "./StatCard";
import { SocialLinkCard } from "./SocialLinkCard";
import { Users, Grid3x3, BriefcaseBusiness, Instagram, Globe, MessageCircle, Link, ChartArea } from "lucide-react";

export default function CreatorDashboard() {
  const posts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1583545889266-55be2d76c6c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwY29sb2duZSUyMHBlcmZ1bWV8ZW58MXx8fHwxNzY2ODYwODkwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Los 5 mejores perfumes amaderados para el otoño: guía definitiva para caballeros",
      date: "Hace 2 días",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1759794108525-94ff060da692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNjdWxpbmUlMjBmcmFncmFuY2UlMjBib3R0bGV8ZW58MXx8fHwxNzY2ODYwODkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Notas olfativas que conquistan: el poder de las fragancias cítricas",
      date: "Hace 4 días",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1759793500391-24a07d5a1269?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtZW5zJTIwcGVyZnVtZXxlbnwxfHx8fDE3NjY4NjA4OTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Perfumes de lujo vs. asequibles: ¿realmente vale la pena la inversión?",
      date: "Hace 1 semana",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1599447068894-089fabc9876c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZ3Jvb21pbmclMjBwcm9kdWN0c3xlbnwxfHx8fDE3NjY4NjA4OTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Cómo aplicar correctamente tu colonia para que dure todo el día",
      date: "Hace 1 semana",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1747052881000-a640a4981dd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcGVyZnVtZSUyMGJvdHRsZXxlbnwxfHx8fDE3NjY4NDQ5MTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Fragancias atemporales: clásicos masculinos que nunca pasan de moda",
      date: "Hace 2 semanas",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1615602400380-3795d0b23777?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwYWZ0ZXJzaGF2ZSUyMHNjZW50fGVufDF8fHx8MTc2Njg2MDg5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Aftershave vs. Eau de Toilette: ¿cuál es la diferencia real?",
      date: "Hace 2 semanas",
    },
  ];

  return (
    <div className="min-h-screen pb-4 px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3">
        <h1 className="max-w-3xl text-3xl md:text-4xl font-bold text-[#3D3851] tracking-tight mb-6 leading-tight text-center">
            Controla y analiza<br/>todo tu contenido desde tu <span className="text-[#8B7FDB]">dashboard</span>
        </h1>
        <div className="w-full max-w-6xl bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100 ring-1 ring-black/5">
            {/* Header */}
            <div className="bg-white border-b border-[#E8E4F3]">
                <div className="max-w-7xl mx-auto px-6 py-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#8B7FDB] to-[#C5BAED] flex items-center justify-center">
                        <BriefcaseBusiness className="w-8 h-8 text-white" />
                    </div>
                    <div>
                        <h1 className="text-2xl text-[#3D3851]">Esencia Masculina</h1>
                        <p className="text-[#76718A]">Newsletter de fragancias para hombres</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-8">
                {/* Social Links Section */}
                <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
                >
                <div className="flex items-center gap-2 mb-6">
                    <Link className="w-5 h-5 text-[#8B7FDB]" />
                    <h2 className="text-xl text-[#3D3851]">Enlaces y redes sociales</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <SocialLinkCard
                    icon={Instagram}
                    label="Instagram"
                    delay={0.1}
                    />
                    <SocialLinkCard
                    icon={Globe}
                    label="Tienda online"
                    delay={0.2}
                    />
                    <SocialLinkCard
                    icon={Link}
                    label="TikTok"
                    delay={0.3}
                    />
                    <SocialLinkCard
                    icon={MessageCircle}
                    label="WhatsApp"
                    delay={0.4}
                    />
                </div>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-8"
                >
                <div className="flex items-center gap-2 mb-6">
                    <ChartArea className="w-5 h-5 text-[#8B7FDB]" />
                    <h2 className="text-xl text-[#3D3851]">Estadísticas</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <StatCard
                    icon={Users}
                    label="Suscriptores vigentes"
                    value="1.75K"
                    delay={0.3}
                    />
                    <StatCard
                    icon={Grid3x3}
                    label="Publicaciones totales"
                    value="47"
                    delay={0.4}
                    />
                </div>
                </motion.div>

                {/* Posts Section */}
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                >
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                    <Grid3x3 className="w-5 h-5 text-[#8B7FDB]" />
                    <h2 className="text-xl text-[#3D3851]">Publicaciones recientes</h2>
                    </div>
                    <button className="text-[#8B7FDB] hover:text-[#7366CC] transition-colors">
                    Ver todas →
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post, index) => (
                    <PostCard
                        key={post.id}
                        image={post.image}
                        title={post.title}
                        date={post.date}
                        delay={0.1 * index}
                    />
                    ))}
                </div>
                </motion.div>
            </div>
        </div>
    </div>
  );
}