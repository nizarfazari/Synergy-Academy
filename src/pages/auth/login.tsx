import { Form, FormGroup, Input, Label } from "reactstrap";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth()
    const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            // Kirim data ke backend atau lakukan validasi sesuai kebutuhan
            const response = await fetch('http://localhost:5000/api/v1/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                throw new Error('Failed to sign in');
            }

            const data = await response.json();
            login(data.data)
            console.log('Sign in successful:', data);
            
            
            
        } catch (error : any) {
            console.error('Sign in error:', error.message);
            
        }
    }

    return (
        <>
            <div className="grid grid-cols-5 min-h-screen">
                <div className="col-span-3">
                    <img src="/images/car-login.png" alt="" className="h-full" />
                </div>
                <div className="col-span-2 bg-white flex">
                    <div className="p-[40px] w-full my-auto">
                        <div className="w-[100px] h-[30px] bg-[#CFD4ED]"></div>
                        <h1>Welcome, Admin BCR</h1>
                        <Form onSubmit={(e) => onSubmitForm(e)}>
                            <FormGroup>
                                <Label for="exampleEmail">
                                    Email
                                </Label>
                                <Input
                                    id="exampleEmail"
                                    name="email"
                                    placeholder="Enter your email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">
                                    Password
                                </Label>
                                <Input
                                    id="examplePassword"
                                    name="password"
                                    placeholder="Enter your password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </FormGroup>
                            <button type="submit" className="py-2 w-full bg-[#0D28A6] text-white mt-4">Sign In</button>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}
