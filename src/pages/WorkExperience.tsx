
import Layout from '../components/Layout';
import Timeline from '../components/Timeline';
import ChartContainer from '../components/ChartContainer';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer, 
  AreaChart, 
  Area 
} from 'recharts';
import { Separator } from '@/components/ui/separator';

const workExperienceData = [
  {
    title: "Partner, Operations and Strategy",
    subtitle: "AADITRI UPVC WINDOWS LTD.",
    date: "October 2022 - July 2024",
    content: (
      <div>
        <ul className="list-disc ml-5 space-y-2">
          <li>Applied LEAN principles to identify and eliminate process bottlenecks, driving efficiency and cost reduction.</li>
          <li>Implemented SIX SIGMA-inspired cost-cutting strategies, saving 20,000 rupees per order and increasing profit margins by 10%.</li>
          <li>Analyzed supplier and client data using advanced Excel and Tableau, improving communication workflows and strategic decision-making.</li>
          <li><span className="font-medium">Skills Used:</span> Excel, Operations Management, Strategic Management, Leadership.</li>
        </ul>
      </div>
    )
  }
];

// Performance data for charts
const performanceData = [
  { month: 'Oct 22', efficiency: 70, profit: 5 },
  { month: 'Jan 23', efficiency: 75, profit: 6 },
  { month: 'Apr 23', efficiency: 80, profit: 7 },
  { month: 'Jul 23', efficiency: 85, profit: 8 },
  { month: 'Oct 23', efficiency: 88, profit: 8.5 },
  { month: 'Jan 24', efficiency: 92, profit: 9 },
  { month: 'Apr 24', efficiency: 95, profit: 10 },
  { month: 'Jul 24', efficiency: 98, profit: 15 },
];

// Cost savings per quarter
const costSavingsData = [
  { quarter: 'Q4 2022', savings: 5000 },
  { quarter: 'Q1 2023', savings: 8000 },
  { quarter: 'Q2 2023', savings: 12000 },
  { quarter: 'Q3 2023', savings: 15000 },
  { quarter: 'Q4 2023', savings: 17000 },
  { quarter: 'Q1 2024', savings: 19000 },
  { quarter: 'Q2 2024', savings: 20000 },
];

const WorkExperience = () => {
  return (
    <Layout title="Work Experience" activePage="work-experience">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Timeline items={workExperienceData} />
          
          <div className="bg-white rounded-lg shadow-md p-6 mt-8 animate-fade-in">
            <h3 className="text-xl font-bold mb-4">Key Responsibilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-lg mb-2">Operations Management</h4>
                <ul className="list-disc ml-5 space-y-1 text-gray-700">
                  <li>Process optimization and bottleneck identification</li>
                  <li>Workflow streamlining and efficiency improvements</li>
                  <li>Implementation of LEAN methodologies</li>
                  <li>Cost reduction strategies development</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-lg mb-2">Strategic Planning</h4>
                <ul className="list-disc ml-5 space-y-1 text-gray-700">
                  <li>SIX SIGMA-inspired cost management</li>
                  <li>Profit margin enhancement initiatives</li>
                  <li>Strategic decision-making facilitation</li>
                  <li>Business intelligence reporting</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-lg mb-2">Data Analysis</h4>
                <ul className="list-disc ml-5 space-y-1 text-gray-700">
                  <li>Supplier performance tracking and optimization</li>
                  <li>Client communication workflow improvements</li>
                  <li>Advanced Excel reporting and analysis</li>
                  <li>Tableau visualization for strategic insights</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-lg mb-2">Leadership</h4>
                <ul className="list-disc ml-5 space-y-1 text-gray-700">
                  <li>Team coordination and development</li>
                  <li>Cross-functional collaboration facilitation</li>
                  <li>Business growth strategy implementation</li>
                  <li>Stakeholder relationship management</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mt-8 animate-fade-in">
            <h3 className="text-xl font-bold mb-4">Achievements</h3>
            <ul className="list-disc ml-5 space-y-3 text-gray-700">
              <li>
                <span className="font-medium">Cost Reduction:</span> Implemented process improvements that saved 20,000 rupees per order through systematic waste elimination and resource optimization.
              </li>
              <li>
                <span className="font-medium">Profit Enhancement:</span> Increased profit margins by 10% through strategic cost-cutting initiatives and operational excellence.
              </li>
              <li>
                <span className="font-medium">Efficiency Improvement:</span> Applied LEAN principles to identify and resolve process bottlenecks, resulting in 28% efficiency gain over the employment period.
              </li>
              <li>
                <span className="font-medium">Data-Driven Decision Making:</span> Established systematic data analysis processes using Excel and Tableau that improved strategic decision-making capabilities.
              </li>
            </ul>
          </div>
        </div>
        
        <div className="space-y-6">
          <ChartContainer title="Performance Metrics">
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={performanceData}
                  margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="efficiency"
                    name="Efficiency %"
                    stroke="#3366cc"
                    activeDot={{ r: 8 }}
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="profit"
                    name="Profit Margin %"
                    stroke="#dc3912"
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </ChartContainer>
          
          <ChartContainer title="Cost Savings Per Quarter">
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={costSavingsData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="quarter" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`₹${value}`, 'Savings']} />
                  <Area
                    type="monotone"
                    dataKey="savings"
                    stroke="#ff9900"
                    fill="#ff9900"
                    fillOpacity={0.3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </ChartContainer>
          
          <ChartContainer title="Skills Applied">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">LEAN Principles</span>
                  <span className="text-sm">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-analytics-blue h-2.5 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">SIX SIGMA</span>
                  <span className="text-sm">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-analytics-red h-2.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Data Analysis</span>
                  <span className="text-sm">80%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-analytics-orange h-2.5 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Strategic Management</span>
                  <span className="text-sm">75%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-analytics-green h-2.5 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
            
            <Separator className="my-4" />
            
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="bg-gray-50 p-2 rounded text-center">Excel</div>
              <div className="bg-gray-50 p-2 rounded text-center">Tableau</div>
              <div className="bg-gray-50 p-2 rounded text-center">Operations</div>
              <div className="bg-gray-50 p-2 rounded text-center">Leadership</div>
            </div>
          </ChartContainer>
        </div>
      </div>
    </Layout>
  );
};

export default WorkExperience;
