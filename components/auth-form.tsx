"use client"

import { useState } from "react"
import Background from "@/public/Background"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Lock, User, Twitter } from "lucide-react"
import { FaTwitch, FaTiktok } from "react-icons/fa"
import { RiInstagramFill } from "react-icons/ri"

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true)

  const toggleMode = () => {
    setIsLogin(!isLogin)
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative p-4 overflow-hidden">
      {/* Background SVG overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Background />
      </div>
      {/* Form container */}
  <div className="relative w-full max-w-6xl h-[600px] bg-white rounded-3xl shadow-2xl overflow-hidden z-30">
        {/* Animated Overlay Circle */}
        <motion.div
          className="absolute top-0 w-[55%] h-full bg-gradient-to-br from-[#78fcd6] via-[#5dbaaa] to-[#00ffb6] flex flex-col items-center justify-center text-white z-10"
          initial={false}
          animate={{
            left: isLogin ? "45%" : "0%",
            borderRadius: isLogin ? "50% 0 0 50%" : "0 50% 50% 0",
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
        >
          <motion.div
            key={isLogin ? "welcome" : "hello"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center px-12"
          >
            <h2 className="text-5xl font-bold mb-6">{isLogin ? "¡Bienvenido!" : "¡Hola!"}</h2>
            <p className="text-lg mb-8 leading-relaxed">
              {isLogin
                ? "Ingrese sus datos personales para usar todas las funciones del sitio"
                : "Regístrese con sus datos personales para usar todas las funciones del sitio"}
            </p>
            <button
              onClick={toggleMode}
              className="px-12 py-3 text-white rounded-lg transition-all duration-300 font-medium text-lg"
              style={{
                background: '#14B8A6',
                color: '#fff',
                boxShadow: '0 2px 8px 0 rgba(67,198,166,0.10)',
              }}
            >
              {isLogin ? "Registrarse" : "Iniciar Sesión"}
            </button>
          </motion.div>
        </motion.div>

        {/* Login Form */}
        <AnimatePresence mode="wait">
          {isLogin && (
            <motion.div
              key="login"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute left-0 top-0 w-[45%] h-full flex flex-col items-center justify-center px-12"
            >
              <div className="w-full max-w-md">
                <h1 className="text-4xl font-bold mb-8 text-gray-900">Iniciar Sesión</h1>

                {/* Social Icons */}
                <div className="flex gap-4 mb-6">
                  <button className="w-12 h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-teal-500 transition-colors">
                    <FaTwitch className="w-5 h-5 text-gray-700" />
                  </button>
                  <button className="w-12 h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-teal-500 transition-colors">
                    <Twitter className="w-5 h-5 text-gray-700" />
                  </button>
                  <button className="w-12 h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-teal-500 transition-colors">
                    <RiInstagramFill className="w-5 h-5 text-gray-700" />
                  </button>
                  <button className="w-12 h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-teal-500 transition-colors">
                    <FaTiktok className="w-5 h-5 text-gray-700" />
                  </button>
                </div>

                <p className="text-gray-600 mb-6">Use su correo y contraseña</p>

                {/* Email Input */}
                <div className="relative mb-4">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-900"
                  />
                </div>

                {/* Password Input */}
                <div className="relative mb-4">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-900"
                  />
                </div>

                <a href="#" className="text-gray-600 text-sm underline mb-6 inline-block hover:text-teal-500">
                  ¿Olvidaste tu contraseña?
                </a>

                <button className="w-full max-w-[630px] py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors font-medium text-lg mt-4">
                  INICIAR SESIÓN
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Register Form */}
        <AnimatePresence mode="wait">
          {!isLogin && (
            <motion.div
              key="register"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="absolute right-0 top-0 w-[45%] h-full flex flex-col items-center justify-center px-12"
            >
              <div className="w-full max-w-md">
                <h1 className="text-4xl font-bold mb-8 text-gray-900">Registrarse</h1>

                {/* Social Icons */}
                <div className="flex gap-4 mb-6">
                  <button className="w-12 h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-teal-500 transition-colors">
                    <FaTwitch className="w-5 h-5 text-gray-700" />
                  </button>
                  <button className="w-12 h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-teal-500 transition-colors">
                    <Twitter className="w-5 h-5 text-gray-700" />
                  </button>
                  <button className="w-12 h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-teal-500 transition-colors">
                    <RiInstagramFill className="w-5 h-5 text-gray-700" />
                  </button>
                  <button className="w-12 h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-teal-500 transition-colors">
                    <FaTiktok className="w-5 h-5 text-gray-700" />
                  </button>
                </div>

                <p className="text-gray-600 mb-6">Use su correo electrónico para registrarse</p>

                {/* Name Input */}
                <div className="relative mb-4">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-900"
                  />
                </div>

                {/* Email Input */}
                <div className="relative mb-4">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-900"
                  />
                </div>

                {/* Password Input */}
                <div className="relative mb-6">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-900"
                  />
                </div>

                <button className="w-full max-w-[630px] py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors font-medium text-lg">
                  REGISTRARSE
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
