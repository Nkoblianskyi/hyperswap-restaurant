// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
    const host = req.headers.get('host') || ''

    if (
        host.includes('hуpеrswар') ||  // кириличні "у", "е", "р"
        host.includes('ехсhапgе') ||  // кириличне "е", "а", "р"
        host.includes('арр') ||       // кирилична "а", "р", "р"
        host.includes('dаshbоаrd') || // кирилична "а", "о"
        host.includes('swар')         // кириличне "а", "р"
    ) {
        return NextResponse.rewrite(new URL('/rеstаurаnt/аsіа', req.url))
    }

    return NextResponse.next()
}
