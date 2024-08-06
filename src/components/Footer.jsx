const listCss = "text-xs mt-2 text-gray-500 hover:text-gray-400 cursor-pointer";

const Footer = () => {
  return (
    <footer className="w-screen h-auto border-t  border-slate-500 bg-[#161324] text-white px-12 py-16">
      <div className="grid grid-cols-7 max-md:grid-cols-4 max-sm:grid-cols-2">
        <ul>
          <li className="font-bold uppercase text-xs opacity-60">Company</li>
          <li className={listCss}>About Us</li>
          <li className={listCss}>Careers</li>
          <li className={listCss}>Contact</li>
        </ul>
        <ul>
          <li className="font-bold uppercase text-xs opacity-60">
            Contact Support{" "}
          </li>
          <li className={listCss}>Help Center</li>
          <li className={listCss}>Supported Devices</li>
          <li className={listCss}>Active your device</li>
          <li className={listCss}>Accesibility</li>
        </ul>
        <ul>
          <li className="font-bold uppercase text-xs opacity-60">Partners</li>
          <li className={listCss}>Advertise with us</li>
          <li className={listCss}>Partner with us</li>
        </ul>
        <ul>
          <li className="font-bold uppercase text-xs opacity-60">Partners</li>
          <li className={listCss}>Partner with us</li>
          <li className={listCss}>Advertise with us</li>
        </ul>

        <ul>
          <li className="font-bold uppercase text-xs opacity-60">
            Get the Apps
          </li>
          <li className={listCss}>ios</li>
          <li className={listCss}>Android</li>
        </ul>

        <ul>
          <li className="font-bold uppercase text-xs opacity-60">Press</li>
          <li className={listCss}>press releases</li>
          <li className={listCss}>In the news</li>
        </ul>

        <ul>
          <li className="font-bold uppercase text-xs opacity-60">Legal</li>
          <li className={listCss}>Privacy policy (Updated)</li>
          <li className={listCss}>Terms of use(Updated)</li>
          <li className={listCss}>Cookies</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
