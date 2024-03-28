import winston from "winston"

test("test logging with transport", ()=>{
    const logger = winston.createLogger({
        level: "debug",
        transports: [
            new winston.transports.Console({})
        ]
    });

    logger.log({level: "error", message: "hello error"})
    logger.log({level: "warn", message: "hello warn"})
    logger.log({level: "info", message: "hello logging"})
    logger.log({level: "http", message: "hello http"})
    logger.log({level: "verbose", message: "hello verbose"})
    logger.log({level: "debug", message: "hello debug"})
    logger.log({level: "silly", message: "hello silly"})
})