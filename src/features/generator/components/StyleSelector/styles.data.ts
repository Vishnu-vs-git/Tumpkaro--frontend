import {
  Gamepad2,
  Landmark,
  Plane,
  Laptop,
  GraduationCap,
  Mic2,
} from "lucide-react";
import type { StyleOption } from ".";



export const styles: StyleOption[] = [
  {
    id: 1,
    name: "Gaming",
    icon: Gamepad2,
    gradient: "from-violet-600 to-fuchsia-500",
  },
  {
    id: 2,
    name: "Finance",
    icon: Landmark,
    gradient: "from-emerald-500 to-green-500",
  },
  {
    id: 3,
    name: "Travel",
    icon: Plane,
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    id: 4,
    name: "Technology",
    icon: Laptop,
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    name: "Education",
    icon: GraduationCap,
    gradient: "from-indigo-500 to-violet-500",
  },
  {
    id: 6,
    name: "Podcast",
    icon: Mic2,
    gradient: "from-pink-500 to-rose-500",
  },
];