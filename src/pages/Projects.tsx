
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import ChartContainer from '../components/ChartContainer';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const projectCategoriesData = [
  { name: 'Data Analysis', value: 40 },
  { name: 'Predictive Modeling', value: 25 },
  { name: 'Market Analysis', value: 20 },
  { name: 'Supply Chain', value: 15 },
];

const COLORS = ['#3366cc', '#dc3912', '#ff9900', '#66aa00'];

const Projects = () => {
  return (
    <Layout title="Projects" activePage="projects">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <ProjectCard
            title="Firm Bankruptcy Prediction Model"
            date="November 2024 - December 2024"
            description="Designed a predictive model for firm bankruptcy analysis using SAS Enterprise Miner and KAGGLE COMPETITION data."
            skillsUsed={['Data Mining', 'SAS', 'ML', 'Polynomial Regression', 'Gradient Boosting', 'Neural Networks', 'Decision Trees']}
            highlights={[
              "Performed advanced preprocessing, including outlier removal using mean absolute deviation and variable transformations.",
              "Evaluated and compared models such as Polynomial Regression, Gradient Boosting, Neural Networks, and Decision Trees.",
              "Developed expertise in class imbalance handling, overfitting mitigation, and parameter tuning for high-stakes financial data modeling."
            ]}
          />
          
          <ProjectCard
            title="Network Effect of Airbnb Superhosts"
            date="November 2024 - December 2024"
            description="Analyzed the impact of Superhost density on non-Superhost revenue using Airbnb data."
            skillsUsed={['Python', 'Google Colab', 'ChatGPT', 'Regression', 'Temporal Analysis', 'Revenue Trend Analysis']}
            highlights={[
              "Analyzed the impact of Superhost density on non-Superhost revenue, identifying a critical density threshold of 22.2%.",
              "Applied Lasso Regression to determine key factors influencing Superhost status, including ratings and reviews.",
              "Examined performance lag trends, revealing an average of 2 months to achieve peak performance after crossing the Superhost threshold.",
              "Predicted Superhost density trends to identify areas for growth, stabilization, and decline, supported by geospatial data visualization."
            ]}
          />
          
          <ProjectCard
            title="Supply Chain & Operational Analysis on OTG pod"
            date="February 2025 - March 2025"
            description="Conducted supply chain analysis on order fulfillment processes using queueing theory modeling."
            skillsUsed={['Capacity Planning', 'Process Optimization', 'Inventory Management', 'Demand Forecasting']}
            highlights={[
              "Conducted supply chain analysis on order fulfillment processes using queueing theory modeling.",
              "Identified billing as critical bottleneck; recommended capacity expansion to streamline throughput.",
              "Designed batch packaging strategy to improve inventory flow and reduce operational lead times.",
              "Analyzed variability in customer demand patterns to optimize staffing and resource allocation."
            ]}
          />
          
          <ProjectCard
            title="Market Expansion Analysis"
            date="September 2024 - October 2024"
            description="Conducted market analysis to identify prime locations for limited-service restaurants."
            skillsUsed={['Google BigQuery', 'SQL', 'Data Analysis', 'Market Research', 'Problem Solving']}
            highlights={[
              "Conducted market analysis to identify prime locations based on foot traffic patterns and consumer demographics.",
              "Extracted, filtered, and segmented data to uncover insights into regional foot traffic hotspots and middle-income demographics.",
              "Performed market segmentation and competitor analysis using LEAN principles to assess high-demand counties."
            ]}
          />
        </div>
        
        <div className="space-y-6">
          <ChartContainer title="Project Categories">
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={projectCategoriesData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {projectCategoriesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </ChartContainer>
          
          <ChartContainer title="Technologies Used">
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-analytics-blue rounded-full"></span>
                <span>SAS Enterprise Miner</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-analytics-red rounded-full"></span>
                <span>Python</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-analytics-orange rounded-full"></span>
                <span>Google Colab, ChatGPT</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-analytics-green rounded-full"></span>
                <span>SQL, Google BigQuery</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-analytics-purple rounded-full"></span>
                <span>Tableau</span>
              </li>
            </ul>
          </ChartContainer>
          
          <ChartContainer title="Skills Developed">
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Data Mining & ML</span>
                  <span className="text-sm">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-analytics-blue h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">SQL & Data Analysis</span>
                  <span className="text-sm">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-analytics-red h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Python & Analytics</span>
                  <span className="text-sm">80%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-analytics-orange h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Market Research</span>
                  <span className="text-sm">75%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-analytics-green h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </ChartContainer>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
