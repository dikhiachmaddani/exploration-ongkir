import { NextApiRequest, NextApiResponse } from 'next';

export default function runMiddleware(
    req: NextApiRequest,
    res: NextApiResponse,
    fn: (req: NextApiRequest, res: NextApiResponse, next: (result?: unknown) => void) => void
): Promise<unknown> {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }

            resolve(result);
        });
    });
}
