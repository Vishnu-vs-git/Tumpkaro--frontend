import {
  Download,
  Eye,
  Heart,
  Pencil,
} from "lucide-react";
import { motion } from "framer-motion";
import type { GeneratedResult } from "./results.types";
import { Card } from "../../../../shared/components/ui/Card";
import { downloadImage } from "../../../../shared/utils/downloadImage";




interface ResultCardProps {
  result: GeneratedResult;
  onPreview:(result:GeneratedResult) => void
}

const ResultCard = ({
  result,
  onPreview
}: ResultCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
    >
      <Card className="overflow-hidden p-0">
        <img
          src={result.image}
          alt={result.title}
          onClick={() => onPreview(result)}
          className="h-60 w-full object-cover"
        />

        <div className="p-5">
          <h3 className="font-semibold text-white">
            {result.title}
          </h3>

          <div className="mt-5 flex justify-between">
            <button>
              <Eye size={18} />
            </button>

           <button
  type="button"
  onClick={() =>
    downloadImage(
      result.image,
      result.title
    )
  }
  className="rounded-lg p-2 transition hover:bg-white/5"
>
  <Download size={18} />
</button>

            <button>
              <Pencil size={18} />
            </button>

            <button>
              <Heart size={18} />
            </button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ResultCard;