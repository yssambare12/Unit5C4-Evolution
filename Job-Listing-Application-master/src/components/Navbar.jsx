import { Button, Center, Flex, Heading, Spacer } from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Navbar = () => {

    const { token, handleToken } = useContext(AuthContext);

    return (
        <>
            <Flex h={'60px'} bg={'#F5F5F5'}>
                <Center>
                    <Heading ms={4}>Job Site</Heading>
                </Center>
                <Spacer />
                <Center>
                    <Button mr={2} colorScheme={'telegram'}><Link to={'/'}>Home</Link></Button>
                    <Button mr={2} colorScheme={'telegram'}><Link to={'/dashboard'}>Dashboard</Link></Button>
                    <Link to={'/login'}>
                        <Button
                            onClick={!token ? () => { handleToken("") } : undefined}
                            mr={4}
                            colorScheme={'telegram'}
                        >
                            {!token ? "Login" : "Logout"}
                        </Button>
                    </Link>
                </Center>

            </Flex>

        </>
    );
};