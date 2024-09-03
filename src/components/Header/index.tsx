import { Text, Image, TouchableOpacity } from "react-native";
import { Container } from "./styles";
import Logo from "../../assets/logo.png";

export function Header() {
    return (
        <Container>
            <TouchableOpacity>
                <Text>Teste</Text>
            </TouchableOpacity>

            <Image source={Logo}/>

        </Container>
    )
}ss