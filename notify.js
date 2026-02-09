import pkg from "node-notifier";
import { execFile } from "child_process";
import { platform } from "os";
import path from "path";

const notifier = pkg;

export function notify(title = "Pomodoro CLI", message = "", cb) {
    const p = new Promise((resolve, reject) => {
        try {
            if (notifier && typeof notifier.notify === "function") {
                notifier.notify({
                    title,
                    message,
                    wait: true,
                    sound: true,

                },
                    (err) => {
                        if (err) {
                            tryNotifySend(title, message, cb).then(resolve).catch(resolve);
                        } else if (typeof cb === "function") {
                            cb(null);
                            resolve();
                        }
                    });
                return;
            }
        } catch (e) {
            tryNotifySend(title, message, cb).then(resolve).catch(resolve);
        }

    });
    return p;
}


function fallbackBell(title, message, cb) {
    console.log(`\n🔔 ${title}`);
    console.log(`📢 ${message}\n`);

    process.stdout.write('\x07');

    if (typeof cb === "function") {
        cb(null);
    }
}

function tryNotifySend(title, message, cb) {
    return new Promise((resolve) => {
        const os = platform();

        if (os === "linux") {
            execFile("notify-send", [ title, message ], (err) => {
                if (err) {
                    fallbackBell(title, message, cb);
                } else if (typeof cb === "function") {
                    cb(null);
                }
                resolve();

            });
        } else if (os === "win32") {
            fallbackBell(title, message, cb);
            resolve();

        } else if (os === "darwin") {
            fallbackBell(title, message, cb);
            resolve();

        }
    });



}
