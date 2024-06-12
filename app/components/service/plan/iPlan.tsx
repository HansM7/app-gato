export interface Plan {
    name: string;
    descriptionCorta: string;
    description?: string;
    details: { name?: string; items?: string[] }[];
    price: number;
    priceTrimestral?: number;
    color: string;
    word: string;
  }