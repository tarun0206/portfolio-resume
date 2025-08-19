"use client";

import { experiences } from "@/lib/resume";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Calendar, MapPin, Code, Play, Info } from "lucide-react";
import { useState } from "react";
import { VSCodeExperienceViewer } from "./VSCodeExperienceViewer";

export function NetflixExperience() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isVSCodeOpen, setIsVSCodeOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % experiences.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const openVSCode = (index: number) => {
    setSelectedExperience(index);
    setIsVSCodeOpen(true);
  };

  return (
    <section id="experience" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            A journey through innovative projects and impactful solutions across different companies and roles.
          </p>
        </motion.div>

        {/* Netflix-style Featured Experience Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-12 h-96 rounded-2xl overflow-hidden"
          style={{
            background: `linear-gradient(135deg, 
              rgba(229, 9, 20, 0.9) 0%, 
              rgba(0, 0, 0, 0.8) 50%, 
              rgba(20, 20, 20, 1) 100%), 
              url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI1MDAiIHZpZXdCb3g9IjAgMCAxMDAwIDUwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgo8cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3BhdHRlcm4+CjwvZGVmcz4KPHJlY3Qgd2lkdGg9IjEwMDAiIGhlaWdodD0iNTAwIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPgo8L3N2Zz4=')`
          }}
        >
          <div className="absolute inset-0 flex items-center justify-between p-8">
            <div className="flex-1 max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-4"
              >
                <Badge className="bg-red-600 text-white border-none mb-4">
                  🔥 FEATURED EXPERIENCE
                </Badge>
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 netflix-text-shadow">
                  {experiences[currentIndex].role}
                </h1>
                <h2 className="text-2xl text-red-400 font-semibold mb-4">
                  {experiences[currentIndex].company}
                </h2>
                <div className="flex items-center gap-6 text-gray-300 mb-6">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    {experiences[currentIndex].start} - {experiences[currentIndex].end}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    {experiences[currentIndex].location}
                  </div>
                </div>
                <p className="text-gray-200 text-lg mb-6 leading-relaxed">
                  {experiences[currentIndex].bullets[0]}
                </p>
                <div className="flex gap-4 relative z-20">
                  <Button 
                    size="lg" 
                    className="bg-white text-black hover:bg-gray-200 font-semibold netflix-button-glow clickable-button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      console.log('Opening VS Code for experience:', currentIndex);
                      openVSCode(currentIndex);
                    }}
                  >
                    <Code className="w-5 h-5 mr-2" />
                    View Code Details
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white/30 text-white hover:bg-white/10 clickable-button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      console.log('Scrolling to experience section');
                      document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <Info className="w-5 h-5 mr-2" />
                    More Info
                  </Button>
                </div>
              </motion.div>
            </div>
            
            {/* Navigation Arrows */}
            <div className="flex flex-col gap-4">
              <Button
                variant="outline"
                size="icon"
                className="bg-black/30 border-white/20 text-white hover:bg-red-500/20 backdrop-blur-sm"
                onClick={prevSlide}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-black/30 border-white/20 text-white hover:bg-red-500/20 backdrop-blur-sm"
                onClick={nextSlide}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Bottom gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </motion.div>

        {/* Netflix-style Professional Journey Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8">My Professional Journey</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Card
                  className={`h-72 cursor-pointer netflix-card-hover transition-all duration-500 relative overflow-hidden ${
                    index === currentIndex
                      ? "border-red-500 bg-red-500/10 ring-2 ring-red-500/30"
                      : "border-border bg-card hover:border-red-500/50"
                  }`}
                  onClick={() => goToSlide(index)}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent" />
                  </div>

                  {/* Netflix-style preview overlay */}
                  {hoveredCard === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent z-20 flex flex-col justify-end p-6"
                    >
                      <div className="space-y-4">
                        <div className="flex gap-3">
                          <Button
                            size="sm"
                            className="bg-white text-black hover:bg-gray-200 font-semibold flex-1"
                            onClick={(e) => {
                              e.stopPropagation();
                              openVSCode(index);
                            }}
                          >
                            <Play className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-white/50 text-white hover:bg-white/10 flex-1"
                            onClick={(e) => {
                              e.stopPropagation();
                              goToSlide(index);
                            }}
                          >
                            <Info className="w-4 h-4 mr-2" />
                            More Info
                          </Button>
                        </div>
                        <div className="text-sm text-gray-300">
                          {exp.bullets.length} key achievements • {exp.start} - {exp.end}
                        </div>
                        <div className="text-xs text-gray-400">
                          Click &quot;View Details&quot; to explore in VS Code style viewer
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <CardHeader className="pb-4 relative z-10">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <CardTitle className="text-xl text-white mb-2 leading-tight">{exp.role}</CardTitle>
                        <CardDescription className="text-red-400 font-semibold text-lg">
                          {exp.company}
                        </CardDescription>
                      </div>
                      {index === currentIndex && (
                        <Badge className="bg-red-600 text-white text-xs px-2 py-1">
                          FEATURED
                        </Badge>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.start} - {exp.end}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
                    <p className="text-gray-300 leading-relaxed line-clamp-3">
                      {exp.bullets[0]}
                    </p>
                    <div className="mt-4 flex items-center text-sm text-gray-500">
                      <span>Hover to explore • {exp.bullets.length} achievements</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {experiences.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-red-500 scale-125" : "bg-gray-600 hover:bg-gray-500"
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* VS Code Experience Viewer */}
      <VSCodeExperienceViewer
        isOpen={isVSCodeOpen}
        onClose={() => setIsVSCodeOpen(false)}
        experienceIndex={selectedExperience}
      />
    </section>
  );
}
