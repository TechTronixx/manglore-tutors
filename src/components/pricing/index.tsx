import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const pricingPlans = [
  {
    grade: "Grades 1-3",
    price: "₹X,XXX",
    features: ["Basic subjects", "Homework help", "Monthly progress reports"],
  },
  {
    grade: "Grades 4-6",
    price: "₹X,XXX",
    features: [
      "All core subjects",
      "Exam preparation",
      "Bi-weekly assessments",
    ],
  },
  {
    grade: "Grades 7-10",
    price: "₹X,XXX",
    features: ["Advanced subjects", "Intensive exam prep", "Weekly mock tests"],
  },
];

function PricingSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          Our Pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">
                  {plan.grade}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-center text-primary mb-6">
                  {plan.price}
                </p>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center space-x-2"
                    >
                      <span className="text-primary">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
