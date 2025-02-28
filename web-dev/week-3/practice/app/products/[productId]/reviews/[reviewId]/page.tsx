import { notFound } from "next/navigation";

function getRandom(count: number) {
    return Math.floor(Math.random() * count);
}

export default async function ProductReview({
    params,
} : {
    params: Promise<{ productId: string, reviewId: string }>;
}) {
    const random = getRandom(2);

    if(random == 1) {
        throw new Error("Error loading review");
    }
    const { productId, reviewId } = (await params);

    if(parseInt(reviewId) > 1000) {
        notFound();
    }

    return <h1>Review {reviewId} for {productId} product</h1>
}