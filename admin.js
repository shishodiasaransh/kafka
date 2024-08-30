import kafka from './clients.js'

async function init() {
    const admin = kafka.admin();
    console.log("admin connecting......");
    await admin.connect();
    console.log("Admin is connected successfully 😁");

    console.log("Creating topic: rider-updates");
    await admin.createTopics({
        topics: [{
            topic: "rider-updates",
            numPartitions: 2,
        }]
    });
    console.log("rider-updates creation DONE!");
    console.log("Disconnecting the admin");
    await admin.disconnect();
}

init();// Call the init function to start the process
