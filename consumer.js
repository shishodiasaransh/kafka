import kafka from "./clients.js";
const group = process.argv[2]

async function init(){
    const consumer = kafka.consumer({groupId:group});
    try {
        await consumer.connect();
        await consumer.subscribe({ topics:["rider-updates"],fromBeginning:true});
    
        console.log("consumer running")
        await consumer.run({
            eachMessage:async({topic,partition,message,heartbeat,pause})=>{
                console.log(`${group},[${topic}]:PART:${partition}:`,message.value.toString());
            }
            
        })  
    } catch (error) {
        console.log("error",error)
    }

    
}

init()