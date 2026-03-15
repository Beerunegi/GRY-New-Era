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
    
    let newContent = content.replace(
      /            <motion\.div\s+key=\{i\}\s+initial=\{\{ opacity: 0, y: 10 \}\}\s+whileInView=\{\{ opacity: 1, y: 0 \}\}\s+transition=\{\{ duration: 0\.3, delay: i \* 0\.05 \}\}\s+viewport=\{\{ once: true \}\}\s+>/g,
      "" 
    );
    
    newContent = newContent.replace(
      /              <\/AccordionItem>\s+<\/motion\.div>/g,
      "              </AccordionItem>"
    );
    
    newContent = newContent.replace(
      /<Accordion type="single" collapsible className="w-full">/,
      `<motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">`
    );
    
    newContent = newContent.replace(
      /        <\/Accordion>/,
      `        </Accordion>
        </motion.div>`
    );
    
    newContent = newContent.replace(
      /<AccordionItem value=\{\`item-\$\{i\}\`\}/g,
      `<AccordionItem key={i} value={\`item-\${i}\`}`
    );

    if (content !== newContent) {
      fs.writeFileSync(file, newContent);
      console.log('Fixed:', file);
    } else {
      console.log('Failed to fix:', file);
    }
  }
}
