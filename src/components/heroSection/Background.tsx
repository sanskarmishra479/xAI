import UnicornScene from "unicornstudio-react";

export default function Background() {
  const productId = "IhWuAwAT3WTs3PRzElTP"
  return (
    <div className="h-screen w-screen overflow-hidden">
      <UnicornScene projectId={`${{productId}}`} width={"100%"} height={"112%"} />
    </div>
  );
}