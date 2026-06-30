import { Bell } from "lucide-react";

const NotificationButton = () => {
  return (
    <button className="relative rounded-xl border border-white/10 bg-slate-900 p-3 transition hover:border-violet-500">
      <Bell className="text-slate-300" />

      <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500" />
    </button>
  );
};

export default NotificationButton;