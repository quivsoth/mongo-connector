const {MongoClient} = require('mongodb');

console.log("We are here");

const uri = "mongodb://10.131.0.231:27017";
//const uri = "mongodb://192.168.1.3:27017";

async function main() {
	// we'll add code here soon
    const client = new MongoClient(uri);

    try {
        await client.connect();
        await listDatabases(client);
    } catch (e) {
        console.error(e);
    }
    finally {
        await client.close();
    }
}

async function listDatabases(client){
    console.log("List DBs");
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};


main().catch(console.error);