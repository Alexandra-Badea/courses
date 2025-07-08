export interface Course {
  id: string
  title: string
  description: string
  longDescription: string
  instructor: string
  duration: string
  price: number
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  category: 'Microsoft Office' | 'Design Tools' | 'Educational Apps' | 'Other'
  image: string
  tags: string[]
  schedule: {
    startDate: string
    endDate: string
    sessions: Session[]
  }
  maxParticipants: number
  currentParticipants: number
  certificateIncluded: boolean
  platform: 'Zoom' | 'Google Meet'
}

export interface Session {
  id: string
  date: string
  time: string
  duration: string
  topic: string
}

export interface Registration {
  id: string
  courseId: string
  participantName: string
  participantEmail: string
  participantPhone: string
  registrationDate: string
  paymentStatus: 'pending' | 'completed' | 'failed'
} 