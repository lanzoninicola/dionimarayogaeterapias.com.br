import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <div className="grid place-items-center w-screen h-screen bg-red-500">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="font-bold text-6xl">Massagens </h1>
        <p className="text-2xl">Nossas ultima ofertas</p>
      </div>
    </div>
  );
}
