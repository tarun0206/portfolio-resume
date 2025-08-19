"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send,
  MessageCircle,
  Calendar,
  Download
} from "lucide-react";

const contactMethods = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    value: "tarun.singh.0206@gmail.com",
    href: "mailto:tarun.singh.0206@gmail.com",
    description: "Best for detailed project discussions",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    title: "LinkedIn",
    value: "linkedin.com/in/tarunsingh0206",
    href: "https://www.linkedin.com/in/tarunsingh0206",
    description: "Professional networking & opportunities",
    color: "from-blue-600 to-blue-700"
  },
  {
    icon: <Github className="w-6 h-6" />,
    title: "GitHub",
    value: "github.com/tarun0206",
    href: "https://github.com/tarun0206",
    description: "Code repositories & open source work",
    color: "from-gray-700 to-gray-900"
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    value: "+91 93542 54337",
    href: "tel:+919354254337",
    description: "Available for urgent discussions",
    color: "from-green-500 to-emerald-500"
  }
];

const availability = [
  { day: "Monday - Friday", time: "9:00 AM - 6:00 PM PST", available: true },
  { day: "Weekends", time: "Limited availability", available: false },
  { day: "Holidays", time: "By appointment only", available: false }
];

export function NetflixContact() {
  return (
    <section id="contact" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let&apos;s Build Something Amazing
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                      Ready to turn your ideas into reality? I&apos;m available for freelance projects, 
          full-time opportunities, and technical consultations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-card border-border netflix-card-hover h-full group overflow-hidden relative cursor-pointer">
                    <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-15 transition-all duration-500`} />
                    
                    <CardHeader className="pb-4 relative z-10">
                      <div className="flex items-center space-x-3">
                        <motion.div 
                          className={`p-3 rounded-lg bg-gradient-to-br ${method.color} text-white shadow-lg`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {method.icon}
                        </motion.div>
                        <div>
                          <CardTitle className="text-white text-lg group-hover:text-red-400 transition-colors">
                            {method.title}
                          </CardTitle>
                          <p className="text-sm text-gray-400">{method.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="relative z-10">
                      <a
                        href={method.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-400 hover:text-red-300 transition-colors font-medium"
                      >
                        {method.value}
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <MessageCircle className="w-5 h-5 mr-2 text-red-500" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Button 
                      className="bg-red-600 hover:bg-red-700 text-white"
                      onClick={() => window.open('mailto:tarun.singh.0206@gmail.com?subject=Project Inquiry', '_blank')}
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Email
                    </Button>
                    <Button 
                      variant="outline"
                      className="border-red-500 text-red-500 hover:bg-red-500/10"
                      onClick={() => window.open('https://calendly.com/tarun-singh-0206', '_blank')}
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule Call
                    </Button>
                    <Button 
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10"
                      onClick={() => window.open('/resume.pdf', '_blank')}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download CV
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Availability & Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Status */}
            <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse" />
                    Available
                  </CardTitle>
                  <Badge variant="outline" className="border-green-500 text-green-400 bg-green-500/10">
                    Open to work
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">
                  Currently accepting new projects and full-time opportunities. 
                  Response time: within 24 hours.
                </p>
              </CardContent>
            </Card>

            {/* Availability Schedule */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-white">Availability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {availability.map((schedule, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <div className="text-white text-sm font-medium">{schedule.day}</div>
                      <div className="text-gray-400 text-xs">{schedule.time}</div>
                    </div>
                    <div className={`w-2 h-2 rounded-full ${
                      schedule.available ? 'bg-green-500' : 'bg-gray-500'
                    }`} />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-red-500" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm mb-2">New Delhi, India</p>
                <p className="text-gray-400 text-xs">
                  Available for remote work worldwide. Open to relocation opportunities.
                </p>
              </CardContent>
            </Card>

            {/* Response Stats */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-red-500">&lt;24h</div>
                    <div className="text-xs text-gray-400">Response Time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-500">100%</div>
                    <div className="text-xs text-gray-400">Response Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-red-500/10 to-purple-500/10 border border-red-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              From concept to deployment, I&apos;ll help you build scalable, performant applications 
              that drive real business results.
            </p>
            <Button 
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold"
              onClick={() => window.open('mailto:tarun.singh.0206@gmail.com?subject=Project Inquiry&body=Hi Tarun, I would like to discuss a project with you.', '_blank')}
            >
              <Send className="w-5 h-5 mr-2" />
              Start a Conversation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
