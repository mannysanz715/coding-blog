import { Router } from 'express'
import * as postCtrl from '../controllers/posts.js'
const router = Router()

/* GET home page. */
router.get('/', postCtrl.index)

export { 
  router
}
