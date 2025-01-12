export function GET(request){
    console.log(request);

    // return Response.join();
    return new Response('Hello');
}

// You can also call other methods(Post etc) in the same file aswell. 
// always be stored inside app/api/ folder withn route.js file.