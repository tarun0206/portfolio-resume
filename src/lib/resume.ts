export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
};

export type EducationItem = {
  school: string;
  degree: string;
  location: string;
  year?: string;
  score?: string;
  notes?: string[];
};

export const contact = {
  name: "Tarun Singh",
  title: "Senior Full Stack Developer",
  email: "tarun.singh.0206@gmail.com",
  phone: "+919354254337",
  location: "India",
  linkedin: "https://www.linkedin.com/in/tarunsingh0206",
};

export const summary =
  "Senior Full Stack Developer with 4 years of experience building scalable web applications using Angular, React, Spring Boot, and Django. Proven track record of improving system efficiency, user engagement, and deployment reliability in agile environments.";

export const skills = {
  languages: ["Java", "Python", "JavaScript", "HTML", "CSS", "TypeScript"],
  frameworks: [
    "Spring Boot",
    "Node.js",
    "AngularJS",
    "React.js",
    "Next.js",
    "Django",
    "Flask",
    "Groovy on Grails",
  ],
  databases: ["MongoDB", "PostgreSQL", "Redis", "Elasticsearch"],
  tools: [
    "Docker",
    "Jira",
    "AWS",
    "Apache Kafka",
    "Swagger (API documentation)",
  ],
  apiTech: ["REST", "GraphQL", "SOAP"],
  soft: [
    "Problem Solving",
    "Critical Thinking",
    "Leadership",
    "Communication",
    "Fluent English",
  ],
};

export const experiences: ExperienceItem[] = [
  {
    company: "Skillnet Solutions Pvt Ltd",
    role: "Senior Full Stack Developer",
    location: "Remote, Noida",
    start: "Jan 2023",
    end: "Present",
    bullets: [
      "Streamlined user registration in Angular + TypeScript, reducing onboarding time by 18% with a more user‑friendly UI design.",
      "Engineered a comprehensive front end for a Product Management System with React + Redux and architected Spring Boot APIs, improving robustness and data flow efficiency by 13% and lifting satisfaction by 15%.",
      "Designed a unified backend across three technologies, reducing API response time by 22% and improving front‑end integration consistency.",
      "Facilitated stakeholder communication and requirement analysis, decreasing project completion time by 8% and enabling faster launches.",
      "Optimized React components, driving a 13% increase in interaction and a 17% boost in conversion over 4 months.",
      "Enhanced and maintained backend functionality using Groovy on Grails atop Spring Boot to improve stability and deliver client updates.",
    ],
  },
  {
    company: "Shri Sai Enterprises",
    role: "Full Stack Developer",
    location: "Remote, Delhi",
    start: "Nov 2020",
    end: "May 2022",
    bullets: [
      "Architected high‑efficiency APIs with Django + PostgreSQL, boosting back‑end performance by 18%.",
      "Optimized caching with Redis to cut API response by 7% and stabilize peak load.",
      "Built React + TypeScript dashboards, increasing user retention by 16% with informative visualizations.",
      "Implemented Docker for consistent environments, improving deployment efficiency by 6% and reducing environment‑specific bugs.",
      "Managed AWS (EC2, S3, IAM) for robust and compliant deployments.",
      "Ran bi‑monthly code reviews enforcing Clean Code via PRs, lowering bug emergence by 17%.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    school: "Bharati Vidyapeeth College of Engineering",
    degree: "B.Tech. in Electronics and Communication Engineering",
    location: "Delhi, India",
    year: "2023",
    score: "8.24 GPA",
    notes: ["Captain of the basketball team"],
  },
  {
    school: "Air Force Golden Jubilee Institute",
    degree: "Metric (10th Grade)",
    location: "Delhi, India",
    score: "7.8 CGPA",
  },
  {
    school: "Vandana International School",
    degree: "10+2, Computer Science",
    location: "Delhi, India",
    year: "2019",
  },
];


