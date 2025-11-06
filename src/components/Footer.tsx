import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="mt-24 border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold">Vibe Cart</h3>
            <p className="text-sm text-muted-foreground">
              Premium minimal tech accessories designed for the modern lifestyle.
            </p>
          </div>

          {/* Shop */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Shop</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="smooth-transition hover:text-foreground">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/cart" className="smooth-transition hover:text-foreground">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="smooth-transition hover:text-foreground">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="smooth-transition hover:text-foreground">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="smooth-transition hover:text-foreground">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="smooth-transition hover:text-foreground">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-muted-foreground smooth-transition hover:text-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground smooth-transition hover:text-foreground"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground smooth-transition hover:text-foreground"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground smooth-transition hover:text-foreground"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Vibe Cart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
