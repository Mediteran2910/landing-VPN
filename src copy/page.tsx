import Link from "next/link";
import { Mail, Phone, Users } from "lucide-react";

export default function ContactPage() {
  const contacts = [
    {
      title: "Technical Support",
      description: "For any technical issues, reach out to our support team.",
      email: "support@yourdomain.com",
      icon: <Mail size={48} />,
    },
    {
      title: "Sales Inquiries",
      description: "Contact our sales team for bulk orders and business deals.",
      email: "sales@yourdomain.com",
      icon: <Phone size={48} />,
    },
    {
      title: "Collaborations",
      description:
        "Reach out to discuss partnerships or strategic collaborations.",
      email: "partners@yourdomain.com",
      icon: <Users size={48} />,
    },
  ];

  return (
    <main className="w-[95vw] md:w-[70vw] mx-auto py-16 md:py-24 flex flex-col gap-16 text-white px-4 md:px-8 bg-transparent">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-200 to-gray-500 bg-clip-text text-transparent leading-tight">
          Contact Us
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
          We are a startup established in 2025, headquartered in Zagreb,
          Croatia. Our team consists of software developers, network engineers,
          embedded engineers, designers, and more. We are passionate about
          building private networking solutions that are simple, secure, and
          reliable.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {contacts.map((contact, idx) => (
          <div
            key={idx}
            className={`group relative flex flex-col md:flex-row items-center ${
              idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } bg-gradient-to-r from-[#0D0D0D] via-[#171717] to-[#0D0D0D] backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-gray-700/50 hover:border-gray-400/50 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-2xl hover:shadow-gray-400/10 cursor-pointer`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-400/5 via-transparent to-gray-700/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-8 w-full">
              <div className="flex-shrink-0 p-4 bg-gray-800/30 rounded-xl group-hover:bg-gray-700/50 transition-colors duration-300">
                {contact.icon}
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-gray-100 transition-colors duration-300">
                  {contact.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed text-base md:text-lg">
                  {contact.description}
                </p>
                <Link
                  href={`mailto:${contact.email}`}
                  className="text-gray-200 hover:text-white underline mt-2 inline-block transition-colors duration-300"
                >
                  {contact.email}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
