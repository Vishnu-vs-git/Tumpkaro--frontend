import { ArrowRight } from "lucide-react";
import { Button } from "../../../../shared/components/ui/Button/Button";


const CTAButtons = () => {
  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row">
      <Button
        size="lg"
        variant="gradient"
        rightIcon={<ArrowRight size={18} />}
      >
        Start Creating for Free
      </Button>

      <p className="text-sm text-slate-400">
        No credit card required
      </p>
    </div>
  );
};

export default CTAButtons;