import axios from "axios";


let pro={
   

    productId: 3,
    name: "OnePlus Nord CE 2",
    price: 18999,
    description: "GOOD in Quality",
    catagory: "Mobiles",
    image: "https://m.media-amazon.com/images/I/413u56t+CiL._SY300_SX300_.jpg"
   
}


test("Testing List All products funciton.", async () => {
    axios.get("http://localhost:9091/product/allProduct").then(resp => {
        let product = result.data;
        expect(product).toBe(product);       
    });
});


test("Testing View  product by productId funciton.", async () => {
    axios.get("http://localhost:9091/product/get/" + 3).then(resp => {
        
        let product = result.data;
        expect(product).toBe(product);        
    });
});

test("Testing Add product funciton.", async () => {
    axios.post("http://localhost:9091/product/addProduct", pro).then((resp) => {
        let product = result.data;
        expect(product).toBe(product);        
    });
});


test("Testing product update funciton.", async () => {
    axios.put("http://localhost:9091/product/update", pro).then((resp) => {
        let product = result.data;
        expect(product).toBe(product);        
    });
});



test("Testing Delete product  funciton.", async () => {
    axios.delete("http://localhost:9091/product/delete/" + 3).then((resp) => {
        let product = result.data;
        expect(product).toBe(product);        
    });
});


