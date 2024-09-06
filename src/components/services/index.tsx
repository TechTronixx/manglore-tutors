"use client";
import { motion } from "framer-motion";
import { Book, Users, Award, Clock } from "lucide-react";

const services = [
  {
    title: "One-on-One Attention",
    description: "Personalized tutoring tailored to your child's needs.",
    icon: Users,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Customized Techniques",
    description: "Teaching methods adapted to your child's learning style.",
    icon: Book,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Exam Preparation",
    description: "Focused guidance for upcoming exams and assessments.",
    icon: Award,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Flexible Scheduling",
    description: "Extra classes available during exam periods.",
    icon: Clock,
    color: "bg-orange-100 text-orange-600",
  },
];

const ServiceCard = ({
  title,
  description,
  icon: Icon,
  color,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
}) => (
  <motion.div
    className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <div className={`p-6 ${color}`}>
      <Icon className="w-12 h-12 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
);

function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-red-200 to-amber-200">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-red-600"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>
        <motion.p
          className="text-xl text-center text-gray-600 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Empowering students with personalized learning experiences
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
