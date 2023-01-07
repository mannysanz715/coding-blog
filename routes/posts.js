import { Router } from 'express'
import * as postsCtrl from '../controllers/posts.js'
const router = Router()


/* GET users listing. */

router.get('/', postsCtrl.index)

router.get('/new', postsCtrl.new)

router.get('/:id', postsCtrl.show)

router.get('/:id/edit', postsCtrl.edit)

router.post('/', postsCtrl.create)

router.delete('/:id', postsCtrl.delete)


router.put('/:id', postsCtrl.update)
export {
  router
}
