import { Share2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ShareButton() {
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: document.title,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copiado para a área de transferência!");
      }
    } catch (error) {
      console.error("Erro ao compartilhar", error);
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleShare}
      className="inline-flex items-center gap-2 text-gray-400 hover:text-black transition-colors font-mono text-[10px] uppercase tracking-[0.2em]"
      title="Compartilhar"
    >
      <Share2 size={16} />
      <span>Compartilhar</span>
    </motion.button>
  );
}
