const readline = require('readline');
const { inputProcessing } = require('./helpers/inputProcessing');
const { actionOnRobot } = require('./helpers/actionOnRobot');
var Robot = require('./modules/Robot.js');

var input = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (cmd) {
    input.push(cmd);
});

rl.on('close', function () {
    const { startingCoordinates, direction, actionCommands } = inputProcessing(input);
    const robotInstance = new Robot(startingCoordinates, direction); 
    actionOnRobot(robotInstance, actionCommands);
    console.log("OUTPUT:" + robotInstance.getPosition())
});