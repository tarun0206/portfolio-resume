"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    institution: "Indian Institute of Technology",
    location: "Delhi, India",
    duration: "2018 - 2022",
    grade: "8.34/10 GPA",
    achievements: [
      "Dean's List for 3 consecutive semesters",
      "Led university coding club with 200+ members",
      "Winner of National Programming Competition 2021",
      "Published research paper on Machine Learning algorithms"
    ],
    courses: [
      "Data Structures & Algorithms",
      "Database Management Systems", 
      "Software Engineering",
      "Computer Networks",
      "Operating Systems",
      "Machine Learning",
      "Web Development",
      "Mobile App Development"
    ]
  }
];

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    icon: "☁️"
  },
  {
    title: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2023", 
    icon: "🌐"
  },
  {
    title: "React Developer Certification",
    issuer: "Meta",
    date: "2022",
    icon: "⚛️"
  },
  {
    title: "Full Stack Web Development",
    issuer: "freeCodeCamp",
    date: "2021",
    icon: "💻"
  }
];

export function NetflixEducation() {
  return (
    <section id="education" className="py-16 bg-background">
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
            Education & Certifications
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Academic foundation and continuous learning through professional certifications and advanced courses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="bg-card border-border netflix-card-hover h-full overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500" />
              
              <CardHeader className="pb-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-white mb-1">
                        {educationData[0].degree}
                      </CardTitle>
                      <p className="text-lg text-blue-400 font-semibold">
                        {educationData[0].field}
                      </p>
                      <p className="text-gray-400">
                        {educationData[0].institution}
                      </p>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-green-500 text-green-400 bg-green-500/10">
                    {educationData[0].grade}
                  </Badge>
                </div>
                
                <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {educationData[0].duration}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {educationData[0].location}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Achievements */}
                <div>
                  <div className="flex items-center mb-3">
                    <Award className="w-5 h-5 mr-2 text-yellow-500" />
                    <h4 className="text-white font-semibold">Key Achievements</h4>
                  </div>
                  <ul className="space-y-2">
                    {educationData[0].achievements.map((achievement, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="text-gray-300 flex items-start"
                      >
                        <span className="text-yellow-500 mr-3 mt-1">★</span>
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Relevant Courses */}
                <div>
                  <div className="flex items-center mb-3">
                    <BookOpen className="w-5 h-5 mr-2 text-blue-500" />
                    <h4 className="text-white font-semibold">Relevant Coursework</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {educationData[0].courses.map((course, index) => (
                      <motion.div
                        key={course}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <Badge
                          variant="outline"
                          className="border-blue-500/30 text-blue-400 bg-blue-500/10"
                        >
                          {course}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Certifications</h3>
              <p className="text-gray-400">Professional credentials and continuous learning</p>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="bg-card border-border netflix-card-hover">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="text-2xl">{cert.icon}</div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold text-sm mb-1">
                            {cert.title}
                          </h4>
                          <p className="text-gray-400 text-xs mb-2">
                            {cert.issuer}
                          </p>
                          <Badge 
                            variant="outline" 
                            className="text-xs border-red-500/30 text-red-400 bg-red-500/10"
                          >
                            {cert.date}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8"
            >
              <Card className="bg-gradient-to-br from-red-500/10 to-purple-500/10 border-red-500/20">
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-red-500">4+</div>
                      <div className="text-xs text-gray-400">Certifications</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-500">8.34</div>
                      <div className="text-xs text-gray-400">GPA/10</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
