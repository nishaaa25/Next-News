import { NextResponse } from "next/server";

// always be stored in root folder.
// middleware is used to take a look for the incoming request , maybe change it a bit, block it..example it helps in user authentication and maybe direct to another page if user is not authenticated and that can be done by nextresponse.redirect();
// this middleware looks for every request on the server( logo, images and everything);

export function middleware(request){
    // You can even console the request by console.log(request)
    // the request is passed automatically sent by the nextjs

    // middleware is a reserved word in nextjs. this hellps you to 

    // you can also create a new fresh response using return new nextresponse.next;

    return NextResponse.next(); /* this will simply forwards the incoming request to its actual destination */
}

// the matcher is used to define the path. in this case the middleware will only look for the /next page only.. you can also define more paths inside the matcher.
// export const config = {
//     matcher : "/news"
// }