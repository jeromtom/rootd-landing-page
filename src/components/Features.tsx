"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  Calendar, 
  Stethoscope, 
  CreditCard,
  Shield,
  Clock,
  FileText,
  BarChart3,
  Smartphone,
  Database
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Smart Patient Management",
    description: "Secure EHR with DPDP compliance, instant patient search, and complete treatment history tracking across all specialties.",
    highlights: ["Patient Registration", "Multi-Specialty History", "Document Upload", "Consent Management"],
    color: "blue"
  },
  {
    icon: Calendar,
    title: "Multi-Dentist Team Scheduling",
    description: "Visual calendar for managing multiple dental chairs, specialists, and surgeons simultaneously with automated reminders.",
    highlights: ["Multi-Chair View", "Specialist Coordination", "WhatsApp Reminders", "Real-time Updates"],
    color: "green"
  },
  {
    icon: Stethoscope,
    title: "Digital Clinical Workflow",
    description: "Intuitive dental charting for implants, orthodontics, pediatric care, and aesthetic treatments with electronic prescriptions.",
    highlights: ["Multi-Specialty Charting", "Treatment Plans", "e-Prescriptions", "Clinical Notes"],
    color: "purple"
  },
  {
    icon: CreditCard,
    title: "Seamless Billing",
    description: "Automated invoice generation, payment tracking, and comprehensive financial reporting.",
    highlights: ["Auto Invoicing", "Payment Tracking", "Financial Reports", "Multi-payment Support"],
    color: "orange"
  }
];

const additionalFeatures = [
  { icon: Shield, text: "AES-256 Encryption" },
  { icon: Clock, text: "Real-time Updates" },
  { icon: FileText, text: "Audit Trails" },
  { icon: BarChart3, text: "Analytics Dashboard" },
  { icon: Smartphone, text: "Mobile Responsive" },
  { icon: Database, text: "ABDM Ready" }
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Run Your Multi-Specialty Practice
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four core modules designed specifically for Indian dental clinics with multiple specialists, 
            built with compliance and team coordination in mind.
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-${feature.color}-100`}>
                      <feature.icon className={`h-8 w-8 text-${feature.color}-600`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {feature.description}
                      </p>
                      <div className="space-y-2">
                        {feature.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className={`w-2 h-2 rounded-full bg-${feature.color}-500`}></div>
                            <span className="text-sm text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Built for Modern Multi-Specialty Dental Practices
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white p-4 rounded-lg shadow-sm mb-3">
                  <feature.icon className="h-8 w-8 text-blue-600 mx-auto" />
                </div>
                <p className="text-sm font-medium text-gray-700">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Feature Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">40%</div>
            <p className="text-gray-600">Reduction in administrative time</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
            <p className="text-gray-600">DPDP Act compliant</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
            <p className="text-gray-600">Secure cloud access</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
