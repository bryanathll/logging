import winston from "winston"

test("test logging with shortcut function", ()=>{
    const logger = winston.createLogger({
        level: "debug",
        format: winston.format.printf(log =>{
            return `${new Date()}: ${log.level.toLocaleUpperCase()}: ${log.message}`
            // return `${log.level}: ${log.message}`;
            // return JSON.stringify(log);
        }),
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