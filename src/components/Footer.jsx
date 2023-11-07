import { FaTwitter, FaTelegram, FaGlobe } from "react-icons/fa";
import Container from "./Container";

const socialLinks = [
  {
    icon: FaTwitter,
    link: "https://twitter.com/",
  },
  {
    icon: FaTelegram,
    link: "https://telegram.org/",
  },
  {
    icon: FaGlobe,
    link: "https://www.aes.com/",
  },
];

function Footer() {
  return (
    <div className="bg-[#1f2937] p-6 md:p-8">
      <Container>
        <div className="flex w-full flex-col gap-6 items-center">
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              // eslint-disable-next-line react/jsx-no-target-blank
              <a
                key={index}
                href={social.link}
                target="_blank"
                className="bg-[#04152d] text-white transition-all hover:text-pink-500 cursor-pointer hover:shadow-[0_0_0.6rempink-500 w-10 md:w-12 h-10 md:h-12 rounded-full flex items-center justify-center"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>

          <span className="text-gray-300 text-center">
            AES is a Block Explorer and Analytics Platform for AES, a
            decentralized smart contracts platform.
          </span>

          <span className="text-sm md:text-base text-gray-400">
            © {new Date().getFullYear()} Powered by AES
          </span>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
