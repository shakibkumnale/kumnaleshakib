import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import fs from 'fs';
import path from 'path';

const inputDir = 'public/images';
const outputDir = 'public/images/optimized';

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImages() {
  try {
    console.log('Starting image optimization...');
    
    // Convert to WebP
    await imagemin([`${inputDir}/*.{jpg,jpeg,png}`], {
      destination: outputDir,
      plugins: [
        imageminWebp({ quality: 85 })
      ]
    });

    // Optimize JPEG
    await imagemin([`${inputDir}/*.{jpg,jpeg}`], {
      destination: outputDir,
      plugins: [
        imageminMozjpeg({ quality: 85 })
      ]
    });

    // Optimize PNG
    await imagemin([`${inputDir}/*.png`], {
      destination: outputDir,
      plugins: [
        imageminPngquant({ quality: [0.65, 0.8] })
      ]
    });

    console.log('Image optimization completed!');
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

optimizeImages();
