import Image from "next/image";

type Props = {
  price: "85" | "150";
};

export default function Router({ price }: Props) {
  return (
    <div className="flex flex-col border border-white rounded-lg p-4 w-[95%] md:w-auto">
      <p className="text-3xl font-bold my-5">Single Router</p>
      <Image
        src="/images/device.jpg"
        width={400}
        height={300}
        alt="device image"
        className="border self-center w-full"
      />
      <div className="flex justify-between items-center mt-8 mb-2">
        <p className="font-bold text-4xl">€{price}</p>
        <button className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 w-1/3 rounded-lg">
          Details
        </button>
      </div>
    </div>
  );
}
