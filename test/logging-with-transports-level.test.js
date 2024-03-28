import winston, { level } from "winston"

test("test logging with file transport", ()=>{
    const logger = winston.createLogger({
        level: "debug",
        format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            winston.format.json(),
        ),
        transports: [
            new winston.transports.Console({}),
            new winston.transports.File({
                filename: "application.log",
                level: "debug"
            }),
            new winston.transports.File({
                filename: "application-error.log",
                level: "error"
            })
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