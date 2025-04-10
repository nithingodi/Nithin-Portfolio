
import { ReactNode } from 'react';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  children?: ReactNode;
}

const TimelineItem = ({ title, subtitle, date, children }: TimelineItemProps) => {
  return (
    <div className="mb-8 flex animate-fade-in">
      <div className="flex flex-col items-center mr-4">
        <div className="rounded-full h-4 w-4 bg-analytics-blue flex items-center justify-center"></div>
        <div className="h-full w-0.5 bg-gray-200"></div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 flex-1">
        <span className="text-sm text-gray-500 font-medium">{date}</span>
        <h3 className="text-xl font-bold mt-1">{title}</h3>
        <h4 className="text-lg text-gray-600 mb-3">{subtitle}</h4>
        {children && <div className="mt-2 text-gray-700">{children}</div>}
      </div>
    </div>
  );
};

interface TimelineProps {
  items: {
    title: string;
    subtitle: string;
    date: string;
    content?: ReactNode;
  }[];
}

const Timeline = ({ items }: TimelineProps) => {
  return (
    <div className="my-8">
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          title={item.title}
          subtitle={item.subtitle}
          date={item.date}
        >
          {item.content}
        </TimelineItem>
      ))}
    </div>
  );
};

export default Timeline;
