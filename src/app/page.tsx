import Image from "next/image";
import { anchors_hero } from "@/constants/style-constants";

export default function Home() {
  return (
    <body className="relative min-h-screen">
      <main className="relative min-h-screen flex flex-col justify-center items-center">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover -z-10"
        >
          <source src="video_preview_h264.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-50 -z-10"></div>

        <section className="relative z-10 text-center text-white p-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">VPN SOLUTION</h1>
          <p className="text-lg mb-8 text-gray-400">
            Experience true online freedom with our revolutionary VPN. Our
            service is a{" "}
            <a href="#onetimepayment" className={anchors_hero}>
              one-time payment
            </a>
            , offering a secure VPN{" "}
            <a href="#router" className={anchors_hero}>
              router
            </a>{" "}
            that is completely{" "}
            <a href="#plugandplay" className={anchors_hero}>
              plug and play
            </a>
            , and gives you{" "}
            <a href="#residentialip" className={anchors_hero}>
              access to your residential IP
            </a>
            . Protect your entire network with ease.
          </p>
          <button className="bg-none border border-white hover:bg-white hover:text-black py-3 px-12 rounded-lg">
            Shop
          </button>
        </section>
      </main>
      <section
        id="onetimepayment"
        className="relative z-20 p-10 bg-white text-black"
      >
        <div className="max-w-4xl mx-auto py-20">
          <h2 className="text-3xl font-bold mb-4">One time payment</h2>
          <p>
            Tired of subscription fees? Our product is a one-time purchase,
            giving you permanent access to a secure and private internet
            connection. You'll never have to worry about monthly bills again.
          </p>
        </div>
      </section>

      <section
        id="router"
        className="relative z-20 p-10 bg-gray-100 text-black"
      >
        <div className="max-w-4xl mx-auto py-20">
          <h2 className="text-3xl font-bold mb-4">Router</h2>
          <p>
            This isn't a software you have to install on every device. Our
            dedicated router protects all devices on your network, all the time.
            It's a simple, reliable way to secure your entire home or office.
          </p>
        </div>
      </section>

      <section
        id="plugandplay"
        className="relative z-20 p-10 bg-white text-black"
      >
        <div className="max-w-4xl mx-auto py-20">
          <h2 className="text-3xl font-bold mb-4">Plug and play</h2>
          <p>
            Our solution is designed for simplicity. Just plug it into your
            router, and you're instantly protected without any complicated setup
            or software. You can get started in minutes.
          </p>
        </div>
      </section>

      <section
        id="residentialip"
        className="relative z-20 p-10 bg-gray-100 text-black"
      >
        <div className="max-w-4xl mx-auto py-20">
          <h2 className="text-3xl font-bold mb-4">Residential IP</h2>
          <p>
            With our solution, you get a dedicated residential IP address. This
            makes your traffic appear as though it's coming from a regular home
            internet connection, helping you bypass geo-restrictions and avoid
            being flagged by online services.
          </p>
        </div>
      </section>
    </body>
  );
}
