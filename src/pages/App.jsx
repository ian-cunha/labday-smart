import Blocks from "../components/Blocks";
import BodyForm from "../components/BodyForm";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Models from "../components/Models";
import Navbar from "../components/Navbar";
import Whatsapp from "../components/Whatsapp";
import WhatsappGroup from "../components/WhatsappGroup";

function App() {
    return (
        <>
            <Whatsapp />
            <Navbar />
            <Home />
            <WhatsappGroup />
            <Blocks />
            <Models />
            <BodyForm />
            <Footer />
        </>
    );
}

export default App