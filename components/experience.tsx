import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "AI Research Intern",
      company: "CIS – Nile University",
      location: "Hybrid",
      period: "July 2025 – Present",
      description:
        "Participating in Track 18 and 21 for applied AI research targeting publication. Gaining expertise in research methodologies, technical writing, and AI problem-solving.",
      technologies: ["AI Research", "Technical Writing", "Problem Solving"],
    },
    {
      title: "Computer Vision Intern",
      company: "NTI - Summer Training",
      location: "Remote",
      period: "July 2025 – Present",
      description:
        "Applied CNNs, GANs, and transfer learning for image classification, detection, segmentation, and face recognition. Built and evaluated models using ResNet and DenseNet architectures.",
      technologies: ["CNNs", "GANs", "Transfer Learning", "ResNet", "DenseNet"],
    },
    {
      title: "ML and Data Science Intern",
      company: "DEPI – E-youth",
      location: "Hybrid",
      period: "Oct 2024 – May 2025",
      description:
        "Deployed 5+ models using MLflow and Hugging Face. Implemented AI/ML solutions in contests; applied MLOps tools for efficient pipelines.",
      technologies: ["MLflow", "Hugging Face", "MLOps", "Model Deployment"],
    },
    {
      title: "Co-Founder, Autonomous Sub-Team",
      company: "Shoubra Racing Team",
      location: "Hybrid",
      period: "Apr 2023 – Oct 2024",
      description:
        "Secured 1st place in technical category and 3rd place overall out of +20 universities. Instructed +10 new team members in embedded systems design. Designed Battery Management ECU using AVR microcontrollers.",
      technologies: ["AVR", "Embedded Systems", "Team Leadership", "ECU Design"],
    },
    {
      title: "Software Testing Intern",
      company: "WAVZ for Digital Transformation",
      location: "Onsite",
      period: "Aug 2024 – Sep 2024",
      description:
        "Specialized in API testing using Postman and Rest Assured, ensuring seamless system integration and API functionality.",
      technologies: ["Postman", "Rest Assured", "API Testing"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My professional journey in AI research, computer vision, and embedded systems
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-gray-800 hover:border-cyan-500/50 transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <h4 className="text-xl text-cyan-400 mb-2">{exp.company}</h4>
                  </div>
                  <div className="flex flex-col lg:items-end space-y-2">
                    <div className="flex items-center text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-gray-400">
                      <MapPin className="w-4 h-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-sm text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
