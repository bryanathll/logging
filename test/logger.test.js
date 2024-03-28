import winston from "winston"

test("test logging", ()=>{
    const logger = winston.createLogger({});

    logger.log({
        level: "info",
        message: "hello logging"
    })
})