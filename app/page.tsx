import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Award,
  GraduationCap,
  Briefcase,
  Code,
  Brain,
  Cpu,
  Database,
} from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-white">Hana Nabhan</h1>
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">
                About
              </a>
              <a href="#experience" className="text-gray-300 hover:text-blue-400 transition-colors">
                Experience
              </a>
              <a href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors">
                Skills
              </a>
              <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors">
                Projects
              </a>
              <a href="#education" className="text-gray-300 hover:text-blue-400 transition-colors">
                Education
              </a>
              <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <img
              src="/placeholder.svg?height=200&width=200"
              alt="Hana Nabhan Sawan"
              className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-blue-500 shadow-2xl"
            />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">Hana Nabhan Sawan</h1>
          <p className="text-2xl text-blue-400 mb-6">Undergraduate Computer Engineer</p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Aspiring AI computer engineer with hands-on experience in deep learning, computer vision, and embedded AI
            systems. Passionate about developing intelligent solutions for real-world challenges.
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Link>
            </Button>
            <Button
              variant="outline"
              asChild
              className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
            >
              <Link href="https://github.com/Hana-Nabhan" target="_blank">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </Button>
          </div>
          <div className="flex justify-center space-x-6 text-gray-400">
            <div className="flex items-center">
              <MapPin className="mr-2 h-4 w-4" />
              Cairo, Egypt
            </div>
            <div className="flex items-center">
              <Phone className="mr-2 h-4 w-4" />
              01014069807
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-gray-800/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed text-center">
              I'm an aspiring AI computer engineer with hands-on experience in deep learning, computer vision, and
              embedded AI systems. Currently pursuing my Bachelor's degree in Computer and Communication Engineering at
              Benha University with an excellent GPA. I'm passionate about developing intelligent solutions for
              real-world challenges and have gained valuable experience through internships and university
              collaborations. I'm seeking opportunities to contribute to innovative AI projects and research within
              collaborative, impact-driven teams.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Work Experience</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-white">AI Research Intern</CardTitle>
                    <CardDescription className="text-lg text-gray-400">CIS – Nile University | Hybrid</CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-blue-600 text-white">
                    July 2025 – Present
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Participating in Track 18 and 21 for applied AI research targeting publication</li>
                  <li>Gaining expertise in research methodologies, technical writing, and AI problem-solving</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-white">Computer Vision Intern</CardTitle>
                    <CardDescription className="text-lg text-gray-400">NTI - Summer Training | Remote</CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-blue-600 text-white">
                    July 2025 – Present
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>
                    Applied CNNs, GANs, and transfer learning for image classification, detection, segmentation, and
                    face recognition
                  </li>
                  <li>Built and evaluated models using ResNet and DenseNet architectures</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-white">ML and Data Science Intern</CardTitle>
                    <CardDescription className="text-lg text-gray-400">DEPI – E-youth | Hybrid</CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-blue-600 text-white">
                    Oct 2024 – May 2025
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Deployed 5+ models using MLflow and Hugging Face</li>
                  <li>Implemented AI/ML solutions in contests; applied MLOps tools for efficient pipelines</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-white">
                      Co-Founder, Autonomous Sub-Team | Instructor & Member
                    </CardTitle>
                    <CardDescription className="text-lg text-gray-400">Shoubra Racing Team | Hybrid</CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-blue-600 text-white">
                    Apr 2023 – Oct 2024
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Secured 1st place in technical category and 3rd place overall out of +20 universities</li>
                  <li>Secured 2nd place in real-life demo over Top 6 teams</li>
                  <li>Instructed and trained +10 new team members in embedded systems design</li>
                  <li>Designed Battery Management ECU using AVR microcontrollers</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-gray-800/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Skills</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Code className="mr-2 h-5 w-5 text-blue-400" />
                  Programming Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Python", "C", "Java", "CSS", "OOP", "Data Structures", "Algorithms"].map((skill) => (
                    <Badge key={skill} variant="outline" className="border-gray-600 text-gray-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Brain className="mr-2 h-5 w-5 text-purple-400" />
                  AI & Machine Learning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Machine Learning",
                    "Deep Learning",
                    "Computer Vision",
                    "Reinforcement Learning",
                    "Feature Engineering",
                    "Model Evaluation",
                  ].map((skill) => (
                    <Badge key={skill} variant="outline" className="border-gray-600 text-gray-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Database className="mr-2 h-5 w-5 text-green-400" />
                  Frameworks & Libraries
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["TensorFlow", "PyTorch", "Keras", "OpenCV", "Pandas", "Matplotlib", "MLflow", "Hugging Face"].map(
                    (skill) => (
                      <Badge key={skill} variant="outline" className="border-gray-600 text-gray-300">
                        {skill}
                      </Badge>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Cpu className="mr-2 h-5 w-5 text-orange-400" />
                  Embedded Systems
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    "ARM Architecture",
                    "AVR Microcontrollers",
                    "RTOS",
                    "ROS",
                    "Embedded C",
                    "Kalman Filtering",
                    "PID Control",
                  ].map((skill) => (
                    <Badge key={skill} variant="outline" className="border-gray-600 text-gray-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Github className="mr-2 h-5 w-5 text-gray-400" />
                  Tools & Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Git", "GitHub", "Docker", "Linux", "Postman", "API Testing", "MLOps"].map((skill) => (
                    <Badge key={skill} variant="outline" className="border-gray-600 text-gray-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Briefcase className="mr-2 h-5 w-5 text-indigo-400" />
                  Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Problem Solving", "Leadership", "Teamwork", "Research", "Communication", "Time Management"].map(
                    (skill) => (
                      <Badge key={skill} variant="outline" className="border-gray-600 text-gray-300">
                        {skill}
                      </Badge>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Featured Projects</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-2xl transition-shadow bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg text-white">Lane Curve Detection using ROS 2</CardTitle>
                <CardDescription className="text-gray-400">Autonomous Driving System</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-300 mb-4">
                  Developed ROS 2 node for LiDAR-based lane detection with PID control for steering and throttle
                  commands. Achieved 3rd place in CDC2024 qualification.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-blue-600 text-white">
                    ROS 2
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-600 text-white">
                    LiDAR
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-600 text-white">
                    PID Control
                  </Badge>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Project
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-shadow bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg text-white">Smart Reactive Audio-Visual System</CardTitle>
                <CardDescription className="text-gray-400">Embedded Systems Project</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-300 mb-4">
                  Audio-visual system using Tiva C microcontroller with LED strips reacting to sound intensity.
                  Recognized as one of the best projects in department.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-orange-600 text-white">
                    ARM
                  </Badge>
                  <Badge variant="secondary" className="bg-orange-600 text-white">
                    ADC
                  </Badge>
                  <Badge variant="secondary" className="bg-orange-600 text-white">
                    Embedded C
                  </Badge>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Project
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-shadow bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg text-white">Open and Closed-Loop Control</CardTitle>
                <CardDescription className="text-gray-400">Computer Vision & Control</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-300 mb-4">
                  Applied Kalman filters for odometry denoising and integrated YOLOv7 for real-time object detection.
                  Achieved 1st place out of 25+ teams.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-purple-600 text-white">
                    Kalman Filter
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-600 text-white">
                    YOLOv7
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-600 text-white">
                    Computer Vision
                  </Badge>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Project
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-shadow bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg text-white">Sokoban Game with Search Algorithms</CardTitle>
                <CardDescription className="text-gray-400">AI & Game Development</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-300 mb-4">
                  Advanced Sokoban game implementation using 7 search algorithms including MCTS and IDA* to find optimal
                  solutions for puzzle configurations.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-green-600 text-white">
                    MCTS
                  </Badge>
                  <Badge variant="secondary" className="bg-green-600 text-white">
                    IDA*
                  </Badge>
                  <Badge variant="secondary" className="bg-green-600 text-white">
                    Search Algorithms
                  </Badge>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Project
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-shadow bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg text-white">Car Parking System</CardTitle>
                <CardDescription className="text-gray-400">IoT & Embedded Systems</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-300 mb-4">
                  Arduino-based parking system with IR sensors, servo-controlled gates, and real-time display. Secured
                  1st place for cost efficiency and maintenance optimization.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-teal-600 text-white">
                    Arduino
                  </Badge>
                  <Badge variant="secondary" className="bg-teal-600 text-white">
                    IoT
                  </Badge>
                  <Badge variant="secondary" className="bg-teal-600 text-white">
                    Sensors
                  </Badge>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Project
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-shadow bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg text-white">AVR & ARM Workspace</CardTitle>
                <CardDescription className="text-gray-400">Embedded Systems Development</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-300 mb-4">
                  Comprehensive collection of AVR drivers and ARM projects including Electronic Voting Machine and safe
                  locker systems showcasing real-world applications.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-red-600 text-white">
                    AVR
                  </Badge>
                  <Badge variant="secondary" className="bg-red-600 text-white">
                    ARM
                  </Badge>
                  <Badge variant="secondary" className="bg-red-600 text-white">
                    Drivers
                  </Badge>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Project
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 px-4 bg-gray-800/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Honors & Awards</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <Award className="h-6 w-6 text-yellow-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-white">3rd Place - F1TENTH CDC 2024 Simulation League</h3>
                    <p className="text-gray-300">
                      Ranked Top 15 out of 51 in finals of global autonomous driving competition (One-Person Team)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <Award className="h-6 w-6 text-yellow-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-white">
                      3rd Place - F1TENTH IROS 2024 Simulation League
                    </h3>
                    <p className="text-gray-300">
                      Achieved 4th Place out of 57 in finals of prestigious robotics event (3-Member Team)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <Award className="h-6 w-6 text-yellow-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-white">3rd Place Overall - EVER Egypt E-Rally</h3>
                    <p className="text-gray-300">
                      Autonomous track winner in Egypt's largest electric vehicle rally, 2nd Place in real-life demo
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <Award className="h-6 w-6 text-yellow-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-white">Top 50 - MTC AIC3 Competition</h3>
                    <p className="text-gray-300">Competed among 200+ teams in AI competition</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Education</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl flex items-center text-white">
                      <GraduationCap className="mr-2 h-5 w-5" />
                      Bachelor's Degree in Computer and Communication Engineering
                    </CardTitle>
                    <CardDescription className="text-lg text-gray-400">
                      Faculty of Engineering at Shoubra – Benha University
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-blue-600 text-white">
                    July 2021 – July 2026 (Expected)
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <Badge variant="outline" className="bg-green-600 text-white border-green-600">
                    GPA: A (Excellent)
                  </Badge>
                  <span className="text-gray-300">Electrical Department</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-800/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Get In Touch</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-300 mb-8">
              I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to
              discuss AI projects, research opportunities, or just connect!
            </p>
            <div className="flex justify-center space-x-6">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="mailto:hanna.nabhann@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Me
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
              >
                <Link href="https://linkedin.com/in/Hana-Nabhan" target="_blank">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
              >
                <Link href="https://github.com/Hana-Nabhan" target="_blank">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 border-t border-gray-700">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Hana Nabhan Sawan. All rights reserved.</p>
          <p className="text-gray-400 mt-2">Built with Next.js and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}
