import axios from "axios";

let profile={
   

    profileId: 2,
    firstName: "venkat",
    lastName: "Naidu",
    username: "Venkat",
    password: "venkat123",
    contactNumber: 9988877766,
    date: "2000-06-12",
    email: "venkat@gmail.com",
    gender: "male",
    role: "customer",
    house: 654,
    street: "gandhiStreet",
    city: "Tanuku",
    state: "AP",
    country: "India"
   
}

test("Testing List All profiles funciton.", async () => {
    axios.get("http://localhost:8007/profile/allProfiles").then(resp => {
        let profiles = result.data;
        expect(profiles).toBe(profiles);       
    });
});


test("Testing View  profile by profileId funciton.", async () => {
    axios.get("http://localhost:8007/profile/get/" + 2).then(resp => {
        
        let profiles = result.data;
        expect(profiles).toBe(profiles);        
    });
});


test("Testing Add profile funciton.", async () => {
    axios.post("http://localhost:8007/profile/save", profile).then((resp) => {
        let profiles = result.data;
        expect(profiles).toBe(profiles);        
    });
});


test("Testing Delete profile  funciton.", async () => {
    axios.delete("http://localhost:8007/profile/delete/" + 2).then((resp) => {
        let profiles = result.data;
        expect(profiles).toBe(profiles);        
    });
});


test("Testing profile update funciton.", async () => {
    axios.put("http://localhost:8007/profile/update", profile).then((resp) => {
        let profiles = result.data;
        expect(profiles).toBe(profiles);        
    });
});


test("Testing profile login funciton.", async () => {
    axios.post("http://localhost:8007/profile/profile-login", profile).then((resp) => {
        let profiles = result.data;
        expect(profiles).toBe(profiles);        
    });
});