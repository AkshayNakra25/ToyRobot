const { inputProcessing } = require('../helpers/inputProcessing');

describe('Input Processing Function', () => {

    const invalidSecondPlaceCommand = ['PLACE 1,2,EAST', "MOVE", "MOVE", "RIGHT", "PLACE 7,7,EAST", "MOVE", "REPORT"];
    const invalidFirstPlaceCommand = ['PLACE 7,7,EAST', "MOVE", "MOVE", "RIGHT", "PLACE 1,2,EAST", "MOVE", "REPORT"];
    const validTwoCommands = ['PLACE 1,2,EAST', "MOVE", "MOVE", "RIGHT", "PLACE 3,4,SOUTH", "MOVE", "RIGHT", "REPORT"];
    const invalidFirstReportCommand = ['REPORT', "MOVE", "MOVE", "RIGHT", "PLACE 3,4,SOUTH", "MOVE", "RIGHT", "REPORT"];
    it('Check if input is processed correctly', () => {
        let expectedResult =
        {
            startingCoordinates: [1,2],
            direction: "EAST",
            actionCommands: [
                "MOVE",
                "MOVE",
                "RIGHT",
                "PLACE 7,7,EAST",
                "MOVE"
            ]
        }
        expect(inputProcessing(invalidSecondPlaceCommand)).toEqual(expectedResult);
    });

    it('Check if input is processed correctly', () => {
        let expectedResult =
        {
            startingCoordinates: [1,2],
            direction: "EAST",
            actionCommands: [
                "MOVE"
            ]
        }
        expect(inputProcessing(invalidFirstPlaceCommand)).toEqual(expectedResult);
    });

    it('Check if input is processed correctly', () => {
        let expectedResult =
        {
            startingCoordinates: [3,4],
            direction: "SOUTH",
            actionCommands: [
                "MOVE",
                "RIGHT"
            ]
        }
        expect(inputProcessing(validTwoCommands)).toEqual(expectedResult);
    });

    it('Check if input is processed correctly', () => {
        let expectedResult =
        {
            startingCoordinates: [3,4],
            direction: "SOUTH",
            actionCommands: [
                "MOVE",
                "RIGHT"
            ]
        }
        expect(inputProcessing(invalidFirstReportCommand)).toEqual(expectedResult);
    });

});