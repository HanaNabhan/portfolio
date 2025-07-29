import { Card, CardContent } from "@/components/ui/card"

export function Skills() {
  const skillCategories = [
    {
      title: "AI & ML",
      skills: ["TensorFlow", "PyTorch", "Keras", "OpenCV", "Computer Vision", "Deep Learning"],
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      title: "Programming",
      skills: ["Python", "C", "Java", "Embedded C", "Data Structures", "Algorithms"],
      gradient: "from-purple-500 to-pink-600",
    },
    {
      title: "Embedded Systems",
      skills: ["ARM Architecture", "AVR", "RTOS", "ROS", "Kalman Filtering", "PID Control"],
      gradient: "from-green-500 to-teal-600",
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "Docker", "Linux", "MLflow", "Hugging Face", "Postman"],
      gradient: "from-orange-500 to-red-600",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit for AI research, embedded systems, and intelligent solution development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-gray-800 hover:border-gray-600 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${category.gradient} rounded-lg flex items-center justify-center mb-4`}
                >
                  <span className="text-white font-bold text-lg">{category.title[0]}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mr-3"></div>
                      <span className="text-gray-300">{skill}</span>
                    </div>
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
