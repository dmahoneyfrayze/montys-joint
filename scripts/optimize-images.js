/**
 * Image Optimization Script
 * Converts large JPG/PNG images to optimized WebP format
 * Reduces file sizes by 70-90% while maintaining quality
 */

import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ASSETS_DIR = join(__dirname, '../public/assets');
const QUALITY = 85; // WebP quality (85 is good balance)

// Images to optimize with target sizes
const OPTIMIZATION_TARGETS = {
    'montys-christmas-background.png': { maxWidth: 1920, quality: 80 },
    'montys-cigars.jpg': { maxWidth: 800, quality: 85 },
    'buttermilk-chicken.jpg': { maxWidth: 800, quality: 85 },
    'menu-burger.png': { maxWidth: 1200, quality: 85 },
    'menu-final.jpg': { maxWidth: 800, quality: 85 },
    'menu-proof.jpg': { maxWidth: 800, quality: 85 },
    'novemburger.jpg': { maxWidth: 800, quality: 85 },
};

async function getFileSize(filePath) {
    const stats = await stat(filePath);
    return (stats.size / 1024).toFixed(2); // KB
}

async function optimizeImage(inputPath, filename) {
    const config = OPTIMIZATION_TARGETS[filename];
    if (!config) return null;

    const outputFilename = filename.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    const outputPath = join(ASSETS_DIR, outputFilename);

    const originalSize = await getFileSize(inputPath);

    try {
        await sharp(inputPath)
            .resize(config.maxWidth, null, {
                fit: 'inside',
                withoutEnlargement: true,
            })
            .webp({ quality: config.quality })
            .toFile(outputPath);

        const optimizedSize = await getFileSize(outputPath);
        const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);

        console.log(`✅ ${filename}`);
        console.log(`   ${originalSize} KB → ${optimizedSize} KB (${savings}% smaller)`);
        console.log(`   Output: ${outputFilename}\n`);

        return {
            original: filename,
            optimized: outputFilename,
            originalSize,
            optimizedSize,
            savings,
        };
    } catch (error) {
        console.error(`❌ Error optimizing ${filename}:`, error.message);
        return null;
    }
}

async function main() {
    console.log('🖼️  Image Optimization Script\n');
    console.log('Target directory:', ASSETS_DIR, '\n');

    const files = await readdir(ASSETS_DIR);
    const results = [];
    let totalOriginal = 0;
    let totalOptimized = 0;

    for (const file of files) {
        if (OPTIMIZATION_TARGETS[file]) {
            const inputPath = join(ASSETS_DIR, file);
            const result = await optimizeImage(inputPath, file);

            if (result) {
                results.push(result);
                totalOriginal += parseFloat(result.originalSize);
                totalOptimized += parseFloat(result.optimizedSize);
            }
        }
    }

    console.log('═══════════════════════════════════════');
    console.log('📊 Summary');
    console.log('═══════════════════════════════════════');
    console.log(`Images optimized: ${results.length}`);
    console.log(`Total original size: ${totalOriginal.toFixed(2)} KB`);
    console.log(`Total optimized size: ${totalOptimized.toFixed(2)} KB`);
    console.log(`Total savings: ${(totalOriginal - totalOptimized).toFixed(2)} KB (${((totalOriginal - totalOptimized) / totalOriginal * 100).toFixed(1)}%)`);
    console.log('═══════════════════════════════════════\n');

    console.log('✨ Next steps:');
    console.log('1. Update image references in components to use .webp files');
    console.log('2. Add width/height attributes to prevent layout shift');
    console.log('3. Add loading="lazy" to below-fold images');
    console.log('4. Test all pages to ensure images load correctly\n');
}

main().catch(console.error);
