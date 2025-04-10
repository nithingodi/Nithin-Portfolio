
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface ProjectCardProps {
  title: string;
  date: string;
  description: string;
  skillsUsed: string[];
  highlights?: string[];
}

const ProjectCard = ({ title, date, description, skillsUsed, highlights = [] }: ProjectCardProps) => {
  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
          <CardTitle>{title}</CardTitle>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {highlights && highlights.length > 0 && (
          <>
            <h4 className="font-medium mb-2">Key Achievements</h4>
            <ul className="list-disc ml-5 mb-4 space-y-1">
              {highlights.map((highlight, index) => (
                <li key={index} className="text-gray-700">{highlight}</li>
              ))}
            </ul>
            <Separator className="my-3" />
          </>
        )}
        
        <div className="flex flex-wrap gap-2 mt-2">
          {skillsUsed.map((skill) => (
            <Badge key={skill} variant="outline" className="bg-gray-50">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
