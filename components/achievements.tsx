import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Medal, Award, Star } from "lucide-react"

export function Achievements() {
  const achievements = [
    {
      title: "F1TENTH CDC 2024 Simulation League",
      place: "3rd Place Qualification",
      description:
        "Ranked in the Top 15 out of 51 in the finals of this global autonomous driving competition (One-Person Team)",
      icon: Trophy,
      gradient: "from-yellow-500 to-orange-600",
    },
    {
      title: "F1TENTH IROS 2024 Simulation League",
      place: "3rd Place Qualification",
      description:
        "Achieved 4th Place out of 57 in the finals of this prestigious robotics and simulation event (3-Member Team)",
      icon: Medal,
      gradient: "from-purple-500 to-pink-600",
    },
    {
      title: "EVER Egypt E-Rally",
      place: "3rd Place Overall",
      description:
        "Competed in Egypt's largest electric vehicle rally, earning 2nd Place for a real-life demonstration (3-Member Team)",
      icon: Award,
      gradient: "from-green-500 to-teal-600",
    },
    {
      title: "MTC – AIC3 Competition",
      place: "Top 50",
      description: "Achieved Top 50 ranking among 200+ teams in this prestigious AI competition",
      icon: Star,
      gradient: "from-cyan-500 to-blue-600",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Honors & Awards
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Recognition for excellence in AI competitions, autonomous systems, and robotics challenges
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-gray-800 hover:border-cyan-500/50 transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${achievement.gradient} rounded-full flex items-center justify-center flex-shrink-0`}
                  >
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
                      <span
                        className={`px-3 py-1 bg-gradient-to-r ${achievement.gradient} text-white text-sm font-semibold rounded-full`}
                      >
                        {achievement.place}
                      </span>
                    </div>
                    <p className="text-gray-400 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
