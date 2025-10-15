"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, CheckCircle, FileCheck, Database } from "lucide-react";

const complianceFeatures = [
  {
    icon: Shield,
    title: "DPDP Act Compliant",
    description: "Built with India's Digital Personal Data Protection Act 2023 in mind, ensuring patient data privacy and rights.",
    details: ["Explicit Consent Management", "Data Subject Rights", "Audit Trail Logging", "Data Minimization"]
  },
  {
    icon: Lock,
    title: "Bank-Grade Security",
    description: "AES-256 encryption at rest and in transit, with role-based access control and comprehensive audit trails.",
    details: ["AES-256 Encryption", "TLS 1.2+ Transport", "Role-Based Access", "Multi-Factor Auth"]
  },
  {
    icon: Database,
    title: "ABDM Ready",
    description: "Architecture designed for future integration with Ayushman Bharat Digital Mission and UHI standards.",
    details: ["ABHA ID Support", "UHI Compatible", "EHR Standards", "Interoperability Ready"]
  },
  {
    icon: FileCheck,
    title: "MoH&FW Standards",
    description: "Clinical data structures aligned with Ministry of Health & Family Welfare EHR Standards 2016.",
    details: ["EHR Standards 2016", "Clinical Data Models", "Prescription Standards", "Interoperability"]
  }
];

const securityBadges = [
  { text: "SOC 2 Type II", status: "coming" },
  { text: "ISO 27001", status: "coming" },
  { text: "HIPAA Compliant", status: "ready" },
  { text: "DPDP Act Ready", status: "ready" }
];

export default function Compliance() {
  return (
    <section id="compliance" className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Security & Compliance First
          </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Built with healthcare-grade security and Indian regulatory compliance at its core. 
              Your patients&apos; data is protected by design, not as an afterthought.
            </p>
        </motion.div>

        {/* Compliance Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {complianceFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-200"
            >
              <div className="text-center">
                <div className="bg-blue-100 p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
                  {feature.description}
                </p>
                <div className="space-y-1 sm:space-y-2">
                  {feature.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 flex-shrink-0" />
                      <span className="text-xs text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Security Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg mb-12 sm:mb-16"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-6 sm:mb-8">
            Security Architecture
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="bg-red-100 p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <Lock className="h-6 w-6 sm:h-8 sm:w-8 text-red-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Data at Rest</h4>
              <p className="text-xs sm:text-sm text-gray-600">AES-256 encryption for all stored data in PostgreSQL and S3</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <Eye className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Data in Transit</h4>
              <p className="text-xs sm:text-sm text-gray-600">TLS 1.2+ encryption for all API communications</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Access Control</h4>
              <p className="text-xs sm:text-sm text-gray-600">Role-based permissions with audit logging</p>
            </div>
          </div>
        </motion.div>

        {/* Security Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 sm:mb-8">
            Security Certifications
          </h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {securityBadges.map((badge) => (
              <div
                key={badge.text}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full border-2 ${
                  badge.status === 'ready'
                    ? 'border-green-500 bg-green-50 text-green-700'
                    : 'border-gray-300 bg-gray-50 text-gray-500'
                }`}
              >
                <span className="text-xs sm:text-sm font-medium">{badge.text}</span>
                {badge.status === 'coming' && (
                  <span className="text-xs ml-1 sm:ml-2 opacity-75">(Coming Soon)</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Trust Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="bg-blue-600 text-white p-6 sm:p-8 rounded-2xl">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Your Data, Your Control</h3>
            <p className="text-blue-100 mb-6 max-w-3xl mx-auto text-sm sm:text-base">
              We believe in transparency and patient rights. Every piece of data is encrypted, 
              every access is logged, and every patient has the right to access, correct, or delete their information.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Data Encryption</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Audit Trails</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Patient Rights</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Regular Backups</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
