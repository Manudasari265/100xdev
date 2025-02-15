"use client";

import { useRouter } from "next/router";

export default function OrderProduct() {
    const router = useRouter();
    const handleClick = () => {
        alert("Placing your order!");
        router.push("/");
    };

    return <>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place order</button>
    </>
}