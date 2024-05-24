import DigitalClock from "./Pages/DigitalClock/DigitalClock";
import TestProject from './Pages/Test/Test';
import TodoApp from './Pages/TodoApp/TodoApp';
import RandomPassword from "./Pages/RandomPassword/RandomPassword";
import MouseMove from "./Pages/MouseMove/MouseMove";
import LoginAdvance from "./Pages/Login_Advance/LoginAdvance";
import LoginAdvance_v2 from "./Pages/Login_Advance_version2/LoginAdvance_v2";

export const lists_project=[
    {
        name: "item 1",
        url: "/digital_clock.jpg",
        page:DigitalClock,
        path:'/digital_clock'
    },
    {
        name: "item 3",
        url: "/todos_app.png",
        page: TodoApp,
        path:'/todo_app'
    },
    {
        name: "item 4",
        url: "/Random_Password.png",
        page: RandomPassword,
        path:'/random_password'
    },
    {
        name: "MouseMove",
        url: "/MouseMove.png",
        page: MouseMove,
        path:'/test'
    },
    {
        name: "LoginAdvance",
        url: "/LoginAdvance.png",
        page: LoginAdvance,
        path:'/login_advance'
    },
    {
        name: "LoginAdvance_v2",
        url: "/LoginAdvance_v2.png",
        page: LoginAdvance_v2,
        path:'/LoginAdvance_v2'
    },
    {
        name: "Test",
        url: "",
        page: TestProject,
        path:'/test'
    },
];

















