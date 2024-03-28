import winston from "winston"

test("test logging with format", ()=>{
    const logger = winston.createLogger({
        level: "debug",
        format: winston.format.logstash(),
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