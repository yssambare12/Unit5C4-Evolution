import { Button, Container, Heading, Input, Select, useToast, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {

    const initState = {
        companyName: "",
        jobTitle: "",
        salaryRange: "",
        jobDescription: "",
        location: "",
        jobType: ""
    }

    const [form, setForm] = useState(initState);
    const toast = useToast();
    const navigate = useNavigate();

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3000/job`, {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                toast({
                    title: 'Job Added',
                    status: 'success',
                    duration: 5000,
                    position: 'top',
                    isClosable: true,
                })
                navigate('/');

            })
            .catch((err) => {
                console.log(err);
            })


    }

    return (
        <>

            <Container mt={10} rounded={20} border={'1px solid #dadada'} h={520} p={10}>
                <form onSubmit={handleSubmit}>
                    <VStack gap={2}>
                        <Heading>Add new job</Heading>
                        <Input onChange={handleChange} name='companyName' type='text' placeholder="Company name" />
                        <Input onChange={handleChange} name='jobTitle' type='text' placeholder="Job title" />
                        <Input onChange={handleChange} name='salaryRange' type='text' placeholder="salary range" />
                        <Input onChange={handleChange} name='jobDescription' type='text' placeholder="Job description" />
                        <Input onChange={handleChange} name='location' type='text' placeholder="Location" />
                        <Select onChange={handleChange} name='jobType' placeholder='Job type'>
                            <option value='Remote'>Remote</option>
                            <option value='Office'>Office</option>
                        </Select>
                        <Button w={'100%'} colorScheme={'telegram'} type="submit">Submit</Button>
                    </VStack>
                </form>
            </Container>
        </>
    );
};