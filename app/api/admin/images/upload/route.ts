import { NextRequest, NextResponse } from 'next/server';
import { put } from '@vercel/blob';
import sharp from 'sharp';
import { prisma } from '@/lib/db';
import { verifyAuth } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    // Verify authentication
    const authHeader = request.headers.get('authorization');
    const user = await verifyAuth(authHeader);

    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const formData = await request.formData();
    const file = formData.get('file') as File;
    const program = formData.get('program') as string || 'general';
    const category = formData.get('category') as string || 'gallery';
    const source = formData.get('source') as string || 'unknown';
    const addWatermark = formData.get('watermark') !== 'false';

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Read file
    const buffer = await file.arrayBuffer();
    let imageBuffer = Buffer.from(buffer);

    // Add watermark if requested
    if (addWatermark) {
      imageBuffer = await addImageWatermark(imageBuffer);
    }

    // Optimize image
    const optimized = await sharp(imageBuffer)
      .resize(2560, 1440, { fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 85, progressive: true })
      .toBuffer();

    // Upload to Vercel Blob
    const filename = `${Date.now()}-${file.name.replace(/\s+/g, '-')}`;
    const blob = await put(filename, optimized, {
      access: 'public',
      addRandomSuffix: false,
    });

    // Save to database
    const image = await prisma.image.create({
      data: {
        filename: blob.pathname,
        url: blob.url,
        alt: file.name,
        program,
        category,
        source,
        hasWatermark: addWatermark,
        createdById: user.id,
        metadata: {
          originalName: file.name,
          size: file.size,
          type: file.type,
        },
      },
    });

    return NextResponse.json({
      success: true,
      image: {
        id: image.id,
        url: image.url,
        filename: image.filename,
      },
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Upload failed' },
      { status: 500 }
    );
  }
}

// Add watermark to image
async function addImageWatermark(buffer: Buffer): Promise<Buffer> {
  const watermarkText = 'CHANGE ME';

  // Create watermark SVG
  const watermarkSvg = `
    <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="100" fill="rgba(212, 175, 55, 0.5)"/>
      <text x="100" y="50" font-size="24" font-weight="bold" fill="white" text-anchor="middle" font-family="Arial">
        ${watermarkText}
      </text>
    </svg>
  `;

  const watermarkBuffer = Buffer.from(watermarkSvg);

  // Composite watermark onto image
  return sharp(buffer)
    .composite([
      {
        input: watermarkBuffer,
        gravity: 'center',
        blend: 'overlay',
      },
    ])
    .toBuffer();
}
