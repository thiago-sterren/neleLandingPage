import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  delay?: number;
}

export function StatCard({
  icon: Icon,
  label,
  value,
  delay = 0,
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl p-6 border border-[#E8E4F3] shadow-sm"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-[#F8F7FC] rounded-xl flex items-center justify-center">
          <Icon className="w-6 h-6 text-[#8B7FDB]" />
        </div>
      </div>
      <div>
        <p className="text-2xl text-[#3D3851] mb-1">{value}</p>
        <p className="text-sm text-[#76718A]">{label}</p>
      </div>
    </motion.div>
  );
}