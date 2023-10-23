import { UpdateUserInput, UpdateUserWithPassInput, useUdateUserByIdMutation, useUpdateUserByIdWithPassMutation } from "src/graphql/webbooking-service.generated";
import InforUserCpn from "./Account";

function CurrentUserDetailPage() {
    const [udateUserByIdMutation] = useUdateUserByIdMutation({
        fetchPolicy: 'no-cache'
    })
    // console.log('test env: ', process.env.REACT_APP_BACKEND_URI_IMAGE)
    const [updateUserByIdWithPassMutation] = useUpdateUserByIdWithPassMutation({
        fetchPolicy: 'no-cache'
    })
    const updateUser = async (token: string, dataUser: any): Promise<void> => {
        try {
            const input: UpdateUserInput = dataUser.linkImage ?
                {
                    email: dataUser.email,
                    id: dataUser.id,
                    fullname: dataUser.fullname,
                    // password: dataUser.password,
                    // passwordNew: dataUser.passwordNew,
                    type: dataUser.type,
                    username: dataUser.username,
                    linkImage: {
                        filename: dataUser.linkImage?.filename,
                        type: dataUser.linkImage.type,
                        url: dataUser.linkImage?.url
                    }
                } :
                {
                    email: dataUser.email,
                    id: dataUser.id,
                    fullname: dataUser.fullname,
                    // password: dataUser.password,
                    // passwordNew: dataUser.passwordNew,
                    type: dataUser.type,
                    username: dataUser.username,
                }
            udateUserByIdMutation({
                variables: {
                    input: input
                },
                context: {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            })
        } catch (e) {
            console.log('test error: ', e)
            throw e
        }
    }
    const updateUserWithPass = async (token: string, dataUser: UpdateUserWithPassInput): Promise<void> => {
        try {
            const input: UpdateUserWithPassInput = dataUser.linkImage ?
                {
                    email: dataUser.email,
                    id: dataUser.id,
                    fullname: dataUser.fullname,
                    password: dataUser.password,
                    passwordNew: dataUser.passwordNew,
                    type: dataUser.type,
                    username: dataUser.username,
                    linkImage: {
                        filename: dataUser.linkImage?.filename,
                        type: dataUser.linkImage.type,
                        url: dataUser.linkImage?.url
                    }
                } :
                {
                    email: dataUser.email,
                    id: dataUser.id,
                    fullname: dataUser.fullname,
                    password: dataUser.password,
                    passwordNew: dataUser.passwordNew,
                    type: dataUser.type,
                    username: dataUser.username,
                }
            updateUserByIdWithPassMutation({
                variables: {
                    input: input
                },
                context: {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            })
        } catch (e) {
            console.log('test error: ', e)
            throw e
        }
    }

    return (<InforUserCpn
        update={updateUser}
        updateWithPass={updateUserWithPass}
    />);
}

export default CurrentUserDetailPage;