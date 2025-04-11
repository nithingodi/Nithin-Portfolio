import React from "react"
import { Card, CardContent } from "@/components/ui/card"

const experiences = [
  {
    company: "Express IT Solutions",
    role: "ETL Developer",
    duration: "Jan 2021 – Jan 2022",
    responsibilities: [
      "Designed and developed scalable ETL pipelines to extract, transform, and load large datasets.",
      "Worked with cloud integration tools to automate data transfers and reporting.",
      "Improved performance and scheduling of batch jobs, reducing runtime by 40%.",
      "Collaborated across data, engineering, and business teams to align technical goals with project KPIs."
    ]
  },
  {
    company: "Conduct IT Services",
    role: "Data Integration Specialist",
    duration: "Feb 2022 – Mar 2023",
    responsibilities: [
      "Led data quality initiatives across financial and retail datasets.",
      "Implemented real-time data synchronization using Spark and optimized transformations with Ab Initio.",
      "Developed data validation scripts and automated exception handling.",
      "Created technical documentation and trained junior team members on best practices."
    ]
  },
  {
    company: "UPVC Windows Manufacturing Firm",
    role: "Operations Analyst (Partner)",
    duration: "2020 – 2021",
    responsibilities: [
      "Streamlined the inventory process using Excel-based forecasting models.",
      "Analyzed vendor performance and negotiated logistics contracts, improving delivery timelines.",
      "Helped increase annual sales by optimizing raw material ordering and warehouse space utilization."
    ]
  }
]

export default function WorkExperience() {
  return (
    <div className="space-y-6 px-4 py-8 md:px-8 lg:px-16">
      <h2 className="text-3xl font-bold tracking-tight">Work Experience</h2>
      {experiences.map((exp, index) => (
        <Card key={index}>
          <CardContent className="space-y-2 py-4">
            <h3 className="text-xl font-semibold">{exp.role} @ {exp.company}</h3>
            <p className="text-sm text-muted-foreground">{exp.duration}</p>
            <ul className="list-disc list-inside space-y-1">
              {exp.responsibilities.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
