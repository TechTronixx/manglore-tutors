"use client";
import { motion } from "framer-motion";
import {
  Book,
  Users,
  Award,
  Clock,
  Target,
  Zap,
  Lightbulb,
  TrendingUp,
} from "lucide-react";

const features: {
  icon: React.ReactNode;
  title: string;
  description: string;
  direction: "left" | "right";
}[] = [
  {
    icon: <Book className="w-12 h-12 text-primary" />,
    title: "Expert Tutors",
    description:
      "Our tutors are highly qualified and experienced in their respective fields.",
    direction: "right",
  },
  {
    icon: <Users className="w-12 h-12 text-primary" />,
    title: "Personalized Approach",
    description:
      "We tailor our teaching methods to suit each student's unique learning style.",
    direction: "left",
  },
  {
    icon: <Award className="w-12 h-12 text-primary" />,
    title: "Proven Results",
    description:
      "Our students consistently achieve higher grades and improved confidence.",
    direction: "right",
  },
  {
    icon: <Clock className="w-12 h-12 text-primary" />,
    title: "Flexible Scheduling",
    description:
      "We offer convenient timing options to fit your busy lifestyle.",
    direction: "left",
  },
  {
    icon: <Target className="w-12 h-12 text-primary" />,
    title: "Goal-Oriented Learning",
    description:
      "We help students set and achieve their academic goals effectively.",
    direction: "right",
  },
  {
    icon: <Zap className="w-12 h-12 text-primary" />,
    title: "Engaging Sessions",
    description:
      "Our interactive sessions keep students motivated and focused.",
    direction: "left",
  },
];

const FeatureCard = ({
  icon,
  title,
  description,
  direction,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  direction: "left" | "right";
}) => (
  <motion.div
    className={`flex flex-col sm:flex-row items-center gap-6 ${
      direction === "left" ? "sm:flex-row-reverse" : "sm:flex-row"
    }`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <div className="bg-card p-4 rounded-full shadow-lg mb-4 sm:mb-0">
      {icon}
    </div>
    <div
      className={`flex-1 text-center sm:text-left ${
        direction === "left" ? "sm:text-right" : "sm:text-left"
      }`}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-card-foreground">{description}</p>
    </div>
  </motion.div>
);

function FeaturesSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-red-200 to-amber-200">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Lightbulb className="w-8 h-8 text-primary" />
          Why Choose Manglore Tutors?
          <TrendingUp className="w-8 h-8 text-primary" />
        </motion.h2>
        <div className="relative">
          <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary"></div>
          <div className="space-y-12 sm:space-y-16">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
