import introduce from '../components/introduce'
import vlog from '../components/vlog'
import post from '../components/postContent'
import notFound from '../components/notFoundComponent'
import Main from '../App'

let routes = [
    {path: '/', name: "Main", component: Main},
    {path: '/introduce', name: "Introduce", component: introduce},
    {path: '/vlog', name: "Vlog", component: vlog},
    {path: '/post', name: "Post", component: post},
    {path: '*', name: "NotFound", component: notFound},
]

export default routes