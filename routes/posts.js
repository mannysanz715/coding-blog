import { Router } from 'express'
import * as postsCtrl from '../controllers/posts.js'
const router = Router()


/* GET users listing. */
router.get('/', postsCtrl.index)

router.get('/new', postsCtrl.new)

export {
  router
}
