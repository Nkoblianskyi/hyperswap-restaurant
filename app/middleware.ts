import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Тут юнікод-версії літер
export function middleware(req: NextRequest) {
    const host = req.headers.get('host') || ''

    if (
        host.includes('hуpеrswар') ||        // фейкове "hyperswap"
        host.includes('ехсhапgе') ||         // фейкове "exchange"
        host.includes('арр') ||              // фейкове "app"
        host.includes('dаshbоаrd') ||        // фейкове "dashboard"
        host.includes('swар')                // фейкове "swap"
    ) {
        return NextResponse.rewrite(new URL('/restaurant/asia', req.url))
    }

    return NextResponse.next()
}
