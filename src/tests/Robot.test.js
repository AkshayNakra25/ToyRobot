var robot = require('../modules/Robot');

describe('Robot Class Testing', () => {
    let moveRobot;
    beforeEach(() => {
        moveRobot = new robot([0,1], "NORTH");
    });

    it('Check if robot coordinates and directions are correct', () => {
        expect(moveRobot.getXCoordinate()).toBe(0);
        expect(moveRobot.getYCoordinate()).toBe(1);
        expect(moveRobot.getDirection()).toBe("NORTH");
    });

    it('Check if robot coordinates and direction are set coorectly', () => {
        moveRobot.setXCoordinate(4);
        moveRobot.setYCoordinate(5);
        moveRobot.setDirection("Test");
        expect(moveRobot.getXCoordinate()).toBe(4);
        expect(moveRobot.getYCoordinate()).toBe(1);
        expect(moveRobot.getDirection()).toBe("NORTH");
    });

});