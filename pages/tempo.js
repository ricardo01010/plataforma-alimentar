function Tempo(props){
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();
    console.log('>>>>>>>>>>>>>>>>>>>>>>>> dinamico');

    return(
        <div>
            <div>{dynamicDateString} (dinamico)</div>
            <div>{props.staticDateString} (estático)</div>
        </div>
        
    )
}

export function getStaticProps(){
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();
    console.log('>>>>>>>>>>>>>>>>>>>>>>>> static');
    return{
        props: {
            staticDateString
        }
    }
}

export default Tempo