"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, Minimize2, Terminal, FileText, Folder } from "lucide-react";
import { experiences } from "@/lib/resume";

interface VSCodeExperienceViewerProps {
  isOpen: boolean;
  onClose: () => void;
  experienceIndex: number;
}

export function VSCodeExperienceViewer({ isOpen, onClose, experienceIndex }: VSCodeExperienceViewerProps) {
  const [activeTab, setActiveTab] = useState("overview");
  const [isMaximized, setIsMaximized] = useState(false);
  const experience = experiences[experienceIndex];

  const tabs = [
    { id: "overview", label: "experience.md", icon: <FileText className="w-4 h-4" /> },
    { id: "achievements", label: "achievements.js", icon: <Terminal className="w-4 h-4" /> },
    { id: "tech", label: "tech-stack.json", icon: <Folder className="w-4 h-4" /> }
  ];

  const markdownLines = [
    `# ${experience.role} at ${experience.company}`,
    "",
    `Welcome to my professional journey at ${experience.company}! This role shaped my expertise in full-stack development and taught me the importance of scalable architecture.`,
    "",
    "## Duration",
    `${experience.start} - ${experience.end}`,
    "",
    "## Location", 
    `📍 ${experience.location}`,
    "",
    "## Role Description",
    `As a ${experience.role}, I led multiple high-impact projects that improved system performance and user experience across the board.`,
    "",
    "## Key Achievements",
    ...experience.bullets.map((bullet, index) => `${index + 1}. ${bullet}`),
    "",
    "## Impact",
    "This role allowed me to grow as a developer while delivering measurable business value through innovative technical solutions."
  ];

  if (!isOpen) return null;

  const getTechStackForExperience = (index: number) => {
    if (index === 0) {
      return ["Angular", "TypeScript", "React", "Redux", "Spring Boot", "Groovy on Grails"];
    } else if (index === 1) {
      return ["Django", "PostgreSQL", "React", "TypeScript", "Redis", "Docker", "AWS"];
    }
    return [];
  };

  const renderOverviewContent = () => (
    <div className="vscode-content">
      {markdownLines.map((line, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: isOpen ? index * 0.1 : 0,
            ease: "easeOut"
          }}
          className="vscode-line"
        >
          <span className="vscode-line-number">{index + 1}</span>
          <div className="font-mono text-sm">
            {line.startsWith('# ') ? (
              <span className="vscode-keyword text-lg font-bold">{line}</span>
            ) : line.startsWith('## ') ? (
              <span className="vscode-property text-base font-semibold">{line}</span>
            ) : line.startsWith('📍') ? (
              <span className="vscode-string">{line}</span>
            ) : line.match(/^\d+\./) ? (
              <span className="vscode-comment">{line}</span>
            ) : (
              <span className="text-gray-300">{line}</span>
            )}
          </div>
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          duration: 1, 
          delay: markdownLines.length * 0.1 + 0.5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="vscode-line mt-4"
      >
        <span className="vscode-line-number">{markdownLines.length + 1}</span>
        <span className="text-red-500">█</span>
      </motion.div>
    </div>
  );

  const renderAchievementsContent = () => (
    <div className="vscode-content">
      {experience.bullets.map((bullet, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="vscode-line"
        >
          <span className="vscode-line-number">{index + 1}</span>
          <div>
            <span className="vscode-comment">{`// Achievement #${index + 1}`}</span>
            <br />
            <span className="vscode-keyword">const</span> <span className="vscode-property">achievement{index + 1}</span> = {"{"}
            <br />
            <span className="ml-4">
              <span className="vscode-property">description</span>: <span className="vscode-string">&quot;{bullet}&quot;</span>,
            </span>
            <br />
            <span className="ml-4">
              <span className="vscode-property">impact</span>: <span className="vscode-string">&quot;High&quot;</span>,
            </span>
            <br />
            <span className="ml-4">
              <span className="vscode-property">verified</span>: <span className="vscode-value">true</span>
            </span>
            <br />
            {"}"};
            <br />
            <br />
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderTechStackContent = () => {
    const techStack = getTechStackForExperience(experienceIndex);
    
    return (
      <div className="vscode-content">
        <div className="vscode-line">
          <span className="vscode-line-number">1</span>
          <span className="vscode-comment">{`// Tech Stack Configuration`}</span>
        </div>
        <div className="vscode-line">
          <span className="vscode-line-number">2</span>
          <span className="vscode-keyword">const</span> <span className="vscode-property">projectTechStack</span> = {"{"}
        </div>
        <div className="vscode-line">
          <span className="vscode-line-number">3</span>
          <span className="ml-4">
            <span className="vscode-property">company</span>: <span className="vscode-string">&quot;{experience.company}&quot;</span>,
          </span>
        </div>
        <div className="vscode-line">
          <span className="vscode-line-number">4</span>
          <span className="ml-4">
            <span className="vscode-property">role</span>: <span className="vscode-string">&quot;{experience.role}&quot;</span>,
          </span>
        </div>
        <div className="vscode-line">
          <span className="vscode-line-number">5</span>
          <span className="ml-4">
            <span className="vscode-property">technologies</span>: [
          </span>
        </div>
        {techStack.map((tech, index) => (
          <motion.div
            key={tech}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="vscode-line"
          >
            <span className="vscode-line-number">{6 + index}</span>
            <span className="ml-8">
              <span className="vscode-string">&quot;{tech}&quot;</span>{index < techStack.length - 1 ? "," : ""}
            </span>
          </motion.div>
        ))}
        <div className="vscode-line">
          <span className="vscode-line-number">{6 + techStack.length}</span>
          <span className="ml-4">],</span>
        </div>
        <div className="vscode-line">
          <span className="vscode-line-number">{7 + techStack.length}</span>
          <span className="ml-4">
            <span className="vscode-property">duration</span>: <span className="vscode-string">&quot;{experience.start} - {experience.end}&quot;</span>,
          </span>
        </div>
        <div className="vscode-line">
          <span className="vscode-line-number">{8 + techStack.length}</span>
          <span className="ml-4">
            <span className="vscode-property">location</span>: <span className="vscode-string">&quot;{experience.location}&quot;</span>
          </span>
        </div>
        <div className="vscode-line">
          <span className="vscode-line-number">{9 + techStack.length}</span>
          <span>{"}"};</span>
        </div>
        <div className="vscode-line">
          <span className="vscode-line-number">{10 + techStack.length}</span>
          <span></span>
        </div>
        <div className="vscode-line">
          <span className="vscode-line-number">{11 + techStack.length}</span>
          <span className="vscode-keyword">export</span> <span className="vscode-keyword">default</span> <span className="vscode-property">projectTechStack</span>;
        </div>
      </div>
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return renderOverviewContent();
      case "achievements":
        return renderAchievementsContent();
      case "tech":
        return renderTechStackContent();
      default:
        return renderOverviewContent();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className={`vscode-terminal ${isMaximized ? "w-full h-full" : "w-full max-w-6xl h-5/6"} max-h-full`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* VS Code Header */}
          <div className="vscode-header">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-1 text-center text-sm text-gray-400">
              {experience.company} - {experience.role}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMaximized(!isMaximized)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {isMaximized ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex bg-gray-800 border-b border-gray-600">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`vscode-tab ${activeTab === tab.id ? "active" : ""} flex items-center gap-2`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 overflow-auto">
            {renderContent()}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
