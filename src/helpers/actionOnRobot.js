// Directions to be used in this format to know whats on left and right of each direction.
const directions = ["WEST", "NORTH", "EAST", "SOUTH"];
// Dimensions of the board
const dimensions = {
    x: {
        min: 0,
        max: 4
    },
    y: {
        min: 0,
        max: 4
    }
}

// Valid directions
const validDirections = {
    WEST: "WEST",
    NORTH: "NORTH",
    EAST: "EAST",
    SOUTH: "SOUTH"
}

// Valid Actions
const validActions = {
    MOVE : "MOVE",
    LEFT : "LEFT",
    RIGHT : "RIGHT"
}


/* Checks if the first place command is valid or not 
    Parameters : x,y coordinates
*/
function isValid(x, y) {
    if (typeof x !== "number" || typeof y !== 'number' || x > dimensions['x']['max'] || x < dimensions['x']['min'] || y > dimensions['y']['max'] || y < dimensions['y']['min']) {
        return false;
    } else {
        return true;
    }
}

/* Checks if the robot can make the necessary Move
    Parameters : axis ("x" or "y")
    Coordinate : The coordinate it wants to movr at
*/
function isValidOperation(axis, coordinate) {
    if (dimensions[axis]['min'] <= coordinate && dimensions[axis]['max'] >= coordinate) {
        return true;
    } else {
        return false;
    }
}

/* Runs a loop on the actions array to manouver the ROBOT
    Parameters : moves (MOVE, LEFT or RIGHT)
                robot Instance created initially
*/
function actionOnRobot(robotInstance, actionCommands) {
    for (eachAction of actionCommands) {
        switch (eachAction) {
            case validActions.MOVE:
                updateCoordinates(robotInstance);
                break;
            case validActions.LEFT:
            case validActions.RIGHT:
                robotInstance.setDirection(updateDirection(eachAction, robotInstance));
                break;
            default:
                break;
        }
    }
}

/* Updates the direction of Robot based on the action - LEFT or RIGHT
    Parameters : action (LEFT or RIGHT)
                robot Instance created initially
*/
function updateDirection(action, robotInstance) {
    let currentDirection = robotInstance.getDirection();
    switch (action) {
        case validActions.LEFT:
            return directions.indexOf(currentDirection) !== 0 ? directions[directions.indexOf(currentDirection) - 1] : directions[directions.length - 1];
        case validActions.RIGHT:
            return directions.indexOf(currentDirection) !== directions.length - 1 ? directions[directions.indexOf(currentDirection) + 1] : directions[0];
        default:
            break;
    }
}

/* Sets the coordinates for the robot based on the direction of Robot
    Parameters : robot Instance created initially
*/
function updateCoordinates(robotInstance) {
    let direction = robotInstance.getDirection();
    let currentXCoordinate = robotInstance.getXCoordinate();
    let currentYCoordinate = robotInstance.getYCoordinate();
    switch (direction) {
        case validDirections.NORTH:
            robotInstance.setYCoordinate(currentYCoordinate + 1);
            break;
        case validDirections.EAST:
            robotInstance.setXCoordinate(currentXCoordinate + 1);
            break;
        case validDirections.SOUTH:
            robotInstance.setYCoordinate(currentYCoordinate - 1);
            break;
        case validDirections.WEST:
            robotInstance.setXCoordinate(currentXCoordinate - 1);
            break;
        default:
            break;
    }
}

module.exports = {
    actionOnRobot,
    isValid,
    isValidOperation,
    directions
}