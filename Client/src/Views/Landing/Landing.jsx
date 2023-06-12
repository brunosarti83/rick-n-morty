import Form from "../../components/Form/Form";

export default function Landing (props) {
    const { login, guest } = props
    return (
        <div className={StyleSheet.container}>
            <Form login={login} guest={guest}/>
        </div>
    )
}