const routes = {
    home: '/',
    add: '/add',
    leaders: '/leaderboard',
    login: '/login',
    questions: '/questions/questions_id'
}
export const allowedRoutes = (state=routes, action) => {
    switch(action.type){
        default:
            return state;
    }
}