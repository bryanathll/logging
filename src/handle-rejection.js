import winston from "winston"

async function callAsync(){
    return Promise.reject("ups");
}

const logger = winston.createLogger({
    level: "debug",
    // handleExceptions:true,
    // handleRejections: true,
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.ms(),
        winston.format.json(),
    ),
    transports: [
        new winston.transports.Console({}),
        new winston.transports.File({
            handleRejections: true,
            filename: "src/rejection.log"
        })
    ] 
});

callAsync();