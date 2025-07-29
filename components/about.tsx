import { Card, CardContent } from "@/components/ui/card"
import { Brain, Cpu, Trophy } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">About Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Computer Engineering student at Benha University with excellent academic performance (GPA: A). Specialized
            in AI research, computer vision, and embedded systems with multiple competition wins.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gray-900/50 border-gray-800 hover:border-cyan-500/50 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">AI & Computer Vision</h3>
              <p className="text-gray-400">
                Expertise in deep learning, CNNs, GANs, and computer vision applications with hands-on research
                experience.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Embedded Systems</h3>
              <p className="text-gray-400">
                Proficient in ARM, AVR microcontrollers, RTOS, and ROS for autonomous systems and robotics applications.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800 hover:border-yellow-500/50 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Competition Winner</h3>
              <p className="text-gray-400">
                Multiple awards in F1TENTH, EVER Egypt E-Rally, and other prestigious AI and robotics competitions.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-gray-700">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
              <p className="text-gray-400 mb-4">
                Currently pursuing Computer and Communication Engineering at Benha University with excellent academic
                performance. Co-founded the Autonomous Sub-Team at Shoubra Racing Team, leading innovative projects in
                autonomous vehicles.
              </p>
              <p className="text-gray-400">
                Active in AI research at CIS – Nile University, working on applied AI research targeting publication.
                Passionate about bridging the gap between theoretical AI concepts and real-world applications.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">AI & Machine Learning</span>
                <span className="text-cyan-400">95%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full"
                  style={{ width: "95%" }}
                ></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-300">Embedded Systems</span>
                <span className="text-purple-400">90%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-purple-500 to-pink-600 h-2 rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-300">Research & Innovation</span>
                <span className="text-yellow-400">88%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-yellow-500 to-orange-600 h-2 rounded-full"
                  style={{ width: "88%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
