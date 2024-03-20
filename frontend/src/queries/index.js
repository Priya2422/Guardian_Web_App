import {gql} from '@apollo/client'
export const signup=gql`
    mutation register($userNew: UserInput!) {
        register(userNew: $userNew) {
        name
        }
    }
`
export const login=gql` 
    mutation Login($userSignin: UserSigninInput!) {
        login(userSignin: $userSignin) {
        token
        }
    }
`