import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import SkillsBarChart from "@/components/SkillsBarChart"

const skillCategories = [
  {
    category: "Programming & Tools",
    skills: ["Python", "SQL", "R", "Java", "Golang", "Spark", "Ab Initio", "Hadoop"]
  },
  {
    category: "Data Analysis & Visualization",
    skills: ["Pandas", "NumPy", "Tableau", "Power BI", "Excel", "Matplotlib", "Seaborn"]
  },
  {
    category: "Cloud & ETL",
    skills: ["Google Cloud", "Azure", "SSIS", "Talend", "ETL Pipelines", "APIs"]
  },
  {
    category: "Web & UI",
    skills: ["Angular", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"]
  },
  {
    category: "Business & Communication",
    skills: ["Project Management", "Stakeholder Communication", "Documentation"]
  }
]

export default function Skills() {
  return (
    <div className="space-y-6 px-4 py-8 md:px-8 lg:px-16">
      <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
      <SkillsBarChart />
      <div className="grid md:grid-cols-2 gap-6 pt-4">
        {skillCategories.map((group, index) => (
          <Card key={index}>
            <CardContent className="py-4">
              <h3 className="text-lg font-semibold">{group.category}</h3>
              <ul className="list-disc list-inside text-sm mt-2">
                {group.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
