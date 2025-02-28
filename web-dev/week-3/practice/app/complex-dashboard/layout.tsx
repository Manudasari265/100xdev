export default function ComplexDashboardLayout({
    children,
    users,
    revenue,
    notifications
}: {
    children: React.ReactNode,
    users: React.ReactNode,
    revenue: React.ReactNode
    notifications: React.ReactNode

}) {
    return (
        <>
          <div>{children}</div> {/* Content from page.tsx */}
          <div style={{
            display: "flex"
          }}>
            <div style={{
                display: "flex",
                flexDirection: "column"
            }}>
                <div>{users}</div>
                <div>{revenue}</div>
            </div>
            <div style={{
                display: "flex",
                flex: 1
            }}>
                {notifications}
            </div>
          </div>
        </>
    )
}