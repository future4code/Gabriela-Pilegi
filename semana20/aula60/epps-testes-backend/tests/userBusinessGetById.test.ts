import { UserBusiness } from "../src/business/UserBusiness";
import { stringToUserRole, User, USER_ROLES } from "../src/model/User";
import { HashGenerator } from "../src/services/hashGenerator";
import { IdGenerator } from "../src/services/idGenerator";
import { TokenGenerator } from "../src/services/tokenGenerator";

describe("Testing getUserById.", () => {
    let idGenerator = { } as IdGenerator;
    let hashGenerator = { } as HashGenerator;
    let userDatabase = { } as any;
    let tokenGenerator = { } as TokenGenerator;

    test("User not found error.", async () => {
        expect.assertions(3);

        userDatabase = { getUserById: jest.fn(async (id: string) => undefined) } as any;

        const userBusiness = new UserBusiness(
            idGenerator,
            hashGenerator,
            userDatabase,
            tokenGenerator
        );

        try {
            await userBusiness.getUserById("id");
        } catch (error) {
            expect(error.statusCode).toBe(404);
            expect(error.message).toEqual("User not found");
            expect(userDatabase.getUserById).toHaveBeenCalled();
        };
    });

    test("Should return user", async () => {
        const userMock = new User(
            "id",
            "Test user",
            "testuser@gmail.com",
            "userpassword",
            stringToUserRole("ADMIN")
        ); 

        userDatabase = { getUserById: jest.fn(async (id: string) => userMock) } as any;

        const userBusiness = new UserBusiness(
            idGenerator,
            hashGenerator,
            userDatabase,
            tokenGenerator
        );

        const output = await userBusiness.getUserById("id");
 
        expect(userDatabase.getUserById).toHaveBeenCalledWith("id");
        expect(output).toEqual({
            id: "id",
            name: "Test user",
            email:"testuser@gmail.com",
            role: USER_ROLES.ADMIN
        });
    });
});