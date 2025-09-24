import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

interface CareerCardProps {
  title: string;
  description: string;
  duration: string;
  icon: React.ReactNode;
  slug: string;
  fieldOfWork: string;
}

const CareerCard = ({ title, description, duration, icon, slug, fieldOfWork }: CareerCardProps) => {
  return (
    <Card className="career-card group">
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
            {icon}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="w-4 h-4 mr-1" />
            {duration}
          </div>
        </div>
        <CardTitle className="text-xl group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {description}
        </p>
        <div className="mb-6">
          <h4 className="font-medium text-sm mb-2 flex items-center">
            <Users className="w-4 h-4 mr-2 text-primary" />
            Campo Laboral:
          </h4>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {fieldOfWork}
          </p>
        </div>
        <Link to={`/carrera/${slug}`}>
          <Button 
            variant="outline" 
            className="w-full group-hover:border-primary group-hover:text-primary transition-all duration-300"
          >
            <BookOpen className="w-4 h-4 mr-2" />
            Ver plan de estudios
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default CareerCard;