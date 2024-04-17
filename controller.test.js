const targetFn = require("./controller");

describe("the print function", () => {

    // standard best practice
    beforeEach(()=>{
        jest.clearAllMocks();
    });

    it("should respond with 'Hello world!!' for the root path", ()=>{
        const mockReq = {
            path: '/'
        };
        const mockRes = {
            send: jest.fn()
        };

        targetFn(mockReq, mockRes);
        expect(mockRes.send).toHaveBeenCalledWith("Hello world!!");
    });

    it("should respond with 'This is the home page' for the /home path", ()=>{
        const mockReq = {
            path: '/home'
        };
        const mockRes = {
            send: jest.fn()
        };

        targetFn(mockReq, mockRes);
        expect(mockRes.send).toHaveBeenCalledWith("This is the home page");
    });
});
