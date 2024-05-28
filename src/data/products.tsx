import { Product } from "../models/product";

export const MockProducts: Product[] = [
    {
        id: "qwertyuiop101",
        name: 'Pampers',
        description: 'Pampers',
        brand: 'Pampers',
        variations: [
            {
                details: {
                    size: 'XS'
                },
                SKU: '1001',
                price: 101,
                stock: 101
            },
            {
                details: {
                    size: "S"
                },
                SKU: '1002',
                price: 102,
                stock: 100,

            },
            {
                details: {
                    size: 'M'
                },
                SKU: '1003',
                price: 103,
                stock: 100
            },
            {
                details: {
                    size: "L"
                },
                SKU: '1004',
                price: 104,
                stock: 100,

            },
            {
                details: {
                    size: 'XL'
                },
                SKU: '1005',
                price: 105,
                stock: 101
            },
            {
                details: {
                    size: "XXL"
                },
                SKU: '1006',
                price: 106,
                stock: 100,

            },
        ]
    },
    {
        id: "qwertyuiop102",
        name: 'EQ',
        description: 'EQ',
        brand: 'EQ',
        variations: [
            {
                details: {
                    size: 'XS'
                },
                SKU: '1001',
                price: 101,
                stock: 101
            },
            {
                details: {
                    size: "S"
                },
                SKU: '1002',
                price: 102,
                stock: 100,

            },
            {
                details: {
                    size: 'M'
                },
                SKU: '1003',
                price: 103,
                stock: 100
            },
            {
                details: {
                    size: "L"
                },
                SKU: '1004',
                price: 104,
                stock: 100,

            },
            {
                details: {
                    size: 'XL'
                },
                SKU: '1005',
                price: 105,
                stock: 101
            },
            {
                details: {
                    size: "XXL"
                },
                SKU: '1006',
                price: 106,
                stock: 100,

            },
        ]
    },
    {
        id: "qwertyuiop103",
        name: 'Nido',
        description: 'Nido',
        brand: 'Nido',
        variations: [
            {
                details: {
                    size: '1000g'
                },
                SKU: '3001',
                price: 303,
                stock: 101
            },
            {
                details: {
                    size: "500g"
                },
                SKU: '3002',
                price: 302,
                stock: 100,
            },
            {
                details: {
                    size: "550g"
                },
                SKU: '3002',
                price: 301,
                stock: 100,
            }
        ]
    }
];


