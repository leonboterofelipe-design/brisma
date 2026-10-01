import { NextResponse } from 'next/server';

export async function POST(request) {
  const data = await request.json().catch(() => null);
  const name = data?.name?.trim();
  const phone = data?.phone?.trim();
  if (!name || !phone) {
    return NextResponse.json({ error: 'Nombre y teléfono son obligatorios.' }, { status: 400 });
  }
  // TODO: enviar a correo (Resend/Nodemailer) o CRM. Nunca registrar datos personales en logs.
  return NextResponse.json({ ok: true });
}
