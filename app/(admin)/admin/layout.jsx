import { Home } from "../../components/Home/Home";

export default function DashBoardLayout({ children }) {

    return <Home isAdmin>{children}</Home>;
}
