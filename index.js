#!/usr/bin/env node
import { intro, outro, text, spinner } from "@clack/prompts";
import { setTimeout } from "timers/promises";
import { notify } from "./notify.js";

async function main() {
    intro("🍅 Welcome to Pomodoro Timer CLI");

    const workDuration = await text({
        message: "Enter work duration in minutes:",
        placeholder: "",
        validate(value) {
            if (isNaN(value) || value <= 0) return "Please enter a correct number.";
        }
    });


    const breakDuration = await text({
        message: "Enter break duration in minutes: ",
        placeholder: "",
        validate(value) {
            if (isNaN(value) || value <= 0) return "Please enter a correct number.";
        }
    });


    const cycles = await text({
        message: "Enter number of cycles: ",
        placeholder: "",
        validate(value) {
            if (isNaN(value) || value <= 0) return "Please enter a correct number.";
        }
    });

    const workDurationNum = Number(workDuration);
    const breakDurationNum = Number(breakDuration);
    const cyclesNum = Number(cycles);

    for (let i = 0; i < cyclesNum; i++) {
        console.log(`\nCycles ${i + 1} of ${cyclesNum}`);
        await startTimer(workDurationNum, "Work");

        notify("Break started", `Break for ${breakDurationNum} minute(s)`);
        await startTimer(breakDurationNum, "Break");
    }
    notify("Pomodoro finished, All pomodoro cycles have ended, happy rest sir😁");
    outro("All pomodoro cycles has ended, happy rest sir😁")
}

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

    timerSpinner.stop(`${type} timer ended. ${type === 'Work' ? 'time for a break' : 'work'}!`);
}


main().catch(console.error);