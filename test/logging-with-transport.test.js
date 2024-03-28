import winston from "winston"

test("test logging with transport", ()=>{
    const logger = winston.createLogger({
        transports: [
            new winston.transports.Console({})
        ]
    });

    logger.log({
        level: "info",
        message: "hello logging"
    })
})