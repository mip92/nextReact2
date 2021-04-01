import {useRouter} from "next/router";
import styles from "../../styles/User.module.scss"
import axios from "axios";
import MainContainer from "../../components/MainContainer";

const User = ({user}) => {
    console.log(user)
    return (
        <MainContainer keywords="user">
            <div className={styles.user}>
                <h1>{`Пользователь`}</h1>
                <div>{`id: ${user.id}`}</div>
                <div>{`name: ${user.name}`}</div>
                <div>{`username: ${user.username}`}</div>
                <div>{`email: ${user.email}`}</div>
            </div>
        </MainContainer>

    );
};
export default User

export async function getServerSideProps({params}) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = response.data
    return {
        props: {user}
    }
}
