import pkg from "node-notifier";
import { execFile } from "child_process";
import { platform } from "os";

const notifier = pkg;
const OS_PLATFORM = platform();

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


// Linux fallback using notify-send
function tryNotifySend(title, message, cb) {
    execFile("notify-send", [ title, message ], (err) => {
        if (err) {
            fallbackBell(title, message, cb);
        } else if (typeof cb === "function") {
            cb(null);
        }
    });
}
