import { Heart, MessageCircle, Eye } from "lucide-react";
import { motion } from "motion/react";

interface PostCardProps {
  image: string;
  title: string;
  date: string;
  delay?: number;
}

export function PostCard({
  image,
  title,
  date,
  delay = 0,
}: PostCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl overflow-hidden border border-[#E8E4F3] shadow-sm hover:shadow-lg transition-shadow"
    >
      <div className="relative aspect-[4/5] overflow-hidden group">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-[#8B7FDB] text-white px-3 py-1 rounded-full text-xs">
          {date}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-[#3D3851] line-clamp-2">{title}</h3>
      </div>
    </motion.div>
  );
}