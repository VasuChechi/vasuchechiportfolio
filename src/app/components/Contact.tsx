import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Vasuchechi.786@gmail.com',
      href: 'mailto:Vasuchechi.786@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '6239612761',
      href: 'tel:6239612761',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hoshiarpur',
      href: '#',
    },
    {
      icon: Clock,
      label: 'Response Time',
      value: 'Within 24 hours',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm uppercase tracking-wider text-muted-foreground mb-4"
            >
              Contact
            </motion.p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
              Let's Work Together
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Open to full-time opportunities, freelance projects, and
              consulting. Let's discuss how I can help bring your vision to life.
            </p>
          </div>

          <div className="grid gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="flex items-start gap-4 p-4 rounded-lg border border-border/30 hover:border-border/60 bg-muted/10 hover:bg-muted/20 transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
                      <item.icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">
                        {item.label}
                      </p>
                      <p className="text-sm">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="p-6 rounded-lg border border-border/30 bg-muted/10">
                <h4 className="mb-4">Availability</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Currently available for freelance projects and open to
                  discussing full-time opportunities. I typically respond to
                  inquiries within 24 hours.
                </p>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
