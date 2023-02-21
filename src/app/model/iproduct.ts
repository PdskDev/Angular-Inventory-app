export interface IProduct {
  id: number;
  name: string;
  active: boolean;
  description: string;
  expirationDate: string;
  type: string;
  features?: string[];
}
