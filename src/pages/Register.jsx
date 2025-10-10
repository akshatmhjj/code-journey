import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import SocialIcons from "../components/SocialIcons";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    username: "",
    password: "",
    location: "",
    contact: "",
    email: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        alert("OTP sent to your email!");
        navigate("/verify-otp", { state: { email: form.email } });
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (err) {
      console.error(err);
      alert("Error registering user");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-4">
      <div className="w-full max-w-2xl bg-gray-900 p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Create Account
        </h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Row 1 */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className="p-3 w-full rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 cursor-pointer text-gray-400"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={form.location}
              onChange={handleChange}
              className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="contact"
              placeholder="Contact"
              value={form.contact}
              onChange={handleChange}
              className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition p-3 rounded-lg font-semibold"
          >
            Register
          </button>
        </form>

        <SocialIcons />

        <p className="text-center mt-4 text-gray-400">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
