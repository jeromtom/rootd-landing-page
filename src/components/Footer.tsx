"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="sm:col-span-2 lg:col-span-2"
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">rootd.app</h3>
            <p className="text-gray-300 mb-4 sm:mb-6 max-w-md text-xs sm:text-sm lg:text-base leading-relaxed">
              The modern operating system for Indian dental clinics. 
              Transform your practice with comprehensive, compliant, and intuitive practice management software.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 sm:mb-3 lg:mb-4">Quick Links</h4>
            <ul className="space-y-1 sm:space-y-2 lg:space-y-3">
              <li>
                <a href="#features" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm lg:text-base">
                  Features
                </a>
              </li>
              <li>
                <a href="#compliance" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm lg:text-base">
                  Security & Compliance
                </a>
              </li>
              <li>
                <a href="#waitlist-form" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm lg:text-base">
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
            <h4 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 sm:mb-3 lg:mb-4">Get in Touch</h4>
            <div className="space-y-1 sm:space-y-2 lg:space-y-3">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:contact@rootd.app" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm lg:text-base">
                  contact@rootd.app
                </a>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+919383404844" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm lg:text-base">
                  +91 93834 04844
                </a>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-xs sm:text-sm lg:text-base">Kochi, India</span>
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
          className="border-t border-gray-800 mt-6 sm:mt-8 lg:mt-12 pt-4 sm:pt-6 lg:pt-8"
        >
          <div className="text-center">
            <p className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3 lg:mb-4">
              © 2025 rootd.app. All rights reserved.
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
          className="mt-4 sm:mt-6 lg:mt-8 pt-3 sm:pt-4 lg:pt-6 border-t border-gray-800"
        >
          <div className="bg-blue-900/30 rounded-lg p-2 sm:p-3 lg:p-4">
            <h5 className="font-semibold text-blue-300 mb-1 sm:mb-2 text-xs sm:text-sm lg:text-base">Compliance Notice</h5>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              rootd.app is designed to comply with India&apos;s Digital Personal Data Protection Act (DPDP) 2023, 
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
