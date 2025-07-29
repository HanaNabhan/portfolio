import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Trophy } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Lane Curve Detection using ROS 2 and PID Control",
      description:
        "Developed a ROS 2 node to process LiDAR data for lane detection and implemented PID control for steering and throttle commands. Achieved 3rd place in the CDC2024 qualification.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["ROS 2", "LiDAR", "PID Control", "Computer Vision"],
      award: "🥉 3rd Place CDC2024",
      githubUrl: "#",
    },
    {
      title: "Smart Reactive Audio-Visual System",
      description:
        "Made an audio-visual system using the Tiva C microcontroller (ARM). Integrated ADC, GPIO, timers, and interrupts to control LED light strips reacting to sound intensity. Recognized as one of the best projects in my department.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["ARM", "Tiva C", "ADC", "GPIO", "Embedded C"],
      award: "🏆 Best Department Project",
      githubUrl: "#",
    },
    {
      title: "Open and Closed-Loop Control and Perception",
      description:
        "Applied Kalman filters to denoise odometry data for closed-loop control and integrated YOLOv7 for real-time object detection (human, car, cone). Achieved 1st place out of 25+ teams in the competition.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Kalman Filter", "YOLOv7", "Computer Vision", "Control Systems"],
      award: "🥇 1st Place (25+ teams)",
      githubUrl: "#",
    },
    {
      title: "Car Parking System",
      description:
        "Developed an Arduino-based car parking system with infrared sensors, servo motor-controlled gates, and real-time slot and temperature display, securing 1st place for cost efficiency and maintenance optimization.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Arduino", "IR Sensors", "Servo Motors", "Embedded Systems"],
      award: "🥇 1st Place Cost Efficiency",
      githubUrl: "#",
    },
    {
      title: "Sokoban Game with 7 Search Algorithms",
      description:
        "Advanced Sokoban game using 7 search algorithms, including MCTS and IDA*, to find optimal solutions for puzzle configurations. Demonstrates expertise in AI search algorithms.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Python", "MCTS", "IDA*", "Search Algorithms", "AI"],
      githubUrl: "#",
    },
    {
      title: "AVR & ARM Workspace",
      description:
        "Created comprehensive AVR and ARM drivers for various embedded systems projects. Developed projects like an Electronic Voting Machine (EVM) and a safe locker, showcasing real-world applications.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["AVR", "ARM", "Embedded C", "AUTOSAR", "Microcontrollers"],
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Award-winning projects in AI, computer vision, embedded systems, and autonomous vehicles
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-gray-800 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {project.award && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Trophy className="w-4 h-4 mr-1" />
                    {project.award}
                  </div>
                )}
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
