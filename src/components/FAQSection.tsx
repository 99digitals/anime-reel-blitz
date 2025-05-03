
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "What exactly do I get in the bundle?",
      answer: "You'll receive instant access to 1800+ premium anime reels in various styles and themes, ready to be posted on any social media platform. Each reel comes in MP4 format with commercial usage rights."
    },
    {
      question: "Do I need any special software to use these reels?",
      answer: "No special software is required! The reels are ready to use and can be uploaded directly to Instagram, TikTok, Facebook or any other platform that supports video content."
    },
    {
      question: "Can I edit the reels?",
      answer: "Absolutely! You can add your own text, captions, music, or any other customization using your preferred video editing app."
    },
    {
      question: "Do I have to credit anyone when I post the reels?",
      answer: "No, the bundle comes with full commercial usage rights, so you don't need to provide any credit when posting the reels."
    },
    {
      question: "How will I receive the reels after purchase?",
      answer: "Immediately after your purchase, you'll receive a download link where you can access all 1800+ reels. You'll also receive it in your email."
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 px-4">
            Got questions? We've got answers
          </p>
        </div>
        
        <div className="space-y-4">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-lg font-medium text-anime-purple py-4 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4 pt-2 text-left">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
