import { X, Download, Pencil } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { downloadImage } from "../../../../shared/utils/downloadImage";

interface ImagePreviewModalProps {
  open: boolean;
  image: string;
  title: string;
  onClose: () => void;
}

const ImagePreviewModal = ({
  open,
  image,
  title,
  onClose,
}: ImagePreviewModalProps) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="relative w-full max-w-5xl rounded-3xl bg-slate-900 p-6"
          >
            <button
              onClick={onClose}
              className="absolute right-5 top-5 rounded-lg p-2 hover:bg-white/10"
            >
              <X />
            </button>

            <img
              src={image}
              alt={title}
              className="max-h-[70vh] w-full rounded-2xl object-contain"
            />

            <div className="mt-6 flex justify-center gap-4">
             <button
  type="button"
  onClick={() =>
    downloadImage(image, title)
  }
  className="rounded-xl bg-violet-600 px-5 py-3 text-white"
>
  <Download size={18} />
</button>

              <button className="rounded-xl bg-cyan-600 px-5 py-3 text-white">
                <Pencil size={18} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImagePreviewModal;