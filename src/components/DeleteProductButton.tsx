"use client";
import { log } from "console";
import { useRouter } from "next/navigation";

const DeleteProductButton = ({ productId }: { productId: string }) => {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const res = await fetch(`app/api/products/${productId}`, {
        method: "DELETE",
      });
      console.log(res);

      if (!res.ok) {
        const result = await res.json();
        throw new Error(result.error || "data fetching failed");
      }
      router.refresh();
    } catch (error: any) {
      // console.error(error.message)
    }
  };

  return (
    <>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
};

export default DeleteProductButton;
