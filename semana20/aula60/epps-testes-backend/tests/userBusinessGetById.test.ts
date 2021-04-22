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
        expect.assertions(2)

        userDatabase = { getUserById: jest.fn(async (id: string) => undefined) } as any

        const userBusiness = new UserBusiness(
            idGenerator,
            hashGenerator,
            userDatabase,
            tokenGenerator
        )

        try {
            await userBusiness.getUserById("id");
        } catch (error) {
            expect(error.statusCode).toBe(404);
            expect(error.message).toEqual("User not found");
            expect(userDatabase.getUserById).toHaveBeenCalled();
        }
    })

})