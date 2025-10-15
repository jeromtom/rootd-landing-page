"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-4">Rootd</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              The modern operating system for Indian dental clinics. 
              Transform your practice with comprehensive, compliant, and intuitive practice management software.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">contact@rootd.app</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+91 9383404844</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">Kochi, Kerala, India</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-gray-300 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#compliance" className="text-gray-300 hover:text-white transition-colors">
                  Security & Compliance
                </a>
              </li>
              <li>
                <a href="#waitlist-form" className="text-gray-300 hover:text-white transition-colors">
                  Join Waitlist
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <a href="mailto:contact@rootd.app" className="text-gray-300 hover:text-white transition-colors">
                  contact@rootd.app
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <a href="tel:+919383404844" className="text-gray-300 hover:text-white transition-colors">
                  +91 93834 04844
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-4">
              © 2025 Rootd. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Built for modern dental practices in India
            </p>
          </div>
        </motion.div>

        {/* Compliance Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 pt-6 border-t border-gray-800"
        >
          <div className="bg-blue-900/30 rounded-lg p-4">
            <h5 className="font-semibold text-blue-300 mb-2">Compliance Notice</h5>
            <p className="text-gray-300 text-sm">
              Rootd is designed to comply with India&apos;s Digital Personal Data Protection Act (DPDP) 2023, 
              Information Technology (SPDI) Rules 2011, and is built to be compatible with Ayushman Bharat 
              Digital Mission (ABDM) standards. We are committed to protecting patient data and ensuring 
              regulatory compliance.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
