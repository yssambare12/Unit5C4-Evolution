import { Button, Container, Heading, Input, useToast, VStack } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Login = () => {

    const [form, setForm] = useState({ email: "", password: "" });
    const toast = useToast();
    const { handleToken } = useContext(AuthContext);
    const navigation = useNavigate();

    const handleChange = ({ target: { type, value } }) => {
        setForm({ ...form, [type]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://reqres.in/api/login`, {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.token) {
                    handleToken(res.token);
                    navigation(-1);
                    toast({
                        title: 'Login Successful',
                        status: 'success',
                        duration: 5000,
                        position: 'top',
                        isClosable: true,
                    })
                } else {
                    toast({
                        title: 'Invalid Details',
                        status: 'error',
                        duration: 5000,
                        position: 'top',
                        isClosable: true,
                    })
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <Container mt={20} rounded={20} border={'1px solid #dadada'} h={350} p={10}>
            <form onSubmit={handleSubmit}>
                <VStack gap={3}>
                    <Heading mb={3}>Login</Heading>
                    <Input onChange={handleChange} type='email' placeholder="Email" />
                    <Input onChange={handleChange} type='password' placeholder="Password" />
                    <Button type="submit" w={'100%'} colorScheme={'telegram'}>Submit</Button>
                </VStack>
            </form>
        </Container>
    );
};