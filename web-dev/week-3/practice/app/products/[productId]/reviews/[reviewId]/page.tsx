import { notFound } from "next/navigation";

export default async function ProductReview({
    params,
} : {
    params: Promise<{ productId: string, reviewId: string }>;
}) {
    const { productId, reviewId } = (await params);

    if(parseInt(reviewId) > 1000) {
        notFound();
    }

    return <h1>Review {reviewId} for {productId}</h1>
}