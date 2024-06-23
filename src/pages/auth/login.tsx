import { Form, FormGroup, Input, Label } from "reactstrap";

export default function Login() {
    return (
        <>
            <div className="grid grid-cols-5 min-h-screen">
                <div className="col-span-3 ">
                    <img src="/images/car-login.png" alt="" className="h-full" />
                </div>
                <div className="col-span-2 bg-white flex">
                    <div className="p-[40px] w-full my-auto">
                    <div className="w-[100px] h-[30px] bg-[#CFD4ED]"></div>
                        <h1>Welcome, Admin BCR</h1>
                        <Form>
                            <FormGroup>
                                <Label for="exampleEmail">
                                    Email
                                </Label>
                                <Input
                                    id="exampleEmail"
                                    name="email"
                                    placeholder="with a placeholder"
                                    type="email"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">
                                    Password
                                </Label>
                                <Input
                                    id="examplePassword"
                                    name="password"
                                    placeholder="password placeholder"
                                    type="password"
                                />
                            </FormGroup>
                            <button className="py-2 w-full bg-[#0D28A6] text-white mt-4">Sign In</button>
                        </Form>
                    </div>
                </div>
            </div>

        </>
    )
}