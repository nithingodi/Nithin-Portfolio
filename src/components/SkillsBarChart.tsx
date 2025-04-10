
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Data Mining', value: 90 },
  { name: 'SQL', value: 85 },
  { name: 'Tableau', value: 80 },
  { name: 'Excel', value: 95 },
  { name: 'Python', value: 85 },
  { name: 'SAS', value: 75 },
  { name: 'ML', value: 80 },
  { name: 'Google Analytics', value: 70 },
  { name: 'LEAN', value: 85 },
  { name: 'SIX SIGMA', value: 80 },
];

const SkillsBarChart = () => {
  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
          layout="vertical"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[0, 100]} />
          <YAxis 
            dataKey="name" 
            type="category" 
            width={100} 
            tick={{ fontSize: 12 }}
          />
          <Tooltip formatter={(value) => [`${value}%`, 'Proficiency']} />
          <Bar 
            dataKey="value" 
            fill="#3366cc" 
            radius={[0, 4, 4, 0]} 
            animationDuration={2000}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillsBarChart;
