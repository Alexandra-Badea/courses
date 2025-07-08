import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, Users, Award, Video } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Course } from '@/types/course'
import { formatPrice, formatDate } from '@/lib/utils'

interface CourseCardProps {
  course: Course
}

export function CourseCard({ course }: CourseCardProps) {
  const spotsRemaining = course.maxParticipants - course.currentParticipants
  const isAlmostFull = spotsRemaining <= 5

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="relative h-48 rounded-t-lg overflow-hidden">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <Badge variant={course.level === 'Beginner' ? 'secondary' : course.level === 'Intermediate' ? 'default' : 'destructive'}>
              {course.level}
            </Badge>
            <Badge variant="outline" className="bg-white/90">
              {course.category}
            </Badge>
          </div>
          {isAlmostFull && (
            <div className="absolute top-4 right-4">
              <Badge variant="destructive">Almost Full!</Badge>
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 p-6">
        <CardTitle className="text-xl mb-2 line-clamp-2">{course.title}</CardTitle>
        <p className="text-muted-foreground mb-4 line-clamp-3">{course.description}</p>
        
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(course.schedule.startDate)} - {formatDate(course.schedule.endDate)}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>{course.currentParticipants}/{course.maxParticipants} enrolled</span>
          </div>
          <div className="flex items-center gap-2">
            <Video className="w-4 h-4" />
            <span>Online via {course.platform}</span>
          </div>
          {course.certificateIncluded && (
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Certificate included</span>
            </div>
          )}
        </div>
        
        <div className="flex flex-wrap gap-1 mt-4">
          {course.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0 flex items-center justify-between">
        <div className="text-2xl font-bold text-primary">
          {formatPrice(course.price)}
        </div>
        <Button asChild>
          <Link href={`/courses/${course.id}`}>
            Learn More
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
} 