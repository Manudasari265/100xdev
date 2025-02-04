export default async function ProductDetails({ 
    params
}: {
    params: Promise<{ productId: string}>
}) {
    const productId = (await params).productId;
    return <h1>Details about product: <span className="bg-red-300 text-black">{productId}</span></h1>
}