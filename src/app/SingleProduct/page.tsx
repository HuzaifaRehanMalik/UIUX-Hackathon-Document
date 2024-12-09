import { Import } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function SingleProduct() {
  return (
    <div>
      <div className="bg-[#F9F1E7] w-full h-20 flex items-center px-5">
        <Link href="/">
          <span className="text-[#9F9F9F] px-2 cursor-pointer hover:underline">
            Home &gt;
          </span>
        </Link>
        <Link href="/Shop">
          <span className="text-[#9F9F9F] px-2 cursor-pointer hover:underline">
            Shop &gt;
          </span>
        </Link>
        <span className="text-black px-2">Asgaard sofa</span>
      </div>

      <div className="bg-white w-full flex justify-center items-start py-10">
        <div className="flex">
          <div className="flex flex-col gap-4 items-center pr-5">
            {[
              "/Mask(2).png",
              "/Mask(3).png",
              "/Group96.png",
              "/Group94.png",
            ].map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                width={75}
                height={75}
                className="rounded-md cursor-pointer border border-gray-300 hover:border-[#B88E2F]"
              />
            ))}
          </div>
          <div>
            <Image
              src="/Group 95.png"
              alt="Asgaard Sofa"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="w-1/2 px-10">
          <h1 className="text-[#000000] text-4xl font-bold">Asgaard Sofa</h1>
          <h2 className="text-[#9F9F9F] text-2xl font-bold py-3">
            Rs. 250,000.00
          </h2>
          <p className="text-[#555555] py-3 leading-6">
            Setting the bar as one of the loudest speakers in its class, the
            Asgaard sofa is a compact, well-thought design with a perfect mix of
            comfort and luxury for your living space.
          </p>

          <div className="py-4">
            <h3 className="text-black font-bold mb-2">Size</h3>
            <div className="flex gap-3">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className="px-4 py-2 rounded-md border border-gray-300 text-sm font-medium hover:bg-[#B88E2F] hover:text-white"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="py-4">
            <h3 className="text-black font-bold mb-2">Color</h3>
            <div className="flex gap-3">
              {["#000080", "#B88E2F", "#FFFFFF"].map((color, index) => (
                <button
                  key={index}
                  style={{ backgroundColor: color }}
                  className="w-8 h-8 rounded-full border border-gray-300 hover:border-[#B88E2F]"
                />
              ))}
            </div>
          </div>

          <div className="flex items-center gap-5 py-5">
            <div className="flex items-center gap-3 border border-gray-300 px-3 py-2 rounded-md">
              <button className="px-2 py-1 font-bold">-</button>
              <span className="text-lg font-semibold">1</span>
              <button className="px-2 py-1 font-bold">+</button>
            </div>
            <button className="bg-[#FFFFFF] text-Black border px-6 py-3 rounded-md font-bold hover:bg-[#9A7924]">
              Add to Cart
            </button>
            <button className="border px-6 py-3 rounded-md font-bold hover:bg-gray-100">
              Compare
            </button>
          </div>

          <div className="flex gap-10 py-6">
            {[
              { label: "SKU", value: "S5001" },
              { label: "Category", value: "Sofa" },
              { label: "Tags", value: "Furniture, Sofa" },
              { label: "Availability", value: "In Stock" },
            ].map((detail, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <Import size={16} />
                <span className="text-gray-500">{detail.label}:</span>
                <span className="text-[#B88E2F]">{detail.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}