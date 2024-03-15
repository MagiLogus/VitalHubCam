import { Container, InputLarge, InputWithTitleContent, TitleWithInput} from "./Style";

export function InputWithTitle({ title, placeholder }) {
    return (
        <Container>
            <InputWithTitleContent>
                <TitleWithInput>{title}</TitleWithInput>
                <InputLarge placeholder={placeholder} />
            </InputWithTitleContent>
        </Container>
    );
};