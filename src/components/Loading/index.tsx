import { Container, ActivityIndicator } from "react-native";

export function Loading() {
    return (
        <Container>
            <ActivityIndicator color='red' size='large'/>
        </Container>
    )
}