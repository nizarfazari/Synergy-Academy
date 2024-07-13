import jwt from 'jsonwebtoken'
import { checkPassword, encryptPassword, createToken } from "../app/utils/encrypt";

describe("Encrypt", () => {
    let pass:string;
    it("encryptPassword should return string", async () => {
        pass = await encryptPassword('12345');
        expect(pass).toEqual(expect.stringMatching(/\$2a\$10\$.+/))
    })
    it("checkPassword should return false", async () => {
        const check = await checkPassword(pass, '1234')
        expect(check).toBe(false)
    })
    it("checkPassword should return true", async () => {
        const check = await checkPassword(pass, '12345')
        expect(check).toBe(true)
    })
})

describe("JWT", () => {
    const userObject = {
        name: 'amir',
        email: 'amir@email.com'
    }
    it("createToken should return jwt token", async () => {
        const token = await createToken(userObject);
        const verify = jwt.verify(token, "halosayang")
        expect(verify).toEqual(
            expect.objectContaining({
                name: 'amir',
                email: 'amir@email.com',
                iat: expect.any(Number),
                exp: expect.any(Number)
            })
        )
    })
})