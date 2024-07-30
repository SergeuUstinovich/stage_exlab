export interface PhotoType {
  src: string,
  alt: string
}

export interface ServiceType {
  id: number,
  name: string,
  description: string,
  photo: PhotoType,
  discount: number,
  dateFrom: string,
  dateTo: string,
  comment: string
}

export type ListServices = ServiceType[]



