import { app } from './app';
import database from './infraestructure/database';

// Puerto en el que va a escuchar el servidor
const port = 3000;
database.connect();
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});