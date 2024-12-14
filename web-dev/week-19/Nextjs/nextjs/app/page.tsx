import Link from "next/link";

export default function Home() {
  return (
    <div className="text-lg w-screen h-screen flex items-center justify-center">
      <div>
        Todo application
        <br />
        <Link href="/signin">Sign in</Link>
        <Link href="/signup">Sign up</Link>
      </div>
    </div>
  );
}
