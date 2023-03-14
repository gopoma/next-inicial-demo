import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    ok: boolean,
    name: string;
    version: string;
    author: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    return res.status(200).json({
        ok: true,
        name: "initial",
        version: "0.1.0",
        author: "Gustavo Ordoño Poma"
    });
}
