'use strict';
const { isValid,  isValidOperation, directions} = require('../helpers/actionOnRobot.js');

/*
Robot class which returns the robot 
 1. Position (x,y coordinate with direction)
 2. Its x Coordinate
 3. Its y coordinate
 4. Its direction
Or sets the following values:
 x, y coordinates and direction (making sure they are valid)
*/

module.exports = class Robot {
    constructor([x, y], direction) {
        if (isValid(x, y)) {
            this.x = x;
            this.y = y;
            this.direction = direction;
        } else {
            throw new Error('Place coordinates is not valid');
        }
    }

    getPosition() {
        return `${this.x},${this.y},${this.direction}`;
    }

    getXCoordinate() {
        return this.x;
    }

    getYCoordinate() {
        return this.y;
    }

    getDirection() {
        return this.direction;
    }

    setDirection(direction) {
        if(directions.includes(direction)){
            this.direction = direction;
        }
    }

    setXCoordinate(x) {
        if (isValidOperation('x', x)) {
            this.x = x;
        }
    }

    setYCoordinate(y) {
        if (isValidOperation('y', y)) {
            this.y = y;
        }
    }
}