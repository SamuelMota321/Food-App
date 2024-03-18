import { Header } from '../../Components/Header'
import { Banner } from '../../Components/Banner'
import { Restaurant } from '../../Components/Restaurant'
import { AboutApp } from '../../Components/AboutApp'
import { Form } from '../../Components/Form'
import { Footer } from '../../Components/Footer'

export const HomePage = () => {
    return (
        <>
            <Header />
            <main>
                <Banner />
                <Restaurant />
                <AboutApp />
                <Form />
            </main>
            <Footer />
        </>
    )
}