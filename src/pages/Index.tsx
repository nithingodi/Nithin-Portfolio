
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import AnimatedProjectsCarousel from '../components/AnimatedProjectsCarousel';
import { Button } from '@/components/ui/button';
import { BarChart3, Briefcase, Book, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <Layout>
      <div className="grid grid-cols-1 gap-8">
        <section className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-3 text-white">Sai Nithin Godi</h1>
          <h2 className="text-2xl text-gray-400 mb-6">MS Business Analytics & Information Management</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            Business Analytics student with expertise in LEAN and SIX SIGMA methodologies, data visualization, 
            and business intelligence tools like Tableau and SQL. Strategically minded, with the ability to create 
            opportunities even in challenging situations.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Button onClick={() => window.open('https://www.linkedin.com/in/nithingodi/', '_blank')}
              className="bg-analytics-blue hover:bg-blue-700">
              LinkedIn
            </Button>
            <Button variant="outline" 
              className="border-analytics-blue text-analytics-blue hover:bg-analytics-blue/10"
              onClick={() => window.location.href = 'mailto:godinithin1@gmail.com'}>
              Contact Me
            </Button>
          </div>
        </section>

        <div className="h-[400px] mb-12">
          <AnimatedProjectsCarousel 
            title="Interactive Portfolio" 
            subtitle="Swipe to explore my experience and skills"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 animate-slide-in">
          <Card className="bg-gray-800/50 border-gray-700 hover:border-analytics-blue hover:shadow-lg hover:shadow-analytics-blue/20 transition-all cursor-pointer" onClick={() => navigate('/projects')}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <BarChart3 className="text-analytics-blue" />
                Projects
              </CardTitle>
              <CardDescription className="text-gray-400">Academic & Personal</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Explore my data analysis and business intelligence projects</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800/50 border-gray-700 hover:border-analytics-red hover:shadow-lg hover:shadow-analytics-red/20 transition-all cursor-pointer" onClick={() => navigate('/work-experience')}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Briefcase className="text-analytics-red" />
                Work Experience
              </CardTitle>
              <CardDescription className="text-gray-400">Professional Journey</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Discover my professional experience and accomplishments</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800/50 border-gray-700 hover:border-analytics-orange hover:shadow-lg hover:shadow-analytics-orange/20 transition-all cursor-pointer" onClick={() => navigate('/education')}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Book className="text-analytics-orange" />
                Education
              </CardTitle>
              <CardDescription className="text-gray-400">Academic Background</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Learn about my educational qualifications and achievements</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800/50 border-gray-700 hover:border-analytics-green hover:shadow-lg hover:shadow-analytics-green/20 transition-all cursor-pointer" onClick={() => navigate('/skills')}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Star className="text-analytics-green" />
                Skills
              </CardTitle>
              <CardDescription className="text-gray-400">Technical Expertise</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">View my technical skills, certifications, and competencies</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
