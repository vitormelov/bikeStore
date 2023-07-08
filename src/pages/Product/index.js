import { useParams } from "react-router-dom";
import Details from "../../Components/Details";

export default function Product() {
    const { id } = useParams()

    return (
        <div>
            <Details id={id} />
        </div>
    )
}