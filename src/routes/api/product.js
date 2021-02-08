import { Router } from 'express';
import errorHandlerAsync from '../../middlewares/errorHandler';
import ProductController from '../../controllers/ProductController';
import * as middleware from '../../middlewares';

const router = Router();

// Create Product
router.post(
  '/products',
  middleware.upload.array('images', 5),
  errorHandlerAsync(ProductController.create)
);

// Get All Products
router.get('/products', errorHandlerAsync(ProductController.getAll));

export default router;
