import { Button, Container, Heading, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";

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

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();


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
                        <Input onChange={handleChange} name='jobType ' type='text' placeholder="Job type " />
                        <Button w={'100%'} colorScheme={'telegram'} type="submit">Submit</Button>
                    </VStack>
                </form>
            </Container>
        </>
    );
};