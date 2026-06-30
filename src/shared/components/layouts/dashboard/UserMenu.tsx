import { ChevronDown } from "lucide-react";

const UserMenu = () => {
  return (
    <button className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-900 px-3 py-2 transition hover:border-violet-500">
      <img
        src="https://i.pravatar.cc/100"
        alt="User"
        className="h-10 w-10 rounded-full"
      />

      <div className="hidden text-left md:block">
        <h4 className="text-sm font-medium text-white">
          Vishnu
        </h4>

        <p className="text-xs text-slate-400">
          Free Plan
        </p>
      </div>

      <ChevronDown
        size={18}
        className="hidden text-slate-400 md:block"
      />
    </button>
  );
};

export default UserMenu;