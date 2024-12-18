// import { NextResponse } from 'next/server';
// import { prisma } from '@/lib/prisma';

// export async function GET(request: Request) {
//   try {
//     const { searchParams } = new URL(request.url);
//     const page = parseInt(searchParams.get('page') || '1');
//     const category = searchParams.get('category') || 'all';
//     const limit = 10;
//     const skip = (page - 1) * limit;

//     const where = category !== 'all' ? { category } : {};

//     const [news, total] = await Promise.all([
//       prisma.news.findMany({
//         where,
//         skip,
//         take: limit,
//         orderBy: { publishedAt: 'desc' },
//       }),
//       prisma.news.count({ where }),
//     ]);

//     return NextResponse.json({
//       news,
//       total,
//       totalPages: Math.ceil(total / limit),
//     });
//   } catch (error) {
//     console.error('News fetch error:', error);
//     return NextResponse.json(
//       { error: 'お知らせの取得に失敗しました' },
//       { status: 500 }
//     );
//   }
// }