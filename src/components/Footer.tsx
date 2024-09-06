"use client";
import { useEffect, useState } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-bold mb-4">Manglore Tutors</h2>
            <p className="text-foreground mb-4">
              Empowering minds, shaping futures. Your one-stop hub for quality
              tutoring services.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-primary-foreground hover:text-secondary transition-colors"
              >
                <Facebook size={24} />
              </Link>
              <Link
                href="#"
                className="text-primary-foreground hover:text-secondary transition-colors"
              >
                <Twitter size={24} />
              </Link>
              <Link
                href="#"
                className="text-primary-foreground hover:text-secondary transition-colors"
              >
                <Instagram size={24} />
              </Link>
              <Link
                href="#"
                className="text-primary-foreground hover:text-secondary transition-colors"
              >
                <Linkedin size={24} />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-foreground hover:text-secondary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-foreground hover:text-secondary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-foreground hover:text-secondary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-foreground hover:text-secondary transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-foreground hover:text-secondary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="text-foreground flex items-center">
                <MapPin size={18} className="mr-2" />
                123 Education Street, Mangalore, Karnataka 575001
              </p>
              <p className="text-foreground flex items-center">
                <Phone size={18} className="mr-2" />
                +91 1234567890
              </p>
              <p className="text-foreground flex items-center">
                <Mail size={18} className="mr-2" />
                info@mangloretutors.com
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-accent text-center">
          <p className="text-foreground">
            &copy; {currentYear} Manglore Tutors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
