import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SocialIcons from "../components/SocialIcons";
import Orb from "../components/Orb";
import { useAuth } from "../context/AuthContext"; // ✅ added

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const { login } = useAuth(); // ✅ using login from context

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ username: form.email, password: form.password }); // ✅ uses backend via API instance
      alert("Login successful!");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
      console.error(err);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background orb animation */}
      <div className="absolute inset-0 z-0">
        <Orb
          hoverIntensity={0.2}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md backdrop-blur-2xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-8 text-white">
        <h1 className="text-4xl font-semibold text-center mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Welcome Back
        </h1>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm mb-2 text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-white"
            />
          </div>

          <div className="relative">
            <label className="block text-sm mb-2 text-gray-300">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-white"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-10 cursor-pointer text-gray-400 hover:text-gray-200"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 font-semibold transition-transform transform hover:scale-[1.02]"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6">
          <SocialIcons />
        </div>

        <p className="text-center mt-6 text-gray-300">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="text-blue-400 hover:text-blue-300 underline transition"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
