import 'reflect-metadata';
import 'module-alias/register';

import { app } from "@src/app";

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`)
})
