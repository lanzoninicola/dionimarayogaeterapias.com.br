import Icon from "../icon/icon";
import Container from "../layout/container/container";
import Logo from "../logo/logo";



export default function Header() {

    return <Container>
        <header className="mb-8">
            <div className="flex justify-center mb-4">
                <Logo variant="sky" />
            </div>
            <div className="flex justify-center gap-8">
                <Icon variant="instagram" to="/" />
                <Icon variant="whatsapp" to="/" />
                <Icon variant="directions" to="/" />
            </div>
        </header>
    </Container>
}