
import { ReactNode } from 'react';
import { Card } from '@/components/ui/card';

interface ChartContainerProps {
  children: ReactNode;
  title: string;
  className?: string;
}

const ChartContainer = ({ children, title, className = '' }: ChartContainerProps) => {
  return (
    <Card className={`p-6 shadow-md animate-fade-in ${className}`}>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      {children}
    </Card>
  );
};

export default ChartContainer;
