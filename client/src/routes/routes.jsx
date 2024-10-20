import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter(
[
    {
        path: '/',
        element: <App/>,
        children: 
        [
            {
                index: true,
                element: '/'
            }
        ]
    },
    {
        path: '/*',
        element: 'page not found'
    }
])

export default router;