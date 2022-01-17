import { Button, Center, Flex, Heading, Spacer } from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Navbar = () => {

    const { token, handleToken } = useContext(AuthContext);

    return (
        <>
            <Flex h={'50px'}>
                <Center>
                    <Heading ms={4}>Job Listing Site</Heading>
                </Center>
                <Spacer />
                <Center>
                    <Button mr={2} ><Link to={'/'}>Home</Link></Button>
                    <Button mr={2} ><Link to={'/dashboard'}>Dashboard</Link></Button>
                    <Link to={'/login'}>
                        <Button
                            onClick={!token ? () => { handleToken("") } : undefined}
                            mr={4}
                        >
                            {!token ? "Login" : "Logout"}
                        </Button>
                    </Link>
                </Center>

            </Flex>

        </>
    );
};