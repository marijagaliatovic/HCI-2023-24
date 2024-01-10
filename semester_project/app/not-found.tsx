import Link from "next/link";

export default function NotFound(){
    return(
        <main className="text-center m-32 z-50 relative ">
            <h2 className="text-3xl font-bold">Oh, sh!t</h2>
            <p className="font-medium text-lg">We could not find the page you were looking for.</p>
            <p className="font-medium text-lg">Go back <Link href="/" className="font-bold underline">Home</Link>!</p>
        </main>
        
    )
}