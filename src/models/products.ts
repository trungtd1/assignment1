class Product {
    name: string;
    price: number;
    image: string;
    sale: number;
    longDesc: string;
    shortDesc: string;
    salientfeatures: string;
    category: number;
    id: number;
    isDelete?: boolean;

    constructor(
        name: string,
        price: number,
        image: string,
        sale: number,
        longDesc: string,
        shortDesc: string,
        salientfeatures: string,
        category: number,
        id: number,) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.sale = sale;
        this.longDesc = longDesc;
        this.shortDesc = shortDesc;
        this.salientfeatures = salientfeatures;
        this.category = category;
        this.id = id;
    }
}