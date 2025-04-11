import React from "react"
import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    title: "Electric Vehicle Insights",
    description: "Analyzed EV adoption trends across Washington using Tableau and two real-world datasets. Identified infrastructure gaps in EV charging stations by county.",
    technologies: ["Tableau", "Excel", "Data Cleaning", "Map Visualizations"],
    link: "https://public.tableau.com/app/profile/nithin.godi",
  },
  {
    title: "Bike Rental Forecasting",
    description: "Developed and evaluated multiple machine learning models (linear regression, random forest, gradient boosting) to predict bike rental demand using Google Colab.",
    technologies: ["Python", "Pandas", "Sklearn", "Feature Engineering"],
    link: "https://github.com/nithingodi/bike-rental-prediction"
  },
  {
    title: "Personal Portfolio Website",
    description: "Custom-built using Angular and Tailwind CSS, hosted on GitHub Pages to showcase my skills, work experience, and project portfolio.",
    technologies: ["Angular", "Tailwind", "GitHub Pages"],
    link: "https://nithingodi.github.io/nithin-portfolio-deploy/"
  }
]

export default function Projects() {
  return (
    <div className="space-y-6 px-4 py-8 md:px-8 lg:px-16">
      <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardContent className="py-4 space-y-2">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm text-muted-foreground">{project.description}</p>
              <p className="text-xs text-foreground">
                <strong>Technologies:</strong> {project.technologies.join(", ")}
              </p>
              <a href={project.link} target="_blank" className="text-blue-600 hover:underline text-sm">
                View Project
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
