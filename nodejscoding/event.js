const event=require("events");
const EventEmitter=new event.EventEmitter();
const eventhandler=(extra_cheese,olive)=>{
console.log("Start prep pizza");
}
EventEmitter.on("order_pizza",()=>{
    console.log("order received");
});
EventEmitter.emit(order_pizza);