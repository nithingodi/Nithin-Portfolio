
import Layout from '../components/Layout';
import Timeline from '../components/Timeline';
import ChartContainer from '../components/ChartContainer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const educationData = [
  {
    title: "Purdue University, Daniels School of Business",
    subtitle: "Master of Science in Business Analytics and Information Management",
    date: "August 2023 - August 2025",
    content: (
      <div>
        <p className="mb-3">Pursuing an advanced degree focusing on data analysis, statistical modeling, and business intelligence tools application.</p>
        <div className="font-medium mt-4">Key Courses:</div>
        <ul className="list-disc ml-5 mt-2">
          <li>Applied Data Mining</li>
          <li>Business Analytics</li>
          <li>Data Visualization</li>
          <li>Machine Learning Applications</li>
          <li>Supply Chain Analytics</li>
        </ul>
      </div>
    )
  },
  {
    title: "Jawaharlal Nehru Technological University Hyderabad",
    subtitle: "Bachelor of Technology in Electronics and Communication Engineering",
    date: "2019 - May 2023",
    content: (
      <div>
        <p className="mb-3">Completed undergraduate studies with foundational knowledge in engineering principles, mathematics, and technical problem-solving.</p>
        <div className="font-medium mt-4">Relevant Coursework:</div>
        <ul className="list-disc ml-5 mt-2">
          <li>Database Management Systems</li>
          <li>Probability and Statistics</li>
          <li>Data Structures and Algorithms</li>
          <li>Computer Programming</li>
        </ul>
      </div>
    )
  }
];

const skillsData = [
  { name: 'Data Analysis', undergrad: 40, grad: 90 },
  { name: 'Programming', undergrad: 60, grad: 85 },
  { name: 'Business Intelligence', undergrad: 30, grad: 80 },
  { name: 'Statistics', undergrad: 50, grad: 85 },
  { name: 'Project Management', undergrad: 40, grad: 70 }
];

const Education = () => {
  return (
    <Layout title="Education" activePage="education">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Timeline items={educationData} />
          
          <Card className="mt-8 animate-fade-in">
            <CardHeader>
              <CardTitle>Academic Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 list-disc ml-5">
                <li>Honored with an award for impactful contribution in cricket at Anurag University.</li>
                <li>Selected as the sole male candidate from among peers for Business development Trainee position.</li>
                <li>Spearheaded strategic development initiatives at NGO, leading in formulating strategies to enhance educational outreach.</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="mt-8 animate-fade-in">
            <CardHeader>
              <CardTitle>Certifications</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-md">
                <h3 className="font-semibold">SQL</h3>
                <p className="text-sm text-gray-500">Advanced database management and queries</p>
              </div>
              <div className="p-4 border rounded-md">
                <h3 className="font-semibold">Tableau</h3>
                <p className="text-sm text-gray-500">Data visualization and dashboard creation</p>
              </div>
              <div className="p-4 border rounded-md">
                <h3 className="font-semibold">PowerBI</h3>
                <p className="text-sm text-gray-500">Business intelligence and reporting</p>
              </div>
              <div className="p-4 border rounded-md">
                <h3 className="font-semibold">Data Analytics</h3>
                <p className="text-sm text-gray-500">Data processing and insights generation</p>
              </div>
              <div className="p-4 border rounded-md">
                <h3 className="font-semibold">Azure AI Fundamentals</h3>
                <p className="text-sm text-gray-500">Microsoft AI platform capabilities</p>
              </div>
              <div className="p-4 border rounded-md">
                <h3 className="font-semibold">Azure Cloud Fundamentals</h3>
                <p className="text-sm text-gray-500">Cloud computing and services</p>
              </div>
              <div className="p-4 border rounded-md">
                <h3 className="font-semibold">Google Analytics</h3>
                <p className="text-sm text-gray-500">Web analytics and data tracking</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <ChartContainer title="Skill Growth: Undergrad vs. Grad">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={skillsData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="name" 
                    tick={{ fontSize: 12 }}
                    interval={0}
                    angle={-45}
                    textAnchor="end"
                  />
                  <YAxis domain={[0, 100]} />
                  <Bar dataKey="undergrad" name="Undergraduate" fill="#8884d8" />
                  <Bar dataKey="grad" name="Graduate" fill="#3366cc" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </ChartContainer>
          
          <ChartContainer title="Educational Focus">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Business Analytics</span>
                  <span className="text-sm">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-analytics-blue h-2.5 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Data Science</span>
                  <span className="text-sm">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-analytics-red h-2.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Information Management</span>
                  <span className="text-sm">80%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-analytics-orange h-2.5 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Engineering Principles</span>
                  <span className="text-sm">75%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-analytics-green h-2.5 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </ChartContainer>
          
          <ChartContainer title="Location">
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-md">
                <div className="bg-analytics-blue text-white p-2 rounded-full font-bold">P</div>
                <div>
                  <div className="font-medium">Purdue University</div>
                  <div className="text-sm text-gray-500">West Lafayette, Indiana, USA</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-md">
                <div className="bg-analytics-orange text-white p-2 rounded-full font-bold">J</div>
                <div>
                  <div className="font-medium">JNTU Hyderabad</div>
                  <div className="text-sm text-gray-500">Hyderabad, India</div>
                </div>
              </div>
            </div>
          </ChartContainer>
        </div>
      </div>
    </Layout>
  );
};

export default Education;
