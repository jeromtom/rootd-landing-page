"use client";

import { motion } from "framer-motion";
import { X, CheckCircle, AlertTriangle, Clock, FileText, DollarSign } from "lucide-react";

export default function ProblemSolution() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            From Chaos to Clarity
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Multi-specialty dental practices across India are struggling with outdated systems. 
            Here&apos;s how Rootd transforms your practice.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Problem Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-red-600 mb-4 flex items-center justify-center lg:justify-start">
                <AlertTriangle className="h-6 w-6 mr-2" />
                Current Challenges
              </h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-lg border border-red-200">
                <X className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-red-800 mb-2">Team Coordination Chaos</h4>
                  <p className="text-red-700 text-sm">
                    Multiple dentists, specialists, and chairs with no unified scheduling system causing conflicts and missed appointments.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-lg border border-red-200">
                <X className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-red-800 mb-2">Fragmented Patient Records</h4>
                  <p className="text-red-700 text-sm">
                    Patient data scattered across different systems, making it hard for specialists to access complete treatment history.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-lg border border-red-200">
                <X className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-red-800 mb-2">Compliance Headaches</h4>
                  <p className="text-red-700 text-sm">
                    DPDP Act compliance, data security concerns, and audit trail management.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-lg border border-red-200">
                <X className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-red-800 mb-2">Poor Patient Experience</h4>
                  <p className="text-red-700 text-sm">
                    Long wait times, manual check-ins, and outdated processes that don't reflect your modern clinic's quality.
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
            className="space-y-8"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-green-600 mb-4 flex items-center justify-center lg:justify-start">
                <CheckCircle className="h-6 w-6 mr-2" />
                Rootd Solution
              </h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg border border-green-200">
                <Clock className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Unified Team Scheduling</h4>
                  <p className="text-green-700 text-sm">
                    Visual calendar for all dentists and specialists, automated reminders, and seamless coordination across your entire team.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg border border-green-200">
                <FileText className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Centralized Patient Records</h4>
                  <p className="text-green-700 text-sm">
                    Complete patient history accessible to all specialists, with digital charting and treatment planning for seamless care coordination.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg border border-green-200">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">DPDP Compliant by Design</h4>
                  <p className="text-green-700 text-sm">
                    Built-in compliance, encryption, audit trails, and patient consent management.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg border border-green-200">
                <DollarSign className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Premium Patient Experience</h4>
                  <p className="text-green-700 text-sm">
                    Streamlined check-ins, automated reminders, and modern digital workflows that reflect your clinic's professional standards.
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
          className="text-center mt-16"
        >
          <div className="bg-blue-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Practice?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join modern dental clinics using Rootd to streamline their multi-specialty operations 
              and deliver exceptional patient experiences.
            </p>
            <button 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
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
