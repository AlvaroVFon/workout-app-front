export interface Athlete {
  _id: string
  id: string
  email: string
  firstname: string
  lastname: string
  coach: string
  idDocument: string
  gender?: Gender
  height?: number
  weight?: number
  goals?: string[]
  notes?: string
  phone?: string
}

type Gender = 'Male' | 'Female' | 'Other'
