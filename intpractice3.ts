import { Product } from "./product";

let p1:Product = {
    id:'Product1',
    name:'Fasoolia',
    description:'Lebanese',
    price:2.50,
    inventory:13
};

let p2:Product = {
    id:'Product2',
    name:'Hummus',
    description:'Lebanese',
    price:4,
    inventory:11
};

let Ps:Product[] = [];

Ps.push(p1,p2); // can i do dis?

Ps.push({
    id:'Product3',
    name:'Mehoyminoy',
    description:'Hawkenvin',
    price:12.99,
    inventory:30
});

let PrintProduct = (myprod:Product) => {
    console.log(`${myprod.name} id ${myprod.id} ${myprod.price}`);
}

// PrintProduct(p1);

let PrintProducts = (prods:Product[]) => {
    prods.forEach(prod => {
        PrintProduct(prod);
    });
}

PrintProducts(Ps);