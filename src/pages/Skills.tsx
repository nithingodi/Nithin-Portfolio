
import Layout from '../components/Layout';
import SkillsBarChart from '../components/SkillsBarChart';
import ChartContainer from '../components/ChartContainer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

const skillCategoryData = [
  { name: 'Data Analysis', value: 30 },
  { name: 'Programming', value: 25 },
  { name: 'Business Intelligence', value: 20 },
  { name: 'Process Management', value: 15 },
  { name: 'Strategic Planning', value: 10 },
];

const COLORS = ['#3366cc', '#dc3912', '#ff9900', '#66aa00', '#8884d8'];

const Skills = () => {
  return (
    <Layout title="Skills" activePage="skills">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ChartContainer title="Technical Proficiency" className="mb-8">
            <SkillsBarChart />
          </ChartContainer>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle>Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-analytics-blue"></span>
                    <span>SQL</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-analytics-blue"></span>
                    <span>Tableau</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-analytics-blue"></span>
                    <span>Excel</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-analytics-blue"></span>
                    <span>Python</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-analytics-blue"></span>
                    <span>SAS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-analytics-blue"></span>
                    <span>PowerBI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-analytics-blue"></span>
                    <span>Google Analytics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-analytics-blue"></span>
                    <span>Azure Cloud</span>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <h4 className="font-medium mb-2">Data Analysis & Modeling</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>Data Mining</Badge>
                  <Badge>Predictive Modeling</Badge>
                  <Badge>Statistical Analysis</Badge>
                  <Badge>ML</Badge>
                  <Badge>Regression</Badge>
                  <Badge>Classification</Badge>
                  <Badge>Neural Networks</Badge>
                </div>
                
                <h4 className="font-medium mb-2">Programming & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>SQL</Badge>
                  <Badge>Python</Badge>
                  <Badge>SAS</Badge>
                  <Badge>Google BigQuery</Badge>
                  <Badge>ChatGPT</Badge>
                  <Badge>Google Colab</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle>Methodologies & Processes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">LEAN</h4>
                    <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">
                      <li>Process bottleneck identification</li>
                      <li>Efficiency improvement</li>
                      <li>Waste elimination</li>
                      <li>Continuous improvement</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">SIX SIGMA</h4>
                    <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">
                      <li>Cost-cutting strategies</li>
                      <li>Process variance reduction</li>
                      <li>Quality management</li>
                      <li>Statistical process control</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">Other Skills</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="outline">Financial Modeling</Badge>
                      <Badge variant="outline">Supply Chain Management</Badge>
                      <Badge variant="outline">Market Research</Badge>
                      <Badge variant="outline">Process Optimization</Badge>
                      <Badge variant="outline">Inventory Management</Badge>
                      <Badge variant="outline">Demand Forecasting</Badge>
                      <Badge variant="outline">Strategic Planning</Badge>
                      <Badge variant="outline">Leadership</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="mt-6 animate-fade-in">
            <CardHeader>
              <CardTitle>Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <h3 className="font-medium">SQL</h3>
                  <p className="text-sm text-gray-600">Database Management</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <h3 className="font-medium">Tableau</h3>
                  <p className="text-sm text-gray-600">Data Visualization</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <h3 className="font-medium">PowerBI</h3>
                  <p className="text-sm text-gray-600">Business Intelligence</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <h3 className="font-medium">Data Analytics</h3>
                  <p className="text-sm text-gray-600">Data Processing</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <h3 className="font-medium">Azure AI Fundamentals</h3>
                  <p className="text-sm text-gray-600">AI/ML Platform</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <h3 className="font-medium">Google Analytics</h3>
                  <p className="text-sm text-gray-600">Web Analytics</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <ChartContainer title="Skill Categories">
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={skillCategoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {skillCategoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </ChartContainer>
          
          <ChartContainer title="Key Areas of Expertise">
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Data Analysis & Visualization</span>
                  <span className="text-sm">95%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-analytics-blue h-2.5 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Process Optimization</span>
                  <span className="text-sm">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-analytics-red h-2.5 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Business Intelligence</span>
                  <span className="text-sm">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-analytics-orange h-2.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Financial Analytics</span>
                  <span className="text-sm">80%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-analytics-green h-2.5 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
          </ChartContainer>
          
          <ChartContainer title="Languages & Tools">
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                <div className="text-analytics-blue text-2xl font-bold">SQL</div>
                <div className="text-xs text-gray-500">Advanced</div>
              </div>
              <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                <div className="text-analytics-orange text-2xl font-bold">Python</div>
                <div className="text-xs text-gray-500">Intermediate</div>
              </div>
              <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                <div className="text-analytics-green text-2xl font-bold">Excel</div>
                <div className="text-xs text-gray-500">Expert</div>
              </div>
              <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                <div className="text-analytics-red text-2xl font-bold">SAS</div>
                <div className="text-xs text-gray-500">Intermediate</div>
              </div>
            </div>
          </ChartContainer>
        </div>
      </div>
    </Layout>
  );
};

export default Skills;
