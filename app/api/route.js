import { NextResponse } from 'next/server';
import User from '@/models/data'
import connectDB from '@/utils/connectDb';

export async function GET() {
    return NextResponse.json({ msg: 'API Health OK' });
}

export async function POST(req) {
    await connectDB();

    try {
        if (req.method !== 'POST') {
            return NextResponse.json({ error: 'Method Not Allowed' });
        }

        const data = await req.json();

        const schema = {
            email: data.email,
            name: data.name,
            password: data.password,
        };

        const user = new User(schema);
        await user.save();

        return NextResponse.json({
            msg: 'Done ✅',
        });
    } catch (error) {
        console.error('Error processing POST request:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            {
                status: 500,
            }
        );
    }
}
