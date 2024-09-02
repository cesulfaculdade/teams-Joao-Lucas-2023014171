import { StyleSheet, Text, View, Image } from "react-native";
import Logo from "../../assets/Logo.png";
import { Container } from "./styles";

export function Teams() {
    return (
        <Container>
            <Image source={Logo} />
            <Text>Equipes</Text>
        </Container>
        );
    }