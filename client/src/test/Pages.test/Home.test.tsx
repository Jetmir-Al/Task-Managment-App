import { render } from "@testing-library/react";
import Home from "../../pages/Home";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import BoardPage from "../../pages/BoardPage";

describe("Home page", () => {
    const { authenticated } = useContext(AuthContext);
    it("renders title", () => {
        render(authenticated ? <Home /> : <BoardPage />);
    });
});