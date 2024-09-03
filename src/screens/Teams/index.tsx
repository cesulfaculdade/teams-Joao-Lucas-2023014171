import { StyleSheet, Text, View, Image } from "react-native";
import Logo from "../../assets/Logo.png";
import { Container, Title, HeaderContainer } from "./styles";

export function Teams() {
    return (
        <Container>
            {/* <Image source={Logo} />
            <Text>Equipes</Text>*/}
            <HeaderContainer>
                <Image source={Logo} />
            </HeaderContainer>
        </Container>
        );
    }