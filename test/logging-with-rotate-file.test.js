import winston from "winston"
import DailyRotateFile from "winston-daily-rotate-file";

test("test logging with DailyRotateFile", ()=>{
    const logger = winston.createLogger({
        level: "debug",
        format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            winston.format.json(),
        ),
        transports: [
            new winston.transports.Console({}),
            new DailyRotateFile({
                filename: "app-%DATE%.log",
                zippedArchive: true,
                maxSize: '1m',
                maxFiles: '14d'
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