import { useParams } from "react-router-dom";

const OtherPage = (props: any) => {
    const params = useParams();
    return (
        <>
            <h1>Dashboard Other's Page</h1>
            <div>
                <h3>Props</h3>
                <pre>{ JSON.stringify(props, null, 2) }</pre>
            </div>
            <div>
                <h3>Params</h3>
                <pre>{ JSON.stringify(params, null, 2) }</pre>
            </div>
        </>
    );
}

export default OtherPage;