import pkg from "node-notifier";
import { execFile } from "child_process";
import { platform } from "os";

const notifier = pkg;
const OS_PLATFORM = platform();

export function notify(title = "Pomodoro CLI started", message = "", cb) {
    try {
        if (notifier && typeof notifier.notify === "function") {
            notifier.notify({ title, message, sound: true },
                (err) => {
                    if (err) {
                        if (OS_PLATFORM === "win32") {
                            fallbackBell(title, message, cb);
                        } else {
                            tryNotifySend(title, message, cb);
                        }
                    } else if (typeof cb === "function") {
                        cb(null);
                    }
                });
            return;
        }
    } catch (e) {
    }

    // If notifier is not available, use platform-specific fallback
    if (OS_PLATFORM === "win32") {
        fallbackBell(title, message, cb);
    } else {
        tryNotifySend(title, message, cb);
    }
}

// Fallback for Windows and other systems without "notify-send"
function fallbackBell(title, message, cb) {
    console.log(`\x07${title}: ${message}`);
    if (typeof cb === "function") cb(null);
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