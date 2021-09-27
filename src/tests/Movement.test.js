const {actionOnRobot, isValid, isValidOperation } = require('../helpers/actionOnRobot');
var robot = require('../modules/Robot');

const actions = ['MOVE', 'MOVE', 'RIGHT', 'MOVE', 'MOVE' , 'MOVE', 'MOVE', 'MOVE', 'MOVE', 'MOVE', 'RIGHT', 'REPORT']

describe('actionOnRobot Helper function', () => {
    let moveRobot;
    beforeEach(() => {
        moveRobot = new robot([0,0], "NORTH");
    });

    it('isValid function should return false if x,y is invalid', () => {
        expect(isValid(7,7)).toBe(false);
        expect(isValid(1,1)).toBe(true);
        expect(isValid(-1,2)).toBe(false);
        expect(isValid("1","1")).toBe(false);
    });

    it('isValidOperation function should return false if x,y is outside the box', () => {
        expect(isValidOperation('x',7)).toBe(false);
        expect(isValidOperation('y',4)).toBe(true);
        expect(isValidOperation('y',5)).toBe(false);
    });

    it('actionOnRobot function to check if robot moves in right direction', () => {
        actionOnRobot(moveRobot, actions)
        expect(moveRobot.getPosition()).toBe("4,2,SOUTH");
    });


});