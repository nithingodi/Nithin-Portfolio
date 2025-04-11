
import { ReactNode } from 'react';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  content: ReactNode;
}

interface TimelineProps {
  items: TimelineItemProps[];
}

const Timeline = ({ items }: TimelineProps) => {
  return (
    <div className="space-y-10">
      {items.map((item, index) => (
        <div 
          key={index}
          className="bg-gray-800/50 border border-gray-700 rounded-lg shadow-md p-6 animate-fade-in relative overflow-hidden"
        >
          <div className="absolute w-1 bg-analytics-blue h-full top-0 left-6 -translate-x-1/2 z-0"></div>
          
          <div className="relative z-10 flex items-start">
            <div className="bg-analytics-blue text-white p-3 rounded-full mr-4 flex-shrink-0">
              <span className="font-bold">{index + 1}</span>
            </div>
            
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <h4 className="text-lg text-gray-400">{item.subtitle}</h4>
                </div>
                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-300 mt-2 md:mt-0">
                  {item.date}
                </span>
              </div>
              
              <div className="text-gray-300">
                {item.content}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
