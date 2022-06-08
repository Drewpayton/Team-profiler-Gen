const Manager = require('../lib/Manager.js');

describe('Manager', () => {
    describe('officeNum', () => {
        it('should return the officenum whenever you enter the right officeNum', () => {
            const newofficeNum = 18;
            const obj = new Manager('drew', 1, 'drew@gmail.com', newofficeNum);
            expect(obj.officeNum).toBe(newofficeNum)
        })
    }) 

    describe('New Manager', () => {
        it('Should return the Manager when you select a new Manager', () => {
            const newManager = 'Manager';
            const obj = new Manager('drew', 1, 'drew@gmail.com', 18)
            expect(obj.getRole()).toBe(newManager)
        })
    })

    describe('getofficeNum()', () => {
        it('should return a officeNum whenever you ask for getofficeNum()', () => {
            const newOfficeNum = 18;
            const obj = new Manager('drew', 1, 'drew@gmail.com', newOfficeNum);
            expect(obj.getOfficeNum()).toBe(newOfficeNum)
        })
    })
})