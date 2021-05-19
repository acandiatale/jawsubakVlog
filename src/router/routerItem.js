import introduce from '../components/introduce'
import vlog from '../components/vlog'
import post from '../components/postContent'
import notFound from '../components/notFoundComponent'
import login from '../components/login'

let routes = [
    {path: '/', name: "Main", component: vlog},
    {path: '/login', name: "Login", component: login},
    {path: '/introduce', name: "Introduce", component: introduce},
    {path: '/vlog', name: "Vlog", component: vlog},
    {path: '/post', name: "Post", component: post},
    {path: '/*', name: "NotFound", component: notFound},
]

export default routes