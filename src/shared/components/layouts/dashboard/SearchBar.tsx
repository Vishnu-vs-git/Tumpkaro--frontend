import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="relative hidden w-full max-w-md lg:block">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
      />

      <input
        type="text"
        placeholder="Search projects..."
        className="w-full rounded-xl border border-white/10 bg-slate-900 py-3 pl-11 pr-4 text-white outline-none transition focus:border-violet-500"
      />
    </div>
  );
};

export default SearchBar;