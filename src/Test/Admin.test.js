import axios from "axios";

let adm={
   

    adminId: 1012,
    username: "ganesh",
    password: "ganesh123"
}


test("Testing List All admins funciton.", async () => {
    axios.get("http://localhost:9091/product/alladmin").then(resp => {
        let admin = result.data;
        expect(admin).toBe(admin);       
    });
});


test("Testing Add admin funciton.", async () => {
    axios.post("http://localhost:9091/product/addadmin", adm).then((resp) => {
        let admin = result.data;
        expect(admin).toBe(admin);        
    });
});


test("Testing admin login funciton.", async () => {
    axios.post("http://localhost:9091/product/admin-login", adm).then((resp) => {
        let admin = result.data;
        expect(admin).toBe(admin);        
    });
});