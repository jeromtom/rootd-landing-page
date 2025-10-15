"use client";

import { motion } from "framer-motion";
import { X, CheckCircle, AlertTriangle, Clock, FileText, DollarSign } from "lucide-react";

export default function ProblemSolution() {
  return (
    <section className="py-8 sm:py-12 lg:py-20 px-4 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            From Chaos to Clarity
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Multi-specialty dental practices across India are struggling with outdated systems. 
            Here&apos;s how Rootd transforms your practice.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-start lg:items-center">
          {/* Problem Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6 lg:space-y-8"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-red-600 mb-3 sm:mb-4 flex items-center justify-center lg:justify-start">
                <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 mr-2 flex-shrink-0" />
                Current Challenges
              </h3>
            </div>

            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <div className="flex items-start space-x-2 sm:space-x-3 lg:space-x-4 p-3 sm:p-4 bg-red-50 rounded-lg border border-red-200">
                <X className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-red-600 mt-0.5 sm:mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-red-800 mb-1 sm:mb-2 text-sm sm:text-base">Team Coordination Chaos</h4>
                  <p className="text-red-700 text-xs sm:text-sm leading-relaxed">
                    Multiple dentists, specialists, and chairs with no unified scheduling system causing conflicts and missed appointments.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-2 sm:space-x-3 lg:space-x-4 p-3 sm:p-4 bg-red-50 rounded-lg border border-red-200">
                <X className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-red-600 mt-0.5 sm:mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-red-800 mb-1 sm:mb-2 text-sm sm:text-base">Fragmented Patient Records</h4>
                  <p className="text-red-700 text-xs sm:text-sm leading-relaxed">
                    Patient data scattered across different systems, making it hard for specialists to access complete treatment history.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-2 sm:space-x-3 lg:space-x-4 p-3 sm:p-4 bg-red-50 rounded-lg border border-red-200">
                <X className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-red-600 mt-0.5 sm:mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-red-800 mb-1 sm:mb-2 text-sm sm:text-base">Compliance Headaches</h4>
                  <p className="text-red-700 text-xs sm:text-sm leading-relaxed">
                    DPDP Act compliance, data security concerns, and audit trail management.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-2 sm:space-x-3 lg:space-x-4 p-3 sm:p-4 bg-red-50 rounded-lg border border-red-200">
                <X className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-red-600 mt-0.5 sm:mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-red-800 mb-1 sm:mb-2 text-sm sm:text-base">Poor Patient Experience</h4>
                  <p className="text-red-700 text-xs sm:text-sm leading-relaxed">
                    Long wait times, manual check-ins, and outdated processes that don&apos;t reflect your modern clinic&apos;s quality.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Solution Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6 lg:space-y-8 mt-6 sm:mt-8 lg:mt-0"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-green-600 mb-3 sm:mb-4 flex items-center justify-center lg:justify-start">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 mr-2 flex-shrink-0" />
                Rootd Solution
              </h3>
            </div>

            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <div className="flex items-start space-x-2 sm:space-x-3 lg:space-x-4 p-3 sm:p-4 bg-green-50 rounded-lg border border-green-200">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-green-600 mt-0.5 sm:mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-green-800 mb-1 sm:mb-2 text-sm sm:text-base">Unified Team Scheduling</h4>
                  <p className="text-green-700 text-xs sm:text-sm leading-relaxed">
                    Visual calendar for all dentists and specialists, automated reminders, and seamless coordination across your entire team.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-2 sm:space-x-3 lg:space-x-4 p-3 sm:p-4 bg-green-50 rounded-lg border border-green-200">
                <FileText className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-green-600 mt-0.5 sm:mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-green-800 mb-1 sm:mb-2 text-sm sm:text-base">Centralized Patient Records</h4>
                  <p className="text-green-700 text-xs sm:text-sm leading-relaxed">
                    Complete patient history accessible to all specialists, with digital charting and treatment planning for seamless care coordination.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-2 sm:space-x-3 lg:space-x-4 p-3 sm:p-4 bg-green-50 rounded-lg border border-green-200">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-green-600 mt-0.5 sm:mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-green-800 mb-1 sm:mb-2 text-sm sm:text-base">DPDP Compliant by Design</h4>
                  <p className="text-green-700 text-xs sm:text-sm leading-relaxed">
                    Built-in compliance, encryption, audit trails, and patient consent management.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-2 sm:space-x-3 lg:space-x-4 p-3 sm:p-4 bg-green-50 rounded-lg border border-green-200">
                <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-green-600 mt-0.5 sm:mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-green-800 mb-1 sm:mb-2 text-sm sm:text-base">Premium Patient Experience</h4>
                  <p className="text-green-700 text-xs sm:text-sm leading-relaxed">
                    Streamlined check-ins, automated reminders, and modern digital workflows that reflect your clinic&apos;s professional standards.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12 lg:mt-16"
        >
          <div className="bg-blue-600 text-white p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">Ready to Transform Your Practice?</h3>
            <p className="text-blue-100 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Join modern dental clinics using Rootd to streamline their multi-specialty operations 
              and deliver exceptional patient experiences.
            </p>
            <button 
              className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm sm:text-base w-full sm:w-auto min-h-[48px]"
              onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join Waitlist
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
