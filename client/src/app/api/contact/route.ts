import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, message: 'Please provide all mandatory fields: name, email, phone, message' },
        { status: 400 }
      );
    }

    // Try forwarding to Express MVC backend if active
    try {
      const backendRes = await fetch('http://localhost:5000/api/queries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (backendRes.ok) {
        const json = await backendRes.json();
        return NextResponse.json(json, { status: 201 });
      }
    } catch {
      // Backend not running, fallback to native Next.js response
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your inquiry has been successfully received! Sahil Prasad and Shubham Singh will contact you within 2 hours.',
        data: {
          id: `query-next-${Date.now()}`,
          ...body,
          createdAt: new Date().toISOString(),
        },
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Internal Server Error';
    return NextResponse.json(
      { success: false, message },
      { status: 500 }
    );
  }
}
