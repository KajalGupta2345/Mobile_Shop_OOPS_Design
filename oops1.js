class MobileShop {
    constructor(shopname, location) {
        this.shopname = shopname;
        this.location = location;
        this.mobiles = []; //Array of objects
    }
    addMobile(mobiles) {
        this.mobiles.push(...mobiles);
        this.mobiles.forEach((mobile)=>{
            console.log(`${mobile.brand} ${mobile.model} added to the ${this.shopname} shop.`);
        })
    }
    listAllMobiles() {
        console.log(`📦${this.shopname} Inventory : `);
        this.mobiles.forEach((mobile, index) => {
            console.log(`${index + 1}). ${mobile.brand} ${mobile.model} - ₹${mobile.price}`);
        });
    }
    sellMobiles(modelName) {
        let index = this.mobiles.findIndex(mobile => mobile.model === modelName);
        // console.log(index);
        
        if (index != -1) {
            let sold = this.mobiles.splice(index, 1)[0];
            // console.log(sold);
            console.log(`📤 sold : ${sold.brand} ${sold.model}`);
            return sold;
        } else {
            console.log(`❌ Mobile ${modelName} not found in stock.`);
        }
    }
}
class Mobile {
    constructor(brand, model, price, storage) {
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.storage = storage;
        this.sim = null;
    }

    insertSim(sim) {
        if (!this.sim) {
            this.sim = sim;
            console.log(`${sim.network} SIM inserted in ${this.brand},${this.model} `);
        } else {
            console.log(`SIM already inserted.`);
        }
    }
    removeSim() {
        if (this.sim) {
            console.log(`SIM ${this.sim.number} removed from ${this.model}`);
            this.sim = null;
        } else {
            console.log(`No SIM to remove`);
        }
    }
    getMobileInfo() {
        console.log(`📱Mobile Info
            ____________________
            Brand = ${this.brand}
            Model = ${this.model}
            Price = ${this.price}
            Storage = ${this.storage}`);
        if (this.sim) {
            this.sim.getSimDetails();
        } else {
            console.log("No SIM Inserted.");
        }
    }

}
class Sim {
    constructor(network, balance, number) {
        this.network = network;
        this.balance = balance;
        this.number = number;
        this.isActive = true;
    }
    recharge(amount) {
        this.balance += amount;
        console.log(`Recharge of ₹${this.balance} successfully on your SIM+`);
    }
    deactivate() {
        this.isActive = false;
        console.log(`SIM ${this.number} deactivated.`);

    }
    getSimDetails() {
        console.log(`📱 Sim Info : 
        Network = ${this.network}
        Balance = ${this.balance}
        Number = ${this.number}
        IsActive = ${this.isActive ? "yes" : "No"}
            `);
    }
}

let sim1 = new Sim("Airtel", 349, "7491057861");
let sim2 = new Sim("Jio", 599, "8800234567");
let sim3 = new Sim("Vi", 129, "9123456789");
let sim4 = new Sim("BSNL", 99, "9401234567");
// console.log(sim1.recharge(649));
// console.log(sim1.deactivate());
// console.log(sim1.getSimDetails());

let mobile1 = new Mobile("Apple", "iphone 13", 70000, "256GB");
// console.log(mobile1.insertSim(sim2));
// console.log(mobile1.removeSim());
// console.log(mobile1.getMobileInfo());
// console.log(mobile1.insertSim(sim2));
// console.log(mobile1.getMobileInfo());

let mobile3 = new Mobile("OnePlus", "Nord CE 3 Lite", 20000, "128GB");
let mobile4 = new Mobile("Realme", "Narzo 60x", 13000, "128GB");
let mobile5 = new Mobile("Xiaomi", "Redmi Note 12", 15000, "128GB");
let mobile6 = new Mobile("Vivo", "V29 Pro", 39000, "256GB");

let shop = new MobileShop("Tech World", "Delhi");
// shop.addMobile([mobile1, mobile3, mobile4, mobile5, mobile6]);
// shop.listAllMobiles();
// shop.sellMobiles("Redmi Note 12");

let shop2 = new MobileShop("Smart Hub", "Mumbai");
shop2.addMobile([mobile1, mobile3, mobile4, mobile5, mobile6]);
shop2.listAllMobiles();
let mobile = shop2.sellMobiles("Narzo 60x");
console.log(mobile);
mobile.insertSim(sim1);
mobile.getMobileInfo();


let shop3 = new MobileShop("Mobile Galaxy", "Bangalore");
let shop4 = new MobileShop("Phone Point", "Kolkata");
let shop5 = new MobileShop("Gadget Zone", "Hyderabad");
let shop6 = new MobileShop("The Mobile Store", "Pune");
let shop7 = new MobileShop("Connect & Go", "Chennai");





