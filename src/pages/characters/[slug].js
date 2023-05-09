import { useRouter } from "next/router"

export default function pageCharacter() {
    const roter = useRouter();
    
    return(
        <>
            <h1>Charactere details : {JSON.parse(roter.query)}</h1>
        </>
    )
}