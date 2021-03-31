import introduce from '../components/introduce'
import vlog from '../components/vlog'
import post from '../components/postContent'

let routes = [
    {path: '/introduce', name: "Introduce", component: introduce},
    {path: '/vlog', name: "Vlog", component: vlog},
    {path: '/post', name: "post", component: post}
]

export default routes
