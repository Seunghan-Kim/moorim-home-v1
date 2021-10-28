import Router from "next/router";

export default function AiSolution() {

    // const history = useHistory();

    return (
        <>
            <h1>AI SOLUTION</h1>
            <div onClick={()=> Router.back()}>Go Back</div>
        </>
    )
}