export default function() {
    return <div>
        Sign in page <br />
        <input type="text" />
        <input type="text" />
        <button onClick={async () => {
            const response = await fetch("http://localhost/3000/api/signin", {
                username: "asdasd",
                password: "asdasda",
            })
    
        }>Sign in </button>
    </div>
}