import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import { jwt } from '../../utils';


export async function middleware( req: NextRequest, ev: NextFetchEvent ) {

    const { token = '' } = req.cookies;

    // return new Response('No autorizado', {
    //     status: 401
    // });

    try {
        await jwt.isValidToken( token );
        return NextResponse.next();

    } catch (error) {
        // const { origin, pathname } = req.nextUrl.clone()
        // return NextResponse.redirect(`${ origin }/auth/login?p=${ pathname }`);
        const url = req.nextUrl.clone()
        url.pathname = '/auth/login';
        url.search = `p=${req.page.name}`;
        return NextResponse.redirect(url);
    }

}