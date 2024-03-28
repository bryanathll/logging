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
                maxSize: '100m',
                maxFiles: '14d'
            })
        ]
    });

    for (let i = 0 ; i<100000; i++){
        logger.info(`Hello world ${i}`);
    }
})