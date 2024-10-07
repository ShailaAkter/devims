import JWT from 'jsonwebtoken'

//protected routes using json webtoken
export const requireSignIn = async (req, res, next) =>
{
    try
    {
        const decode = JWT.verify(req.headers.authorization, process.env.JWT_SECRET);
        req.user = decode;
        next();
    }
    catch(error)
    {
        console.log(`Middlware error = ${error}`);
    }
}
