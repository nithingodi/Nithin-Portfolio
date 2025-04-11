
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart3, Briefcase, Book, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

type ProjectItem = {
  name: string;
  path: string;
  icon: React.ReactNode;
  color: string;
};

interface AnimatedProjectsCarouselProps {
  title?: string;
  subtitle?: string;
}

const AnimatedProjectsCarousel = ({ 
  title = "Portfolio", 
  subtitle = "Swipe to explore" 
}: AnimatedProjectsCarouselProps) => {
  const navigate = useNavigate();
  const [data, setData] = useState<ProjectItem[]>([]);
  
  useEffect(() => {
    setData([
      { name: 'Projects', path: '/projects', icon: <BarChart3 size={32} />, color: 'from-analytics-blue to-blue-800' },
      { name: 'Work Experience', path: '/work-experience', icon: <Briefcase size={32} />, color: 'from-analytics-red to-red-800' },
      { name: 'Education', path: '/education', icon: <Book size={32} />, color: 'from-analytics-orange to-amber-800' },
      { name: 'Skills', path: '/skills', icon: <Star size={32} />, color: 'from-analytics-green to-green-800' },
    ]);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full animate-fade-in">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2 text-white">{title}</h1>
        <p className="text-xl text-gray-400">{subtitle}</p>
      </div>
      
      <div className="w-full max-w-5xl">
        <Carousel 
          className="relative"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="py-8">
            {data.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 cursor-pointer">
                <div 
                  className="h-[300px] p-1" 
                  onClick={() => navigate(item.path)}
                >
                  <Card className={cn(
                    "h-full w-full overflow-hidden rounded-xl bg-gradient-to-br shadow-xl transition-all hover:scale-105",
                    item.color
                  )}>
                    <CardContent className="flex flex-col items-center justify-between h-full p-6 text-white">
                      <div className="absolute bottom-0 right-0 overflow-hidden">
                        {/* Minion-like character */}
                        <div className="relative">
                          <div className="w-16 h-20 bg-yellow-400 rounded-t-full animate-bounce mb-2 mt-4 shadow-inner">
                            {/* Eyes */}
                            <div className="absolute top-2 left-2 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                            </div>
                            <div className="absolute top-2 right-2 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                            </div>
                            {/* Smile */}
                            <div className="absolute top-8 left-4 w-8 h-3 border-b-2 border-gray-800 rounded-b-full"></div>
                          </div>
                          <div className="w-16 h-8 bg-blue-600 relative">
                            {/* Arms */}
                            <div className="absolute -left-4 top-0 w-4 h-2 bg-yellow-400 rounded-full"></div>
                            <div className="absolute -right-4 top-0 w-4 h-2 bg-yellow-400 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex flex-col items-center text-center">
                        <div className="p-3 bg-white/20 rounded-full mb-4">
                          {item.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                        <p className="text-sm text-white/80">Click to explore</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Animated movement indicators */}
          <div className="absolute -bottom-4 left-0 w-full flex justify-center gap-2">
            <div className="animate-pulse opacity-50">⟠</div>
            <div className="animate-pulse delay-75 opacity-70">⟠</div>
            <div className="animate-pulse delay-150 opacity-90">⟠</div>
            <div className="animate-pulse delay-300">⟠</div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default AnimatedProjectsCarousel;
