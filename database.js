const {MongoClient} = require("mongodb");

const URL = 
"mongodb+srv://adityajiwane182000:SS321PffaZQsARD8@cluster0.rbi2w.mongodb.net/";

const client = new MongoClient(URL);

const dbName = 'HelloWorld';

async function main(){

    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection("User");

    const insertData = {
        "firstName" : "Suraj",
        "lastname" : "Sao",
        "Age" : 24,
        "Location" : "Chandrapur",
        "Mobile" : "9637268059"
    };

    const insertResult = await collection.insertMany([insertData]);
    console.log("inserte documents =>", insertResult);

    //read from compass
    const findResult = await collection.find({}).toArray();
    console.log("found docs =>" ,findResult);

    const countResult = await collection.countDocuments({});
    console.log("count of docs in user collection is => ", countResult);

    return "done";
}
main()
.then(console.log)
.catch(console.error)
.finally(() => client.close())