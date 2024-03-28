import winston, { silly, transport } from "winston"
import TransportStream from "winston-transport"

test("create logger with new transport", ()=>{

    class MyTransport extends TransportStream{
        constructor(option){
            super(option);
        }

        log(info, next){
            console.log(`${new Date()}: ${info.level.toUpperCase()}: ${info.message}`);
            next()
        }
    }
    
    const logger = winston.createLogger({
        level: "silly",
        transports: [
            new MyTransport({})
        ]
    });

    logger.error("Hello error")
    logger.warn("Hello warn")
    logger.info("Hello logging")
    logger.http("Hello http")
    logger.verbose("Hello verbose")
    logger.debug("Hello debug")
    logger.silly("Hello silly")
});