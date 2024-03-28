import winston from "winston"

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
                handleExceptions: true,
                filename: "exception.log"
            })
        ]
    });

    hello();