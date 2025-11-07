import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Shield, CheckCircle, Loader2 } from 'lucide-react';
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectIdea: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async e => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.projectIdea) {
      toast({
        title: "Please fill in all fields",
        description: "We need your name, email, and project idea to get started!",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/mdkpzrwq", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        toast({
          title: "Message Sent! 🎉",
          description: "Phebe will get back to you soon. Thanks for reaching out!",
          variant: "success"
        });
        setFormData({
          name: '',
          email: '',
          projectIdea: ''
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Oh no! Something went wrong.",
        description: "Could not send your message. Please try again later or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section id="contact" className="py-20 bg-[#FBF9F6]">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2F2F2F] mb-6">
            Let's Create <span className="pacifico text-[#D36B5F]">Together</span>
          </h2>
          <p className="text-lg md:text-xl text-[#2F2F2F] max-w-3xl mx-auto leading-relaxed">
            Ready to bring your vision to life? Share your idea and let's start crafting something amazing!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8
          }} className="bg-white rounded-3xl p-8 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-[#2F2F2F] font-semibold mb-2 block">
                    Your Name
                  </Label>
                  <Input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Jane Doe" className="w-full border-2 border-[#D36B5F]/20 focus:border-[#D36B5F] rounded-xl px-4 py-3 text-[#2F2F2F]" />
                </div>

                <div>
                  <Label htmlFor="email" className="text-[#2F2F2F] font-semibold mb-2 block">
                    Email Address
                  </Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="jane@example.com" className="w-full border-2 border-[#D36B5F]/20 focus:border-[#D36B5F] rounded-xl px-4 py-3 text-[#2F2F2F]" />
                </div>

                <div>
                  <Label htmlFor="projectIdea" className="text-[#2F2F2F] font-semibold mb-2 block">
                    Your Project Idea
                  </Label>
                  <Textarea id="projectIdea" name="projectIdea" value={formData.projectIdea} onChange={handleChange} placeholder="Tell us about your vision..." rows={6} className="w-full border-2 border-[#D36B5F]/20 focus:border-[#D36B5F] rounded-xl px-4 py-3 text-[#2F2F2F] resize-none" />
                </div>

                <div className="flex items-center space-x-2 text-sm text-[#2F2F2F]/70">
                  <Shield size={16} className="text-[#86968C]" />
                  <span>Your information is secure.</span>
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full bg-[#D36B5F] hover:bg-[#D36B5F]/90 text-white px-8 py-6 text-lg rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 disabled:opacity-75 disabled:scale-100 disabled:cursor-not-allowed">
                  {isSubmitting ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...</> : 'Submit Your Request'}
                </Button>
              </form>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8
          }} className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-[#2F2F2F] mb-6">
                What Happens Next?
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#D36B5F] flex items-center justify-center text-white font-bold shadow-md">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2F2F2F] mb-1">Phebe reviews your project idea</h4>
                    <p className="text-[#2F2F2F]/70">She'll carefully consider your vision and requirements</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-butter-yellow flex items-center justify-center text-[#2F2F2F] font-bold shadow-md">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2F2F2F] mb-1">We collaborate on the perfect design</h4>
                    <p className="text-[#2F2F2F]/70">Work together to refine every detail</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#A997AB] flex items-center justify-center text-white font-bold shadow-md">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2F2F2F] mb-1">You'll receive a personalized quote</h4>
                    <p className="text-[#2F2F2F]/70">Transparent pricing tailored to your project</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#86968C] flex items-center justify-center text-white font-bold shadow-md">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2F2F2F] mb-1">Your custom piece is lovingly crafted!</h4>
                    <p className="text-[#2F2F2F]/70">Handmade with care, just for you</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-[#D36B5F]/10 to-butter-yellow/10 rounded-2xl">
                <div className="flex items-center space-x-3 mb-3">
                  <CheckCircle className="text-[#86968C]" size={24} />
                  <h4 className="font-semibold text-[#2F2F2F]">Why Work With Phebe?</h4>
                </div>
                <ul className="space-y-2 text-[#2F2F2F]/80">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Responsive, fun & passionate</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>100% handcrafted</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>A devotion to every detail</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Support a local business</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;