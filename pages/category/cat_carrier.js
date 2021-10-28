import Router from "next/router";


export default function Carrier ({children}) {
    return (
        <div>
            <div>{children}</div>
            <div onClick={()=> Router.back()} className="goBack">Go Back</div>
        </div>
    )
}