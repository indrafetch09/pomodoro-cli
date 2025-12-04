import { intro, isCancel, outro, text, cancel, spinner } from "@clack/prompts";
import { setTimeout } from 'timers/promises';

async function main() {
    intro("🍅 Welcome to Pomodoro Timer CLI");

    /**
     * function for input work duration
     */
    const workDuration = await text({
        message: "Enter work duration in minutes:",
        placeholder: "",
        validate(value) {
            if (isNaN(value) || value <= 0) return "Please enter a correct number.";
        }
    });

    /**
     * function for input break duration
     */
    const breakDuration = await text({
        message: "Enter break duration in minutes: ",
        placeholder: "",
        validate(value) {
            if (isNaN(value) || value <= 0) return "Please enter a correct number.";
        }
    });

    /**
     * function for input cycle duration
     */
    const cycles = await text({
        message: "Enter number of cycles: ",
        placeholder: "",
        validate(value) {
            if (isNaN(value) || value <= 0) return "Please enter a correct number.";
        }
    });

    /** Looping set time */
    for (let i = 0; i < cycles; i++) {
        console.log(`\nCycles ${i + 1} of ${cycles}`);
        await startTimer(workDuration, 'Work');
        await startTimer(breakDuration, 'Break');
    }

    outro("All pomodoro cycles has ended, you've done all of your tasks, happy rest🥱")
}

/** Function setTimer */
async function startTimer(duration, type) {
    const durationInMs = duration * 60 * 1000;
    const endTime = Date.now() + durationInMs;
    const timerSpinner = spinner();
    timerSpinner.start(`${type} timer started for ${duration} minutes...`);

    while (Date.now() < endTime) {
        const remainingTime = Math.max(0, endTime - Date.now());
        const minutes = Math.floor(remainingTime / 60000);
        const seconds = Math.floor((remainingTime % 60000) / 1000);
        timerSpinner.message(`${type} timer: ${minutes}:${seconds < 10 ? '0' : ''}${seconds} remaining.`);
        await setTimeout(1000);
    }

    timerSpinner.stop(`${type} timer ended. ${type === 'Work' ? 'a break' : 'work'}!`);
}

main().catch(console.error);