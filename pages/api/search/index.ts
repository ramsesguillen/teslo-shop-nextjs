import type { NextApiRequest, NextApiResponse } from 'next'
import { db, SHOP_CONSTANTS } from '../../../database';
import { IProduct } from '../../../interfaces';
import { Product } from '../../../models';

type Data = {
    message: string }

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
    return res.status(400).json({ message: 'Debe de espeficar el query de búsqueda' });
}
