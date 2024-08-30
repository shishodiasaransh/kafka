import kafka from "./clients.js";
import readline from 'readline'

const rl = readline.createInterface({
    input:process.stdin,
    output:process.output,
})

async function init() {
  const producer = kafka.producer();
  console.log("connecting producer");
  await producer.connect();
  console.log("producers connected successfully");

  rl.setPrompt('> ')
  rl.prompt();
  rl.on("line",async function (line) {
    const [riderName,location]=line.split(" ");
    await producer.send({
        topic: "rider-updates",
        messages: [
          {
            partition:location.toLocaleLowerCase()=== 'north'? 0 : 1,
            key: "location-update",
            value: JSON.stringify({ name: riderName, loc: location }),
          },
        ],
      });
    
  }).on("close",async ()=>{
    await producer.disconnect()
  console.log("disconnected producers")
  })

  
  
}

init()
