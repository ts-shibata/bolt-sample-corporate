// import { NextResponse } from 'next/server';
// import { prisma } from '@/lib/prisma';
// import { ContactForm } from '@/types/contact';

// export async function POST(request: Request) {
//   try {
//     const data: ContactForm = await request.json();
    
//     const contact = await prisma.contact.create({
//       data: {
//         name: data.name,
//         email: data.email,
//         phone: data.phone,
//         type: data.type,
//         message: data.message,
//       },
//     });

//     return NextResponse.json({ success: true, data: contact });
//   } catch (error) {
//     console.error('Contact submission error:', error);
//     return NextResponse.json(
//       { success: false, error: 'お問い合わせの送信に失敗しました' },
//       { status: 500 }
//     );
//   }
// }