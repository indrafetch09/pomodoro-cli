import { intro, isCancel, outro, text, cancel } from "@clack/prompts";
import { setMaxListeners } from "events";
import { setTimeout } from 'timers/promises';

async function main() {
    intro("🍅 Welcome to Pomodoro Timer CLI");

    /**
     * function for input work duration
     */
    const workDurationOpts = {
        message: "Enter work duration in minutes:",
        placeholder: "",
        validate(value) {
            if (isNaN(value) || value <= 0) return "Please enter a correct number.";
        }
    }

    const workDuration = await text(workDurationOpts);

    /**
     * function for input break duration
     */
    const breakDurationOpts = {
        message: "Enter break duration in minutes: ",
        placeholder: "",
        validate(value) {
            if (isNaN(value) || value <= 0) return "Please enter a correct number.";
        }
    }

    const breakDuration = await text(breakDurationOpts);

    /**
     * function for input cycle duration
     */
    const cyclesOpts = {
        message: "Enter number of cycles: ",
        placeholder: "",
        validate(value) {
            if (isNaN(value) || value <= 0) return "Please enter a correct number.";
        }
    }
    const cycles = await text(cyclesOpts);


    if (isCancel(workDuration)) {
        cancel("Operation Cancelled.");
        process.exit(0);
    }

    /** Looping set time */
    for (let i = 0; i < cycles; i++) {
        console.log(`\nCycles ${i + 1} of ${cycles}`);
        console.log(`Starting work timer for ${workDuration} minutes.`)

        const workDurationInMs = workDuration * 60 * 1000;
        const workEndTime = Date.now() + workDurationInMs;

        while (Date.now() < workEndTime) {
            const remainingTime = Math.max(0, workEndTime - Date.now());
            const minutes = Math.floor(remainingTime / 60000);
            const seconds = Math.floor((remainingTime % 6000) / 1000);
            console.log(`Work timer: ${minutes}:${seconds < 10 ? '0' : ''}${seconds} remaining.`);
            await setTimeout(1000);
        }

        console.log('Work timer ended. Time for a break')
        console.log(`Starting break timer for ${breakDuration} minutes`)


        const breakDurationInMs = breakDurationInMs * 60 * 1000
        const breakEndTime = Date.now() + breakDurationInMs
        while (Date.now() < breakEndTime) {
            const remainingTime = Math.max(0, breakEndTime - Date.now());
            const minutes = Math.floor(remainingTime / 60000);
            const seconds = Math.floor((remainingTime % 60000) / 1000);
            console.log(`Break timer: ${minutes}:${seconds < 10 ? '0' : ''}${seconds} remaining`);
            await setTimeout(1000)
        }

        console.log('Break timer ended')
    }


    outro("The cycle is Complete!")
    outro("Congratulation sir, you've done all of your tasks, happy rest🥱");
}

main().catch(console.error);