import { useAuthHook } from "../hooks/AuthHook";

const Home = () => {

    const { authenticated, user } = useAuthHook();
    return (
        <div className="home-container">
            <div className="hero-section">
                welcome text <br />
                {authenticated ? "yes loged in" : "null"}
                <br />
                {user ? "user exsits" : "doesnt exists"}
                <br />
                {user?.name}
                <br />
                {new Date(user?.createdAt ?? "").toUTCString()}
                <br />
                {user?.email}
                <br />
                {user?.userID}
            </div>
            <div>
                tasks animation
            </div>
        </div>
    );
}

export default Home;