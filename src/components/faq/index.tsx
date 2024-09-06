import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What subjects do you offer tutoring for?",
    answer:
      "We offer tutoring for all subjects from Grade 1 to Grade 10, including Mathematics, Science, English, and more.",
  },
  {
    question: "How often are the tutoring sessions?",
    answer:
      "The frequency of sessions can be customized based on your child's needs, typically ranging from 2-4 times a week.",
  },
  {
    question: "Do you provide study materials?",
    answer:
      "Yes, we provide supplementary study materials tailored to your child's curriculum and learning needs.",
  },
  {
    question: "How do you track progress?",
    answer:
      "We conduct regular assessments and provide detailed progress reports to keep you informed about your child's improvement.",
  },
];

function FAQSection() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          Frequently Asked Questions
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-2xl mx-auto"
        >
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default FAQSection;
