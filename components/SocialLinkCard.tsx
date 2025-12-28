import { motion } from "motion/react";
import { LucideIcon, ExternalLink } from "lucide-react";

interface SocialLinkCardProps {
  icon: LucideIcon;
  label: string;
  url?: string;
  delay?: number;
}

export function SocialLinkCard({
  icon: Icon,
  label,
  //url = "",
  delay = 0,
}: SocialLinkCardProps) {
  return (
    <motion.a
      //href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="bg-white rounded-xl p-4 border border-[#E8E4F3] shadow-sm hover:shadow-md hover:border-[#8B7FDB] transition-all flex items-center justify-between group"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[#F8F7FC] rounded-lg flex items-center justify-center group-hover:bg-[#E8E4F3] transition-colors">
          <Icon className="w-5 h-5 text-[#8B7FDB]" />
        </div>
        <span className="text-[#3D3851]">{label}</span>
      </div>
      <ExternalLink className="w-4 h-4 text-[#76718A] group-hover:text-[#8B7FDB] transition-colors" />
    </motion.a>
  );
}
