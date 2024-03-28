import winston from "winston"

test("test logging with shortcut function", ()=>{
    const logger = winston.createLogger({
        level: "debug",
        transports: [
            new winston.transports.Console({})
        ]
    });

    logger.error("Hello error")
    logger.warn("Hello warn")
    logger.info("Hello logging")
    logger.http("Hello http")
    logger.verbose("Hello verbose")
    logger.debug("Hello debug")
    logger.silly("Hello silly")
})