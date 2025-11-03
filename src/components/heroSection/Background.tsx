import UnicornScene from "unicornstudio-react";

export default function Background() {
  const productId = import.meta.env.VITE_PRODUCT_ID;
  return (
    <div className="h-screen w-screen overflow-hidden">
      <UnicornScene projectId={productId} width={"100%"} height={"112%"} />
    </div>
  );
}