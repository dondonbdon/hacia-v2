import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './home/page';

export default function Page() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar at top */}
            <Navbar/>

            {/* Main content grows to fill space */}
            <main className="flex-grow">
                <HomePage/>
            </main>

            {/* Footer sticks to bottom */}
            <Footer/>
        </div>
    );
}