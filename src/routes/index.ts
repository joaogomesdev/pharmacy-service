import { CreateMedicineController } from '@controllers/CreateMedicineController';
import { CreateUserController } from '@controllers/CreateUserController';
import { DecrementMedicineStockController } from '@controllers/DecrementMedicineStockController';
import { GetAllUsersController } from '@controllers/GetAllUsersController';
import { IncrementMedicineStockController } from '@controllers/IncrementMedicineStockController';
import  { Router } from 'express';
import { DecrementMedicineStockService } from 'src/services/DecrementMedicineStockService';


const routes = Router();

routes.post('/users' , new CreateUserController().handle);
routes.get('/users', new GetAllUsersController().handle);


routes.post('/medicines' , new CreateMedicineController().handle);
routes.post(
    '/medicines/:reference/increment',
  new IncrementMedicineStockController().handle
);
routes.post(
  '/medicines/:reference/decrement',
  new DecrementMedicineStockController().handle);



export default routes;
