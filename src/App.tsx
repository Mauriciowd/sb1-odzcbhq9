import React, { useState } from 'react';
import { 
  GraduationCap, 
  Globe2, 
  Clock, 
  MessageSquare,
  Calendar,
  Users,
  AlertTriangle,
  Star,
  Mail,
  Phone,
  Instagram
} from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="min-h-screen bg-cover bg-center relative" 
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1574096079513-d8259312b785?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-navy-900/70" />
        <div className="container mx-auto px-6 relative z-10 flex flex-col justify-center items-center h-screen text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Domina el inglés para la industria de la hospitalidad
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl">
            Aprende a comunicarte con clientes internacionales, manejar alergias y ofrecer un servicio excepcional
          </p>
          <a
            href="#inscribete"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors duration-300"
          >
            ¡Inscríbete ahora!
          </a>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50" id="beneficios">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            ¿Por qué elegir este curso?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Globe2 className="w-12 h-12 text-orange-500" />,
                title: "Comunicación Internacional",
                description: "Aprende a interactuar con confianza con clientes de todo el mundo"
              },
              {
                icon: <MessageSquare className="w-12 h-12 text-orange-500" />,
                title: "Vocabulario Especializado",
                description: "Domina términos específicos de bebidas, alimentos y servicio"
              },
              {
                icon: <AlertTriangle className="w-12 h-12 text-orange-500" />,
                title: "Gestión de Alergias",
                description: "Maneja situaciones críticas relacionadas con alergias e intolerancias"
              },
              {
                icon: <Star className="w-12 h-12 text-orange-500" />,
                title: "Servicio de Excelencia",
                description: "Eleva la calidad de tu servicio al siguiente nivel"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-20 bg-navy-900 text-white" id="detalles">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Detalles del Curso
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "Fecha de Inicio",
                description: "18 de Febrero de 2025"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Horario",
                description: "Lunes de 10hs a 12hs"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Duración",
                description: "8 clases de 2 horas (16 horas totales)"
              }
            ].map((detail, index) => (
              <div key={index} className="flex items-center space-x-4 bg-navy-800 p-6 rounded-lg">
                {detail.icon}
                <div>
                  <h3 className="text-xl font-semibold">{detail.title}</h3>
                  <p className="text-gray-300">{detail.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-3xl font-bold">
              Valor del curso: $10.000 ARS
            </p>
            <div className="mt-8 max-w-2xl mx-auto bg-navy-800 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Objetivo del Curso</h3>
              <p className="text-gray-300">
                Capacitar a los estudiantes para comunicarse efectivamente en inglés en un entorno de bar o restaurante, 
                enfocándose en atención al cliente, manejo de pedidos, condiciones médicas y alergias alimentarias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 bg-white" id="inscribete">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Inscríbete Ahora
          </h2>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Mensaje adicional
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300"
              >
                Enviar solicitud
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-2">
                <GraduationCap className="w-8 h-8 text-orange-500" />
                <span className="text-2xl font-bold">English for Hospitality</span>
              </div>
            </div>
            <div className="flex space-x-6 mb-8 md:mb-0">
              <a href="#" className="hover:text-orange-500 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            <div className="text-center md:text-right">
              <div className="flex items-center space-x-2 mb-2">
                <Mail className="w-5 h-5" />
                <span>englishforhospitalitycourse@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>+541131492195</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;