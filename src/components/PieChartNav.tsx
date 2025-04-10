
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer, Sector } from 'recharts';

const COLORS = ['#3366cc', '#dc3912', '#ff9900', '#66aa00'];

interface DataItem {
  name: string;
  value: number;
  path: string;
}

const renderActiveShape = (props: any) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 10}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 15}
        outerRadius={outerRadius + 20}
        fill={fill}
      />
    </g>
  );
};

interface PieChartNavProps {
  title?: string;
  subtitle?: string;
}

const PieChartNav = ({ title = "Portfolio", subtitle = "Click a section to explore" }: PieChartNavProps) => {
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);
  const [data, setData] = useState<DataItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Set data with slight delay for animation effect
    const timeoutId = setTimeout(() => {
      setData([
        { name: 'Projects', value: 1, path: '/projects' },
        { name: 'Work Experience', value: 1, path: '/work-experience' },
        { name: 'Education', value: 1, path: '/education' },
        { name: 'Skills', value: 1, path: '/skills' },
      ]);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const onPieClick = (data: any, index: number) => {
    navigate(data.path);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full animate-fade-in">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        <p className="text-xl text-gray-600">{subtitle}</p>
      </div>
      
      <div className="w-full max-w-lg h-[500px] relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={120}
              paddingAngle={5}
              dataKey="value"
              onMouseEnter={onPieEnter}
              onClick={onPieClick}
              isAnimationActive={true}
              animationDuration={1000}
              animationBegin={200}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[index % COLORS.length]} 
                  cursor="pointer"
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        
        {/* Section Labels */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="relative w-full h-full">
            {/* Projects - Top Left */}
            <div className="absolute top-[20%] left-[20%] transform -translate-x-1/2 -translate-y-1/2">
              <span className="text-lg font-bold">Projects</span>
            </div>
            
            {/* Work Experience - Top Right */}
            <div className="absolute top-[20%] right-[20%] transform translate-x-1/2 -translate-y-1/2">
              <span className="text-lg font-bold">Work Experience</span>
            </div>
            
            {/* Education - Bottom Right */}
            <div className="absolute bottom-[20%] right-[20%] transform translate-x-1/2 translate-y-1/2">
              <span className="text-lg font-bold">Education</span>
            </div>
            
            {/* Skills - Bottom Left */}
            <div className="absolute bottom-[20%] left-[20%] transform -translate-x-1/2 translate-y-1/2">
              <span className="text-lg font-bold">Skills</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChartNav;
