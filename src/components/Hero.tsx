"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Shield, Users, CreditCard } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                The Modern Operating System for{" "}
                <span className="text-blue-600">Multi-Dentist Dental Clinics</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your dental practice with Rootd&apos;s comprehensive practice management software. 
                Secure EHR, multi-chair scheduling for specialist teams, digital clinical workflow, and seamless billing - 
                all DPDP compliant and built for India.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">Multi-Dentist Scheduling</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">DPDP Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">Premium Patient Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <CreditCard className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">Seamless Billing</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Join Waitlist
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Built for modern dental practices in India</p>
              <div className="flex items-center space-x-8 opacity-60">
                <div className="text-2xl font-bold text-gray-400">DPDP</div>
                <div className="text-2xl font-bold text-gray-400">Compliant</div>
                <div className="text-2xl font-bold text-gray-400">Cloud</div>
                <div className="text-2xl font-bold text-gray-400">Secure</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Hero Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
              {/* Mock Dashboard */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Dashboard Overview</h3>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                
                {/* Mock Calendar Grid */}
                <div className="grid grid-cols-4 gap-2">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-12 rounded-lg flex items-center justify-center text-xs font-medium ${
                        i % 5 === 0 ? 'bg-blue-100 text-blue-700' : 
                        i % 7 === 0 ? 'bg-green-100 text-green-700' :
                        'bg-gray-100 text-gray-500'
                      }`}
                    >
                      {i % 5 === 0 ? 'Dr. Alina' : i % 7 === 0 ? 'Dr. Priya' : ''}
                    </div>
                  ))}
                </div>

                {/* Mock Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">24</div>
                    <div className="text-sm text-blue-700">Appointments Today</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">₹45K</div>
                    <div className="text-sm text-green-700">Today&apos;s Revenue</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg"
            >
              <Calendar className="h-6 w-6" />
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              className="absolute -bottom-4 -left-4 bg-green-600 text-white p-3 rounded-full shadow-lg"
            >
              <Shield className="h-6 w-6" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
