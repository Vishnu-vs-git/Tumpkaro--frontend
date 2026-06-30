import { Menu } from "lucide-react";



import NotificationButton from "./NotificationButton";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";
import { useAppDispatch } from "../../../hooks/useRedux";
import { toggleSidebar } from "../../../../store/slices/uiSlice";

const Topbar = () => {
  const dispatch = useAppDispatch();

  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-white/10 bg-slate-950/80 px-6 backdrop-blur-xl">
      <div className="flex items-center gap-4">
        <button
          onClick={() => dispatch(toggleSidebar())}
          className="rounded-xl border border-white/10 bg-slate-900 p-3 transition hover:border-violet-500"
        >
          <Menu className="text-white" />
        </button>

        <SearchBar />
      </div>

      <div className="flex items-center gap-4">
        <NotificationButton />

        <UserMenu />
      </div>
    </header>
  );
};

export default Topbar;