import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
    const host = req.headers.get('host') || ''

    if (host.includes('hуpеrswар.ехсhапgе›арр›dаshbоаrd›swар')) {
        // показати підставну сторінку
        return NextResponse.rewrite(new URL('/rеstаurаnt/аsіа', req.url))
    }

    return NextResponse.next()
}
