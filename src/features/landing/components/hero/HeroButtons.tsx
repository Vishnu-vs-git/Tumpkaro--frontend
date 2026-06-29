import { ArrowRight, Play } from "lucide-react";
import { Button } from "../../../../shared/components/ui/Button/Button";


 

const HeroButtons = () => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <Button
        size="lg"
        variant="gradient"
        rightIcon={<ArrowRight size={18} />}
      >
        Generate for Free
      </Button>

      <Button
        size="lg"
        variant="outline"
        leftIcon={<Play size={18} />}
      >
        Watch Demo
      </Button>
    </div>
  );
};

export default HeroButtons;