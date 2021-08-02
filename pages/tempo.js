function Tempo(props){
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return(
        <div>
            <div>{dynamicDateString} (dinamico)</div>
            <div>{props.staticDateString} (estático)</div>
        </div>
        
    )
}

export function getStaticProps(){
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return{
        props: {
            staticDateString
        }
    }
}

export default Tempo