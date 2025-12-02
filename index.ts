import { intro, outro, text } from "@clack/prompts";

async function main() {
    intro("🍅 Welcome to Pomodoro Timer CLI");

    /**
     * function for input a work duration
     */
    const workDurationOpts = {
        message: "Enter work duration in minutes:",
        placeholder: "10",
        validate(value: string) {
            if (isNaN(Number(value)) || Number(value) <= 0) return "Please enter a correct number.";
        }
    }

    const workDuration = await text(workDurationOpts); 

    
    /**
     * function for input a break duration
     */
    const breakDurationOpts = {
        message: "Enter break duration in minutes: ",
        placeholder: "5",
        validate(value: string) {
            if (isNaN(Number(value)) || Number(value) <= 0) return "Please enter a correct number.";
        }
    }

    const breakDuration = await text(breakDurationOpts);

    /**
     * function for input a cycle duration
     */

    const cyclesOpts = {
        message: "Enter number of cycles: ",
        placeholder: "2",
        validate(value:string) {
            if (isNaN(Number(value)) || Number(value) <= 0) return "Please enter a correct number.";
        }
    }
    const cycles = await text(cyclesOpts);


        

    outro("The cycle is Complete!")
    outro("Congratulation sir, you've done all of your tasks, happy rest🥱");
}

main().catch(console.error);