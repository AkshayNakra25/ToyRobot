const { isValid, directions } = require('./actionOnRobot.js');

/*
Takes user input as a paramater
Output is either:
    1. Starting Coordinates : Where the robot will be places
    2. Direction: The initial direction it is facing
    3. actionCommands: Any "MOVE", "LEFT", "RIGHT" commands to be executed
OR:
   Error if the input is not valid.
*/

const inputProcessing = (input) => {
    let startingIndex = -1,endingIndex = -1;

    for (const [i, command] of input.entries()) {
        if (command.includes("PLACE")) {
            let startingCoordinates = command.slice(command.indexOf(",") - 1, command.indexOf(",") + 2).split(',').map(Number);
            if (isValid(startingCoordinates[0], startingCoordinates[1])) {
                startingIndex = i;
            }
        }
        if (command === "REPORT") {
            endingIndex = i;
            if (startingIndex !== -1) {
                break;
            }
        }
    }
    if (startingIndex < endingIndex && startingIndex !== -1) {
        let placeCommand = input[startingIndex];
        const startingCoordinates = placeCommand.slice(placeCommand.indexOf(",") - 1, placeCommand.indexOf(",") + 2).split(',').map(Number);
        const direction = directions.includes(placeCommand.split(",").pop().trim()) ? placeCommand.split(",").pop().trim() : undefined;
        const actionCommands = input.slice(startingIndex + 1, endingIndex);
        if(direction !== undefined){
            return {
                startingCoordinates,
                direction,
                actionCommands
            };
        }else{
            console.error("Place Direction not valid");
            return;
        }

    } else {
        console.error("Input not valid");
        return;
    }
}

module.exports = {
    inputProcessing
};