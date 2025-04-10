
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import PieChartNav from '../components/PieChartNav';
import { Button } from '@/components/ui/button';
import { BarChart3, Briefcase, Book, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <Layout>
      <div className="grid grid-cols-1 gap-6">
        <section className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-3">Sai Nithin Godi</h1>
          <h2 className="text-2xl text-gray-600 mb-6">MS Business Analytics & Information Management</h2>
          <p className="max-w-3xl mx-auto text-lg">
            Business Analytics student with expertise in LEAN and SIX SIGMA methodologies, data visualization, 
            and business intelligence tools like Tableau and SQL. Strategically minded, with the ability to create 
            opportunities even in challenging situations.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Button onClick={() => window.open('https://www.linkedin.com/in/nithingodi/', '_blank')}>
              LinkedIn
            </Button>
            <Button variant="outline" onClick={() => window.location.href = 'mailto:godinithin1@gmail.com'}>
              Contact Me
            </Button>
          </div>
        </section>

        <div className="h-[600px] mb-12">
          <PieChartNav 
            title="Interactive Portfolio" 
            subtitle="Click on a section to explore my experience and skills"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 animate-slide-in">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/projects')}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="text-analytics-blue" />
                Projects
              </CardTitle>
              <CardDescription>Academic & Personal</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Explore my data analysis and business intelligence projects</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/work-experience')}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="text-analytics-red" />
                Work Experience
              </CardTitle>
              <CardDescription>Professional Journey</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Discover my professional experience and accomplishments</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/education')}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Book className="text-analytics-orange" />
                Education
              </CardTitle>
              <CardDescription>Academic Background</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Learn about my educational qualifications and achievements</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/skills')}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="text-analytics-green" />
                Skills
              </CardTitle>
              <CardDescription>Technical Expertise</CardDescription>
            </CardHeader>
            <CardContent>
              <p>View my technical skills, certifications, and competencies</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
