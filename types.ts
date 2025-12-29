
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface PortfolioItem {
  id: string;
  category: string;
  title: string;
  location?: string;
  review?: string;
  imageUrl: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface InquiryFormData {
  name: string;
  hospitalName: string;
  region: string;
  department: string;
  phone: string;
}
