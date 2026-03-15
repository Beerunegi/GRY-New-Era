const fs = require('fs');

const files = [
  'd:/GRY New Era/src/components/sections/web-dev-faq.tsx',
  'd:/GRY New Era/src/components/sections/orm-faq.tsx',
  'd:/GRY New Era/src/components/sections/email-faq.tsx',
  'd:/GRY New Era/src/components/sections/cro-faq.tsx',
  'd:/GRY New Era/src/components/sections/content-faq.tsx',
  'd:/GRY New Era/src/components/sections/branding-faq.tsx',
  'd:/GRY New Era/src/components/sections/analytics-faq.tsx'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('<motion.div') && content.includes('<AccordionItem')) {
    const originalRegex = /<Accordion type="single" collapsible className="w-full">[\s\S]*?\{faqs\.map\(\(faq, i\) => \([\s\S]*?<motion\.div[\s\S]*?whileInView=\{\{ opacity: 1, y: 0 \}\}[\s\S]*?transition=\{\{ duration: 0\.3, delay: i \* 0\.05 \}\}[\s\S]*?viewport=\{\{ once: true \}\}[\s\S]*?>\s*<AccordionItem value=\{\`item-\$\{i\}\`\} className="border-border\/50 px-4">\s*<AccordionTrigger className="text-left font-bold py-6 hover:text-primary transition-colors text-lg">\s*\{faq\.question\}\s*<\/AccordionTrigger>\s*<AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">\s*\{faq\.answer\}\s*<\/AccordionContent>\s*<\/AccordionItem>\s*<\/motion\.div>\s*\)\}\s*<\/Accordion>/m;

    const replacement = `        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={\`item-\${i}\`} className="border-border/50 px-4">
                <AccordionTrigger className="text-left font-bold py-6 hover:text-primary transition-colors text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>`;
    
    if (originalRegex.test(content)) {
        content = content.replace(originalRegex, replacement);
        fs.writeFileSync(file, content);
        console.log('Fixed:', file);
    } else {
        console.log('Regex did not match:', file);
    }
  }
}
