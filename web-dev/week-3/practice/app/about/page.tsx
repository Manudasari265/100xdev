export const metadata = {
    title: "About page"
}

export default async function About() {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve("intentional delay")
        }, 3000);
    });
    return <h1>About page</h1>
}