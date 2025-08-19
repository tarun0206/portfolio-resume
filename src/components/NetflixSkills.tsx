"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Cloud, 
  Smartphone, 
  Server, 
  Wrench,
  Globe,
  Shield
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Code className="w-6 h-6" />,
    skills: ["React", "Angular", "Vue.js", "TypeScript", "Next.js", "Tailwind CSS", "SASS", "JavaScript"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Backend Development", 
    icon: <Server className="w-6 h-6" />,
    skills: ["Spring Boot", "Django", "Node.js", "Express.js", "FastAPI", "REST APIs", "GraphQL", "Microservices"],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Database & Storage",
    icon: <Database className="w-6 h-6" />,
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "DynamoDB", "SQLite"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-6 h-6" />,
    skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform", "Nginx", "Linux"],
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Mobile Development",
    icon: <Smartphone className="w-6 h-6" />,
    skills: ["React Native", "Flutter", "Ionic", "Android", "iOS", "Expo", "Progressive Web Apps"],
    color: "from-teal-500 to-blue-500"
  },
  {
    title: "Tools & Technologies",
    icon: <Wrench className="w-6 h-6" />,
    skills: ["Git", "Webpack", "Vite", "ESLint", "Prettier", "Jest", "Cypress", "Postman"],
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "Web Technologies",
    icon: <Globe className="w-6 h-6" />,
    skills: ["HTML5", "CSS3", "WebRTC", "WebSockets", "Service Workers", "Web APIs", "PWA"],
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "Security & Testing",
    icon: <Shield className="w-6 h-6" />,
    skills: ["JWT", "OAuth", "Unit Testing", "Integration Testing", "Security Audits", "OWASP", "SSL/TLS"],
    color: "from-red-500 to-pink-500"
  }
];

export function NetflixSkills() {
  return (
    <section id="skills" className="py-16 bg-background">
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
            Technical Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience with modern technologies and best practices.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-card border-border skill-card-hover h-full group overflow-hidden relative cursor-pointer">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
                {/* Floating Animation */}
                <div className="group-hover:floating-element transition-all duration-300">
                  <CardHeader className="pb-4 relative z-10">
                    <div className="flex items-center space-x-3 mb-3">
                      <motion.div 
                        className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {category.icon}
                      </motion.div>
                      <CardTitle className="text-white text-lg group-hover:text-white transition-colors">
                        {category.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                </div>
                
                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      >
                        <Badge
                          variant="outline"
                          className="border-gray-600 text-gray-300 hover:border-red-500/50 hover:text-red-400 transition-colors"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "5+", label: "Years Experience" },
            { number: "50+", label: "Projects Completed" },
            { number: "20+", label: "Technologies Mastered" },
            { number: "100%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-red-500 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm sm:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
