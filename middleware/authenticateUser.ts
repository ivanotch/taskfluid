import {verify} from 'jsonwebtoken';

export const authenticateUser = (req: any, res: any, next: any) => {
    console.log("middleware");
    const {authToken} = req.cookies;

    if (!authToken) {
        return res.status(401).json({error:  'unauthorized access'});
    }

    try {
        const jwtSecret = process.env.JWT_SECRET;
        
        if (!jwtSecret) {
            return res.status(500).json({error: 'JWT secret is not defined'});
        }

        const user = verify(authToken, jwtSecret);

        req.user = user;

        next();

    } catch (error) {
        return res.status(401).json({error: 'Invalid or expired token'});
    }
};