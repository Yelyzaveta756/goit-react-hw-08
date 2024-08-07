import DocumentTitle from "../../components/DocumentTitle"

export default function HomePage(){
    return (
        <div>
            <DocumentTitle>Home</DocumentTitle>
            <div>
            <h1>
                Welcome home page{' '}
                <span role="img" aria-label="Greeting icon">
                💁‍♀️
                </span>
            </h1>
            </div> 
        </div>
    )
}