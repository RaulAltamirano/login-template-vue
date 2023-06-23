import { useAuth } from "../composable/useAuth"

const isAuthenticatedGuard = async (to: object, from: object, next: any) => {

    const { checkStatusLogin } = useAuth()
    const isLogged = await checkStatusLogin()

    isLogged ? next() : next({ name: 'login-page' })
}
export default isAuthenticatedGuard