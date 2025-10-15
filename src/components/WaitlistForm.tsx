"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Mail, Phone, Calendar } from "lucide-react";

const formSchema = z.object({
  clinicName: z.string().min(2, "Clinic name must be at least 2 characters"),
  contactName: z.string().min(2, "Contact name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  chairs: z.string().min(1, "Please select number of chairs"),
  dentists: z.string().min(1, "Please select number of dentists"),
  specialties: z.array(z.string()).optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function WaitlistForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          specialties: selectedSpecialties,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      const errorMessage = error instanceof Error ? error.message : 'There was an error submitting your form. Please try again.';
      alert(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
    <section id="waitlist-form" className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-green-100 p-3 sm:p-4 rounded-full w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center">
            <CheckCircle className="h-8 w-8 sm:h-10 sm:w-10 text-green-600" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Thank You for Joining Our Waitlist!
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
            We&apos;ve received your information and will be in touch soon to schedule your personalized demo. 
            Our team is excited to show you how Rootd can transform your multi-specialty dental practice.
          </p>
          <div className="bg-blue-50 p-4 sm:p-6 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2 text-sm sm:text-base">What happens next?</h3>
            <div className="text-left space-y-1 sm:space-y-2 text-blue-800 text-xs sm:text-sm">
              <p>• We&apos;ll review your practice requirements</p>
              <p>• Schedule a personalized demo within 24 hours</p>
              <p>• Show you how Rootd fits your specific needs</p>
              <p>• Answer any questions about implementation</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    );
  }

  return (
    <section id="waitlist-form" className="py-8 sm:py-12 lg:py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-8 lg:mb-12"
        >
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Ready to Transform Your Multi-Specialty Practice?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Join the waitlist and be among the first to experience the future of multi-dentist dental practice management.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-lg">
              <CardHeader className="p-3 sm:p-4 lg:p-6">
                <CardTitle className="text-lg sm:text-xl lg:text-2xl text-center">Join Our Waitlist</CardTitle>
                <p className="text-center text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">
                  Get early access to Rootd and a personalized demo tailored to your practice needs
                </p>
              </CardHeader>
              <CardContent className="p-3 sm:p-4 lg:p-6">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 sm:space-y-4 lg:space-y-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Clinic Name *
                    </label>
                    <Input
                      {...register("clinicName")}
                      placeholder="Enter your clinic name"
                      className={`text-sm sm:text-base ${errors.clinicName ? "border-red-500" : ""}`}
                    />
                    {errors.clinicName && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.clinicName.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Contact Name *
                    </label>
                    <Input
                      {...register("contactName")}
                      placeholder="Your full name"
                      className={`text-sm sm:text-base ${errors.contactName ? "border-red-500" : ""}`}
                    />
                    {errors.contactName && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.contactName.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Email Address *
                    </label>
                    <Input
                      {...register("email")}
                      type="email"
                      placeholder="your.email@clinic.com"
                      className={`text-sm sm:text-base ${errors.email ? "border-red-500" : ""}`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Phone Number *
                    </label>
                    <Input
                      {...register("phone")}
                      placeholder="+91 98765 43210"
                      className={`text-sm sm:text-base ${errors.phone ? "border-red-500" : ""}`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Number of Dental Chairs *
                    </label>
                    <Select onValueChange={(value) => setValue("chairs", value)}>
                      <SelectTrigger className={`text-sm sm:text-base ${errors.chairs ? "border-red-500" : ""}`}>
                        <SelectValue placeholder="Select number of chairs" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Chair</SelectItem>
                        <SelectItem value="2">2 Chairs</SelectItem>
                        <SelectItem value="3">3 Chairs</SelectItem>
                        <SelectItem value="4">4 Chairs</SelectItem>
                        <SelectItem value="5+">5+ Chairs</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.chairs && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.chairs.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Number of Dentists/Specialists *
                    </label>
                    <Select onValueChange={(value) => setValue("dentists", value)}>
                      <SelectTrigger className={`text-sm sm:text-base ${errors.dentists ? "border-red-500" : ""}`}>
                        <SelectValue placeholder="Select number of dentists" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Dentist</SelectItem>
                        <SelectItem value="2">2 Dentists</SelectItem>
                        <SelectItem value="3">3 Dentists</SelectItem>
                        <SelectItem value="4">4 Dentists</SelectItem>
                        <SelectItem value="5">5 Dentists</SelectItem>
                        <SelectItem value="6+">6+ Dentists</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.dentists && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.dentists.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2 sm:mb-3">
                      Primary Specialties (Optional)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {[
                        "General Dentistry",
                        "Orthodontics", 
                        "Dental Implants",
                        "Pediatric Dentistry",
                        "Periodontics",
                        "Aesthetic Dentistry",
                        "Endodontics",
                        "Laser Dentistry"
                      ].map((specialty) => (
                        <label key={specialty} className="flex items-center space-x-2 p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedSpecialties.includes(specialty)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedSpecialties([...selectedSpecialties, specialty]);
                              } else {
                                setSelectedSpecialties(selectedSpecialties.filter(s => s !== specialty));
                              }
                            }}
                            className="rounded border-gray-300 w-4 h-4 sm:w-5 sm:h-5"
                          />
                          <span className="text-xs sm:text-sm text-gray-700 leading-tight">{specialty}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Additional Message
                    </label>
                    <Textarea
                      {...register("message")}
                      placeholder="Tell us about your specific needs or questions..."
                      rows={3}
                      className="text-sm sm:text-base"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 sm:py-4 text-sm sm:text-base font-semibold min-h-[48px]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Joining Waitlist..." : "Join Waitlist"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6 lg:space-y-8 mt-6 sm:mt-8 lg:mt-0"
          >
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6">
                Why Join Our Waitlist?
              </h3>
              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                <div className="flex items-start space-x-2 sm:space-x-3 lg:space-x-4 p-3 sm:p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                    <Calendar className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Early Access & Demo</h4>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      Get early access to Rootd and a personalized demo tailored to your multi-specialty practice.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-2 sm:space-x-3 lg:space-x-4 p-3 sm:p-4 bg-green-50 rounded-lg">
                  <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Priority Support</h4>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      Dedicated support and training for your entire dental team during implementation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-2 sm:space-x-3 lg:space-x-4 p-3 sm:p-4 bg-purple-50 rounded-lg">
                  <div className="bg-purple-100 p-2 rounded-lg flex-shrink-0">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Founding Member Benefits</h4>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      Special pricing, priority feature requests, and input on product development.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-3 sm:p-4 lg:p-6 rounded-lg">
              <h4 className="font-bold text-blue-900 mb-2 sm:mb-3 text-sm sm:text-base">What to Expect</h4>
              <ul className="space-y-1 sm:space-y-2 text-blue-800 text-xs sm:text-sm">
                <li>• Personalized 30-minute demo for your team</li>
                <li>• Customized setup for your multi-specialty practice</li>
                <li>• Staff training for all dentists and support staff</li>
                <li>• Early access to new features</li>
                <li>• Ongoing support and priority updates</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
