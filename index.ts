import express, { Request, Response } from 'express';

// Inicializa Express
const app = express();

// Crea una solicitud GET
app.get('/', (req: Request, res: Response) => {
  res.send('Express en Vercel');
});

// Inicializa el servidor
// app.listen(5000, () => {
//   console.log('Ejecutándose en el puerto 5000.');
// });
export default app;