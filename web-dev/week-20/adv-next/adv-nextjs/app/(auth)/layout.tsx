export default function ({children}: {
    children: React.ReactNode
}) {
    return <div>
        <div>header</div>
           {children}
        <div>footer</div>
    </div>
}