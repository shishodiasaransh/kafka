import { Kafka } from 'kafkajs'; // Use Kafka with a capital K

const kafka = new Kafka({ // Create a new instance of Kafka
    brokers: ["192.168.0.105:9092"],
    clientId: "myapp",
});
export default kafka