import { Badge, Box, Divider, Center, Container, Heading, SimpleGrid, Text, Table, Tbody, Tr, Td, Button, Select, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const Home = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        getJobs();
    }, []);

    const getJobs = () => {
        fetch(`http://localhost:3000/job`)
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setData(res);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
            })
    }

    return isLoading ? (
        <Container>
            <Center h={300}><Text fontSize={30}>...Loading</Text></Center>
        </Container>
    ) : (
        <>
            <Heading my={4} textAlign={'center'}>Jobs Available</Heading>

            <HStack maxW={'800px'} m={'20px auto'}>
                <Button w={60}>Salary L-H</Button>
                <Button w={60}>Salary H-L</Button>
                <Select placeholder='Job type'>
                    <option value='Remote'>Remote</option>
                    <option value='Office'>Office</option>
                </Select>
            </HStack>

            <SimpleGrid columns={3} spacing={10} maxW={'1100px'} m={'40px auto'}>
                {data.map(({ id, companyName, jobTitle, salaryRange, jobDescription, location, jobType }) => (
                    <Box border={'1px solid #ebebeb'} rounded={5} p={4} key={id} boxShadow={'lg'}>
                        <Text ms={5} fontSize={20} mb={2}><b>{companyName}</b></Text>
                        <Divider />
                        <Table fontSize={17}>
                            <Tbody>
                                <Tr>
                                    <Td>Job Title</Td>
                                    <Td>{jobTitle}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Salary Range</Td>
                                    <Td>₹ {salaryRange}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Job Description</Td>
                                    <Td>{jobDescription}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Job Title </Td>
                                    <Td>{location}</Td>
                                </Tr>
                            </Tbody>
                        </Table>

                        <Badge m={'15px 25px'} colorScheme={jobType === "Remote" ? 'green' : 'purple'}>{jobType}</Badge> <br />
                        <Button size='md' colorScheme={'teal'} w={'100%'}>Apply</Button>
                    </Box>
                ))}
            </SimpleGrid>

        </>
    );
};