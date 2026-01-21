import pkg from "node-notifier";
import { execFile } from "child_process";

const notifier = pkg;

//TODO: refactor function notify
export function notify(title = "Pomodoro CLI", message = "", cb) {
<<<<<<< Updated upstream
    try {
        if (notifier && typeof notifier.notify === "function") {
            notifier.notify({ title, message, sound: true }, (err) => {
                if (err) {
                    tryNotifySend(title, message, cb);
                } else if (typeof cb === "function") {
                    cb(null);
                }
            });
            return;
=======
    const p = new Promise((resolve, reject) => {
        // twice try catch block 
        try {
            if (notifier && typeof notifier.notify === "function") {
                notifier.notify({ title, message, sound: true }, (err) => {
                    if (err) {
                        fallBackNotify(title, message)
                            .then(() => playSound().then(resolve).catch(resolve))
                    } else if (typeof cb === "function") {
                        cb(null);
                    }
                });
                return;
            }
        } catch (e) {
>>>>>>> Stashed changes
        }
    } catch (e) {
    }

    tryNotifySend(title, message, cb);
}

function promisifyNotify() {
    return new Promise
    // return new Promise from notifier.notify and set params resolve, reject
}

function tryNotifySend(title, message, cb) {
    // return new Promise set params resolve, reject
    execFile("notify-send", [ title, message ], (err) => {
        if (err) {
            console.log(`\x07${title}: ${message}`);
        }
        if (typeof cb === "function") cb(err);
    });
}