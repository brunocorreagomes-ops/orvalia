import fs from 'fs';
const filePath = 'src/components/Hero.tsx';
let content = fs.readFileSync(filePath, 'utf8');

const targetStr = `          {/* Bottom Action Section */}
          <div className="col-span-4 lg:col-span-12 mt-2 md:mt-4">
            <div className="flex flex-col items-center gap-4 absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 w-full">`;

const replacementStr = `          {/* Bottom Action Section */}
          <div className="col-span-4 lg:col-span-12 mt-8 md:mt-12 w-full">
            <div className="flex flex-col items-center gap-6 w-full">`;

if (content.includes('absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2')) {
    content = content.replace('absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 w-full', 'w-full relative');
    content = content.replace('mt-2 md:mt-4', 'mt-10 md:mt-16 w-full');
    fs.writeFileSync(filePath, content);
    console.log('Hero.tsx fixed successfully');
} else {
    console.log('Target string not found');
}
