import Link from "next/link";

export default async function NewsArticle({
    params,
    searchParams,
}: {
    params: Promise<{ articleId: string }>;
    searchParams: Promise<{ lang?: "en" | "es" | "fr"}>;
}) {
    const { articleId } = await params;
    const { lang= "en" } = await searchParams;

    return <div>
        <h1>New Article {articleId}</h1>
        <p>Reading in {lang}</p>

        <div>
            <Link href={`/articles/${articleId}?lang=en`}>English</Link>
            <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
            <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
        </div>
    </div>
}