import pkg from "node-notifier";
import { execFile } from "child_process";

const notifier = pkg;

export function notify(title = "Pomodoro CLI", message = "", cb) {
    const p = new Promise((resolve, reject) => {
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
        }

        tryNotifySend(title, message, cb);
    });
    return p;
}

function tryNotifySend(title, message, cb) {
    execFile("notify-send", [ title, message ], (err) => {
        if (err) {
            console.log(`\x07${title}: ${message}`);
        }
        if (typeof cb === "function") cb(err);
    });
}
