import { MockProducts } from "../data/products";

export class Product {

    public id: string = "";
    public name: string = "";
    public description: string | null = null;
    public brand: string = "";
    public variations: Variation[] = [];

    constructor() {

    }
}

export class Variation {
    details: VariationDetails = new VariationDetails();
    SKU: string = "";
    price: number = 0;
    stock: number = 0;
}

export class VariationDetails {
    size: string = "";
}