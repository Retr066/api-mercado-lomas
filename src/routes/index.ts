import { Router } from 'express';
import { readdirSync } from 'fs';

const PATCH_ROUTES = `${__dirname}`;

const router = Router();

const clearFileName = (fileName: string) => fileName.split('.').shift();

readdirSync(PATCH_ROUTES).map(async (file) => {
    const fileNameClear = clearFileName(file);
    if (fileNameClear !== 'index') {
        const { router: routerFile } = await import(`./${fileNameClear}`);
        console.log('Se esta cargando el archivo: ', fileNameClear);
        router.use(`/${fileNameClear}`, routerFile);
    }
});

export default router;
