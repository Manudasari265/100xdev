import Link from "next/link";

export default async function Home() {
    return <>
       <h1>Welcome home</h1>
       <Link href={"/profile"} >Profile</Link>
    </>
}