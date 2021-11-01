import Carrier from "../../components/cat_carrier";
import { useRouter } from 'next/router';
import styles from "../../styles/CatEach.module.css";

export default function Portfolio() {

    const router = useRouter()
    const size = router.query.size

    return (
        <Carrier header={"Portfolio"} size={size}>
            <h2>
                Comming Soon...
            </h2>
        </Carrier>
    )
}