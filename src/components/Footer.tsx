
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-bumblebee-yellow text-bumblebee-black py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/contact" className="block hover:text-bumblebee-brown transition-colors">Contact Us</Link>
              <Link to="/faq" className="block hover:text-bumblebee-brown transition-colors">FAQs</Link>
              <Link to="/terms" className="block hover:text-bumblebee-brown transition-colors">Terms & Privacy Policy</Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2">
              <p>Email: info@aahara.org</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="space-y-2">
              <a href="#" className="block hover:text-bumblebee-brown transition-colors">Twitter</a>
              <a href="#" className="block hover:text-bumblebee-brown transition-colors">Facebook</a>
              <a href="#" className="block hover:text-bumblebee-brown transition-colors">Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-bumblebee-brown/20 text-center">
          <p>&copy; {new Date().getFullYear()} Aahara. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
