import { FaGoogle, FaGithub } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="flex items-center justify-center gap-6 mt-4">
      <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition">
        <FaGoogle className="text-white text-2xl" />
      </button>
      <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition">
        <FaGithub className="text-white text-2xl" />
      </button>
    </div>
  );
}
