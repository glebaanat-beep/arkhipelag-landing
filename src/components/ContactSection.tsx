import { useState } from 'react';
import { Mail, Phone, MessageCircle, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useLanguage } from '../contexts/LanguageContext';
import { useToast } from '../hooks/use-toast';

// Import Thailand map
import thailandMapImage from '../assets/thailand-map.jpg';
export function ContactSection() {
  const {
    t
  } = useLanguage();
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    salutation: '',
    firstName: '',
    surname: '',
    phone: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.firstName || !formData.surname || !formData.phone || !formData.message) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    toast({
      title: "Thank you for your inquiry",
      description: "We will contact you within 24 hours."
    });

    // Reset form
    setFormData({
      salutation: '',
      firstName: '',
      surname: '',
      phone: '',
      message: ''
    });
  };
  return <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-text-primary">
            {t('contact.title')}
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-8" />
          <p className="text-xl text-luxury-gold">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-8 text-text-primary">
              {t('contact.info.title')}
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-luxury-gold rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-background" />
                </div>
                <div>
                  <p className="text-text-muted text-sm">{t('contact.info.email')}</p>
                  <p className="text-text-primary font-medium">arkhipelagllc@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-luxury-gold rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-background" />
                </div>
                <div>
                  <p className="text-text-muted text-sm">{t('contact.info.phone')}</p>
                  <p className="text-text-primary font-medium">+66 80 704 9200</p>
                </div>
              </div>
              
              
            </div>
            
            {/* Description */}
            <div className="bg-card rounded-2xl p-8 luxury-shadow">
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                {t('contact.description')}
              </p>
            </div>
            
            {/* Thailand Map */}
            
          </div>
          
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="salutation">{t('contact.form.salutation')}</Label>
                  <Select value={formData.salutation} onValueChange={value => setFormData(prev => ({
                  ...prev,
                  salutation: value
                }))}>
                    <SelectTrigger className="bg-input border-input-border">
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mr">{t('contact.form.mr')}</SelectItem>
                      <SelectItem value="mrs">{t('contact.form.mrs')}</SelectItem>
                      <SelectItem value="ms">{t('contact.form.ms')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="firstName">{t('contact.form.firstname')}</Label>
                  <Input id="firstName" value={formData.firstName} onChange={e => setFormData(prev => ({
                  ...prev,
                  firstName: e.target.value
                }))} className="bg-input border-input-border" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="surname">{t('contact.form.surname')}</Label>
                <Input id="surname" value={formData.surname} onChange={e => setFormData(prev => ({
                ...prev,
                surname: e.target.value
              }))} className="bg-input border-input-border" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">{t('contact.form.phone')}</Label>
                <Input id="phone" type="tel" value={formData.phone} onChange={e => setFormData(prev => ({
                ...prev,
                phone: e.target.value
              }))} className="bg-input border-input-border" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">{t('contact.form.message')}</Label>
                <Textarea id="message" value={formData.message} onChange={e => setFormData(prev => ({
                ...prev,
                message: e.target.value
              }))} className="bg-input border-input-border min-h-32" required />
              </div>
              
              <Button type="submit" size="lg" className="w-full bg-luxury-gold hover:bg-luxury-gold-bright text-background font-semibold gold-shadow transition-all duration-300">
                {t('contact.form.submit')}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>;
}