"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Shield, Users, CreditCard } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 py-8 sm:py-12 lg:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                The Modern Operating System for{" "}
                <span className="text-blue-600">Multi-Dentist Dental Clinics</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                Transform your dental practice with Rootd&apos;s comprehensive practice management software. 
                Secure EHR, multi-chair scheduling for specialist teams, digital clinical workflow, and seamless billing - 
                all DPDP compliant and built for India.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <div className="flex items-center space-x-2 p-2 sm:p-3 bg-white/50 rounded-lg">
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-gray-700">Multi-Dentist Scheduling</span>
              </div>
              <div className="flex items-center space-x-2 p-2 sm:p-3 bg-white/50 rounded-lg">
                <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-gray-700">DPDP Compliant</span>
              </div>
              <div className="flex items-center space-x-2 p-2 sm:p-3 bg-white/50 rounded-lg">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-gray-700">Premium Patient Experience</span>
              </div>
              <div className="flex items-center space-x-2 p-2 sm:p-3 bg-white/50 rounded-lg">
                <CreditCard className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-gray-700">Seamless Billing</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold w-full sm:w-auto min-h-[48px]"
                onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Join Waitlist
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold w-full sm:w-auto min-h-[48px]"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 sm:pt-8 border-t border-gray-200">
              <p className="text-xs sm:text-sm text-gray-500 mb-4">Built for modern dental practices in India</p>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 opacity-60">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-400">DPDP</div>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-400">Compliant</div>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-400">Cloud</div>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-400">Secure</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Hero Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-6 sm:mt-8 lg:mt-0"
          >
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-3 sm:p-4 lg:p-8 border border-gray-200">
              {/* Mock Dashboard */}
              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900">Dashboard Overview</h3>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                </div>
                
                {/* Mock Calendar Grid */}
                <div className="grid grid-cols-4 gap-1 sm:gap-2">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-6 sm:h-8 lg:h-12 rounded-md sm:rounded-lg flex items-center justify-center text-xs font-medium ${
                        i % 8 === 0 ? 'bg-blue-100 text-blue-700' : 
                        i % 7 === 0 ? 'bg-green-100 text-green-700' :
                        i % 6 === 0 ? 'bg-purple-100 text-purple-700' :
                        'bg-gray-100 text-gray-500'
                      }`}
                    >
                      <span className="hidden sm:inline">
                        {i % 8 === 0 ? 'Dr. Alina' : i % 7 === 0 ? 'Dr. Priya' : i % 6 === 0 ? 'Dr. Annet' : ''}
                      </span>
                      <span className="sm:hidden text-xs">
                        {i % 8 === 0 ? 'A' : i % 7 === 0 ? 'P' : i % 6 === 0 ? 'An' : ''}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Mock Stats */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
                  <div className="bg-blue-50 p-2 sm:p-3 lg:p-4 rounded-lg">
                    <div className="text-base sm:text-lg lg:text-2xl font-bold text-blue-600">24</div>
                    <div className="text-xs sm:text-sm text-blue-700">Appointments Today</div>
                  </div>
                  <div className="bg-green-50 p-2 sm:p-3 lg:p-4 rounded-lg">
                    <div className="text-base sm:text-lg lg:text-2xl font-bold text-green-600">₹45K</div>
                    <div className="text-xs sm:text-sm text-green-700">Today&apos;s Revenue</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 lg:-top-4 lg:-right-4 bg-blue-600 text-white p-1.5 sm:p-2 lg:p-3 rounded-full shadow-lg"
            >
              <Calendar className="h-3 w-3 sm:h-4 sm:w-4 lg:h-6 lg:w-6" />
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 lg:-bottom-4 lg:-left-4 bg-green-600 text-white p-1.5 sm:p-2 lg:p-3 rounded-full shadow-lg"
            >
              <Shield className="h-3 w-3 sm:h-4 sm:w-4 lg:h-6 lg:w-6" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
